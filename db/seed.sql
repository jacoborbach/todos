create table users (
id serial primary key,
users varchar
);

create table todos (
id serial primary key,
user_id int references users(id),
description varchar,
status char
)
