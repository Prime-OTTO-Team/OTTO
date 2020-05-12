# OTTO

## Description

_Duration: 2 Week Sprint_

Otto is an app to help faciliate off market, owner to owner commercial real estate transactions. Placing commercial real estate on the open market can often alert tenants and give them more negotiating power. It also begins a count up on days listed on the market and the higher the number of days gets, the worse it looks. These are just some reasons why sellers might prefer selling off market. Otto provides a space in which users will have complete privacy. They will be able to add their listing to the site with there desired price and only after a buyer is fully interested will the seller and buyer be connected. A willing buyer must be approved before they will be able to find out the full details of a property. 


To see the fully functional site, please visit: [DEPLOYED VERSION OF APP](www.heroku.com) -add site in readme 

### Prerequisites

- [Node.js](https://nodejs.org/en/)
- [PostgreSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)

## Installation

1. Create a database named `otto_database`,
2. The queries in the `database.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using [Postico]() to run those queries as that was used to create the queries,
3. Open up your editor of choice and run an `npm install`
4. Run `npm run server` in your terminal
5. Run `npm run client` in your terminal
6. The `npm run client` command will open up a new browser tab for you!
7. To fully use Google Maps you must sign up and add an [API key](https://developers.google.com/maps/documentation/javascript/get-api-key). 
8. You must also create an `.env` file and place it in there. 

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
React-Sagas
React-Redux
Node.js
PostgreSql
Passport
Bcrypt
Sweetalerts

## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality. We thank our instructors Casie Seikman, Dev Jana, and our cohort Chien.

## Support
If you have suggestions or issues, please email any of us at our respective emails: 
- Farshid Erwin Zadeh - farshidmzadeh@icloud.com
- Kyle Greene - kylengreene@gmail.com
- Matt Kimlinger - Mkimlinger123@gmail.com
- Derek Boat - derek.boat@gmail.com

