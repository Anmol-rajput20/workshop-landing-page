require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const Enquiry = require("./models/Enquiry");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((error) => {
    console.error("MongoDB Connection Error:", error);
  });

// Routes
app.post("/api/enquiry", async (req, res) => {
  try {
    const { name, email, phone } = req.body;

    // Validation
    if (!name || !email || !phone) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Save to MongoDB
    const enquiry = await Enquiry.create({
      name,
      email,
      phone,
    });

    res.status(201).json({
      success: true,
      message: "Registration submitted successfully",
      enquiry,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
});

// Test Route
app.get("/", (req, res) => {
  res.send("Workshop API is running...");
});

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});