import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Required to parse incoming JSON requests

// Get values from .env
const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// Function to start the server
async function startServer() {
  try {
    if (!URI) {
      throw new Error("MongoDBURI is not defined in your .env file.");
    }

    // Connect to MongoDB
    await mongoose.connect(URI);

    console.log("✅ Connected to MongoDB");

    // Routes
    app.use("/book", bookRoute);
    app.use("/user", userRoute);

    // Start server
    app.listen(PORT, () => {
      console.log(`🚀 Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
    process.exit(1); // Exit process with failure
  }
}

// Start the application
startServer();
