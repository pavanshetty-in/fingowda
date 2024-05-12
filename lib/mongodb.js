
import mongoose from "mongoose";

export const connectMongoDB = async () => {

    try {
        console.log(process.env.MONGODB_URI);
        await mongoose.connect(process.env.MONGODB_URI);
        
        console.log("connected to MongoDB");

    } catch (error) {
        console.log("  Error while connected to MongoDB", error);
    }
}