DROP TABLE IF EXISTS race_proficiencies CASCADE;
CREATE TABLE race_proficiencies (
  id SERIAL PRIMARY KEY NOT NULL,
  race_id INTEGER REFERENCES races(id) ON DELETE CASCADE,
  proficiency_id INTEGER REFERENCES proficiencies(id) ON DELETE CASCADE
);