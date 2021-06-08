"use strict";

// const patronsJSON = require("./data/randomPatrons.json");
const userJSON = require("./data/randomUsers.json");
const addressMap = require("./utils/addressMap");
const userMap = require("./utils/usersMap");
// const patronsMap = require("./utils/patronsMap")

const addresses = addressMap(userJSON);
const users = userMap(userJSON);
// const patrons = patronMap(patronsJSON)

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("addresses", addresses, {});
    const addressIds = await queryInterface.sequelize.query(
      `SELECT id from ADDRESSES`
    );
    const addressIdRows = addressIds[0];

    await queryInterface.bulkInsert("users", users, {});
    const userIds = await queryInterface.sequelize.query(
      `SELECT id from USERS`
    );
    const userIdRows = userIds[0];

    const user_addresses = addressIdRows.map((addressId, idx) => {
      return {
        createdAt: "2020-12-01",
        updatedAt: "2021-06-07",
        addressId: addressId.id,
        userId: userIdRows[idx].id,
      };
    });
    await queryInterface.bulkInsert("user_address", user_addresses, {});

    const patronIds = await queryInterface.sequelize.query(
      `SELECT id FROM patrons`
    );
    const patronIdRows = patronIds[0];
    patronIdRows.forEach(async (patron, idx) => {
      await queryInterface.sequelize.query(
        `INSERT INTO patrons (representative) VALUES (${userIdRows[idx].id}) WHERE id=${patron.id}`
      );
    });
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
