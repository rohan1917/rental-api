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

// Routes
/**
 * Route: /api/vehicles
 * Method: All
 * Description: Routes related to vehicles
 */
app.use("/api/vehicles", vehicleRouter);

/**
 * Route: /api/drivers
 * Method: All
 * Description: Routes related to drivers
 */
app.use("/api/drivers", driverRouter);

// 404 Route
app.get("*", (req, res) => {
  res.status(404).json({
    success: false,
    message: "This route doesn't exist.",
  });
});

app.listen(PORT, () => {
  console.log(` Server running on Port ${PORT}`);
});
