const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');


router.get('/', rejectUnauthenticated, (req, res) => {
    console.log("in getAdminProperty route");
    if (req.isAuthenticated() && req.user.user_type == 1) {
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

router.get('/history/', rejectUnauthenticated, (req, res) => {
    console.log("in getAdminPropertyHistory route");
    if (req.isAuthenticated() && req.user.user_type == 1) {
        console.log('req.user:', req.user);
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

router.put('/:id', rejectUnauthenticated, (req, res) => {
    console.log("in updateAdminProperty route", req.params);
    if (req.isAuthenticated() && req.user.user_type == 1) {
        console.log('req.user:', req.user);
        let queryString = `UPDATE "property" SET "active" = 'FALSE' WHERE "id" = $1`;
        pool.query(queryString, [req.params.id])
            .then(() => res.sendStatus(200))
            .catch(() => res.sendStatus(500));
    } else {
        req.sendStatus(403)
    }
});

router.delete('/delete/:id', rejectUnauthenticated, async (req, res) => {
    console.log("in deleteAdminProperty route", req.params.id);
    const propertyId = req.params.id;
    const connection = await pool.connect();
    if (req.isAuthenticated() && req.user.user_type == 1) {
        console.log('req.user:', req.user);
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


// router.post('/specific'), async (req, res) => {
//     const toId = req.body.toId;
//     const fromId = req.body.fromId;
//     const amount = req.body.amount;
//     console.log(`Transfer ${amount} from account ${fromId} to acct ${toId}`);
//     const connection = await pool.connect();
//     try {
//         await connection.query('BEGIN');
//         const sqlText = `INSERT INTO register (acct_id, amount) VALUES ($1, $2)`;
//         await connection.query(sqlText, [fromId, -amount]);
//         await connection.query(sqlText, [toId, amount]);
//         await connection.query('COMMIT');
//         res.sendStatus(200);
//     } catch (error) {
//         await connection.query('ROLLBACK');
//         console.log("error", error);
//         sendStatus(500);
//     } finally {
//         connection.release();
//     }
// } 
