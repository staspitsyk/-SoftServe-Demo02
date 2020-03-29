'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: { type: Sequelize.STRING,
        allowNull: false
      },
      phone: { type: Sequelize.DECIMAL,
        allowNull: false
      },
      email: { type: Sequelize.STRING,
        allowNull: false
      },
      products: { type: Sequelize.DECIMAL,
        allowNull: false
      },
      totalPrice: { type: Sequelize.DECIMAL,
        allowNull: false
      },
      // date: { type: Sequelize.DATE,
      //   allowNull: false
      // },
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
    return queryInterface.dropTable('Orders');
  }
};
