const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');


// router.get('/approved/', (req, res) => {
//     console.log("in getAdminapprovedUser route");
//     let queryString = `SELECT "id", "username", "first_name", "last_name", "user_type", "phone_number" FROM "user" WHERE "approved_user" = 'TRUE'`;
//     pool.query(queryString)
//         .then(results => {
//             res.send(results.rows);
//         }).catch(error => {
//             console.log(error);
//             res.sendStatus(500);
//         });
// });

router.get('/approved/', rejectUnauthenticated, (req, res) => {
    console.log("in getAdminapprovedUser route");
    if (req.isAuthenticated() && req.user.user_type == 1) {
        console.log('req.user:', req.user);
        let queryString = `SELECT "id", "username", "first_name", "last_name", "user_type", "phone_number" FROM "user" WHERE "approved_user" = 'TRUE'`;
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

router.get('/unapproved/', rejectUnauthenticated, (req, res) => {
    console.log("in getAdminUnapprovedUser route");
    if (req.isAuthenticated() && req.user.user_type == 1) {
        console.log('req.user:', req.user);
        let queryString = `SELECT "id", "username", "first_name", "last_name", "user_type", "phone_number" FROM "user" WHERE "approved_user" = 'FALSE'`;
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

router.put('/approve/:id', rejectUnauthenticated, (req, res) => {
    const updateUser = req.params.id;
    console.log('in adminRouter Put for approving user', updateUser);
    if (req.isAuthenticated() && req.user.user_type == 1) {
        console.log('req.user:', req.user);
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

router.put('/unapprove/:id', rejectUnauthenticated, (req, res) => {
    const updateUser = req.params.id;
    console.log('in adminRouter Put for unapproving user', updateUser);
    if (req.isAuthenticated() && req.user.user_type == 1) {
        console.log('req.user:', req.user);
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

router.delete('/delete/:id', rejectUnauthenticated, async (req, res) => {
    console.log("in deleteAdminUser route", req.params.id);
    const userId = req.params.id;
    const connection = await pool.connect();
    if (req.isAuthenticated() && req.user.user_type == 1) {
        console.log('req.user:', req.user);
        try {
            await connection.query('BEGIN');
            const queryString = `DELETE FROM "interest" WHERE "user_id" = $1`;
            await connection.query(queryString, [userId]);
            const queryString2 = `DELETE FROM "property" WHERE "user_id" = $1`;
            await connection.query(queryString2, [userId]);
            const queryString3 = `DELETE FROM "user" WHERE "id" = $1`;
            await connection.query(queryString3, [userId]);
            await connection.query('COMMIT');
            res.sendStatus(200);
            console.log('end of Commit');
        } catch (error) {
            await connection.query('ROLLBACK');
            console.log('error in deleting history', error);
            sendStatus(500);
        } finally {
            connection.release();
            console.log('released');
        }
    } else {
        req.sendStatus(403)
    }
});

module.exports = router;
