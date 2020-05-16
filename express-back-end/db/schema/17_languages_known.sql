DROP TABLE IF EXISTS languages_known CASCADE;
CREATE TABLE languages_known (
  id SERIAL PRIMARY KEY NOT NULL,
  character_id INTEGER REFERENCES characters(id) ON DELETE CASCADE,
  language_id INTEGER REFERENCES languages(id) ON DELETE CASCADE
);