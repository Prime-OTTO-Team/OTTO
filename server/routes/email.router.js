const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require('axios');
var nodemailer = require('nodemailer');

router.post('/', (req, res) => {
let client = req.body.client;
let inquiringClient = `${client.first_name} ${client.last_name}`;
let emailAddress = client.username;
let phoneNumber = client.phone_number
let property = req.body.property;
let propertyAddress = property.address;
let zip = property.zip_code;
let price = property.desired_price;
let propertyId = property.id;

//specificy service being used 
//insert your email address in 'user'
//insert password for sending account in 'pass'
//if using gmail you might be asked to create 'App Password';
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'kylengreene@gmail.com',
    pass: 'mrjmcxkpvxhntsku'
  }
});

//from willbe the same as the 'user' account 
//to will be whomever wants to receive the alert
var mailOptions = {
  from: 'kylengreene@gmail.com',
  to: 'kyle@kylegreene.com',
  subject: `OTTO purchase inquiry from ${inquiringClient}`,
  text: 
  
`Hello,


An OTTO inquiry has been submitted by ${inquiringClient}.


They are interested in the following property:

Address: ${propertyAddress}

Zip: ${zip}

Price: $ ${price}

ID: ${propertyId}


They can be reached at:

${emailAddress} or by phone at ${phoneNumber}.`
    }

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
});

module.exports = router;