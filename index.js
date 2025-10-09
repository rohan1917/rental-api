const express = require("express");
const dotenv = require("dotenv");

const DbConnection = require("./databaseConnection")

const vehicleRouter = require("./Routes/Vehicle");
const driverRouter = require("./Routes/Driver");

dotenv.config();

const app = express();

DbConnection();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

app.get("/", (req, res) => {
  res.send("🚀 ZoomCar Clone Backend is Running!");
});

const vehicleRoutes = require("./modules/vehicles/routes/vehicleRoutes");

// Routes
app.use("/api/vehicles", vehicleRoutes);

// test api
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.listen(PORT, () => {
  console.log(` Server running on Port ${PORT}`);
});
