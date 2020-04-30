// Requirements
const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
console.log('process.env.GOOGLE_API_KEY: ', process.env.GOOGLE_API_KEY);

router.post('/', async (req, res) => {
    const userId = req.user.id;
    const propertyId = Number(req.query.propertyId);
    if (userId === undefined || propertyId === undefined) {
        res.sendStatus(401);
    }
    const checkQuery = `SELECT * FROM favorite WHERE "user_id" = $1 AND property_id = $2;`;
    //check to see if a specific property is already favorited
    const checkResults = await pool.query(checkQuery, [userId, propertyId]);
    if (checkResults.rowCount === 0) {
        //if not favorited, run query to post
        try {
            const postQuery = `INSERT INTO favorite ("user_id", "property_id") VALUES ($1, $2)`
            await pool.query(postQuery, [userId, propertyId]);
            res.sendStatus(200);
        } catch (error) {
            console.log('post favorite error', error);
            res.sendStatus(500);
        }
    } else {
        res.sendStatus(400);
    }
});
// This adds a favorite to the database to be displayed on the account page. 

module.exports = router;
