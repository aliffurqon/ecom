"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user_product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      user_product.belongsTo(models.user);
      user_product.belongsTo(models.product);
    }
  }
  user_product.init(
    {
      productId: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            message: "product must not be empty",
          },
        },
      },
      userId: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            message: "user must not be empty",
          },
        },
      },
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "user_product",
    }
  );
  return user_product;
};
