select u.id, u.users, t.id as todo_id, t.description, t.status
from users u join todos t
on u.id = t.user_id
where u.users = LOWER($1);