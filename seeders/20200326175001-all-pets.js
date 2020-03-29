'use strict';

const data = require('../common/helpers/readJSON');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Pets', data);
},
  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Pets', null, {});
  }
};
