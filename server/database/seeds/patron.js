const db = require("../../models");
let patrons = require("./randomPeople.json").results;

patrons = patrons.map((patron) => {
  return {
    title: patron.name.title,
    first_name: patron.name.first,
    middle_name: null,
    last_name: patron.name.last,
    phone: patron.phone,
    phone2: patron.cell,
    phone3: null,
    email: patron.email,
    website: null,
    linkedIn: null,
    twitter: null,
    facebook: null,
    birthday: patron.dob.date,
  };
});

module.exports = function() {
  db.patron.bulkCreate(patrons);
};
