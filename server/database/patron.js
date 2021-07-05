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
    patron_addresses: [
      {
        line1: patron.location.street,
        line2: null,
        line3: null,
        line4: null,
        city: patron.location.city,
        region: patron.location.state,
        postcode: patron.location.postcode,
        country: patron.location.country,
      },
    ],
  };
});

module.exports = function() {
  patrons.forEach((patron) => {
    db.patron.create(patron);
  });
};
