const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const authRoutes = require("./routes/auth");
const todoRoutes = require("./routes/TodoRoute");

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

app.use("/api/auth",authRoutes);
app.use("/api/todos",todoRoutes);

//DataBase Connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"));



app.listen(PORT,()=>{
    console.log("Server is running on " + process.env.PORT)
})