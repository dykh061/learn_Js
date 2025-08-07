import mongoose from "mongoose";

export async function connect() {
  try {
    await mongoose.connect("mongodb://localhost:27017/Example");
    console.log("connect mongodb successfully!");
  } catch (error) {
    console.log("connect failure!");
  }
}
