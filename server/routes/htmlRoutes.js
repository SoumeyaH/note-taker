const { Router } = require("express");
const { renderHomePage, renderNotesPage } = require("../controllers/html");

const router = Router();

router.get("/", renderHomePage);
// router.get("/notes", renderNotesPage);
// router.get("/notes/:id, renderNotesPage); - only need this for delete maybe

module.exports = router;
