const express = require('express');
const accCtrl = require('../controllers/account-controller');

const router = express.Router();

module.exports = function (passport) {
    router.get("/", function (req, res) {
        res.redirect('account/login');
    });

    router.get("/login", accCtrl.login_get);

    router.post("/login", accCtrl.login_post(passport));

    return router;
};