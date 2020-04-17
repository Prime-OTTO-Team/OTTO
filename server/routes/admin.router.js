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
router.get('/approved/user', (req, res) => {
    console.log("in getAdminapprovedUser route");
    let queryString = `SELECT "id", "username", "first_name", "last_name", "user_type", "phone_number" FROM "user" WHERE "approved_user" = 'TRUE'`;
    pool.query(queryString)
        .then(results => {
            res.send(results.rows);
        }).catch(error => {
            console.log(error);
            res.sendStatus(500);
        });
});
router.get('/unapproved/user', (req, res) => {
    console.log("in getAdminUnapprovedUser route");
    let queryString = `SELECT "id", "username", "first_name", "last_name", "user_type", "phone_number" FROM "user" WHERE "approved_user" = 'FALSE'`;
    pool.query(queryString)
        .then(results => {
            res.send(results.rows);
        }).catch(error => {
            console.log(error);
            res.sendStatus(500);
        });
});
router.put('/approve/:id', (req, res) => {
    const updateUser = req.params.id;
    console.log('in adminRouter Put', updateUser);
    const queryText = `UPDATE "user" SET "approved_user" = 'TRUE' WHERE "id"=$1`;
    pool.query(queryText, [updateUser])
        .then(() => {
            res.sendStatus(200)
        }).catch(error => {
            console.log(error);
            res.sendStatus(500)
        });
});

module.exports = router;