const { Router } = require("express");

const { getAllNotes, saveNote, deleteNote } = require("../controllers/notes");

const router = Router();

router.get("/notes", getAllNotes);

router.post("/notes", saveNote);

router.delete("/notes/:id", deleteNote);

module.exports = router;
