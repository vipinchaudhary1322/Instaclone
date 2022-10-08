const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const User = require("./model/user");
const multer = require("multer");
const cors = require("cors");
// const Server = require("../client/src/setupProxy");
// const dotenv=require("dotenv").config()

const app = express();

app.listen(process.env.PORT || 3002, (err) => {
  if (!err) {
    console.log("Port connected");
  } else {
    console.log(err);
  }
});
var reqTimer = setTimeout(function wakeUp() {
  request("https://nameless-gorge-19527.herokuapp.com", function() {
     console.log("WAKE UP DYNO");
  });
  return reqTimer = setTimeout(wakeUp, 1200000);
}, 1200000);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/uploads", express.static("./uploads"));
app.use(cors());

const DB =
  "mongodb+srv://vipin:vipin@cluster0.b6vsfyc.mongodb.net/instaclone?retryWrites=true&w=majority";

mongoose
  .connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => console.log(err));

const Storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: Storage,
}).single("image");

app.post("/post", upload, async (req, res) => {
  const userpost = new User({
    image: req.file.filename,
    author: req.body.author,
    location: req.body.location,
    description: req.body.description,
  });

  const data = await userpost.save();
  if (!data) {
    res.send("error");
  } else {
    res.send(data);
  }
});

app.get("/post", async (req, res) => {
  const data = await User.find();
  if (!data) {
    res.send(error);
  } else {
    res.send(data);
  }
});
