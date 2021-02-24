'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class gender_guesses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  gender_guesses.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    guess: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    createdAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'gender_guesses',
  });
  return gender_guesses;
};