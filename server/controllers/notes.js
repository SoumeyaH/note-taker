const path = require("path");
const fs = require("fs");
const uuid = require("uuid");

const {
  writeToDatabase,
  getFromDatabase,
} = require("../utils/databaseManipulation");

const getAllNotes = (req, res) => {
  const data = getFromDatabase();
  res.json(data);
};

const saveNote = (req, res) => {
  const note = req.body;
  note.id = uuid.v4();

  const data = getFromDatabase();

  data.push(note);

  writeToDatabase(data);
  res.json(data);
};

const deleteNote = (req, res) => {
  const data = getFromDatabase();
  const noteID = req.params.id;
  console.log(data);
  // filter by id not match return
  //writeToDatabase
  // res.json

  const isDeleted = (each) => each.id !== noteID;

  const notesArray = data.filter(isDeleted);

  writeToDatabase(notesArray);
  res.json(notesArray);
};

module.exports = { getAllNotes, saveNote, deleteNote };
