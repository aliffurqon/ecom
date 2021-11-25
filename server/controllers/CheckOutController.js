const { checkout, product, user, user_product } = require("../models");

class CheckOutController {
  static async getCheckOut(req, res) {
    try {
      const { id } = req.userData;
      let result = await checkout.findAll({
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
    //untuk add Form
  }

  static async addCheckOut(req, res) {
    try {
      const { productId, userId, subtotal, discount, tax, city, address, status, user_product_id, stock } = req.body;
      let result = await checkout.create({
        productId,
        userId,
        subtotal,
        discount,
        tax,
        city,
        address,
        status,
      });
      await user_product.destroy({
        where: { user_product_id },
      });
      //tinggal masukin logika buat update stock berdasarkan productId
      res.status(201).json(result);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  static async findCheckOut(req, res) {
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

  static async deleteCheckOut(req, res) {
    try {
      const id = +req.params.id;
      let result = await checkout.destroy({
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
    //untuk form update
  }

  static async updateCheckout(req, res) {
    try {
      const id = +req.params.id;
      const { productId, userId, subtotal, discount, tax, city, address, status } = req.body;
      let result = await checkout.update(
        {
          productId,
          userId,
          subtotal,
          discount,
          tax,
          city,
          address,
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

module.exports = CheckOutController;
