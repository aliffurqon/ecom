const product = require("express").Router();
const ProductController = require("../controllers/ProductController");
const { authentication } = require("../middlewares/auth");

product.get("/", authentication, ProductController.getProduct);
product.get("/add", authentication, ProductController.addForm);
product.post("/add", authentication, ProductController.addProduct);
product.post("/:name", authentication, ProductController.findByCategoryId);
product.get("/delete/:id", authentication, ProductController.deleteProduct);
product.get("update/:id", authentication, ProductController.updateForm);
product.post("update/:id", authentication, ProductController.updateProduct);

module.exports = product;
