// Requirements
const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware'); // This rejects any unlogged in users from accessing site. 

router.get('/approved/', rejectUnauthenticated, (req, res) => {
    if (req.isAuthenticated() && req.user.user_type == 1) { // this is to check if the user is an admin
        let queryString = `SELECT "id", "username", "first_name", "last_name", "user_type", "phone_number" FROM "user" WHERE "approved_user" = 'TRUE' ORDER BY "first_name", "user_type" ASC;`;
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
// Gets all approved users to be displayed on Admin Users page

router.get('/unapproved/', rejectUnauthenticated, (req, res) => {
    if (req.isAuthenticated() && req.user.user_type == 1) { // this is to check if the user is an admin
        let queryString = `SELECT "id", "username", "first_name", "last_name", "user_type", "phone_number" FROM "user" WHERE "approved_user" = 'FALSE' ORDER BY "first_name", "user_type" ASC;`;
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
// Gets all unapproved users to be displayed on Admin Users page. These users are ones that have just signed up. 

router.put('/approve/:id', rejectUnauthenticated, (req, res) => {
    const updateUser = req.params.id;
    if (req.isAuthenticated() && req.user.user_type == 1) { // this is to check if the user is an admin
        const queryText = `UPDATE "user" SET "approved_user" = 'TRUE' WHERE "id"=$1`;
        pool.query(queryText, [updateUser])
            .then(() => {
                res.sendStatus(200)
            }).catch(error => {
                console.log(error);
                res.sendStatus(500)
            })
    } else {
        req.sendStatus(403)
    }
});
// Sets the status of users to approved by updating a boolean in the database. 

router.put('/unapprove/:id', rejectUnauthenticated, (req, res) => {
    const updateUser = req.params.id;
    if (req.isAuthenticated() && req.user.user_type == 1) { // this is to check if the user is an admin
        const queryText = `UPDATE "user" SET "approved_user" = 'FALSE' WHERE "id"= $1`;
        pool.query(queryText, [updateUser])
            .then(() => {
                res.sendStatus(200)
            }).catch(error => {
                console.log(error);
                res.sendStatus(500)
            })
    } else {
        req.sendStatus(403)
    }
});
// Sets th status of users to unapproved by updating a boolean in the database. 

router.put('/approveAdmin/:id', rejectUnauthenticated, (req, res) => {
    const updateUser = req.params.id;
    if (req.isAuthenticated() && req.user.user_type == 1) {
        console.log('req.user:', req.user);
        const queryText = `UPDATE "user" SET "user_type" = 1 WHERE "id"=$1`;
        pool.query(queryText, [updateUser])
            .then(() => {
                res.sendStatus(200)
            }).catch(error => {
                console.log(error);
                res.sendStatus(500)
            })
    } else {
        req.sendStatus(403)
    }
});
// This route adds the ability to create a new admin

router.delete('/delete/:id', rejectUnauthenticated, async (req, res) => {

    const userId = req.params.id;
    const connection = await pool.connect();
    if (req.isAuthenticated() && req.user.user_type == 1) { // this is to check if the user is an admin
        console.log('req.user:', req.user);
        try {
            await connection.query('BEGIN'); // This is a SQL transaction that waits for everyting to finish before committing
            const queryString = `DELETE FROM "interest" WHERE "user_id" = $1`;
            await connection.query(queryString, [userId]);
            const queryString2 = `DELETE FROM "favorite" WHERE "user_id" = $1`;
            await connection.query(queryString2, [userId]);
            const queryString3 = `DELETE FROM "search" WHERE "user_id" = $1`;
            await connection.query(queryString3, [userId]);
            const queryString4 = `DELETE FROM "property" WHERE "user_id" = $1`;
            await connection.query(queryString4, [userId]);
            const queryString5 = `DELETE FROM "user" WHERE "id" = $1`;
            await connection.query(queryString5, [userId]);
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
// The SQL transaction makes sure everything related to a user is delted before deleting the user and rolls it back incase of failure. 

module.exports = router;