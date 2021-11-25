const { user_product, product, user } = require("../models");

class CartController {
  static async getCart(req, res) {
    try {
      const { id } = req.userData;
      let result = await user_product.findAll({
        where: {
          userId: id,
        },
        // include: [user, category],
        include: [product, user],
      });
      // console.log(result);
      res.status(200).json(result);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  static async addForm() {
    //fungsi untuk mengarahkan ke form add
  }

  static async addCart(req, res) {
    try {
      const { productId, userId, status } = req.body;
      let result = await user_product.create({
        productId,
        userId,
        status,
      });
      res.status(201).json(result);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  static async findCart(req, res) {
    // try {
    //   const id = req.params.categoryId;
    //   let result = await category.findAll({
    //     include: [category],
    //     where: { id },
    //   });
    //   res.status(200).json(result);
    // } catch (err) {
    //   res.status(500).json(err);
    // }
  }

  static async deleteCart(req, res) {
    try {
      const id = +req.params.id;
      let result = await user_product.destroy({
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

  static updateForm(req, res) {
    //fungsi untuk mengarahkan ke update form
  }

  static async updateCart(req, res) {
    try {
      const id = +req.params.id;
      const { productId, userId, status } = req.body;
      let result = await user_product.update(
        {
          productId,
          userId,
          status,
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
}

module.exports = CartController;
