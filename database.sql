
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
-- name db 'otto_database'

CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (100) UNIQUE NOT NULL,
    "password" VARCHAR (100) NOT NULL,
    "first_name" VARCHAR (100) NOT NULL,
    "last_name" VARCHAR (100) NOT NULL,
    "user_type" INTEGER,
    "phone_number" INTEGER,
    "approved_user" BOOLEAN default false
);

CREATE TABLE "property" (
    "id" SERIAL PRIMARY KEY,
    "user_id" INTEGER REFERENCES "user" NOT NULL,
    "active" BOOLEAN default false NOT NULL,
    "street_number" VARCHAR (200) NOT NULL,
    "street_name" VARCHAR (200) NOT NULL,
    "unit_number" VARCHAR (200) DEFAULT NULL,
    "state" VARCHAR (200) NOT NULL,
    "city" VARCHAR (200) NOT NULL,
    "zip_code" INTEGER NOT NULL,
    "property_type" VARCHAR (100),
    "net_operating_income" INTEGER,
    "gross_income" INTEGER,
    "gross_expense" INTEGER,
    "desired_price" INTEGER
);

CREATE TABLE "search" (
    "id" SERIAL PRIMARY KEY,
    "user_id" INTEGER REFERENCES "user" NOT NULL,
    "search_string" VARCHAR (100) NOT NULL
);

CREATE TABLE "interest" (
    "id" SERIAL PRIMARY KEY,
    "user_id" INTEGER REFERENCES "user" NOT NULL,
    "property_id" INTEGER REFERENCES "property" NOT NULL
);