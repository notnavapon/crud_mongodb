const express = require("express")
const mongoose = require("mongoose")
const cors =require("cors")
const dotenv = require("dotenv")
const postRoutes = require("./routes/postRoutes")


const morgan = require("morgan") 


dotenv.config()

const app = express()


//mideleware
app.use(cors())
app.use(express.json())

app.use(morgan("dev")) //log req

//routes
app.use("/api/posts", postRoutes)


//database
mongoose.connect(process.env.MONGO_URI).then(
    () =>{
        console.log("MongoDB connected")
        app.listen(5000, ()=> console.log("Server running on port 5000"))
    }
).catch(error => console.log(error))