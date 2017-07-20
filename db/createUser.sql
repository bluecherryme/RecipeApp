insert into clients (clientid, given_name, family_name, name, email, picture)
values ($1,$2,$3,$4,$5,$6) returning *;
