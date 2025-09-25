import express from "express";
import mongoose from "mongoose";
import cors  from "cors";
import dotenv from "dotenv";
import postRoutes from "./routes/postRoutes.js";
import morgan from "morgan" ;
import { connectDB } from "./config/db.js";


dotenv.config()

const app = express()


//mideleware
app.use(cors())
app.use(express.json())

app.use(morgan("dev")) //log req

//routes
app.use("/api/posts", postRoutes)

// Connect database and start server
const PORT = process.env.PORT || 5000;

//database
connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});