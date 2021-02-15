'use strict';
const faker = require('faker')
const articles = []
for (let index = 0; index < 3; index++) {
  articles.push({
    content: faker.lorem.paragraph(),
    createdAt: new Date(),
    updatedAt: new Date()
  })

}
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Articles', articles, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};