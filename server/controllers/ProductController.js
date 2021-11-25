const { product, user, category } = require("../models");

class ProductController {
  static async getProduct(req, res) {
    try {
      // const { id } = req.userData;
      let products = await product.findAll({
        // where: {
        //   userId: id,
        // },
        // include: [user, category],
        include: [category],
      });

      res.status(200).json(products);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  static async addForm() {
    //fungsi untik mengarahkan ke form add
  }

  static async addProduct(req, res) {
    try {
      const { name, desc, price, stock, weight, categoryId, total_sold, rating, views } = req.body;
      let result = await product.create({
        name,
        desc,
        price,
        stock,
        weight,
        categoryId,
        total_sold,
        rating,
        views,
      });
      res.status(201).json(result);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  static async findByCategoryId(req, res) {
    try {
      const id = req.params.categoryId;
      let result = await category.findAll({
        include: [category],
        where: { id },
      });
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async deleteProduct(req, res) {
    try {
      const id = +req.params.id;
      let result = await product.destroy({
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
    //fungsi untuk mengarahkan ke form update
  }

  static async updateProduct(req, res) {
    try {
      const id = +req.params.id;
      const { name, desc, price, stock, weight, categoryId, total_sold, rating, views } = req.body;
      let result = await product.update(
        {
          name,
          desc,
          price,
          stock,
          weight,
          categoryId,
          total_sold,
          rating,
          views,
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

module.exports = ProductController;
