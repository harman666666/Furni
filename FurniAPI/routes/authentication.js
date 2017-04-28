"use strict";
var express = require('express');
var router = express.Router();
var users_server_controller_1 = require("../controllers/users.server.controller");
var userController = new users_server_controller_1.UserController();
/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});
/*
Sample JSon

{
"username": "harman666666",
"password":"xyzxyz",
}

*/
router.post('/', function (req, res) {
    userController.login(req, res);
});
module.exports = router;
