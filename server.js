import express from "express";
const app = express();
const port = 40002;

import mongoose from "mongoose";
import route from "./routes/studentroutes.js";
import routes from "./routes/facilitatorRoutes.js";

app.use(express.json()); // Middleware for parsing JSON bodies
app.use(route); // Connecting the route to our application
app.use(routes); //connecting the routes to our application

// Connect to MongoDB database using Mongoose       
mongoose.connect("mongodb://localhost:27017/StudendFacilitatorMS")
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
    
})
