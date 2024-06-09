// Init
const express = require("express");
const app = express();
const PORT = 3000;
/*
////////[CORS (Cross Origin Resource Sharing)]
Enable access to our api from the client side
*/
const cors = require("cors");

/*
////////[EXPRESS Middleware in use]
Middleware is simply a function that run between request and response

express.json() : A middleware
*/
app.use(express.json());
app.use(cors());

// using dotenv in node
require("dotenv").config();

// connection to the MongoDB cluster using driver
const connectDb = require("./db");

// model
const notesModel = require("./model/notesModel");
connectDb();

// api
app.get("/", async (req, res) => {
  const items = await notesModel.find();
  res.json(items);
});

app.post("/new", async (req, res) => {
  const newNote = req.body;
  // console.log(newNote);
  try {
    const createdNote = await notesModel.create(newNote);
    res.status(201).json(createdNote);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

async function createNotes() {
  const note = await notesModel.create({
    title: "MERN Stack",
    description: "MERN stands for MongoDB, ExpressJS, ReactJS, and NodeJS",
    tag: ["nodejs", "mern", "programming"],
  });
  console.log(note);
  await note.save();
}

// createNotes();
app.listen(PORT);
