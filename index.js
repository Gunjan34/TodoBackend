const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/auth");
const todoRoutes = require("./routes/TodoRoute");

const app = express();
const PORT = process.env.PORT || 5000;

/* Middleware */
app.use(express.json());

app.use(cors({
    origin: "*",   // Change to frontend IP later for security
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

/* Routes */
app.use("/api/auth", authRoutes);
app.use("/api/todos", todoRoutes);

/* Database Connection */
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

/* Server Start */
app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});