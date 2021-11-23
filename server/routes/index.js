const { Router } = require("express");
const route = Router();

route.get("/", (req, res) => {
  res.json({
    message: "Home Page",
  });
});

const product = require("./product");
const user = require("./user");
// const order = require("./order")
route.use("/products", product);
route.use("/users", user);
// route.use("/orders",order);


module.exports = route;