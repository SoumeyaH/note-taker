const path = require("path");
const fs = require("fs");
const uuid = require("uuid");

const {
  writeToDatabase,
  getFromDatabase,
} = require("../utils/databaseManipulation");

const getAllNotes = (req, res) => {
  const data = getFromDatabase();
  console.log(data);
  res.json(data);
};

const saveNote = (req, res) => {
  // get note from req.body
  // add id
  //writeToDatabase
  // res.json
};

const deleteNote = (req, res) => {
  // get data - getFromDatabase
  //get id  req.params.id
  // filter by id not match return
  //writeToDatabase
  // res.json
};

module.exports = { getAllNotes, saveNote, deleteNote };
