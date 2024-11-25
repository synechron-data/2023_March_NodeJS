const express = require('express');
const { isAuthenticated } = require('../controllers/account-controller');
const empCtrl = require('../controllers/employees-controller');

const router = express.Router();

router.use(isAuthenticated);

router.get("/", empCtrl.index);

module.exports = router;