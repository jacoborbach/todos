insert into todos (description, user_id)
VALUES ($1, $2);

select * from todos where user_id = $2 AND description = $1;