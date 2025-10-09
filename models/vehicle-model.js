const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const vehicleSchema = new Schema(
  {
    vehicleNumber: {
      type: String,
      required: true,
      unique: true, // each vehicle number should be unique
    },
    type: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    fuelType: {
      type: String,
      required: true,
    },
    transmission: {
      type: String,
      required: true,
      enum: ["Manual", "Automatic"], // restricts allowed values
    },
    seatingCapacity: {
      type: Number,
      required: true,
    },
    rentalPricePerDay: {
      type: Number,
      required: true,
    },
    availabilityStatus: {
      type: String,
      required: true,
      enum: ["Available", "Rented", "Maintenance"], // possible states
    },
    registrationDate: {
      type: String,
      required: true,
    },
    lastServiceDate: {
      type: String,
      required: true,
    },
    insuranceExpiryDate: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // adds createdAt and updatedAt fields automatically
  }
);

module.exports = mongoose.model("Vehicle", vehicleSchema);
