// utils/dbConnect.js
import mongoose from "mongoose";

const MONGODB_URI =
  "mongodb+srv://admin:admin@travel.vvitj2a.mongodb.net/?retryWrites=true&w=majority";

const connectMongoDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to MongoDB.");
  } catch (error) {
    console.log(error);
  }
};

export default connectMongoDB;
