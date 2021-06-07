"use strict";

const patrons = require("./randomPeople.json").results.map((patron) => {
  return {
    title: patron.name.title,
    first_name: patron.name.first,
    middle_name: null,
    last_name: patron.name.last,
    phone: patron.phone,
    phone2: patron.cell,
    phone3: null,
    email: patron.email,
    website: "website.com",
    linkedIn: "linkedin.com",
    twitter: "twitter.com",
    facebook: "facebook.com",
    birthday: patron.birthday,
    createdAt: "2020-12-01",
    updatedAt: "2021-06-07",
  };
});

const addresses = require("./randomPeople.json").results.map((location) => {
  return {
    line1:
      location.location.street.number + " " + location.location.street.name ||
      location.location.street,
    line2: null,
    line3: null,
    line4: null,
    city: location.location.city,
    region: location.location.state,
    postcode: location.location.postcode,
    country: location.location.country,
    createdAt: "2020-12-01",
    updatedAt: "2021-06-07",
  };
});

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert("addresses", addresses, {});
    await queryInterface.bulkInsert("patrons", patrons, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
