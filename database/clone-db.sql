CREATE DATABASE shadowdb;

CREATE TABLE shadowdb.customers
LIKE productiondb.customers;

INSERT INTO shadowdb.customers
SELECT * FROM productiondb.customers;

CREATE TABLE shadowdb.orders
LIKE productiondb.orders;

INSERT INTO shadowdb.orders
SELECT * FROM productiondb.orders;

CREATE TABLE shadowdb.payments
LIKE productiondb.payments;

INSERT INTO shadowdb.payments
SELECT * FROM productiondb.payments;