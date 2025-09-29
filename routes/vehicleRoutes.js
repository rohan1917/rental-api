import express from "express";
import { addVehicle, updateVehicle } from "../controllers/vehicleController_temp.js";
import { adminOnly } from "../middleware/authMiddleware.js";

const router = express.Router();

// POST: Add new vehicle
router.post("/", adminOnly, addVehicle);

// PUT: Update vehicle by ID
router.put("/:id", adminOnly, updateVehicle);

export default router;
