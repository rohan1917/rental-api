import mongoose from "mongoose";

const vehicleSchema = new mongoose.Schema({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  type: { type: String, required: true }, // e.g. SUV, Sedan
  pricePerDay: { type: Number, required: true },
  image: { type: String },
  available: { type: Boolean, default: true },
});

const Vehicle = mongoose.model("Vehicle", vehicleSchema);
export default Vehicle;
