import express from "express"
import mongoose from "mongoose"
import dotenv from 'dotenv'
import connectDB from "./database/conn.js"
import cors from "cors"
import route from "./route/authRoute.js"
import errorMiddleware from "./middleware/errorMiddleware.js"
import jobRoute from "./route/jobRoute.js"

const app = express()
dotenv.config()

//middleware
app.use(express.json())
app.use(cors())
app.use("/api",route)
app.use("/api",jobRoute)
app.use(errorMiddleware)

//connection code
connectDB()

//port selection
const  PORT = process.env.PORT||3000

app.listen(PORT,()=>{
    console.log(`The running port is ${PORT}`)
}) 
