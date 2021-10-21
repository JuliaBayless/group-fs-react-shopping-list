-- DATABASE NAME "groceries"

-- Don't forget to add your create table SQL 

CREATE TABLE "groceries" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(80) NOT NULL,
    "quantity" DECIMAL NOT NULL,
    "unit" VARCHAR(20),
    "isPurchased" BOOLEAN
);

INSERT INTO "groceries" ("name", "quantity", "unit", "isPurchased")
VALUES 
('Bananas', '5.7', 'lbs', 'false'),
('Pink Grapes', '71', 'druiwekorrel', 'false'),
('Eggs', '12', 'bakers dozen', 'true');


-- It is also helpful to include some test data
