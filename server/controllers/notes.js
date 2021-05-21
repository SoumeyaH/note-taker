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
  // get note from req.body
  const note = req.body;

  // add id
  note.id = uuid.v4();
  console.log(note);

  const data = getFromDatabase();
  console.log(data, typeof data);
  data.push(note);
  console.log(data);
  writeToDatabase(JSON.stringify(data));
  res.json(data);
};

const deleteNote = (req, res) => {
  // get data = getFromDatabase
  //get id  req.params.id
  // filter by id not match return
  //writeToDatabase
  // res.json
};

module.exports = { getAllNotes, saveNote, deleteNote };
