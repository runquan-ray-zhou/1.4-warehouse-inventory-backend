DROP DATABASE IF EXISTS warehouse;
CREATE DATABASE warehouse;

\c warehouses;

CREATE TABLE warehouses (
    id SERIAL PRIMARY KEY,
    nickname TEXT NOT NULL,
    date_created TEXT NOT NULL,
    owner TEXT NOT NULL,
    pallet_capacity INT NOT NULL,
    location TEXT NOT NULL
);