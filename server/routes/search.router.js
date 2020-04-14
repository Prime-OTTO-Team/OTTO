const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

let queryString = 'SELECT * FROM "property" WHERE';

function buildQueryString(array) {
    for (let i = 0; i < array.length; i++) {
        if ([i] == array.length - 1) {
            queryString += ` "property"."${array[i].category}" iLIKE '%${array[i].search}%';`;
        }
        else {
            queryString += ` "property"."${array[i].category}" iLIKE '%${array[i].search}%' AND`;
        }
    }
}

router.post('/', (req, res) => {




});

module.exports = router;