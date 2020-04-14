const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
    console.log("in getAccount route");
    let queryString = `SELECT * FROM "property" WHERE "user_id" = 1`;
    pool.query(queryString)
    .then(results => {
        res.send(results.rows);
    }).catch(error => {
        console.log(error);
        res.sendStatus(500);
    });
});

router.get('/', (req, res) => {
    console.log("in getAccount route");
    let queryString = `SELECT * FROM "property" WHERE "user_id" = 1`;
    pool.query(queryString)
    .then(results => {
        res.send(results.rows);
    }).catch(error => {
        console.log(error);
        res.sendStatus(500);
    });
});

router.post('/', (req, res) => {

});

module.exports = router;

