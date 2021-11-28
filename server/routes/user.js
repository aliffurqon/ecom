const user = require("express").Router();
const UserController = require("../controllers/UserController");

user.get("/all", UserController.getUserAll);
user.post("/login", UserController.login);
user.get("/register", UserController.registerForm);
user.post("/register", UserController.register);
user.get("/update/:id", UserController.findById);
user.post("/update/:id", UserController.updateUser);
user.get("/delete/:id", UserController.deleteUser);

module.exports = user;
