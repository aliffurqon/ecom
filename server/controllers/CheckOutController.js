const { checkout, user_product, user } = require("../models");

class CheckOutController {
  static async getCheckOut(req, res) {
    try {
      const { id } = req.userData;
      let result = await checkout.findAll({
        where: {
          userId: id,
        },
        // include: [user, category],
        include: [user_product, user],
      });
      // console.log(result);
      res.status(200).json(result);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  static async addCheckOut(req, res) {
    try {
      const { productId, userId, status } = req.body;
      let result = await checkout.create({
        productId,
        userId,
        status,
      });
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

  static editCheckOut(req, res) {}
  static buyCheckOut(req, res) {}
}

module.exports = CheckOutController;
