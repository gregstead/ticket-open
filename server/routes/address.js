const express = require("express");
const router = express.Router();
const db = require("../models");
const { ObjectId } = require("mongojs");

// Method url-path view-file description
// GET	'/address'	/address/index	display a list of all addresss
router.get("/", (req, res) => {
  db.Address.find().then((addresses) => {
    res.json(addresses);
  });
});
// GET	'/address/new'	/address/new	return an HTML form for creating a new address
router.get("/new", (req, res) => {
  res.send("I work");
});
// POST	'/address'	--	create a new address
router.post("/", (req, res) => {
  // Create a new address
  db.Address.create(req.body)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(401);
      throw err;
    });
});
// GET	'/address/:id'	/address/show	display a specific address
router.get("/:id", (req, res) => {
  const id = ObjectId(req.params.id);
  db.Address.find({ _id: id }).then((data) => {
    res.json(data);
  });
});
// GET	'/address/:id/edit'	/address/edit	return an HTML form for editing a address

// PUT	'/address/:id'	--	update a specific address
router.put("/:id", (req, res) => {
  const filter = { _id: ObjectId(req.params.id) };
  const update = { ...req.body };
  const opts = { new: true };
  db.Address.findOneAndUpdate(filter, update, opts).then((data) => {
    res.json(data);
  });
});
// DELETE	'/address/:id'	--	delete a specific address
router.delete("/:id", (req, res) => {
  const id = { _id: ObjectId(req.params.id) };
  db.Address.delete({_id: id}).then((data) => {
    res.json(data);
  });
});

module.exports = router;
