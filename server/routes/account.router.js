const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');


router.get('/property', rejectUnauthenticated, (req, res) => {
    const userId = req.user.id;
    console.log("in getAccount/porperty route with userId", userId);
    let queryString = `SELECT * FROM "property" WHERE "user_id" = $1 AND "active"= 'TRUE' ORDER BY "id" ASC`;
    pool.query(queryString, [userId])
        .then(results => {
            res.send(results.rows);
        }).catch(error => {
            console.log(error);
            res.sendStatus(500);
        });
});
router.get('/favorite', rejectUnauthenticated, (req, res) => {
    const userId = req.user.id;
    console.log("in getAccount/favorite route with userId", userId);
    let queryString = `SELECT "favorite"."id", "favorite"."user_id", "active", "address", "unit_number", "state", "city", "zip_code", "property_type",
     "net_operating_income", "gross_income", "gross_expense", "desired_price" FROM "property" JOIN "favorite" ON "property"."id"="favorite"."property_id" 
     JOIN "user" ON "favorite"."user_id"= "user"."id" WHERE "user"."id"=$1 ORDER BY "id" ASC`;
    pool.query(queryString, [userId])
        .then(results => {
            res.send(results.rows);
        }).catch(error => {
            console.log(error);
            res.sendStatus(500);
        });
});
router.get('/interest', rejectUnauthenticated, (req, res) => {
    const userId = req.user.id;
    console.log("in getAccountInterests route with userId", userId);
    let queryString = `SELECT "interest"."id", "interest"."user_id", "active", "address", "unit_number", "state", "city", "zip_code", "property_type",
     "net_operating_income", "gross_income", "gross_expense", "desired_price" FROM "property" JOIN "interest" ON "property"."id"="interest"."property_id" 
     JOIN "user" ON "interest"."user_id"= "user"."id" WHERE "user"."id"=$1 ORDER BY "id" ASC`;
    pool.query(queryString, [userId])
        .then(results => {
            res.send(results.rows);
        }).catch(error => {
            console.log(error);
            res.sendStatus(500);
        });
});

router.delete('/interest/:id', rejectUnauthenticated, (req, res) => {
    console.log("in deleteAccountInterest route", req.params);
    let queryString = `DELETE FROM "favorite" WHERE "id" = $1`;
    pool.query(queryString, [req.params.id])
        .then(() => res.sendStatus(200))
        .catch(() => res.sendStatus(500));
});

router.put('/property/:id', rejectUnauthenticated, (req, res) => {
    console.log("in updateAccountProperty route", req.params);
    let queryString = `UPDATE "property" SET "active" = 'FALSE' WHERE "id" = $1`;
    pool.query(queryString, [req.params.id])
        .then(() => res.sendStatus(200))
        .catch(() => res.sendStatus(500));
});




module.exports = router;

