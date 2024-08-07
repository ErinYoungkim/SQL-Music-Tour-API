'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Meet_Greets extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Meet_Greets.init({
    meet_greet_id: DataTypes.INTEGER,
    event_id: DataTypes.INTEGER,
    band_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    genre: DataTypes.TEXT,
    available_start_time: DataTypes.DATE,
    end_time: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Meet_Greets',
  });
  return Meet_Greets;
};