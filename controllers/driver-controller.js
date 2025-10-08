// controllers/driver-controller.js

const { drivers } = require("../data/drivers.json");
const DriverModel = require("../models/driver-model"); // For MongoDB use
const DriverDTO = require("../dtos/driver-dto");

/**
 * PUT /api/drivers/:id → Update full driver profile
 */
exports.updateDriverById = (req, res) => {
  const { id } = req.params;
  const { data } = req.body;

  // -------- JSON VERSION ----------
  const driverIndex = drivers.findIndex((each) => each.id === id);
  if (driverIndex === -1) {
    return res.status(404).json({
      success: false,
      message: "Driver not found for this ID",
    });
  }

  drivers[driverIndex] = { ...drivers[driverIndex], ...data };

  return res.status(200).json({
    success: true,
    message: "Driver profile updated successfully (JSON)",
    data: drivers[driverIndex],
  });

  // -------- MONGODB VERSION ----------
  /**
   * try {
   *   const updatedDriver = await DriverModel.findByIdAndUpdate(id, data, { new: true });
   *   if (!updatedDriver) {
   *     return res.status(404).json({
   *       success: false,
   *       message: "Driver not found for this ID",
   *     });
   *   }
   *   return res.status(200).json({
   *     success: true,
   *     message: "Driver updated successfully (MongoDB)",
   *     data: updatedDriver,
   *   });
   * } catch (error) {
   *   return res.status(500).json({
   *     success: false,
   *     message: "Error updating driver",
   *     error: error.message,
   *   });
   * }
   */
};

/**
 * PATCH /api/drivers/:id → Update specific fields like rating or availability
 */
exports.patchDriverById = (req, res) => {
  const { id } = req.params;
  const { data } = req.body;

  // -------- JSON VERSION ----------
  const driver = drivers.find((each) => each.id === id);
  if (!driver) {
    return res.status(404).json({
      success: false,
      message: "Driver not found for this ID",
    });
  }

  Object.assign(driver, data); // update only provided fields

  return res.status(200).json({
    success: true,
    message: "Driver info patched successfully (JSON)",
    data: driver,
  });

  // -------- MONGODB VERSION ----------
  /**
   * try {
   *   const patchedDriver = await DriverModel.findByIdAndUpdate(id, { $set: data }, { new: true });
   *   if (!patchedDriver) {
   *     return res.status(404).json({
   *       success: false,
   *       message: "Driver not found",
   *     });
   *   }
   *   return res.status(200).json({
   *     success: true,
   *     message: "Driver patched successfully (MongoDB)",
   *     data: patchedDriver,
   *   });
   * } catch (error) {
   *   return res.status(500).json({
   *     success: false,
   *     message: "Error patching driver",
   *     error: error.message,
   *   });
   * }
   */
};

/**
 * DELETE /api/drivers/:id → Remove driver
 */
exports.deleteDriverById = (req, res) => {
  const { id } = req.params;

  // -------- JSON VERSION ----------
  const driverIndex = drivers.findIndex((each) => each.id === id);
  if (driverIndex === -1) {
    return res.status(404).json({
      success: false,
      message: "Driver not found for this ID",
    });
  }

  drivers.splice(driverIndex, 1);

  return res.status(200).json({
    success: true,
    message: "Driver deleted successfully (JSON)",
    data: drivers,
  });

  // -------- MONGODB VERSION ----------
  /**
   * try {
   *   const deletedDriver = await DriverModel.findByIdAndDelete(id);
   *   if (!deletedDriver) {
   *     return res.status(404).json({
   *       success: false,
   *       message: "Driver not found for this ID",
   *     });
   *   }
   *   return res.status(200).json({
   *     success: true,
   *     message: "Driver deleted successfully (MongoDB)",
   *     data: deletedDriver,
   *   });
   * } catch (error) {
   *   return res.status(500).json({
   *     success: false,
   *     message: "Error deleting driver",
   *     error: error.message,
   *   });
   * }
   */
};
