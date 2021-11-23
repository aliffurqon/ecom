'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  product.init({
    name: DataTypes.STRING,
    desc: DataTypes.STRING,
    price: DataTypes.NUMBER,
    stock: DataTypes.INTEGER,
    weight: DataTypes.INTEGER,
    category: DataTypes.STRING,
    total_sold: DataTypes.INTEGER,
    rating: DataTypes.INTEGER,
    views: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'product',
  });
  return product;
};