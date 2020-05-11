DROP TABLE IF EXISTS characters
CASCADE;
CREATE TABLE characters
(
    id SERIAL PRIMARY KEY NOT NULL,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    class_id INTEGER REFERENCES class(id) ON DELETE CASCADE,
    race_id INTEGER REFERENCES race(id) ON DELETE CASCADE,
    background_id INTEGER REFERENCES background(id) ON DELETE CASCADE,
    experience INTEGER DEFAULT 0,
    level INTEGER DEFAULT 1,
    aligment VARCHAR(255),
    speed INTEGER DEFAULT 0,
    armor_class INTEGER DEFAULT 0,
    total_hit_points INTEGER DEFAULT 0,
    temporary_hit_points INTEGER DEFAULT 0,
    initiative INTEGER DEFAULT 0,
    strength INTEGER DEFAULT 0,
    dexterity INTEGER DEFAULT 0,
    constitution INTEGER DEFAULT 0,
    inteligence INTEGER DEFAULT 0,
    wisdom INTEGER DEFAULT 0,
    charisma INTEGER DEFAULT 0,
    name VARCHAR(255)

);