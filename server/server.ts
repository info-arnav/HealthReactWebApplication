//*declaration
const express = require("express");
const bcrypt = require("bcrypt");
const fileupload = require("express-fileupload");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");

//*imports
const mainScema = require("./mainSchema");
const userDatass = require("./mongodb/login");

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
const mainModel = mongoose.model("mainModel", mainScema);
const userModel = mongoose.model("userDatas", userDatass);

//*declarations
let error = { status: false };
let userData: String = "";

//*routes

app.post("/user", (req: any, res: any) => {
  let body = req.body;
  userModel.create(body, (error: any, success: any) => {
    if (error) {
      error.status = true;
      console.log(error);
    }
  });
});

app.get("/register/error", (req: any, res: any) => {
  if ((error.status = true)) {
    res.send(true);
  }
});

app.post("/auth", (req: any, res: any) => {
  let body = req.body.userName;
  userModel.findOne({ body }, (error: any, success: any) => {
    if (error) {
      console.log(error);
    } else if (success) {
      userData = body;
      res.redirect(applicationParams);
    }
  });
});
