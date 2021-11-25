const category = require("express").Router();
const CategoryController = require("../controllers/CategoryController");
const { authentication } = require("../middlewares/auth");

category.get("/", authentication, CategoryController.getCategory);
category.get("/add", authentication, CategoryController.addForm);
category.post("/add", authentication, CategoryController.addCategory);
category.post("/:name", authentication, CategoryController.findByName);
category.get("/delete/:id", authentication, CategoryController.deleteCategory);
category.get("/update/:id", authentication, CategoryController.updateform);
category.post("/update/:id", authentication, CategoryController.updateCategory);

module.exports = category;
