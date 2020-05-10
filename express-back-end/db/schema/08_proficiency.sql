DROP TABLE IF EXISTS proficiencies CASCADE;
CREATE TABLE proficiencies
(
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(255),
    api_link VARCHAR(255)
);