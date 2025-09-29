import Vehicle from "../models/vehicleModel_temp.js"

// POST /api/vehicles (Admin Only)
export const addVehicle = async (req, res) => {
  try {
    const vehicle = new Vehicle(req.body);
    await vehicle.save();
    res.status(201).json({ message: "Vehicle added successfully", vehicle });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// PUT /api/vehicles/:id (Admin Only)
export const updateVehicle = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedVehicle = await Vehicle.findByIdAndUpdate(id, req.body, { new: true });

    if (!updatedVehicle) {
      return res.status(404).json({ message: "Vehicle not found" });
    }

    res.status(200).json({ message: "Vehicle updated successfully", vehicle: updatedVehicle });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
