const express = require("express");
const cors= require("cors");


const app=express();

app.use(cors());
app.use(express.json());

app.get("/", (req,res)=> {
    res.send("SkillForge Backend Running");

});
const PORT=5000;
app.listen(PORT,() => {
    console.log('Server Running on Port ${PORT}');
});
 //require('dotenv').config();
 //const connectDB = require("./config/db")
 //connectDB();
 
 const userRoutes=require("./routes/userRoutes");
 app.use("/api/users",userRoustes);
