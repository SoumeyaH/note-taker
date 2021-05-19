const { Router } = require("express");

const { getAllNotes, getSingleNote } = require("../controllers/notes");

const router = Router();

router.get("/notes", getAllNotes);

router.get("/notes/:id", getSingleNote);

// router.delete("/notes/:id", deleteNote)

module.exports = router;
