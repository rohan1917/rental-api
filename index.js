import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import vehicleRoutes from "./routes/vehicleRoutes.js";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// Routes
app.use("/api/vehicles", vehicleRoutes);


// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(` Server running on port ${PORT}`));
