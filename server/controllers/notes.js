const path = require("path");
const fs = require("fs");

const getSingleNote = (req, res) => {
  // figure out using static path function
};
const getAllNotes = (req, res) => {
  const filePath = path.join(__dirname, "../db/db.json");
  const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  res.json(data);
};

module.exports = { getAllNotes, getSingleNote };
