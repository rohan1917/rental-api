const express = require("express");
const router = express.Router();

const {
  updateDriverById,
  patchDriverById,
  deleteDriverById,
} = require("../controllers/driver-controller");

/**
 * Route: /api/drivers/:id
 * Method: PUT
 * Description: Update full driver profile (Admin)
 */
router.put("/:id", updateDriverById);

/**
 * Route: /api/drivers/:id
 * Method: PATCH
 * Description: Update specific driver info (availability/rating)
 */
router.patch("/:id", patchDriverById);

/**
 * Route: /api/drivers/:id
 * Method: DELETE
 * Description: Remove driver (Admin)
 */
router.delete("/:id", deleteDriverById);

module.exports = router;
