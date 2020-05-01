
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
    "user_type" INTEGER DEFAULT '0',
    "phone_number" BIGINT,
    "approved_user" BOOLEAN default false
);

CREATE TABLE "property" (
    "id" SERIAL PRIMARY KEY,
    "user_id" INTEGER REFERENCES "user" NOT NULL,
    "active" BOOLEAN DEFAULT FALSE NOT NULL,
    "address" VARCHAR (200) NOT NULL,
    "unit_number" VARCHAR (200) DEFAULT NULL,
    "state" VARCHAR (200) NOT NULL,
    "city" VARCHAR (200) NOT NULL,
    "zip_code" INTEGER NOT NULL,
    "property_type" VARCHAR (100),
    "net_operating_income" BIGINT,
    "gross_income" BIGINT,
    "gross_expense" BIGINT,
    "desired_price" BIGINT,
    "latitude" NUMERIC(7, 5),
    "longitude" NUMERIC(7, 5)
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

CREATE TABLE "favorite" (
    "id" SERIAL PRIMARY KEY,
    "user_id" INTEGER REFERENCES "user" NOT NULL,
    "property_id" INTEGER REFERENCES "property" NOT NULL
);

CREATE TABLE "nda" (
    "id" SERIAL PRIMARY KEY,
    "first_name" VARCHAR (100) NOT NULL,
    "last_name" VARCHAR (100) NOT NULL,
    "address" VARCHAR (200) NOT NULL,
    "unit_number" VARCHAR (200) DEFAULT NULL,
    "city" VARCHAR (200) NOT NULL,
    "state" VARCHAR (200) NOT NULL,
    "zip_code" INTEGER NOT NULL,
    "date" DATE DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "signiture_base64" VARCHAR (30000)
);
