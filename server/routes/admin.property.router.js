// The requirements
const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');


router.get('/', rejectUnauthenticated, (req, res) => {
    if (req.isAuthenticated() && req.user.user_type == 1) { // this is to check if the user is an admin
        console.log('req.user:', req.user);
        let queryString = `SELECT "property"."id", "active", "address", "unit_number", "state", "city", "zip_code", "property_type",
        "net_operating_income", "gross_income", "gross_expense", "desired_price", "user"."username", "user"."first_name", "user"."last_name"
        FROM "property" JOIN "user" ON "property"."user_id"= "user"."id" WHERE "active" = 'TRUE';`;
        pool.query(queryString)
            .then(results => {
                res.send(results.rows);
            }).catch(error => {
                console.log(error);
                res.sendStatus(500);
            })
    } else {
        req.sendStatus(403)
    }
});
// Gets the list of properties on the admin page and joins it with the user.

router.get('/history/', rejectUnauthenticated, (req, res) => {
    if (req.isAuthenticated() && req.user.user_type == 1) { // this is to check if the user is an admin
        let queryString = `SELECT "property"."id", "active", "address", "unit_number", "state", "city", "zip_code", "property_type",
        "net_operating_income", "gross_income", "gross_expense", "desired_price", "user"."username", "user"."first_name", "user"."last_name"
        FROM "property" JOIN "user" ON "property"."user_id"= "user"."id" WHERE "active" = 'FALSE';`;
        pool.query(queryString)
            .then(results => {
                res.send(results.rows);
            }).catch(error => {
                console.log(error);
                res.sendStatus(500);
            })
    } else {
        req.sendStatus(403)
    }
});
// Gets the history of all the listings within the site after things have been closed on. 

router.put('/:id', rejectUnauthenticated, (req, res) => {
    if (req.isAuthenticated() && req.user.user_type == 1) { // this is to check if the user is an admin
        console.log('req.user:', req.user);
        let queryString = `UPDATE "property" SET "active" = 'FALSE' WHERE "id" = $1`;
        pool.query(queryString, [req.params.id])
            .then(() => res.sendStatus(200))
            .catch(() => res.sendStatus(500));
    } else {
        req.sendStatus(403)
    }
});
// Removes the active properties and places them into the history. 

router.delete('/delete/:id', rejectUnauthenticated, async (req, res) => {
    console.log("in deleteAdminProperty route", req.params.id);
    const propertyId = req.params.id;
    const connection = await pool.connect();
    if (req.isAuthenticated() && req.user.user_type == 1) { // this is to check if the user is an admin
        try {
            await connection.query('BEGIN');
            const queryString = `DELETE FROM "interest" WHERE "property_id" = $1`;
            await connection.query(queryString, [propertyId]);
            const queryString2 = `DELETE FROM "favorite" WHERE "property_id: =$1`;
            await connection.query(queryString2, [propertyId]);
            const queryString3 = `DELETE FROM "property" WHERE "id" = $1`;
            await connection.query(queryString3, [propertyId]);
            await connection.query('COMMIT');
            res.sendStatus(200);
        } catch (error) {
            await connection.query('ROLLBACK');
            sendStatus(500);
        } finally {
            connection.release();
        }
    } else {
        req.sendStatus(403)
    }
});
// This transaction makes sure everything related to a property is deleted if it is removed from the site. 

module.exports = router;