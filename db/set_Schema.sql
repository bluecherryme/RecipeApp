drop table if exists clients;

create table clients(
    clientId text not null,
    given_name varchar(100),
    family_name varchar(100),
    name varchar(100),
    email varchar(120),
    picture varchar(500)
);

insert into clients(clientId,given_name,family_name,name,email,picture)
values ('1','jo','s','jo s', 'daf','asdf');

-- create table recipes(
--     id integer not null,
--     title varchar(250),
--     extendedIngredients json,
--     instructions text,
--     sourceURL text,
--     aggregateLikes integer,
--     image text,
--     servings integer,
--     readyInMinutes integer
-- );