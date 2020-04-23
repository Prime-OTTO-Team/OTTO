const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
console.log('process.env.GOOGLE_API_KEY: ', process.env.GOOGLE_API_KEY);

router.post('/', async (req, res) => {
    const userId = req.user.id;
    const propertyId = Number(req.query.propertyId);
    console.log('user.id: ', userId);
    console.log('propertyId: ', propertyId);
    if (userId === undefined || propertyId === undefined) {
        res.sendStatus(401);
    }
    const checkQuery = `SELECT * FROM interest WHERE "user_id" = $1 AND property_id = $2;`;
    //check to see if a specific property is already favorited
    const checkResults = await pool.query(checkQuery, [userId, propertyId]);
    console.log('checkResults.rowCount: ', checkResults.rowCount);
    if (checkResults.rowCount === 0) {
        console.log('checkResults.rowCount === 0');
        //if not favorited, run query to post
        try {
            const postQuery = `INSERT INTO interest ("user_id", "property_id") VALUES ($1, $2)`
            await pool.query(postQuery, [userId, propertyId]);
            res.sendStatus(200);
        } catch (error) {
            console.log('post favorite error', error);
            res.sendStatus(500);
        }
    } else {
        console.log('checkResults.rowCount != 0');
        res.sendStatus(400);
    }
});

router.get('/favoritesAndInterests', async (req, res) => {
    const userId = req.user.id;
    const propertyId = Number(req.query.propertyId);
    console.log('user.id: ', userId);
    console.log('propertyId: ', propertyId);
    if (userId === undefined || propertyId === undefined) {
        return res.sendStatus(401);
    }
    try {
        const favoritesQuery = `SELECT * FROM favorite WHERE "user_id" = $1;`;
        const interestsQuery = `SELECT * FROM interest WHERE "user_id" = $1;`;
        //check to see if a specific property is already favorited
        const favorites = await pool.query(favoritesQuery, [userId]);
        const interests = await pool.query(interestsQuery, [userId]);
        res.send({ interests: interests.rows, favorites: favorites.rows});
    } catch (error) {
        console.log('post favorite error', error);
        res.sendStatus(500);
    }
});

module.exports = router;
