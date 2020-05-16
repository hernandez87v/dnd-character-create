DROP TABLE IF EXISTS characters
CASCADE;
CREATE TABLE characters
(
    id SERIAL PRIMARY KEY NOT NULL,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    class_id INTEGER REFERENCES classes(id) ON DELETE CASCADE,
    race_id INTEGER REFERENCES races(id) ON DELETE CASCADE,
    background_id INTEGER REFERENCES backgrounds(id) ON DELETE CASCADE,
    experience INTEGER DEFAULT 0,
    level INTEGER DEFAULT 1,
    alignment VARCHAR(255),
    speed INTEGER DEFAULT 0,
    armour_class INTEGER DEFAULT 0,
    total_hit_points INTEGER DEFAULT 0,
    temporary_hit_points INTEGER DEFAULT 0,
    initiative INTEGER DEFAULT 0,
    strength INTEGER DEFAULT 0,
    dexterity INTEGER DEFAULT 0,
    constitution INTEGER DEFAULT 0,
    intelligence INTEGER DEFAULT 0,
    wisdom INTEGER DEFAULT 0,
    charisma INTEGER DEFAULT 0,
    name VARCHAR(255),
    avatar_url VARCHAR(255),
    hit_die INTEGER 

);