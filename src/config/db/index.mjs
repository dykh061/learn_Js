import mongoose from "mongoose";

export async function connect() {
  try {
    await mongoose.connect("mongodb://localhost:27017/Example", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("connect successfully!");
  } catch (error) {
    console.log("connect failure!");
  }
}
