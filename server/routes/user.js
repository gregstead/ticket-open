const express = require("express");
const router = express.Router();
const db = require("../models");
const { ObjectId } = require("mongojs");

// Method url-path view-file description
// GET	'/user'	/user/index	display a list of all users
router.get("/", (req, res) => {
  db.User.find().then((users) => {
    res.json(users);
  });
});
// GET	'/user/new'	/user/new	return an HTML form for creating a new user
router.get("/new", (req, res) => {
  res.send("I work");
});
// POST	'/user'	--	create a new user
router.post("/", (req, res) => {
  // Create a new user
  db.User.create(req.body)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(401);
      throw err;
    });
});
// GET	'/user/:id'	/user/show	display a specific user
router.get("/:id", (req, res) => {
  const id = ObjectId(req.params.id);
  db.User.find({ _id: id }).then((data) => {
    res.json(data);
  });
});
// GET	'/user/:id/edit'	/user/edit	return an HTML form for editing a user

// PUT	'/user/:id'	--	update a specific user
router.put("/:id", (req, res) => {
  const filter = { _id: ObjectId(req.params.id) };
  const update = { ...req.body };
  const opts = { new: true };
  db.User.findOneAndUpdate(filter, update, opts).then((data) => {
    res.json(data);
  });
});
// DELETE	'/user/:id'	--	delete a specific user
router.delete("/:id", (req, res) => {
  const id = { _id: ObjectId(req.params.id) };
  db.User.delete({ _id: id }).then((data) => {
    res.json(data);
  });
});

module.exports = router;
