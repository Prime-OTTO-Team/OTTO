const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/property/', (req, res) => {
    console.log("in getAdminProperty route");
    let queryString = `SELECT * FROM "property"`;
    pool.query(queryString)
    .then(results => {
        res.send(results.rows);
    }).catch(error => {
        console.log(error);
        res.sendStatus(500);
    });
});

router.get('/user', (req, res) => {
    console.log("in getAdminUser route");
    let queryString = `SELECT "username", "first_name", "last_name", "user_type", "phone_number", "approved_user" FROM "user"`;
    pool.query(queryString)
    .then(results => {
        res.send(results.rows);
    }).catch(error => {
        console.log(error);
        res.sendStatus(500);
    });
});

module.exports = router;