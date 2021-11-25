const cart = require("express").Router();
const CartController = require("../controllers/CartController");
const { authentication } = require("../middlewares/auth");

cart.get("/", authentication, CartController.getCart);
cart.get("/add", authentication, CartController.addForm);
cart.post("/add", authentication, CartController.addCart);
cart.post("/:name", authentication, CartController.findCart);
cart.get("/delete/:id", authentication, CartController.deleteCart);
cart.get("/update/:id", authentication, CartController.updateForm);
cart.post("/update/:id", authentication, CartController.updateCart);

module.exports = cart;
