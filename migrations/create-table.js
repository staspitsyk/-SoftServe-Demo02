module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      species: { type: Sequelize.STRING(50) },
      price: { type: Sequelize.REAL },
      gender: { type: Sequelize.STRING(15) },
      weight: { type: Sequelize.REAL },
      birth_date: { type: Sequelize.BIGINT},
      color: { type: Sequelize.STRING(50) },
      breed: { type: Sequelize.STRING(50) },
      image: { type: Sequelize.STRING(100) },
      description: { type: Sequelize.TEXT },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Products');
  },
};
