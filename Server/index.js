const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserModel = require("./models/Users");

const cors = require("cors");

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://User123:A123123123@cluster0.oextusr.mongodb.net/mern01?retryWrites=true&w=majority&appName=Cluster0"
);

app.get("/getUsers", (req
    , res) => {
  UserModel.find().then( (err, result) => {
    console.log("result")
    if (err) {
      res.json(err);
    } else {
      res.json(result);

    }
  });
});

app.post("/createUser", async (req, res) => {
  const user = req.body;
  const newUser = new UserModel(user);
  await newUser.save();

  res.json(user);
});

app.listen(3001, () => {
  console.log("SERVER RUNS PERFECTLY!");
});