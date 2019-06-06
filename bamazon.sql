CREATE DATABASE bamzonDB;

USE bamzonDB;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  item VARCHAR(100) NULL,
  department VARCHAR(100) NULL,
  price DEC(10,2) NULL,
  quantity INT NULL,
  PRIMARY KEY (id)
)
