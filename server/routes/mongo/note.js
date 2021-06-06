const express = require("express");
const router = express.Router();
const db = require("../models");
const { ObjectId } = require("mongojs");

// Method url-path view-file description
// GET	'/note'	/note/index	display a list of all notes
router.get("/", (req, res) => {
  db.Note.find().then((notes) => {
    res.json(notes);
  });
});
// GET	'/note/new'	/note/new	return an HTML form for creating a new note
router.get("/new", (req, res) => {
  res.send("I work");
});
// POST	'/note'	--	create a new note
router.post("/", (req, res) => {
  // Create a new note
  db.Note.create(req.body)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(401);
      throw err;
    });
});
// GET	'/note/:id'	/note/show	display a specific note
router.get("/:id", (req, res) => {
  const id = ObjectId(req.params.id);
  db.Note.find({ _id: id }).then((data) => {
    res.json(data);
  });
});
// GET	'/note/:id/edit'	/note/edit	return an HTML form for editing a note

// PUT	'/note/:id'	--	update a specific note
router.put("/:id", (req, res) => {
  const filter = { _id: ObjectId(req.params.id) };
  const update = { ...req.body };
  const opts = { new: true };
  db.Note.findOneAndUpdate(filter, update, opts).then((data) => {
    res.json(data);
  });
});
// DELETE	'/note/:id'	--	delete a specific note
router.delete("/:id", (req, res) => {
  const id = { _id: ObjectId(req.params.id) };
  db.Note.delete({_id: id}).then((data) => {
    res.json(data);
  });
});
module.exports = router;
