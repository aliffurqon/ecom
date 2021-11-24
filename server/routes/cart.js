const cart = require("express").Router();
const CartController = require("../controllers/CartController");
const { authentication } = require("../middlewares/auth");

cart.get("/", authentication, CartController.getCart);
cart.post("/add", authentication, CartController.addCart);
cart.post("/:name", authentication, CartController.findCart);
cart.get("/delete/:id", authentication, CartController.deleteCart);
cart.get("/edit/:id", authentication, CartController.editCart);
cart.get("/:name", authentication, CartController.buyCart);

module.exports = cart;
