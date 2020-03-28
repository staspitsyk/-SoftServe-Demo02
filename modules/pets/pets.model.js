// const { DataTypes, Model } = require('sequelize');
// const sequelize = require('../../db');
//
// class Pets extends Model {}
//
// const PetsModel = Pets.init(
//   {
//     id: {
//       allowNull: false,
//       autoIncrement: true,
//       primaryKey: true,
//       type: DataTypes.INTEGER,
//     },
//     species: { type: DataTypes.STRING(50), allowNull: false },
//     price: { type: DataTypes.REAL, allowNull: false },
//     gender: { type: DataTypes.STRING(15), allowNull: false },
//     weight: { type: DataTypes.REAL, allowNull: false },
//     birth_date: { type: DataTypes.BIGINT, allowNull: false },
//     color: { type: DataTypes.STRING(50), allowNull: false },
//     breed: { type: DataTypes.STRING(50), allowNull: false },
//     image: { type: DataTypes.STRING(100), allowNull: false },
//     description: { type: DataTypes.TEXT, allowNull: false },
//
//     // id: {type: DataTypes.INTEGER, primaryKey: true, allowNull: false},
//     // species: {type: DataTypes.STRING, allowNull: false},
//     // price: {type: DataTypes.REAL, allowNull: false},
//     // gender: {type: DataTypes.STRING, allowNull: false},
//     // weight: {type: DataTypes.REAL, allowNull: false},
//     // color: {type: DataTypes.STRING, allowNull: false},
//     // breed: {type: DataTypes.STRING, allowNull: false},
//     // image: {type: DataTypes.STRING, allowNull: false},
//     // birth_date: {type: DataTypes.DATE, allowNull: false},
//     // description: {type: DataTypes.STRING, allowNull: false},
//   },
//   { sequelize }
// );
//
// module.exports = PetsModel;
