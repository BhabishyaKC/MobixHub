import { Router } from "express"
import User from "../model/user.js"
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"
const saltRounds = 10
const userRouter = Router()

userRouter.post("/register", async (req, res) => {
  try {
    // Step 1: Check if the email already exists
    const existingUser = await User.findOne({ email: req.body.email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "Email already taken",
      });
    }

    // Step 2: Hash the password
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);

    // Step 3: Create the user with hashed password
    const newUser = await User.create({
      ...req.body,
      password: hashedPassword,
    });

    // Step 4: Send success response
    return res.status(201).json({
      success: true,
      message: "User registered successfully. Please log in.",
      user: {
        _id: newUser._id,
        email: newUser.email,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        phone: newUser.phone,
      },
    });
  } catch (error) {
    console.error("Register error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error. Please try again later.",
    });
  }
});

  userRouter.post('/login', async (req, res) => {
    const {email, password} = req.body
    // ---step 1: email should exist
    const user = await User.findOne({ email: email })
    // --- no: return email not found
    if(!user) return res.send({message: 'Email not found'})
   
    // ---yes: 
      // step 2: check if password matches to that of db
      const isMatched = await bcrypt.compare(password, user.password)
      if(!isMatched) return res.send({message: 'Invalid password'})
      
      const token = await jwt.sign({ email: email }, '33ceecfc3c914cb6dee77a8c16d08211caf46cfb1aa0b9372f24e39fbaaa1fca31d1a7ae7938579f7ed157636babf812ac42468d431128f7f3098c51a5a4a69a');
      

      return res.send({
          message: 'logged in successfully',
          user: user,
          isLoggedIn: true,
          token
        })
  })
  

  userRouter.get('/users', async (req, res) => {
    const data = await User.find()
    return res.send(data)
  })
export default userRouter

