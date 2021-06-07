"use strict";

const { query } = require("express");
const patronsJSON = require("./data/randomPatrons.json");
const addressMap = require("./utils/addressMap");
const patronsMap = require("./utils/patronsMap");

const addresses = addressMap(patronsJSON);
const patrons = patronsMap(patronsJSON);

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
        addressId: addressId.id,
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
