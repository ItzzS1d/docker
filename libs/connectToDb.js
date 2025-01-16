import mongoose from "mongoose";
export async function connectToDb() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("connectedToDb");
  } catch (error) {
    console.log(error);
  }
}
