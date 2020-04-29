(View Raw will give you the markdown that you can copy to your repos!)


![MIT LICENSE](https://img.shields.io/github/license/scottbromander/the_marketplace.svg?style=flat-square)
![REPO SIZE](https://img.shields.io/github/repo-size/scottbromander/the_marketplace.svg?style=flat-square)
![TOP_LANGUAGE](https://img.shields.io/github/languages/top/scottbromander/the_marketplace.svg?style=flat-square)
![FORKS](https://img.shields.io/github/forks/scottbromander/the_marketplace.svg?style=social)

# OTTO

## Description

_Duration: 2.5 Week Sprint_

Otto is an app to help faciliate off market, owner to owner commercial real estate transactions. Placing commercial real estate on the open market can often alert tenants and give them more negotiating power. It also begins a count up on days listed on the market and the higher the number of days gets, the worse it looks. These are some reasons why sellers might prefer selling off market. But unfortunately it is hard for brokerage firms to list off market properties on a website without opportunites getting poached. Otto provides that solution by listing properties on the site but limiting the data for the public to see 

Directly above this is how long it took you to develop the project. Your project description goes here. What problem did you solve? How did you solve it? 

To see the fully functional site, please visit: [DEPLOYED VERSION OF APP](www.heroku.com) -add site in readme 

## Screen Shot

Include one or two screen shots of your project here (optional). Remove if unused.

### Prerequisites



- [Node.js](https://nodejs.org/en/)
- [PostgreSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)

## Installation

How do you get your application up and running? This is a step by step list for how another developer could get this project up and running. The good target audience in terms of knowledge, would be a fellow Primer from another cohort being able to spin up this project. Note that you do not need a paragraph here to intro Installation. It should be step-by-step.

If your application has secret keys (for example --  Twilio), make sure you tell them how to set that up, both in getting the key and then what to call it in the `.env` file.

1. Create a database named `otto_database`,
2. The queries in the `database.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using [Postico]() to run those queries as that was used to create the queries,
3. Open up your editor of choice and run an `npm install`
4. Run `npm run server` in your terminal
5. Run `npm run client` in your terminal
6. The `npm run client` command will open up a new browser tab for you!
7. To fully use Google Maps you must sign up and add an [API key](https://developers.google.com/maps/documentation/javascript/get-api-key). 

## Usage

1. Users register an account when the modal pops up and then signs in. 
2. The landing page will contain a map with properties general location marked and recent listings on the site. 
3. Users must be approved by site admins before searching for specific properties or posting their own listinsg.
4. The Add a Listing link at the top directs the user to a page where a property can be added. 
5. The Account link directs the user to a page with any listings they have submitted and any properties they have favorited.
6. The For Sale link direct the user to a search page to look for properties with predefined criteria. 
7. When You are interested in a property you will be contacted to Market Fare and sign an NDA to be provided more information. 
8. After signing an NDA the user will recieve the full address of a property.
9. If the user wishes to purchase the property they will be sent a letter of intent to sign and will be connected with the seller. 


## Built With

React
Google Maps API
Material UI

## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality. We thank our instructors Casie Seikman and Dev

## Support
If you have suggestions or issues, please email me at [youremail@whatever.com](www.google.com)
