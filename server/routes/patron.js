const express = require("express");
const router = express.Router();
const db = require("../models");

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
// POST	'/patron'	--	create a new patron
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
// GET	'/patron/:id'	/patron/show	display a specific patron
// GET	'/patron/:id/edit'	/patron/edit	return an HTML form for editing a patron
// PUT	'/patron/:id'	--	update a specific patron
// DELETE	'/patron/:id'	--	delete a specific patron

module.exports = router;
