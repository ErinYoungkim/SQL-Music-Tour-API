'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Band extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('bands', {
          band_id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        genre: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
        available_start_time: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        end_time: {
          type: Sequelize.DATE,
          allowNull: false,
        }
      })
    },
    down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('bands')
    }
  }
  return Band;
};