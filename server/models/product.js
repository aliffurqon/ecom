"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      product.belongsTo(models.category);
      // product.belongsToMany(models.user, { through: "models.cart", foreignKey: "productId" });
      product.belongsToMany(models.user, { through: "models.user_product" });
      product.belongsToMany(models.user, { through: "models.checkout" });
    }
  }
  product.init(
    {
      name: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "Name product must not be empty",
          },
        },
      },
      desc: DataTypes.STRING,
      price: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            message: "product price must not be empty",
          },
        },
      },
      stock: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            message: "product stock must not be empty",
          },
        },
      },
      weight: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            message: "product weight must not be empty",
          },
        },
      },
      categoryId: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            message: "Category must not be empty",
          },
        },
      },
      total_sold: DataTypes.INTEGER,
      rating: DataTypes.INTEGER,
      views: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "product",
    }
  );
  return product;
};
