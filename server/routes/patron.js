const express = require("express");
const router = express.Router();
const db = require("../models");
const { ObjectId } = require("mongojs");

// Method url-path view-file description
// GET	'/patron'	/patron/index	display a list of all patrons
router.get("/", (req, res) => {
  db.Patron.find().then((patrons) => {
    res.json(patrons);
  });
});
// GET	'/patron/new'	/patron/new	return an HTML form for creating a new patron
router.get("/new", (req, res) => {
  res.send("I work");
});
// Create
router.post("/", (req, res) => {
  // Create a new patron
  db.Patron.create(req.body)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(401);
      throw err;
    });
});
// Read
router.get("/:id", (req, res) => {
  const id = ObjectId(req.params.id);
  db.Patron.find({ _id: id }).then((data) => {
    res.json(data);
  });
});
// GET	'/patron/:id/edit'	/patron/edit	return an HTML form for editing a patron

// Update
router.put("/:id", (req, res) => {
  const filter = { _id: ObjectId(req.params.id) };
  const update = { ...req.body };
  const opts = { new: true };
  db.Patron.findOneAndUpdate(filter, update, opts).then((data) => {
    res.json(data);
  });
});
// DELETE

module.exports = router;
