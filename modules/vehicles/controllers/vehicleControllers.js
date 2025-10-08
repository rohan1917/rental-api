const Vehicle = require("../models/vehicleModel");

//Get All Vehicles

const getAllVehicles = async (req, res) => {
  try {
    const vehicles = await Vehicle.find();
    res.status(200).json(vehicles);
  } catch (error) {
    console.log("Error in getAllVehicles controller");
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Get Vehicle By Id

const getVehicleById = async (req, res) => {
  try {
    const vehicle = await Vehicle.findById(req.params.id);
    if (!vehicle) {
      return res.status(404).json({ message: "Vehicle not found" });
    }
    res.status(200).json(vehicle);
  } catch (error) {
    console.log("Error in getVehicleById controller");
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Get Vehicle By Type

const getVehicleByType = async (req, res) => {
  try {
    const type = req.params.type.toLowerCase();
    const vehicles = await Vehicle.find({ type });
    if (vehicles.length === 0) {
      return res
        .status(404)
        .json({ message: `No vehicles found for type: ${type}` });
    }
    res.status(200).json(vehicles);
  } catch (error) {
    console.log("Error in getVehicleByType controller");
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  getAllVehicles,
  getVehicleById,
  getVehicleByType,
};
