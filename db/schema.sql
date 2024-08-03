DROP DATABASE IF EXISTS warehouses_dev;
CREATE DATABASE warehouses_dev;

\c warehouses_dev;

CREATE TABLE warehouses (
    id SERIAL PRIMARY KEY,
    nickname TEXT NOT NULL,
    date_created DATE,
    owner TEXT NOT NULL,
    pallet_capacity INT NOT NULL,
    location TEXT NOT NULL
);