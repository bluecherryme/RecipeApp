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
values ('103777885688777289032','jo','s','jo s', 'daf','asdf');