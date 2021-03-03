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
  `account_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `user_name` varchar(200) NOT NULL,
  `account_type` varchar(20) NOT NULL,
  `account_money` int(11) NOT NULL,
  `account_details` varchar(20) NOT NULL,
  `account_icon` varchar(20) NOT NULL,
  `create_time` datetime NOT NULL,
  `create_year` int(11) NOT NULL,
  `create_mouth` int(11) NOT NULL,
  `create_day` int(11) NOT NULL,
  `create_week` int(11) NOT NULL,
  PRIMARY KEY (`account_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

/*Data for the table `account_info` */

/*Table structure for table `manage_money_share` */

DROP TABLE IF EXISTS `manage_money_share`;

CREATE TABLE `manage_money_share` (
  `article_id` int(11) NOT NULL,
  `title` varchar(100) CHARACTER SET utf8 NOT NULL,
  `content` varchar(5000) CHARACTER SET utf8 NOT NULL,
  `create_time` datetime NOT NULL,
  `author` varchar(50) CHARACTER SET utf8 NOT NULL,
  `click_count` int(11) DEFAULT NULL,
  `follow` tinyint(1) NOT NULL,
  PRIMARY KEY (`article_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

/*Data for the table `manage_money_share` */

/*Table structure for table `user_info` */

DROP TABLE IF EXISTS `user_info`;

CREATE TABLE `user_info` (
  `user_id` int(11) NOT NULL,
  `user_name` varchar(200) NOT NULL,
  `user_password` varchar(15) NOT NULL,
  `user_phone` varchar(11) NOT NULL,
  `create_time` datetime NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

/*Data for the table `user_info` */

insert  into `user_info`(`user_id`,`user_name`,`user_password`,`user_phone`,`create_time`) values (1,'qw','123','12345678901','2021-03-03 21:57:46'),(7,'1234','1234','1234','2021-03-03 00:00:00');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
