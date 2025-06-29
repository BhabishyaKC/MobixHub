import { Router } from "express";
import User from "../model/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const saltRounds = 10;
 

const userRouter = Router();


// Register Route

userRouter.post("/register", async (req, res) => {
  try {
    const { email, password, firstName, lastName, phone } = req.body;

    // Check if email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "Email already taken",
      });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create the user
    const newUser = await User.create({
      email,
      password: hashedPassword,
      firstName,
      lastName,
      phone,
    });

    // Send response
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


// Login Route

userRouter.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Step 1: Check if email exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ success: false, message: "Email not found" });
    }

    // Step 2: Compare passwords
    const isMatched = await bcrypt.compare(password, user.password);
    if (!isMatched) {
      return res.status(401).json({ success: false, message: "Invalid password" });
    }

    // Step 3: Generate token
   const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  console.error("❌ JWT_SECRET is undefined. Did you forget to load .env?");
  return res.status(500).json({ success: false, message: "Internal config error" });
}

const token = jwt.sign(
  { email: user.email, id: user._id },
  JWT_SECRET,
  { expiresIn: "7d" }
);


    // Step 4: Send response
    return res.status(200).json({
      success: true,
      message: " Logged in successfully",
      isLoggedIn: true,
      token,
      user:user
    });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
});


// Get All Users 

userRouter.get("/users", async (req, res) => {
  try {
    const users = await User.find().select("-password"); 
    return res.status(200).json(users);
  } catch (error) {
    console.error("Fetch users error:", error);
    return res.status(500).json({ message: "Server error while fetching users." });
  }
});

export default userRouter;