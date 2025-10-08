const express = require("express");
const router = express.Router();

const { deleteVehicleById } = require("../controllers/vehicle-controller");

/**
 * Route: /api/vehicles/:id
 * Method: DELETE
 * Description: Remove vehicle (Admin)
 * Access: Admin
 * Parameters: id
 */

// Using JSON data
router.delete("/:id", deleteVehicleById);

module.exports = router;
