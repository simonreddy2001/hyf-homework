CREATE SCHEMA `concerts`;
CREATE TABLE `concerts`.`concerts` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NULL,
  `band` VARCHAR(45) NULL,
  `venue` VARCHAR(45) NULL,
  `created_date` DATETIME(6) NULL,
  `performance_date` DATETIME(6) NULL,
  `price` INT(45) NULL,
  PRIMARY KEY (`id`)
);
INSERT INTO
  concerts(
    `title`,
    `band`,
    `venue`,
    `created_date`,
    `performance_date`,
    `price`
  )
VALUES
  (
    'bollywood dance',
    'modern',
    'India',
    '2017-10-03 04:49:05',
    '2018-08-04 08:40:08',
    '540'
  );
INSERT INTO
  concerts(
    `title`,
    `band`,
    `venue`,
    `created_date`,
    `performance_date`,
    `price`
  )
VALUES
  (
    'hollywood dance',
    'salsa',
    'US',
    '2014-09-04 03:33:01',
    '2015-08-04 05:43:08',
    '860'
  );
INSERT INTO
  concerts(
    `title`,
    `band`,
    `venue`,
    `created_date`,
    `performance_date`,
    `price`
  )
VALUES
  (
    'Indian classical',
    'cultural',
    'India',
    '2019-10-03 04:49:05',
    '2020-06-04 07:44:08',
    '480'
  );
select
  *
from
  concerts