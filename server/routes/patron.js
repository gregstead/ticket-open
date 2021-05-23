const express = require("express");
const router = express.Router();

// GET	'/patron'	/patron/index	display a list of all patron
// GET	'/patron/new'	/patron/new	return an HTML form for creating a new patron
router.get("/patron/new", (req, res) => {
  res.send("I work");
});
// POST	'/patron'	--	create a new patron
// GET	'/patron/:id'	/patron/show	display a specific patron
// GET	'/patron/:id/edit'	/patron/edit	return an HTML form for editing a patron
// PUT	'/patron/:id'	--	update a specific patron
// DELETE	'/patron/:id'	--	delete a specific patron
