const checkout = require("express").Router();
const CheckOutController = require("../controllers/CheckOutController");
const { authentication } = require("../middlewares/auth");

checkout.get("/", authentication, CheckOutController.getCheckOut);
checkout.post("/add", authentication, CheckOutController.addCheckOut);
checkout.post("/:name", authentication, CheckOutController.findCheckOut);
checkout.get("/delete/:id", authentication, CheckOutController.deleteCheckOut);
checkout.get("/edit/:id", authentication, CheckOutController.editCheckOut);
checkout.get("/:name", authentication, CheckOutController.buyCheckOut);

module.exports = checkout;
