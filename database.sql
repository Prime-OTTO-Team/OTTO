
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
    "phone_number" INTEGER,
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
    "net_operating_income" INTEGER,
    "gross_income" INTEGER,
    "gross_expense" INTEGER,
    "desired_price" INTEGER,
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


--Must have at least 2 users as user_id 1 and 2 are referenced. 

INSERT INTO "property" ("user_id", "active", "address", "state", "city", "zip_code", "property_type", "net_operating_income", "gross_income", "gross_expense", "desired_price", "latitude", "longitude")
VALUES ('1', TRUE, '810 W Lake St', 'Minnesota', 'Minneapolis', 55408, 'Vacant', 1000000, 200000, 820000, 53000000, 44.0068, -94.0448),
('1', TRUE, '2169 McAfee Circle', 'Minnesota', 'Minneapolis', 55109, 'Vacant', 1100000, 2100000, 810000, 51000000, 45.6068, -93.6448),
('1', TRUE, '4200 Bueller Circle', 'Minnesota', 'Minneapolis', 55109, 'Vacant', 1100000, 2100000, 810000, 51000000, 45.0068, -93.0448),
('1', TRUE, '1029 Mikehawk St', 'Minnesota', 'Minneapolis', 55109, 'Vacant', 1100000, 2100000, 810000, 51000000, 45.2068, -93.4448);

INSERT INTO "interest" ("user_id", "property_id") VALUES (1, 1), (1, 3);
INSERT INTO "interest" ("user_id", "property_id") VALUES (2, 2), (2, 3);

INSERT INTO "favorite" ("user_id", "property_id") VALUES (1, 4), (1, 3);
INSERT INTO "favorite" ("user_id", "property_id") VALUES (2, 1), (2, 3);







--Must have at least 2 users as user_id 1 and 2 are referenced. 

-- INSERT INTO "property" ("user_id", "active", "address", "state", "city", "zip_code", "property_type", "net_operating_income",
-- "gross_income", "gross_expense", "desired_price") VALUES
-- ('1', 'TRUE', '810 W Lake St', 'Minnesota', 'Minneapolis', 55408, 'Vacant', 1000000, 2000000, 800000, 50000000),
-- ('1', 'TRUE', '800 W Lake St', 'Minnesota', 'Minneapolis', 55408, 'Residential', 70000, 150000, 900000, 500000),
-- ('1', 'TRUE', '3012 Lyndale Ave S', 'Minnesota', 'Minneapolis', 55408, 'Commercial', 123423, 112512, 65477, 895700),
-- ('1', 'TRUE', '2600 Lyndale Ave S', 'Minnesota', 'Minneapolis', 55408, 'Raw', 12312, 780000, 457000, 8670),
-- ('2', 'TRUE', '2951 Lyndale Ave S', 'Minnesota', 'Minneapolis', 55408, 'Commercial', 123, 2001, 235352, 121111),
-- ('2', 'TRUE', '3200 Lyndale Ave S Minneapolis', 'Minnesota', 'Minneapolis', 55408, 'Vacant', 123141, 412111, 125455, 121111),
-- ('2', 'TRUE', '301 S 4th Ave', 'Minnesota', 'Minneapolis', 55415, 'Commercial', 123141, 412111, 125455, 121111);


-- INSERT INTO "interest" ("user_id", "property_id") VALUES (1, 5), (1, 6);
