DROP TABLE IF EXISTS items
CASCADE;
CREATE TABLE items
(
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(255),
    damage_dice VARCHAR(255) DEFAULT NULL,
    api_link VARCHAR(255),
    equipment_category VARCHAR(255) NOT NULL,
    weight INTEGER,
    cost INTEGER NOT NULL
);