
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


--Real Fake Data 1310 Wayzata Blvd, Long Lake, MN 55356

INSERT INTO "user" ("id", "username", "password", "first_name", "last_name", "user_type", "phone_number", "approved_user")
VALUES ('4', 'brandon1245@gmail.com', 'brandonpassword', 'Brandon', 'Timyan', 0, '5556752345', 'TRUE'),
('5', 'James_patrick@gmail.com', 'patrickpassword', 'James', 'Patrick', 0, '555234769', 'TRUE'),
('6', 'kyle_blue@gmail.com', 'kylepassword', 'Kyle', 'Blue', 0, '555123859', 'TRUE'),
('7', 'Sean.124Veranda@gmail.com', 'shawnpassword', 'Sean', 'Veranda', 0, '5553093485', 'TRUE'),
('8', 'derekvankooten23@live.com', 'derekpassword', 'derek', 'vankooten', 0, '5552342553', 'TRUE'),
('9', 'luci_23wilson@gmail.com', 'lucipassword', 'Luci', 'Wilson', 0, '5554359834', 'TRUE'),
('10', 'jessica.landry2@gmail.com', 'jessicapassword', 'Jessica', 'Landry', 0, '555235857', 'TRUE'),
('11', 'tracy34_jackson@gmail.com', 'tracypassword', 'Tracy', 'Jackson', 0, '5552342389', 'TRUE');




INSERT INTO "property" ("user_id", "active", "address", "state", "city", "zip_code", "property_type", "net_operating_income", "gross_income", "gross_expense", "desired_price", "latitude", "longitude")
VALUES ('1', TRUE, '2922 Adlrich Ave S', 'Minnesota', 'Minneapolis', 55408, 'Residential', 200000, 1000000, 800000, 4500000, 44.9490, -93.2896),
('1', TRUE, '2837 Emerson Ave S', 'Minnesota', 'Minneapolis', 55408, 'Residential', 2005000, 800000, 1005000, 5600000, 44.9507, -93.2928),
('2', TRUE, '4724 Cedar Ave', 'Minnesota', 'Minneapolis', 55407, 'Commercial', 200000, 1000000, 1200000, 3500000, 44.9171, -93.2477),
('2', TRUE, '5800 Cedar Ave', 'Minnesota', 'Minneapolis', 55417, 'Commercial', 100000, 600000, 700000, 1500000, 44.8977, -93.2479),
('3', TRUE, '5557 Xerxes Ave S', 'Minnesota', 'Minneapolis', 55410, 'Commercial', 500000, 1400000, 900000, 6000000, 44.9017, -93.3185),
('3', TRUE, '5416 Penn Ave S', 'Minnesota', 'Minneapolis', 55419, 'Commercial', 250000, 900000, 650000, 3000000, 44.9045, -93.3089),
('4', TRUE, '520 Malcolm Ave SE', 'Minnesota', 'Minneapolis', 55414, 'Commercial', 550000, 3050000, 2500000, 8500000, 44.9735, -93.2103),
('4', TRUE, '1500 Fillmore St NE', 'Minnesota', 'Minneapolis', 55413, 'Commercial', 150000, 600000, 450000, 2400000, 45.0045, -93.2442),
('5', TRUE, '1500 817 S 5th Ave', 'Minnesota', 'Minneapolis', 55404, 'Commercial', 150000, 1050000, 900000, 4000000, 44.9723, -93.2665),
('5', TRUE, '521 S 7th St', 'Minnesota', 'Minneapolis', 55415, 'Residential', 300000, 1700000, 1400000, 8000000, 44.9733, -93.2645),
('6', TRUE, '708 N 1st St', 'Minnesota', 'Minneapolis', 55401, 'Commercial', 150000, 750000, 600000, 2500000, 44.9903, -93.2747),
('6', TRUE, '120 Hennepin Ave', 'Minnesota', 'Minneapolis', 55401, 'Residential', 1000000, 750000, 850000, 2100000, 44.9836, -93.2674),
('7', TRUE, '14 N 5th St', 'Minnesota', 'Minneapolis', 55403, 'Commercial', 50000, 700000, 650000, 3500000, 44.0068, -94.0448),
('7', TRUE, '2910 E Lake St', 'Minnesota', 'Minneapolis', 55406, 'Commercial', 150000, 750000, 600000, 3000000, 44.9486, -93.2295),
('8', TRUE, '3448 42nd Ave S', 'Minnesota', 'Minneapolis', 55406, 'Commercial', 200000, 800000, 600000, 3000000, 44.9397, -93.2131),
('8', TRUE, '393 Selby Ave', 'Minnesota', 'St Paul', 55102, 'Commercial', 200000, 900000, 700000, 4200000, 44.9467, -93.1167),
('9', TRUE, '175 Charles Ave', 'Minnesota', 'St Paul', 55103, 'Residential', 50000, 1150000, 1200000, 4000000, 44.9591, -93.1079),
('9', TRUE, '6800 Cedar Lake Rd', 'Minnesota', 'St Louis Park', 55426, 'Residential', 350000, 1250000, 900000, 5000000, 44.9628, -93.3666),
('10', TRUE, '2400 Nevada Ave', 'Minnesota', 'St Louis Park', 55426, 'Residential', 50000, 800000, 750000, 3500000, 44.9596, -93.3740),
('10', TRUE, '5525 Cedar Lake Rd S', 'Minnesota', 'St Louis Park', 55416, 'Residential', 100000, 800000, 700000, 2800000, 44.9614, -93.3496),
('11', TRUE, '5805 73rd Ave N', 'Minnesota', 'Brooklyn Park', 55429, 'Residential', 150000, 600000, 450000, 3400000, 45.0881, -93.3553),
('11', TRUE, '1310 Wayzata Blvd', 'Minnesota', 'Long Lake', 55356, 'Commercial', 50000, 350000, 300000, 2600000, 44.9853, -93.5562);



-- Exact Longitudes and Latitude just incase
-- 1. 44.949013878492195, -93.28967571258546
-- 2. 44.95073750463268, -93.29280853271486
-- 3. 44.91718963373555, -93.24772596359254
-- 4. 44.89770282503014, -93.2479190826416
-- 5. 44.90174206487591, -93.31851482391359
-- 6. 44.90459178114539, -93.30892324447632
-- 7. 44.97354220216915, -93.21032524108888
-- 8. 45.004519741479, -93.24420154094696
-- 9. 44.972380930333486, -93.26659798622133
-- 10. 44.97336383841568, -93.26455950737001
-- 11. 44.990347650512305, -93.27471971511841
-- 12. 44.98367007617373, -93.2674938440323
-- 13.
-- 14. 44.94860004865174, -93.22951376438141
-- 15. 44.93979121969355, -93.21309328079225
-- 16. 44.94671309862598, -93.1167858839035
-- 17. 44.9591346959311, -93.10797214508057
-- 18. 44.96286976047243, -93.36660146713258
-- 19. 44.95962816351988, -93.37405800819398
-- 20. 44.96144256939308, -93.3496928215027
-- 21. 45.08814175096252 -93.35534691810608
-- 22. 44.98530539499394, -93.55628728866579
