const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require('axios');


console.log('process.env.GOOGLE_API_KEY: ', process.env.GOOGLE_API_KEY);
router.post('/', async(req, res) => {
    console.log('in postProperty route', req.body)
    const newProperty = req.body;
    const geocodeResponse = await axios.get(
        'https://maps.googleapis.com/maps/api/geocode/json', {
            params: {
                address: `${newProperty.address + ' ' + newProperty.unitNumber + ' ' + newProperty.city + ' ' + newProperty.state + ' ' + newProperty.zipCode}` ,
                key: 'AIzaSyCHElb_DfSY05GT5sQL4K_8PU8fWIE--xo'
            }
        }
    )
    const location = geocodeResponse.data.results[0].geometry.location;
    console.log('geocodeResponse.data.results: ', geocodeResponse.data.results[0].geometry.location);

    
    const queryString = `INSERT INTO "property" (user_id, address, unit_number, state, city, zip_code, property_type, 
        net_operating_income, gross_income, gross_expense, desired_price, latitude, longitude) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)`;
    pool.query(queryString, [newProperty.userId, newProperty.address, newProperty.unitNumber, newProperty.state, newProperty.city, newProperty.zipCode, 
        newProperty.propertyType, newProperty.netOperatingIncome, newProperty.grossIncome, newProperty.grossExpense, newProperty.desiredPrice, location.lat, location.lng])
        .then(() => res.sendStatus(201))
        .catch(() => res.sendStatus(500));
});

router.put('/edit', (req, res) => {
    const updateProperty = req.body;
    console.log(' in updateRouter', updateProperty);
    const queryString = `UPDATE "property" SET (user_id, address, unit_number, state, city, zip_code, property_type, 
        net_operating_income, gross_income, gross_expense, desired_price) = ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) WHERE "id"=$12`;
    pool.query(queryString, [updateProperty.userId, updateProperty.address, updateProperty.unit_number, updateProperty.state, updateProperty.city, updateProperty.zipCode, 
        updateProperty.propertyType, updateProperty.netOperatingIncome, updateProperty.grossIncome, updateProperty.grossExpense, updateProperty.desiredPice, updateProperty.propertyId])
})
module.exports = router;
