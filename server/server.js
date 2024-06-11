import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRouter from "./routes/authRoutes.js";
import moviesRouter from "./routes/moviesRoutes.js";
import checkRedisClient from "./middlewares/checkRedisClient.js";

const app=express();

// config .env
dotenv.config();

// Coonecting to MongoDB
connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(morgan("dev"));

app.get("/api",(req,res)=>{
    res.send("<h1>Imdb clone server</h1>");
});

app.use("/api/auth",authRouter);
app.use("/api/movies",moviesRouter);


const PORT=process.env.PORT

app.listen(PORT,()=>{
    console.log(`Server is running http://localhost:${PORT}`);
});