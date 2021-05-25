const express = require("express");
const router = express.Router();
const db = require("../models");
const { ObjectId } = require("mongojs");

// Method url-path view-file description
// GET	'/business'	/business/index	display a list of all businesss
router.get("/", (req, res) => {
  db.Business.find().then((businesses) => {
    res.json(businesses);
  });
});
// GET	'/business/new'	/business/new	return an HTML form for creating a new business
router.get("/new", (req, res) => {
  res.send("I work");
});
// POST	'/business'	--	create a new business
router.post("/", (req, res) => {
  // Create a new business
  db.Business.create(req.body)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(401);
      throw err;
    });
});
// GET	'/business/:id'	/business/show	display a specific business
router.get("/:id", (req, res) => {
  const id = ObjectId(req.params.id);
  db.Business.find({ _id: id }).then((data) => {
    res.json(data);
  });
});
// GET	'/business/:id/edit'	/business/edit	return an HTML form for editing a business

// PUT	'/business/:id'	--	update a specific business
router.put("/:id", (req, res) => {
  const filter = { _id: ObjectId(req.params.id) };
  const update = { ...req.body };
  const opts = { new: true };
  db.Business.findOneAndUpdate(filter, update, opts).then((data) => {
    res.json(data);
  });
});
// DELETE	'/business/:id'	--	delete a specific business

module.exports = router;
