const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Info = require("./models/person");
const bodyParser = require("body-parser"); // Import body-parser for parsing JSON requests

app.use(bodyParser.json()); // Use body-parser middleware to parse JSON requests
app.use(bodyParser.urlencoded({ extended: false }));

// routes
app.get("/", (req, res) => {
  res.send("hello ");
});

// Get all persons
app.get("/api/persons", async (req, res) => {
  try {
    const persons = await Info.find({});
    res.status(200).json(persons);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

// Get one person
app.get("/api/persons/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const person = await Info.findById(id);
    res.status(200).json(person);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

// Create a new person
app.post("/api/persons", async (req, res) => {
  try {
    const person = await Info.create(req.body);
    if (!person) {
      res.status(404).json({ message: `Cannot find this person with id ${id}` });
    }
    res.status(200).json(person);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

// Update info of one person
app.patch("/api/persons/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedPerson = await Info.findByIdAndUpdate(id, req.body);
    res.status(200).json(updatedPerson);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

// Delete info of one person
app.delete("/api/persons/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedPerson = await Info.findByIdAndDelete(id);
    if (!deletedPerson) {
      res.status(404).json({ message: `Cannot find this person with id ${id}` });
    }
    res.status(200).json(deletedPerson);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

mongoose.set("strictQuery", false);
mongoose
  .connect("mongodb+srv://aminumohammedlawal00:Alatech123@clustercrud.wfkgk4p.mongodb.net/persons?retryWrites=true&w=majority")
  .then(() => {
    app.listen(3000, () => {
      console.log("Node API is running on port 3000");
    });
    console.log("Connected to the database");
  });
