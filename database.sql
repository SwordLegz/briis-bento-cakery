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
	"username" VARCHAR (80) UNIQUE NOT NULL,
	"password" VARCHAR (1000) NOT NULL,
	"first_name" VARCHAR (80) NOT NULL,
	"last_name" VARCHAR (80) NOT NULL
);

INSERT INTO "user"
	("username", "password", "first_name", "last_name")
	VALUES ('brii@brii.com', '$2a$10$7hbcyq8pB56jjoy1cmqIZusPIst4LGjRtMmyGiojDQKBKSeQKtgLC', 'Brii', 'SwordLegz'),
	('test@test.com', '$2a$10$TnJGmKV8zTHITxsJEBjVu./ZbqGUKVFpLJXgeJaGTV0C2ajHa2oLe', 'Sir', 'Test')
;

CREATE TABLE "cakebites" (
	"id" SERIAL PRIMARY KEY,
	"flavor" VARCHAR (80) NOT NULL,
	"image" VARCHAR(1000) NOT NULL,
	"description" VARCHAR (2000) NOT NULL
);

INSERT INTO "cakebites" 
	("flavor", "image", "description")
	VALUES ('Biscoff', '/images/biscoff.jpg', 'blah bleep bloop'),
	('PBJ', '/images/pbj.jpg', 'blah bleep bloop'), 
	('Bacon French Toast', '/images/french-toast/jpg', 'blah bleep bloop'),
	('Lemon Creme', '/images/generic.jpg', 'blah bleep bloop'),
	('Red Velvet', '/images/red-velvet.jpg', 'blah bleep bloop'),
	('Mint Chocolate', 'images/choco-mint.jpg', 'blah bleep bloop')
;

CREATE TABLE "orders" (
	"id" SERIAL PRIMARY KEY,
	"user_id" INTEGER REFERENCES "user" ON DELETE CASCADE,
	"date" DATE NOT NULL DEFAULT CURRENT_DATE,
	"isDone" BOOLEAN NOT NULL
);

INSERT INTO "orders"
	("user_id", "date", "isDone")
	VALUES ('1', '08/25/24', 'TRUE'),
	('2', '09/01/24', 'TRUE'),
	('2', '09/02/24', 'TRUE'),
	('1', '09/04/24', 'FALSE')
;
	

CREATE TABLE "order_items" (
	"id" SERIAL PRIMARY KEY,
	"order_id" INTEGER REFERENCES "orders" ON DELETE CASCADE,
	"flavor_id" INTEGER REFERENCES "cakebites" ON DELETE CASCADE,
	"is_egg_free" BOOLEAN NOT NULL,
	"is_dairy_free" BOOLEAN NOT NULL,
	"is_gluten_free" BOOLEAN NOT NULL,
	"is_vegan" BOOLEAN NOT NULL,
	"quantity" INTEGER NOT NULL
);

INSERT INTO "order_items"
	("order_id", "flavor_id", "is_egg_free", "is_dairy_free", "is_gluten_free", "is_vegan", "quantity")
	VALUES ('1', '1', 'FALSE', 'FALSE', 'FALSE', 'FALSE', '25'),
	('1', '3', 'FALSE', 'FALSE', 'FALSE', 'FALSE', '50'),
	('1', '6', 'FALSE', 'FALSE', 'FALSE', 'FALSE', '25'),
	('2', '2', 'TRUE', 'TRUE', 'FALSE', 'FALSE', '50'),
	('2', '4', 'TRUE', 'TRUE', 'TRUE', 'FALSE', '25'),
	('3', '1', 'FALSE', 'FALSE', 'FALSE', 'FALSE', '25'),
	('3', '5', 'FALSE', 'FALSE', 'FALSE', 'FALSE', '75'),
	('3', '6', 'FALSE', 'FALSE', 'TRUE', 'FALSE', '25'),
	('3', '2', 'FALSE', 'FALSE', 'TRUE', 'FALSE', '25'),
	('3', '4', 'FALSE', 'TRUE', 'FALSE', 'FALSE', '100'),
	('3', '6', 'TRUE', 'TRUE', 'TRUE', 'TRUE', '25'),
	('4', '4', 'FALSE', 'FALSE', 'FALSE', 'FALSE','50'),
	('4', '5', 'FALSE', 'TRUE', 'FALSE', 'FALSE', '25');




		




--INSERT INTO "user"
		
