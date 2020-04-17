const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/property/', (req, res) => {
    console.log("in getAdminProperty route");
    let queryString = `SELECT * FROM "property" WHERE "active" = 'TRUE'`;
    pool.query(queryString)
        .then(results => {
            res.send(results.rows);
        }).catch(error => {
            console.log(error);
            res.sendStatus(500);
        });
});
router.get('/history/', (req, res) => {
    console.log("in getAdminPropertyHistory route");
    let queryString = `SELECT * FROM "property" WHERE "active" = 'FALSE'`;
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
    console.log('in adminRouter Put for approving user', updateUser);
    const queryText = `UPDATE "user" SET "approved_user" = 'TRUE' WHERE "id"=$1`;
    pool.query(queryText, [updateUser])
        .then(() => {
            res.sendStatus(200)
        }).catch(error => {
            console.log(error);
            res.sendStatus(500)
        });
});
router.put('/unapprove/:id', (req, res) => {
    const updateUser = req.params.id;
    console.log('in adminRouter Put for unapproving user', updateUser);
    const queryText = `UPDATE "user" SET "approved_user" = 'FALSE' WHERE "id"=$1`;
    pool.query(queryText, [updateUser])
        .then(() => {
            res.sendStatus(200)
        }).catch(error => {
            console.log(error);
            res.sendStatus(500)
        });
});
router.delete('/delete/:id', (req, res) => {
    console.log("in deleteUser route", req.params);
    // let queryString = `DELETE FROM "user" WHERE "id" = $1`;
    // pool.query(queryString, [req.params.id])
    //     .then(() => res.sendStatus(200))
    //     .catch(() => res.sendStatus(500));
});
module.exports = router;