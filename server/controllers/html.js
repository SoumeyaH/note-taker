const getStaticFilePath = require("../utils/getStaticFile");

const renderHomePage = (req, res) => {
  console.log("hello");
  // const filePath = getStaticFilePath("index");

  // res.sendFile(filePath);
};

const renderNotesPage = (req, res) => {
  console.log("hello");
};

module.exports = { renderHomePage, renderNotesPage };
