const fs = require("fs");
const path = require("path");

const getFromDatabase = () => {
  try {
    const filePath = path.join(__dirname, "../db/db.json");
    const data = fs.readFileSync(filePath, "utf-8");

    return JSON.parse(data);
  } catch (err) {
    console.log(err);
  }
};

module.exports = getFromDatabase;
