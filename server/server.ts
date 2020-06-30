//*declaration
const express = require("express");
const bcrypt = require("bcrypt");
const fileupload = require("express-fileupload");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");

//*ports
const applicationParams = "http://localhost:3000/";
const serverPort = process.env.PORT || "1234";
const serverParams = "http://localhost:1234";
const mongoosePort =
  process.env.MONGODB_URI || "mongodb://localhost/webApplication";

//*creation
const app = express();

//*connections
mongoose.connect(mongoosePort);
app.listen(serverPort, (req, res) => {});

//*use
app.use(cors());
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileupload());

//*Schemas
