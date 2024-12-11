import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        console.log(process.env.MONGO_URI);
        await mongoose.connect(`${process.env.MONGO_URI}`);
        console.log("Database connected");
    } catch (error) {
        console.log(   `error while connecting database`,  error);
        process.exit(1);
    }
};