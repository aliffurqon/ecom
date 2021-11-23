const user = require('express').Router()
const UserController = require('../controllers/UserController')

user.get('/all', UserController.getUserAll);
user.post('/login', UserController.login);
user.post('/register', UserController.register);

module.exports = user