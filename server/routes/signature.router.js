const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require('axios');
var nodemailer = require('nodemailer');

router.post('/', (req, res) => {
console.log('signature info', req.body);

});

module.exports = router;