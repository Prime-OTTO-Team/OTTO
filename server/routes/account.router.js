// Requirements for Routes
const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/property', (req, res) => {
    const userId = req.user.id;
    let queryString = `SELECT * FROM "property" WHERE "user_id" = $1 AND "active"= 'TRUE' ORDER BY "id" ASC`;
    pool.query(queryString, [userId])
        .then(results => {
            res.send(results.rows);
        }).catch(error => {
            console.log(error);
            res.sendStatus(500);
        });
});
// Gets all the listed properties a user has for the Account Page of the App. 

router.get('/favorite', (req, res) => {
    const userId = req.user.id;
    let queryString = `SELECT "favorite"."id", "favorite"."user_id", "active", "address", "unit_number", "state", "city", "zip_code", "property_type",
     "net_operating_income", "gross_income", "gross_expense", "desired_price" FROM "property" JOIN "favorite" ON "property"."id"="favorite"."property_id" 
     JOIN "user" ON "favorite"."user_id"= "user"."id" WHERE "user"."id"=$1 ORDER BY "id" ASC`;
     // Joins the favorite, property, and user tables together based on the users ID
    pool.query(queryString, [userId])
        .then(results => {
            res.send(results.rows);
        }).catch(error => {
            console.log(error);
            res.sendStatus(500);
        });
});
// Gets all favorited properties by users on their account page.

router.delete('/interest/:id', (req, res) => {
// the route is named interest instead of favorite by mistake
    let queryString = `DELETE FROM "favorite" WHERE "id" = $1`;
    pool.query(queryString, [req.params.id])
        .then(() => res.sendStatus(200))
        .catch(() => res.sendStatus(500));
});
// This route deletes any favorites from the account page.

router.put('/property/:id', (req, res) => {
    console.log("in updateAccountProperty route", req.params);
    let queryString = `UPDATE "property" SET "active" = 'FALSE' WHERE "id" = $1`;
    pool.query(queryString, [req.params.id])
        .then(() => res.sendStatus(200))
        .catch(() => res.sendStatus(500));
});
// This route is used to set properites to inactive on the account page. 

module.exports = router;