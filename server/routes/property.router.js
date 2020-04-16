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

// userId: 1,
// address: '101 park',
// unitNumber: '1',
// city: 'pella',
// state: 'ia',
// zipCode: '50219',
// propertyType: 'asdf',
// netOperatingIncome: '123',
// grossIncome: '123',
// grossExpense: '123',
// desiredPrice: '123'