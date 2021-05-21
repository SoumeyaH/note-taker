const path = require("path");
const fs = require("fs");

const {
  writeToDatabase,
  getFromDatabase,
} = require("../utils/databaseManipulation");

// const getSingleNote = (req, res) => {

// };

const getAllNotes = (req, res) => {
  const data = getFromDatabase();
  res.json(data);
};

module.exports = { getAllNotes };
