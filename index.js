// const express = require("express"); 
import express from "express";
const app = express();
import Razorpay from 'razorpay' ;


import dotenv from 'dotenv'; 
dotenv.config(); 

// cors settings..........................
// const cors = require('cors');
import cors from "cors";
app.use(cors());

// const mongoose = require('mongoose');
import mongoose from "mongoose";
// const jwt = require('jsonwebtoken'); 
import jwt from "jsonwebtoken";

import userRouter from './Routes/user.js'; 
import authRouter from './Routes/auth.js'; 
import courseRouter from  './Routes/course.js'; 
import communityRouter from './Routes/community.js'; 

app.use(express.json()); 


const instance = new Razorpay({
    key_id: process.env.ROZAR_API_KEY,
    key_secret: process.env.ROZAR_SECRET_KEY,
});

mongoose.connect("mongodb://0.0.0.0:27017/DBforCodingWebsite").then(()=>{
    app.listen(8000 , ()=>{
        console.log("MongoDB connected and app started at port 8000"); 
    })}
).catch((err)=>{
    console.log("error while connecting to DB : " , err.message); 
})

app.get('/' , (req , res)=>{
    
}); 

app.use('/user' , userRouter) ; 
app.use('/auth' , authRouter) ; 
app.use('/course' , courseRouter) ; 
app.use('/community' , communityRouter) ; 
