const express = require("express")
const app = express();
const cors = require("cors")
var bodyParser = require('body-parser');
const path = require('path')
require("./db")
const port = process.env.PORT || 3007;
app.use(express.json());
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.set("view engine","hbs")
var uploadshopPath = path.join(__dirname,'./characterupload')
app.use("/character",express.static(uploadshopPath))

var imagePath = path.join(__dirname,'./images')
app.use("/img",express.static(imagePath))
var imagenewpath = path.join(__dirname,'./images1')
app.use("/img1",express.static(imagenewpath))
app.use(bodyParser.urlencoded({ extended: true }));

const userroutes = require("./Routes/Userroutes");
app.use(userroutes)
app.listen(port,()=>{
    console.log(`server running on port ${port}`);
})
