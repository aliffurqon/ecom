const product = require("express").Router();
const ProductController = require("../controllers/ProductController");
const { authentication } = require("../middlewares/auth");

product.get("/", authentication, ProductController.getProduct);
product.post("/add", authentication, ProductController.addProduct);
product.post("/:name", authentication, ProductController.findByCategoryId);
product.get("/delete/:id", authentication, ProductController.deleteProduct);
product.get("/edit/:id", authentication, ProductController.editProduct);
product.get("/:name", authentication, ProductController.buyProduct);

module.exports = product;
