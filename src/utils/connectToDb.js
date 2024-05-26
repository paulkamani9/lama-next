import mongoose from "mongoose";

const connection = {};

const connectToDb = async () => {
  try {
    if (connection.isConnected) {
      console.log("Using existing database connection...");
      return;
    }

    const db = await mongoose.connect(process.env.MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    connection.isConnected = db.connections[0].readyState;
    console.log("Connected to the database");
  } catch (error) {
    console.error("Database connection error:", error.message);
    throw new Error("Failed to connect to the database");
  }
};

export default connectToDb;
