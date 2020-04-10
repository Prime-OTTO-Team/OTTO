
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!

CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (100) UNIQUE NOT NULL,
    "password" VARCHAR (100) NOT NULL,
    "user_type" INTEGER,
    "phone_number" INTEGER,
    "approved_user" BOOLEAN default false
);

CREATE TABLE "property" (
    "id" SERIAL PRIMARY KEY,
    "user_id" INTEGER REFERENCES "user" NOT NULL,
    "active" BOOLEAN default false NOT NULL,
    "address" VARCHAR (200) NOT NULL,
    "property_type" VARCHAR (100),
    "net_operating_income" INTEGER,
    "gross_income" INTEGER,
    "gross_expense" INTEGER,
    "desired_price" INTEGER
);

CREATE TABLE "searches" (
    "id" SERIAL PRIMARY KEY,
    "user_id" INTEGER REFERENCES "user" NOT NULL,
    "search_string" VARCHAR (100) NOT NULL
);

CREATE TABLE "interests" (
    "id" SERIAL PRIMARY KEY,
    "user_id" INTEGER REFERENCES "user" NOT NULL,
    "property_id" INTEGER REFERENCES "property" NOT NULL
);
=======
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);


