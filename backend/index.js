// Init
const express = require("express");
const app = express();
const cors = require("cors");

// middleware
app.use(express.json());
app.use(cors());

// using dotenv in node
require("dotenv").config();

// connection to the MongoDB cluster using driver
const connectDb = require("./db");

// model
const todoListItemModel = require("./model/todoListItem");

connectDb();

// api
app.get("/", async (req, res) => {
  const items = await todoListItemModel.find();
  res.json(items);
});

async function createUser() {
  const user = await todoListItemModel.create({
    title: "Test 2",
    description: "description 2",
  });
  console.log(user);
  await user.save();
}

// createUser();

app.listen(3000);
