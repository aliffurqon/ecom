"use strict";
const { Model } = require("sequelize");
const { encryptPwd } = require("../helpers/bcrypt");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // user.belongsToMany(models.product, { through: "models.cart", foreignKey: "userId" });
      user.belongsToMany(models.product, { through: "models.user_product" });
    }
  }
  user.init(
    {
      name: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "Email must not be empty.",
          },
          isEmail: {
            message: "Must email format.",
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "Password must not be empty.",
          },
        },
      },
      birthdate: {
        type: DataTypes.DATE,
        validate: {
          notEmpty: {
            message: "Birthdate must not be empty",
          },
        },
      },
      gender: DataTypes.STRING,
      address: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "Address must not be empty",
          },
        },
      },
      type: DataTypes.STRING,
    },
    {
      hooks: {
        beforeCreate: function (user, options) {
          user.password = encryptPwd(user.password);
        },
      },
      sequelize,
      modelName: "user",
    }
  );
  return user;
};
