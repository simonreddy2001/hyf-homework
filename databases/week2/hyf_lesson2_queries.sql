use hyf_lesson2;
/*select user names who has task title or description has 'database'*/
SELECT
  user.name,
  task.title,
  task.description
from
  (
    task
    join user_task on task.id = user_task.task_id
  )
  join user on user.id = user_task.user_id
WHERE
  title like '%database%'
  or description like '%database%';
  /*select tasks for user who has name 'Donald' with task title or description*/
SELECT
  user.name,
  task.title,
  task.description
from
  (
    task
    join user_task on task.id = user_task.task_id
  )
  join user on user.id = user_task.user_id
WHERE
  user.name like '%Donald%';
  /*Get all the tasks assigned to Pavel*/
SELECT
  user.name,
  task.title,
  task.description
from
  (
    task
    join user_task on task.id = user_task.task_id
  )
  join user on user.id = user_task.user_id
WHERE
  user.name like '%Pavel%';
  /*Find how many tasks each user is responsible for*/
SELECT
  COUNT(user_task.task_id) as tasks,
  user.name
FROM
  user
  join user_task on user.id = user_task.user_id
where
  user.id = user_task.user_id
GROUP BY
  user.name;
  /*Find how many tasks with a status=Done each user is responsible for;*/
SELECT
  COUNT(user_task.task_id) as tasks,
  user.name as userN,
  status.name as StatusN
FROM
  (
    (
      user
      join user_task on user.id = user_task.user_id
    )
    join task on task.id = user_task.task_id
  )
  JOIN status on status.id = task.status_id
where
  status.name = "Done"
GROUP BY
  user.id;