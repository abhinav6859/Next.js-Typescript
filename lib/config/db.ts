

import mongoose from "mongoose";
const DB_NAME = "auth-keeper";

export const connectDB = async () => {
  try {
    if (mongoose.connections[0].readyState) {
      console.log("Already connected");
      return;
    }

    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    console.log("DB Connected");

  } catch (error) {
    console.log("DB connection error:", error);
    throw error;
  }
};