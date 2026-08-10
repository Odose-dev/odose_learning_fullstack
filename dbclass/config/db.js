import mongoose from "mongoose";

export default async function connectBD() {
  try {
    const conn = await mongoose.connect(process.env.DATABASE_URL);
    if (!conn) throw new Error("Database connection failed!");
    console.log("Connection successful!");
  } catch (err) {
    console.log(err.message);
  }
}
