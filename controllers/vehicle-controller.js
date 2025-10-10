const { vehicles } = require("../data/vehicles.json"); // Using JSON first
const VehicleModel = require("../models/vehicle-model"); // MongoDB model (commented version used later)

/**
 * Controller: deleteVehicleById
 * Method: DELETE
 * Route: /api/vehicles/:id
 * Description: Remove vehicle by ID (Admin only)
 */
exports.deleteVehicleById = (req, res) => {
    const { id } = req.params;

    // --------------- MOCK JSON VERSION -----------------
    const vehicleIndex = vehicles.findIndex((each) => each.id === id);

    if (vehicleIndex === -1) {
        return res.status(404).json({
            success: false,
            message: "Vehicle not found for this ID",
        });
    }

    vehicles.splice(vehicleIndex, 1); // remove from mock data array

    return res.status(200).json({
        success: true,
        message: "Vehicle deleted successfully (from JSON data)",
        data: vehicles,
    });

    // --------------- MONGODB VERSION -----------------
    /**
     * try {
     *     const deletedVehicle = await VehicleModel.findByIdAndDelete(id);
     *     if (!deletedVehicle) {
     *         return res.status(404).json({
     *             success: false,
     *             message: "Vehicle not found for this ID",
     *         });
     *     }
     *     return res.status(200).json({
     *         success: true,
     *         message: "Vehicle deleted successfully from MongoDB",
     *         data: deletedVehicle,
     *     });
     * } catch (error) {
     *     return res.status(500).json({
     *         success: false,
     *         message: "Error deleting vehicle",
     *         error: error.message,
     *     });
     * }
     */
};
