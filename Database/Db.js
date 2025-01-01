import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

export const connectDB = async () => {
    try {
        const dbURI = process.env.MONGO_URI;
        if (!dbURI) {
            throw new Error("Database URI is not defined in the environment variables.");
        }
        await mongoose.connect(dbURI);
        console.log("MongoDB Connected...");
    } catch (error) {
        console.error("Error Connecting MongoDB:", error);
    }
};
