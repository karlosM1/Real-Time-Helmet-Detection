import { Router } from "express";
import Violation from "../db/violations";

const router = Router();

// Store a violation
router.post("/", async (req, res) => {
  try {
    const { plate_number, timestamp, image_url } = req.body;
    if (!plate_number || !timestamp || !image_url) {
      return res.status(400).json({ error: "Invalid data" });
    }

    const newViolation = new Violation({ plate_number, timestamp, image_url });
    await newViolation.save();
    res.status(201).json({ message: "Violation stored successfully" });
  } catch (err) {
    console.error("Error storing violation:", err);
    res.status(500).json({ error: "Server error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const violations = await Violation.find().sort({ timestamp: -1 });
    res.json(violations);
  } catch (err) {
    console.error("Error fetching violations:", err);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
