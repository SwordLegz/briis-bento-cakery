-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!

-- CREATE TABLE "user" (
--     "id" SERIAL PRIMARY KEY,
--     "username" VARCHAR (80) UNIQUE NOT NULL,
--     "password" VARCHAR (1000) NOT NULL
-- );

CREATE TABLE "user" (
	"id" SERIAL PRIMARY KEY,
	"email" VARCHAR (80) UNIQUE NOT NULL,
	"password" VARCHAR (1000) NOT NULL,
	"first_name" VARCHAR (80) NOT NULL,
	"last_name" VARCHAR (80) NOT NULL
);

CREATE TABLE "flavors" (
	"id" SERIAL PRIMARY KEY,
	"flavor" VARCHAR (80) NOT NULL
);

CREATE TABLE "orders" (
	"id" SERIAL PRIMARY KEY,
	"user_id" INTEGER REFERENCES "user" ON DELETE CASCADE,
	"date" DATE NOT NULL DEFAULT CURRENT_DATE,
	"isDone" BOOLEAN NOT NULL
);

CREATE TABLE "order_items" (
	"id" SERIAL PRIMARY KEY,
	"order_id" INTEGER REFERENCES "orders" ON DELETE CASCADE,
	"flavor_id" INTEGER REFERENCES "flavors" ON DELETE CASCADE,
	"is_egg_free" BOOLEAN NOT NULL,
	"is_dairy_free" BOOLEAN NOT NULL,
	"is_gluten_free" BOOLEAN NOT NULL,
	"is_vegan" BOOLEAN NOT NULL
);

INSERT INTO "flavors" 
	("flavor")
	VALUES ('Biscoff'),
	('PBJ'), 
	('Bacon French Toast'),
	('Lemon Creme'),
	('Red Velvet'),
	('Carrot Cake'),
	('Cookies & Cream');