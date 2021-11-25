"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class checkout extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      checkout.belongsTo(models.user);
      checkout.belongsTo(models.product);
    }
  }
  checkout.init(
    {
      productId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      subtotal: DataTypes.INTEGER,
      discount: DataTypes.INTEGER,
      tax: DataTypes.INTEGER,
      city: DataTypes.STRING,
      address: DataTypes.STRING,
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "checkout",
    }
  );
  return checkout;
};
