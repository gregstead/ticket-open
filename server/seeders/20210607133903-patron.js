"use strict";

const { query } = require("express");

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

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("addresses", addresses, {});

    const addressIds = await queryInterface.sequelize.query(
      `SELECT id from ADDRESSES`
    );
    const addressIdRows = addressIds[0];

    await queryInterface.bulkInsert("patrons", patrons, {});
    const patronIds = await queryInterface.sequelize.query(
      `SELECT id from PATRONS`
    );
    const patronIdRows = patronIds[0];

    const patron_addresses = addressIdRows.map((addressId, idx) => {
      return {
        createdAt: "2020-12-01",
        updatedAt: "2021-06-07",
        addressId: addressId[idx].id,
        patronId: patronIdRows[idx].id,
      };
    });
    await queryInterface.bulkInsert("patron_address", patron_addresses, {});
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
