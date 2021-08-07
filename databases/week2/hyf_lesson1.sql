Use hyf_lesson1;
/*Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id*/
INSERT INTO
  task (
    title,
    description,
    created,
    updated,
    due_date,
    status_id,
    user_id
  )
VALUES
  (
    'buy eggs',
    'title says it all',
    '2021-08-01 06:54:16',
    '2021-08-15 13:05:09',
    '2021-08-31 21:15:21',
    2,
    1
  );
  /*Change the title of a task*/
UPDATE
  task
SET
  title = 'buy eggs which is brown'
WHERE
  id = 36;
  /*Change a task due date*/
UPDATE
  task
SET
  due_date = '2021-10-01 12:12:12'
WHERE
  id = 36;
  /*Change a task status*/
UPDATE
  task
SET
  status_id = 1
WHERE
  id = 36;
  /*Mark a task as complete*/
UPDATE
  task
SET
  status_id = 3
WHERE
  id = 36;
  /*Delete a task*/
DELETE FROM
  task
WHERE
  id = 36;
  /*Get all the tasks assigned to users whose email ends in @spotify.com*/
SELECT
  *
from
  task
WHERE
  user_id in (
    select
      id
    FROM
      user
    WHERE
      email LIKE '%@spotify.com'
  );
  /*Get all the tasks for 'Donald Duck' with status 'Not started'*/
SELECT
  *
from
  task
where
  user_id in (
    SELECT
      id
    FROM
      user
    where
      name = 'Donald Duck'
  )
  and status_id in (
    select
      id
    from
      status
    where
      name = 'Not started'
  );
  /*Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)*/
SELECT
  *
FROM
  task
WHERE
  created LIKE '%-09-%'
  AND user_id IN (
    SELECT
      id
    FROM
      user
    WHERE
      name = 'Maryrose Meadows'
  );
SELECT
  *
FROM
  task
WHERE
  month(created) = 09
  AND user_id IN (
    SELECT
      user.id
    FROM
      user
    WHERE
      name = 'Maryrose Meadows'
  );
  /*Find how many tasks where created in each month, e.g. how many tasks were created in october, how many tasks were created in november, etc. (hint: use group by)*/
SELECT
  COUNT(id) AS total_in_month,
  month(created) as monthCreated
FROM
  task
GROUP BY
  month(created);