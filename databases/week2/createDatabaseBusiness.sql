CREATE DATABASE business;
Use business;
CREATE TABLE `staff` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `duty` varchar(255) NOT NULL,
  `status_id` int(10) unsigned NOT NULL,
  CONSTRAINT `fk_status` FOREIGN KEY (`status_id`) REFERENCES `status` (`id`) ON DELETE CASCADE ON UPDATE CASCADE PRIMARY KEY (`id`)
);
CREATE TABLE `jobTitle` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `jobTitle` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
);
CREATE TABLE `status` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) NOT NULL
);
CREATE TABLE `office` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `place` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
);
CREATE TABLE `staff_office` (
  `staff_id` int(10) unsigned NOT NULL,
  `office_id` int(10) unsigned NOT NULL,
  PRIMARY KEY(`staff_id`, `office_id`),
  CONSTRAINT `fk_staff_office_staff` FOREIGN KEY (`staff_id`) REFERENCES `staff` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_staff_office_office` FOREIGN KEY (`office_id`) REFERENCES `office` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);
CREATE TABLE `staff_jobTitle` (
  `staff_id` int(10) unsigned NOT NULL,
  `jobTitle_id` int(10) unsigned NOT NULL,
  PRIMARY KEY(`staff_id`, `jobTitle_id`),
  CONSTRAINT `fk_staff_jobTitle_staff` FOREIGN KEY (`staff_id`) REFERENCES `staff` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_staff_jobTitle_jobTitle` FOREIGN KEY (`jobTitle_id`) REFERENCES `jobTitle` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);
insert into
  staff (id, name, duty, status_id)
values
  (1, 'simon', 'developer', 1);
insert into
  staff (id, name, duty, status_id)
values
  (2, 'remo', 'analyst', 2);
insert into
  staff (id, name, duty, status_id)
values
  (3, 'demo', 'admin', 1);
insert into
  staff (id, name, duty, status_id)
values
  (4, 'nemo', 'consultant', 1);
insert into
  staff (id, name, duty, status_id)
values
  (5, 'bingo', 'acountant', 2);
insert into
  status (id, name)
values
  (1, 'active');
insert into
  status (id, name)
values
  (2, 'in-active');
insert into
  jobTitle (id, jobTitle)
values
  (1, 'ceo');
insert into
  jobTitle (id, jobTitle)
values
  (2, 'manager');
insert into
  jobTitle (id, jobTitle)
values
  (3, 'employee');
insert into
  office (id, place)
values
  (1, 'dk');
insert into
  office (id, place)
values
  (2, 'uk');
insert into
  office (id, place)
values
  (3, 'ind');
insert into
  staff_office (staff_id, office_id)
values
  (1, 1);
insert into
  staff_office (staff_id, office_id)
values
  (2, 1);
insert into
  staff_office (staff_id, office_id)
values
  (3, 2);
insert into
  staff_office (staff_id, office_id)
values
  (4, 3);
insert into
  staff_office (staff_id, office_id)
values
  (5, 2);
insert into
  staff_office (staff_id, office_id)
values
  (1, 3);
insert into
  staff_office (staff_id, office_id)
values
  (5, 3);
insert into
  staff_jobTitle (staff_id, jobTitle_id)
values
  (1, 1);
insert into
  staff_jobTitle (staff_id, jobTitle_id)
values
  (2, 2);
insert into
  staff_jobTitle (staff_id, jobTitle_id)
values
  (3, 1);
insert into
  staff_jobTitle (staff_id, jobTitle_id)
values
  (4, 2);
insert into
  staff_jobTitle (staff_id, jobTitle_id)
values
  (5, 3);
insert into
  staff_jobTitle (staff_id, jobTitle_id)
values
  (1, 3);
insert into
  staff_jobTitle (staff_id, jobTitle_id)
values
  (5, 3);