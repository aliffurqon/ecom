const checkout = require("express").Router();
const CheckOutController = require("../controllers/CheckOutController");
const { authentication } = require("../middlewares/auth");

checkout.get("/", authentication, CheckOutController.getCheckOut);
checkout.get("/add", authentication, CheckOutController.addForm);
checkout.post("/add", authentication, CheckOutController.addCheckOut);
checkout.post("/:name", authentication, CheckOutController.findCheckOut);
checkout.get("/delete/:id", authentication, CheckOutController.deleteCheckOut);
checkout.get("/update/:id", authentication, CheckOutController.updateForm);
checkout.post("/update/:id", authentication, CheckOutController.updateCheckout);

module.exports = checkout;
