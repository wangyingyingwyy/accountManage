/*
SQLyog Ultimate v12.08 (64 bit)
MySQL - 5.7.24 : Database - manage_money
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`manage_money` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `manage_money`;

/*Table structure for table `account_info` */

DROP TABLE IF EXISTS `account_info`;

CREATE TABLE `account_info` (
  `account_id` int(255) NOT NULL,
  `user_id` int(11) NOT NULL,
  `user_name` varchar(200) CHARACTER SET utf8 NOT NULL,
  `account_type` varchar(20) CHARACTER SET utf8 NOT NULL,
  `account_money` float DEFAULT NULL,
  `account_details` varchar(20) CHARACTER SET utf8 NOT NULL,
  `account_icon` varchar(20) CHARACTER SET utf8 NOT NULL,
  `create_time` datetime NOT NULL,
  `create_year` int(11) DEFAULT NULL,
  `create_month` int(11) DEFAULT NULL,
  `create_day` int(11) DEFAULT NULL,
  `create_week` int(11) DEFAULT NULL,
  PRIMARY KEY (`account_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

/*Data for the table `account_info` */

insert  into `account_info`(`account_id`,`user_id`,`user_name`,`account_type`,`account_money`,`account_details`,`account_icon`,`create_time`,`create_year`,`create_month`,`create_day`,`create_week`) values (172,1,'qw','income',100,'蔬菜','vegetables','2021-03-04 00:00:00',2021,1,1,1),(124,1,'qw','income',100,'蔬菜','vegetables','2021-03-04 00:00:00',2021,2,3,2),(187,1,'qw','outcome',-100,'蔬菜','vegetables','2021-03-04 00:00:00',2021,3,5,3),(106,1,'qw','outcome',-100,'蔬菜','vegetables','2021-03-04 00:00:00',2021,3,4,4),(127,1,'qw','outcome',-20,'日用','daily','2021-03-06 21:49:58',2021,3,6,6),(132,1,'qw','outcome',-40,'日用','daily','2022-01-14 22:48:57',2022,1,14,5),(145,212,'王莹莹','outcome',-30,'餐饮','eat','2021-03-07 12:26:11',2021,3,7,7),(123,283,'张','income',1000,'工资','salary','2021-03-07 12:29:09',2021,3,7,7),(135,1,'qw','income',1000,'工资','salary','2021-03-07 12:35:12',2021,3,7,7);

/*Table structure for table `follow_info` */

DROP TABLE IF EXISTS `follow_info`;

CREATE TABLE `follow_info` (
  `id` int(11) NOT NULL,
  `current_id` int(11) NOT NULL,
  `follow_id` int(11) NOT NULL,
  `create_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

/*Data for the table `follow_info` */

insert  into `follow_info`(`id`,`current_id`,`follow_id`,`create_time`) values (66,1,7,'2021-03-06 00:00:00');

/*Table structure for table `manage_money_share` */

DROP TABLE IF EXISTS `manage_money_share`;

CREATE TABLE `manage_money_share` (
  `article_id` float NOT NULL,
  `title` varchar(100) CHARACTER SET utf8 NOT NULL,
  `content` varchar(5000) CHARACTER SET utf8 NOT NULL,
  `create_time` datetime NOT NULL,
  `author` varchar(50) CHARACTER SET utf8 NOT NULL,
  `author_id` int(100) DEFAULT NULL,
  PRIMARY KEY (`article_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

/*Data for the table `manage_money_share` */

insert  into `manage_money_share`(`article_id`,`title`,`content`,`create_time`,`author`,`author_id`) values (580.164,'理财分享','理财分享','2021-03-04 00:00:00','zhangsan',12345),(98.6963,'理财分享','理财分享','2021-03-06 00:00:00','王莹莹',212),(91.9826,'理财分享','3月6日理财分享','2021-03-06 00:00:00','张',283),(31.3274,'理财分享','3月6日理财分享','2021-03-06 00:00:00','张',283),(43.515,'理财分享','3月6日理财分享','2021-03-06 00:00:00','王莹莹',212),(7,'理财分享','3月6日理财分享','2021-03-06 00:00:00','王莹莹',212);

/*Table structure for table `user_info` */

DROP TABLE IF EXISTS `user_info`;

CREATE TABLE `user_info` (
  `user_id` int(100) NOT NULL,
  `user_name` varchar(200) CHARACTER SET utf8 NOT NULL,
  `user_password` varchar(15) CHARACTER SET utf8 NOT NULL,
  `user_phone` varchar(11) CHARACTER SET utf8 NOT NULL,
  `create_time` datetime NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

/*Data for the table `user_info` */

insert  into `user_info`(`user_id`,`user_name`,`user_password`,`user_phone`,`create_time`) values (1,'qw','123','12345678901','2021-03-03 21:57:46'),(7,'1234','1234','1234','2021-03-03 00:00:00'),(212,'王莹莹','wangyy','15230136278','2021-03-06 00:00:00'),(283,'张','zhang','15502280576','2021-03-06 00:00:00');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
