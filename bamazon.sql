CREATE DATABASE bamzonDB;

USE bamzonDB;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  item VARCHAR(100) NULL,
  department VARCHAR(100) NULL,
  price DEC(10,2) NULL,
  quantity INT NULL,
  PRIMARY KEY (id)
);

INSERT INTO products(item,department,price,quantity)
VALUES ("Expresso", "Grocery", 6.00, 10),
("Stovetop Expresso Maker", "Grocery", 45.00, 5),
("Mulino Cookies", "Grocery", 10.00, 10),
("Dr.Bronner's Castille Soap, 32 oz", "Beauty", 15.00, 10),
("Dog Food", "Pet Supplies", 75.00, 5),
("YETI Rambler", "Sports & Outdoors", 20.00, 8),
("Cat Food", "Pet Supplies", 25.00, 5),
("Sidetable", "Furniture", 45.00, 4),
("Planner", "Office", 20.00, 10),
("Lamp", "Furniture", 30.00, 10),



