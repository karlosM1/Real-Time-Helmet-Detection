import mongoose from "mongoose";

const ViolationSchema = new mongoose.Schema({
  plate_number: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
  image_url: { type: String, required: true },
  status: {
    type: String,
    enum: ["pending", "notified", "reviewed"],
    default: "pending",
  },
});

const Violation = mongoose.model("Violation", ViolationSchema);
export default Violation;
