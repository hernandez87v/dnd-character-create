DROP TABLE IF EXISTS race_languages CASCADE;
CREATE TABLE race_languages (
  id SERIAL PRIMARY KEY NOT NULL,
  race_id INTEGER REFERENCES races(id) ON DELETE CASCADE,
  language_id INTEGER REFERENCES languages(id) ON DELETE CASCADE
);