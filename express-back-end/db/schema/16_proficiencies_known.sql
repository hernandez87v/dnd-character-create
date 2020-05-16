DROP TABLE IF EXISTS proficiencies_known CASCADE;
CREATE TABLE proficiencies_known (
  id SERIAL PRIMARY KEY NOT NULL,
  character_id INTEGER REFERENCES characters(id) ON DELETE CASCADE,
  proficiency_id INTEGER REFERENCES proficiencies(id) ON DELETE CASCADE
);