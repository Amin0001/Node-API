const express = require("express")
const app = express()
const mongoose = require("mongoose");
const Info = require("./models/person")
app.use(express.json())
app.use(express.urlencoded({extended: false}))
//routes
app.get("/", (req, res) => {
  res.send("hello ")
})
//Get all person
app.get("/persons", async (req, res) => {
  try {
    const persons = await Info.find({})
    res.status(200).json(persons)
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ message: error.message })
  }
})

//Get one person
app.get("/persons/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const person = await Info.findById(id);
    res.status(200).json(person)
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ message: error.message })
  }
})
//create a new ;person
app.post("/persons", async (req, res) => {
  try {
    const person = await Info.create(req.body)
    if(!person){
      res.status(404).json({message: 'cannot find this person with id ${id}'})
    }
    res.status(200).json(person)
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ message: error.message })
  }
})

//update info of one person
app.patch("/persons/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedPerson = await Info.findByIdAndUpdate(id, req.body);
    res.status(200).json(updatedPerson)
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ message: error.message })
  }
})

//delete info of one person
app.delete("/persons/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedPerson = await Info.findByIdAndDelete(id);
     if(!person){
      res.status(404).json({message: 'cannot find this person with id ${id}'})
    }
    res.status(200).json(deletedPerson)
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ message: error.message })
  }
})
mongoose.set("strictQuery", false)
mongoose.connect("mongodb+srv://aminumohammedlawal00:Alatech123@clustercrud.wfkgk4p.mongodb.net/persons?retryWrites=true&w=majority")
  .then(() => {
    app.listen(3000, () => {
      console.log("node api is running on port 3000")
    })
    console.log("connected to data base")
  })