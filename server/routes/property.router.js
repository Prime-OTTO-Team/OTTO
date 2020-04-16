const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.post('/', (req, res) => {
    console.log('in postProperty route', req.body)
    const newProperty = req.body;
    const queryText = `INSERT INTO "property" (user_id, address, unit_number, state, city, zip_code, property_type, 
        net_operating_income, gross_income, gross_expense, desired_price) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)`;
    pool.query(queryText, [newProperty.userId, newProperty.address, newProperty.unitNumber, newProperty.state, newProperty.city, newProperty.zipCode, 
        newProperty.propertyType, newProperty.netOperatingIncome, newProperty.grossIncome, newProperty.grossExpense, newProperty.desiredPrice,])
        .then(() => res.sendStatus(201))
        .catch(() => res.sendStatus(500));
});
module.exports = router;

router.put('/approve/:id', (req, res) => {
    const updateUser = req.params.id;
    console.log('in adminRouter Put', updateUser);
    const queryText = `UPDATE "user" SET "approved_user" = 'TRUE' WHERE "id"=$1`;
    pool.query(queryText, [updateUser])
        .then(() => {
            res.sendStatus(200)
        }).catch(error => {
            console.log(error);
            res.sendStatus(500)
        });
});