'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      species: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.FLOAT
      },
      gender: {
        type: Sequelize.STRING
      },
      weight: {
        type: Sequelize.FLOAT
      },
      birth_date: {
        type: Sequelize.BIGINT
      },
      color: {
        type: Sequelize.STRING
      },
      breed: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      is_sterile: {
        type: Sequelize.BOOLEAN
      },
      hair: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Products');
  }
};