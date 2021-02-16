'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Articles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Articles.hasOne(models.Users, {
        foreignKey: 'id'
      })
    }
  };
  Articles.init({
    content: DataTypes.TEXT,
    userId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Articles',
  });
  return Articles;
};