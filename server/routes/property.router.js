const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require('axios');


console.log('process.env.GOOGLE_API_KEY: ', process.env.GOOGLE_API_KEY);
router.post('/', async (req, res) => {
    const newProperty = req.body;
    const geocodeResponse = await axios.get(
        'https://maps.googleapis.com/maps/api/geocode/json', {
        params: {
            address: `${newProperty.address + ' ' + newProperty.unitNumber + ' ' + newProperty.city + ' ' + newProperty.state + ' ' + newProperty.zipCode}`,
            key: 'AIzaSyCHElb_DfSY05GT5sQL4K_8PU8fWIE--xo'
        }
    }
    )
    const location = geocodeResponse.data.results[0].geometry.location;
    console.log('geocodeResponse.data.results: ', geocodeResponse.data.results[0].geometry.location);



    const queryText = `INSERT INTO "property" (user_id, address, unit_number, state, city, zip_code, property_type, 
        net_operating_income, gross_income, gross_expense, desired_price, latitude, longitude) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)`;
    pool.query(queryText, [newProperty.userId, newProperty.address, newProperty.unitNumber, newProperty.state, newProperty.city, newProperty.zipCode,
    newProperty.propertyType, newProperty.netOperatingIncome, newProperty.grossIncome, newProperty.grossExpense, newProperty.desiredPrice, location.lat, location.lng])

        .then(() => res.sendStatus(201))
        .catch(() => res.sendStatus(500));
});


router.put('/approve/:id', (req, res) => {
    const updateUser = req.params.id;
    const queryText = `UPDATE "user" SET "approved_user" = 'TRUE' WHERE "id"=$1`;
    pool.query(queryText, [updateUser])
        .then(() => {
            res.sendStatus(200)
        }).catch(error => {
            console.log(error);
            res.sendStatus(500)
        });
});

router.get('/public', async (req, res) => {
    const results = await pool.query(`
    SELECT "id", "active", "city", "state", "zip_code", "property_type", "net_operating_income", "gross_income", "gross_expense", "desired_price", ROUND("latitude", 2) AS "latitude", ROUND("longitude", 2) AS "longitude"
    FROM property
    WHERE active = true;`)
    try {
        res.send(results.rows)
    } catch (error) {
        console.log(error);
        res.sendStatus(500)
    }
});


module.exports = router;
