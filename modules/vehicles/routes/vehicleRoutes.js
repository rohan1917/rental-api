const express = require("express");
const router = express.Router();
const vehicleController = require("../controllers/vehicleControllers");

/**
 * Route: /vehicles
 * Method: GET
 * Decsription: Get all vehicles
 * Access: Public
 * Paramaters: None
 */

router.get("/", vehicleController.getAllVehicles);

/**
 * Route: /vehicles/:id
 * Method: GET
 * Description: Get a single vehicle by its ID
 * Access: Public
 * Parameters:
 *    - id: string (Vehicle ID)
 */

router.get("/:id", vehicleController.getVehicleById);

/**
 * Route: /vehicles/type/:type
 * Method: GET
 * Description: Get all vehicles filtered by type (e.g., car, bike, suv)
 * Access: Public
 * Parameters:
 *    - type: string (Vehicle type)
 */

router.get("/type/:type", vehicleController.getVehicleByType);

module.exports = router;
