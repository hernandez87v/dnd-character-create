DROP TABLE IF EXISTS spells CASCADE;
CREATE TABLE spells
(
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(255),
    spell_level INTEGER NOT NUll,
    duration VARCHAR(255),
    is_ritual BOOLEAN,
    casting_time VARCHAR(255),
    range VARCHAR(255),
    api_link VARCHAR(255)
);