const { user } = require("../models");

const { decryptPwd } = require("../helpers/bcrypt");
const { tokenGenerator } = require("../helpers/jwt");

class UserController {
  static async getUserAll(req, res) {
    try {
      let users = await user.findAll();

      res.status(200).json(users);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  static async registerForm() {
    //fungsi untuk mengarahkan ke form register
  }

  static async register(req, res) {
    try {
      const { name, email, password, birthdate, gender, address, type } = req.body;

      let result = await user.create({
        name,
        email,
        password,
        birthdate,
        gender,
        address,
        type,
      });
      // let result = {
      // email, encryptPwd, avatar, username, role
      // }
      res.status(201).json(result);
    } catch (e) {
      res.status(500).json();
    }
  }

  static async loginForm() {
    //fungsi untuk mengarahkan ke login form
  }

  static async login(req, res) {
    try {
      const { email, password } = req.body;
      let result = await user.findOne({
        where: {
          email,
        },
      });
      if (result) {
        if (decryptPwd(password, result.password)) {
          let token = tokenGenerator(result);
          res.status(200).json({
            access_token: token,
          });
        } else {
          res.status(400).json({
            message: "Password is not correct",
          });
        }
      } else {
        res.status(400).json({
          message: "User not found",
        });
      }
    } catch (e) {
      res.status(500).json(e);
    }
  }

  static async findById(req, res) {
    try {
      const { id } = req.body;
      let result = await user.findAll({
        where: {
          id,
        },
      });
      res.status(200).json(result);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  static async updateUser(req, res) {
    try {
      const id = +req.params.id;
      const { name, email, gender, address } = req.body;
      let result = await user.update(
        {
          name,
          email,
          gender,
          address,
        },
        {
          where: { id },
        }
      );

      result[0] === 1
        ? res.status(200).json({
            message: `Id ${id} has been updated`,
          })
        : res.status(400).json({
            message: `id ${id} failed to update`,
          });
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async deleteUser(req, res) {
    try {
      const id = +req.params.id;

      let result = await user.destroy({
        where: { id },
      });

      result === 1
        ? res.status(200).json({
            message: `Id ${id} has been removed`,
          })
        : res.status(400).json({
            message: `id ${id} failed to remove`,
          });
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

module.exports = UserController;
