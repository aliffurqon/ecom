const category = require("express").Router();
const CategoryController = require("../controllers/CategoryController");
const { authentication } = require("../middlewares/auth");

category.get("/", authentication, CategoryController.getCategory);
category.post("/add", authentication, CategoryController.addCategory);
category.post("/:name", authentication, CategoryController.findByName);
category.get("/delete/:id", authentication, CategoryController.deleteCategory);

module.exports = category;
