    import mongoose from "mongoose";
    
    const userSchema = new mongoose.Schema(
      {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        phone: { type: String, required: true },
        password: { type: String, required: true }, // store hashed password
      },
      { timestamps: true }
    );
    
    export default mongoose.model("user", userSchema);
    