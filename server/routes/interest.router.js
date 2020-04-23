const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
console.log('process.env.GOOGLE_API_KEY: ', process.env.GOOGLE_API_KEY);

//not currently being used
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
            const postQuery = `INSERT INTO favorite ("user_id", "property_id") VALUES ($1, $2)`
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
    console.log('logging req.user', req.user);
    const userId = req.user.id;
    const propertyId = Number(req.query.propertyId);
    console.log('user.id: ', userId);
    console.log('propertyId: ', propertyId);
    if (userId === undefined || propertyId === undefined) {
        return res.sendStatus(401);
    }
    try {
        const favoritesQuery = `SELECT "favorite"."id", "favorite"."user_id", "active", "address", "unit_number", "state", "city", "zip_code", "property_type",
     "net_operating_income", "gross_income", "gross_expense", "desired_price" FROM "property" JOIN "favorite" ON "property"."id"="favorite"."property_id" 
     JOIN "user" ON "favorite"."user_id"= "user"."id" WHERE "user"."id"=$1 ORDER BY "id" ASC`;
        const interestsQuery = `SELECT "interest"."id", "interest"."user_id", "active", "address", "unit_number", "state", "city", "zip_code", "property_type",
     "net_operating_income", "gross_income", "gross_expense", "desired_price" FROM "property" JOIN "interest" ON "property"."id"="interest"."property_id" 
     JOIN "user" ON "interest"."user_id"= "user"."id" WHERE "user"."id"=$1 ORDER BY "id" ASC`;
        //check to see if a specific property is already favorited
        const favorites = await pool.query(favoritesQuery, [userId]);
        const interests = await pool.query(interestsQuery, [userId]);
        res.send({ interests: interests.rows, favorites: favorites.rows });
    } catch (error) {
        console.log('get favorite error', error);
        res.sendStatus(500);
    }
});

module.exports = router;
