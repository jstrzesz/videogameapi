DROP DATABASE if exists videogamedatabase;

create database videogamedatabase;

use videogamedatabase;

CREATE TABLE games (
  id int not null AUTO_INCREMENT,
  title varchar(255),
  platform varchar(255),
  developer varchar(255),
  publisher varchar(255),
  multiplatform boolean,
  primary key (id)
);

CREATE TABLE platforms (
  id int not null AUTO_INCREMENT,
  title varchar(255),
  company varchar(255),
  primary key (id)
);

INSERT INTO games (title, platform, developer, publisher, multiplatform) VALUES ("Uncharted 2: Among Thieves", "Playstation 3", "Naughty Dog", "Sony", false);