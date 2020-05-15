DROP TABLE IF EXISTS races CASCADE;
CREATE TABLE races (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255),
  strength_bonus INTEGER DEFAULT 0,
  dexterity_bonus INTEGER DEFAULT 0,
  constitution_bonus INTEGER DEFAULT 0,
  intelligence_bonus INTEGER DEFAULT 0,
  wisdom_bonus INTEGER DEFAULT 0,
  charisma_bonus INTEGER DEFAULT 0,
  speed INTEGER DEFAULT 0,
  size VARCHAR(255),
  ab_choice INTEGER,
  proficiency_choice INTEGER,
  language_choice INTEGER,
  trait_choice INTEGER
);
