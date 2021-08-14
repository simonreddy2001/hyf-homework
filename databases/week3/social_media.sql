CREATE Database socialMedia;
Use socialMedia;
create Table user (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255),
  `email` varchar(255),
  `password` varchar(255),
  `registration` datetime
);
create Table post (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `title` varchar(255),
  `content` varchar(255),
  `creation` datetime,
  `update` datetime,
  `user_id` int(10) unsigned,
  CONSTRAINT `fk_user_post` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
);
create Table comment(
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `content` varchar(255),
  `creation` datetime,
  `update` datetime,
  `user_id` int(10) unsigned,
  `post_id` int(10) unsigned,
  `parent_comment_id` int(10) unsigned,
  CONSTRAINT `fk_user_comment` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `fk_post_comment` FOREIGN KEY (`post_id`) REFERENCES `post` (`id`),
  CONSTRAINT `fk_parent_comment` FOREIGN KEY (`parent_comment_id`) REFERENCES `comment` (`id`)
);
create Table reaction(
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255)
);
create table post_reaction_user(
  `post_id` int(10) unsigned,
  `reaction_id` int(10) unsigned,
  `user_id` int(10) unsigned,
  PRIMARY KEY (`post_id`, `reaction_id`, `user_id`),
  CONSTRAINT `fk_user_post_reaction_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `fk_post_post_reaction_user` FOREIGN KEY (`post_id`) REFERENCES `post` (`id`),
  CONSTRAINT `fk_reaction_post_reaction_user` FOREIGN KEY (`reaction_id`) REFERENCES `reaction` (`id`)
);
create table comment_reaction_user(
  `comment_id` int(10) unsigned,
  `reaction_id` int(10) unsigned,
  `user_id` int(10) unsigned,
  PRIMARY KEY (`comment_id`, `reaction_id`, `user_id`),
  CONSTRAINT `fk_user_comment_reaction_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `fk_comment_comment_reaction_user` FOREIGN KEY (`comment_id`) REFERENCES `comment` (`id`),
  CONSTRAINT `fk_reaction_comment_reaction_user` FOREIGN KEY (`reaction_id`) REFERENCES `reaction` (`id`)
)