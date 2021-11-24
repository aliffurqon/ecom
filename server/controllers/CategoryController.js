const { category } = require("../models");

class CategoryController {
  static async getCategory(req, res) {
    try {
      // const { id } = req.userData;
      let categorys = await category.findAll();

      res.status(200).json(categorys);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  static async addCategory(req, res) {
    try {
      const { category_name } = req.body;

      let result = await category.create({
        category_name,
      });
      res.status(201).json(result);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  static async findByName(req, res) {
    try {
      const name = req.params.category_name;
      let result = await category.findAll({
        include: [user],
        where: { name },
      });
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async deleteCategory(req, res) {
    try {
      const id = +req.params.id;

      let result = await category.destroy({
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

module.exports = CategoryController;