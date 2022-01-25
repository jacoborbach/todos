insert into users (users)
VALUES (LOWER($1)) ;

select * from users where users = LOWER($1);