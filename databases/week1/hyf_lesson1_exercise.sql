/* Select the names and phones of all users; */
select
  name,
  phone
from
  user
  /* Select the name of the user with id=10; */
select
  name
from
  user
WHERE
  id = 10
  /* Find how many users exist in the database; */
select
  count(id)
from
  user
  /* Select the names of the first 5 users in the database; */
select
  name
from
  user
limit
  5
  /* Select the names of the last 3 users in the database; */
select
  name,
  id
from
  user
order by
  id desc
limit
  3
  /* Sum all the ids in the user table; */
select
  sum(id)
from
  user
  /* Select all users and order them alphabetically by name; */
select
  *
from
  user
order by
  name
  /* Find all tasks that include SQL either on the title or on the description; */
select
  *
from
  task
where
  title like '%SQL%'
  or description like '%SQL%'
  /* Find the title of all tasks that the user Maryrose is responsible for; */
select
  task.title
from
  task
where
  task.user_id =(
    select
      id
    from
      user
    where
      user.name like 'Maryrose%'
  )
  /* Find the title of all tasks that the user Maryrose is responsible for; */
select
  name,
  title,
  task.user_id,
  user.id as user_id
from
  user,
  task
where
  user.name like 'Maryrose%'
  and task.user_id = user.id
  /* Find the title of all tasks that the user Maryrose is responsible for; */
select
  name,
  title,
  task.user_id,
  user.id as user_id
from
  user
  inner join task on task.user_id = user.id
where
  user.name like 'Maryrose%'
  /* Find how many tasks each user is responsible for; */
select
  user.name,
  count(task.id) as tasks
from
  user
  inner join task on task.user_id = user.id
GROUP BY
  user.name
  /* Find how many tasks each user is responsible for; */
select
  user.name,
  count(task.id) as tasks
from
  user
  left join task on task.user_id = user.id
GROUP BY
  user.name
  /* Find how many tasks with a status=Done each user is responsible for; */
select
  user.name,
  count(task.status_id) as done_tasks
from
  (
    user
    inner join task on task.user_id = user.id
  )
  inner join status on status.id = task.status_id
where
  status.name like 'Done'
GROUP BY
  user.name
  /* Select the name of the last user in the database; */
select
  *
from
  user
WHERE
  id =(
    SELECT
      max(id)
    FROM
      user
  )