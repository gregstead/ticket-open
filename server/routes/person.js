const express = require("express");
const router = express.Router();
const db = require("../models");
const { ObjectId } = require("mongojs");

// Method url-path view-file description
// GET	'/person'	/person/index	display a list of all persons
router.get("/", (req, res) => {
  db.Person.find().then((persons) => {
    res.json(persons);
  });
});
// GET	'/person/new'	/person/new	return an HTML form for creating a new person
router.get("/new", (req, res) => {
  res.send("I work");
});
// POST	'/person'	--	create a new person
router.post("/", (req, res) => {
  // Create a new person
  db.Person.create(req.body)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(401);
      throw err;
    });
});
// GET	'/person/:id'	/person/show	display a specific person
router.get("/:id", (req, res) => {
  const id = ObjectId(req.params.id);
  db.Person.find({ _id: id }).then((data) => {
    res.json(data);
  });
});
// GET	'/person/:id/edit'	/person/edit	return an HTML form for editing a person

// PUT	'/person/:id'	--	update a specific person
router.put("/:id", (req, res) => {
  const filter = { _id: ObjectId(req.params.id) };
  const update = { ...req.body };
  const opts = { new: true };
  db.Person.findOneAndUpdate(filter, update, opts).then((data) => {
    res.json(data);
  });
});
// DELETE	'/person/:id'	--	delete a specific person

module.exports = router;
