/*M!999999\- enable the sandbox mode */ 
-- MariaDB dump 10.19-11.5.2-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: slz
-- ------------------------------------------------------
-- Server version	11.5.2-MariaDB-ubu2404

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*M!100616 SET @OLD_NOTE_VERBOSITY=@@NOTE_VERBOSITY, NOTE_VERBOSITY=0 */;

--
-- Table structure for table `auth_group`
--

DROP TABLE IF EXISTS `auth_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_group` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group`
--

LOCK TABLES `auth_group` WRITE;
/*!40000 ALTER TABLE `auth_group` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_group_permissions`
--

DROP TABLE IF EXISTS `auth_group_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_group_permissions` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `group_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  KEY `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group_permissions`
--

LOCK TABLES `auth_group_permissions` WRITE;
/*!40000 ALTER TABLE `auth_group_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_permission`
--

DROP TABLE IF EXISTS `auth_permission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_permission` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `content_type_id` int(11) NOT NULL,
  `codename` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`),
  CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_permission`
--

LOCK TABLES `auth_permission` WRITE;
/*!40000 ALTER TABLE `auth_permission` DISABLE KEYS */;
INSERT INTO `auth_permission` VALUES
(1,'Can add log entry',1,'add_logentry'),
(2,'Can change log entry',1,'change_logentry'),
(3,'Can delete log entry',1,'delete_logentry'),
(4,'Can view log entry',1,'view_logentry'),
(5,'Can add permission',2,'add_permission'),
(6,'Can change permission',2,'change_permission'),
(7,'Can delete permission',2,'delete_permission'),
(8,'Can view permission',2,'view_permission'),
(9,'Can add group',3,'add_group'),
(10,'Can change group',3,'change_group'),
(11,'Can delete group',3,'delete_group'),
(12,'Can view group',3,'view_group'),
(13,'Can add user',4,'add_user'),
(14,'Can change user',4,'change_user'),
(15,'Can delete user',4,'delete_user'),
(16,'Can view user',4,'view_user'),
(17,'Can add content type',5,'add_contenttype'),
(18,'Can change content type',5,'change_contenttype'),
(19,'Can delete content type',5,'delete_contenttype'),
(20,'Can view content type',5,'view_contenttype'),
(21,'Can add session',6,'add_session'),
(22,'Can change session',6,'change_session'),
(23,'Can delete session',6,'delete_session'),
(24,'Can view session',6,'view_session'),
(25,'Can add blacklisted token',7,'add_blacklistedtoken'),
(26,'Can change blacklisted token',7,'change_blacklistedtoken'),
(27,'Can delete blacklisted token',7,'delete_blacklistedtoken'),
(28,'Can view blacklisted token',7,'view_blacklistedtoken'),
(29,'Can add outstanding token',8,'add_outstandingtoken'),
(30,'Can change outstanding token',8,'change_outstandingtoken'),
(31,'Can delete outstanding token',8,'delete_outstandingtoken'),
(32,'Can view outstanding token',8,'view_outstandingtoken'),
(33,'Can add category',9,'add_category'),
(34,'Can change category',9,'change_category'),
(35,'Can delete category',9,'delete_category'),
(36,'Can view category',9,'view_category'),
(37,'Can add post',10,'add_post'),
(38,'Can change post',10,'change_post'),
(39,'Can delete post',10,'delete_post'),
(40,'Can view post',10,'view_post'),
(41,'Can add statement',11,'add_statement'),
(42,'Can change statement',11,'change_statement'),
(43,'Can delete statement',11,'delete_statement'),
(44,'Can view statement',11,'view_statement'),
(45,'Can add event',12,'add_event'),
(46,'Can change event',12,'change_event'),
(47,'Can delete event',12,'delete_event'),
(48,'Can view event',12,'view_event'),
(49,'Can add subscriber',13,'add_subscriber'),
(50,'Can change subscriber',13,'change_subscriber'),
(51,'Can delete subscriber',13,'delete_subscriber'),
(52,'Can view subscriber',13,'view_subscriber'),
(53,'Can add timeline event',14,'add_timelineevent'),
(54,'Can change timeline event',14,'change_timelineevent'),
(55,'Can delete timeline event',14,'delete_timelineevent'),
(56,'Can view timeline event',14,'view_timelineevent'),
(57,'Can add carousel image',15,'add_carouselimage'),
(58,'Can change carousel image',15,'change_carouselimage'),
(59,'Can delete carousel image',15,'delete_carouselimage'),
(60,'Can view carousel image',15,'view_carouselimage');
/*!40000 ALTER TABLE `auth_permission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user`
--

DROP TABLE IF EXISTS `auth_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `password` varchar(128) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(150) NOT NULL,
  `first_name` varchar(150) NOT NULL,
  `last_name` varchar(150) NOT NULL,
  `email` varchar(254) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user`
--

LOCK TABLES `auth_user` WRITE;
/*!40000 ALTER TABLE `auth_user` DISABLE KEYS */;
INSERT INTO `auth_user` VALUES
(1,'pbkdf2_sha256$870000$HFuWrA039yGBD4FgT7tbuZ$xvXUALYI9bn934WqUYettK42VEKNL4DqbvgUj6H4OYc=','2024-10-28 16:14:10.917457',1,'admin','','','adilkhn@gmail.com',1,1,'2024-10-06 17:31:43.856695'),
(2,'pbkdf2_sha256$870000$hPoySkBgZpM3MaEbwPiqhL$VtxHT2RQ+VIaLM3WZ8zDNUuRQ5liQ+cu9roVWNSAhN8=','2024-10-30 17:09:30.513797',0,'amla','','','',1,1,'2024-10-23 23:04:51.000000');
/*!40000 ALTER TABLE `auth_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user_groups`
--

DROP TABLE IF EXISTS `auth_user_groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_user_groups` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `group_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_user_groups_user_id_group_id_94350c0c_uniq` (`user_id`,`group_id`),
  KEY `auth_user_groups_group_id_97559544_fk_auth_group_id` (`group_id`),
  CONSTRAINT `auth_user_groups_group_id_97559544_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  CONSTRAINT `auth_user_groups_user_id_6a12ed8b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user_groups`
--

LOCK TABLES `auth_user_groups` WRITE;
/*!40000 ALTER TABLE `auth_user_groups` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user_groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user_user_permissions`
--

DROP TABLE IF EXISTS `auth_user_user_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_user_user_permissions` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_user_user_permissions_user_id_permission_id_14a6b632_uniq` (`user_id`,`permission_id`),
  KEY `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user_user_permissions`
--

LOCK TABLES `auth_user_user_permissions` WRITE;
/*!40000 ALTER TABLE `auth_user_user_permissions` DISABLE KEYS */;
INSERT INTO `auth_user_user_permissions` VALUES
(1,2,49),
(2,2,51),
(3,2,52),
(4,2,53),
(5,2,54),
(6,2,55),
(7,2,57),
(8,2,58),
(9,2,59),
(10,2,60);
/*!40000 ALTER TABLE `auth_user_user_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_admin_log`
--

DROP TABLE IF EXISTS `django_admin_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `django_admin_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext DEFAULT NULL,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint(5) unsigned NOT NULL CHECK (`action_flag` >= 0),
  `change_message` longtext NOT NULL,
  `content_type_id` int(11) DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  KEY `django_admin_log_user_id_c564eba6_fk_auth_user_id` (`user_id`),
  CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  CONSTRAINT `django_admin_log_user_id_c564eba6_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_admin_log`
--

LOCK TABLES `django_admin_log` WRITE;
/*!40000 ALTER TABLE `django_admin_log` DISABLE KEYS */;
INSERT INTO `django_admin_log` VALUES
(1,'2024-10-18 19:31:21.250629','1','admin',2,'[{\"changed\": {\"fields\": [\"password\"]}}]',4,1),
(2,'2024-10-23 23:04:52.261457','2','amla',1,'[{\"added\": {}}]',4,1),
(3,'2024-10-23 23:06:05.573759','2','amla',2,'[{\"changed\": {\"fields\": [\"password\"]}}]',4,1),
(4,'2024-10-23 23:07:20.478131','2','amla',2,'[{\"changed\": {\"fields\": [\"Staff status\"]}}]',4,1),
(5,'2024-10-23 23:09:02.200740','2','amla',2,'[{\"changed\": {\"fields\": [\"User permissions\"]}}]',4,1),
(6,'2024-10-23 23:19:57.922125','8','Event object (8)',3,'',12,1),
(7,'2024-10-24 19:22:45.614678','1','Event object (1)',2,'[{\"changed\": {\"fields\": [\"End date\", \"End time\"]}}]',12,1),
(8,'2024-10-26 18:23:32.801483','1','TimelineEvent object (1)',1,'[{\"added\": {}}]',14,1),
(9,'2024-10-26 18:23:57.975196','1','TimelineEvent object (1)',2,'[{\"changed\": {\"fields\": [\"Title\"]}}]',14,1),
(10,'2024-10-26 18:29:08.791580','2','TimelineEvent object (2)',1,'[{\"added\": {}}]',14,1),
(11,'2024-10-26 18:29:31.295694','3','TimelineEvent object (3)',1,'[{\"added\": {}}]',14,1),
(12,'2024-10-28 15:51:38.230716','2','amla',2,'[{\"changed\": {\"fields\": [\"password\"]}}]',4,1),
(13,'2024-10-28 15:52:01.505162','2','amla',2,'[{\"changed\": {\"fields\": [\"User permissions\"]}}]',4,1),
(14,'2024-10-28 15:53:26.194459','2','amla',2,'[{\"changed\": {\"fields\": [\"password\"]}}]',4,1),
(15,'2024-10-28 17:53:39.062107','2','amla',2,'[{\"changed\": {\"fields\": [\"User permissions\"]}}]',4,1),
(16,'2024-10-28 17:54:51.575433','1','CarouselImage object (1)',1,'[{\"added\": {}}]',15,1),
(17,'2024-10-28 17:58:50.020721','1','CarouselImage object (1)',2,'[{\"changed\": {\"fields\": [\"Url\"]}}]',15,1),
(18,'2024-10-28 17:59:09.139420','1','CarouselImage object (1)',2,'[]',15,1),
(19,'2024-10-28 18:00:58.118888','1','CarouselImage object (1)',2,'[{\"changed\": {\"fields\": [\"Url\"]}}]',15,1),
(20,'2024-10-30 19:45:56.947310','1','TimelineEvent object (1)',3,'',14,2),
(21,'2024-10-30 19:45:56.947344','2','TimelineEvent object (2)',3,'',14,2),
(22,'2024-10-30 19:45:56.947357','3','TimelineEvent object (3)',3,'',14,2),
(23,'2024-10-30 19:46:45.061286','4','TimelineEvent object (4)',1,'[{\"added\": {}}]',14,2),
(24,'2024-10-30 20:24:36.632115','2','CarouselImage object (2)',1,'[{\"added\": {}}]',15,2),
(25,'2024-10-31 17:17:53.053746','3','CarouselImage object (3)',1,'[{\"added\": {}}]',15,2),
(26,'2024-10-31 17:19:26.074577','4','CarouselImage object (4)',1,'[{\"added\": {}}]',15,2),
(27,'2024-11-02 16:56:47.140955','4','TimelineEvent object (4)',2,'[{\"changed\": {\"fields\": [\"Exclude month\"]}}]',14,1);
/*!40000 ALTER TABLE `django_admin_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_content_type`
--

DROP TABLE IF EXISTS `django_content_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `django_content_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_content_type`
--

LOCK TABLES `django_content_type` WRITE;
/*!40000 ALTER TABLE `django_content_type` DISABLE KEYS */;
INSERT INTO `django_content_type` VALUES
(1,'admin','logentry'),
(3,'auth','group'),
(2,'auth','permission'),
(4,'auth','user'),
(5,'contenttypes','contenttype'),
(6,'sessions','session'),
(15,'slz','carouselimage'),
(9,'slz','category'),
(12,'slz','event'),
(10,'slz','post'),
(11,'slz','statement'),
(13,'slz','subscriber'),
(14,'slz','timelineevent'),
(7,'token_blacklist','blacklistedtoken'),
(8,'token_blacklist','outstandingtoken');
/*!40000 ALTER TABLE `django_content_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_migrations`
--

DROP TABLE IF EXISTS `django_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `django_migrations` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_migrations`
--

LOCK TABLES `django_migrations` WRITE;
/*!40000 ALTER TABLE `django_migrations` DISABLE KEYS */;
INSERT INTO `django_migrations` VALUES
(1,'contenttypes','0001_initial','2024-10-06 17:29:32.925886'),
(2,'auth','0001_initial','2024-10-06 17:29:33.233714'),
(3,'admin','0001_initial','2024-10-06 17:29:33.296665'),
(4,'admin','0002_logentry_remove_auto_add','2024-10-06 17:29:33.305029'),
(5,'admin','0003_logentry_add_action_flag_choices','2024-10-06 17:29:33.312908'),
(6,'contenttypes','0002_remove_content_type_name','2024-10-06 17:29:33.358941'),
(7,'auth','0002_alter_permission_name_max_length','2024-10-06 17:29:33.377543'),
(8,'auth','0003_alter_user_email_max_length','2024-10-06 17:29:33.396958'),
(9,'auth','0004_alter_user_username_opts','2024-10-06 17:29:33.404972'),
(10,'auth','0005_alter_user_last_login_null','2024-10-06 17:29:33.431206'),
(11,'auth','0006_require_contenttypes_0002','2024-10-06 17:29:33.432818'),
(12,'auth','0007_alter_validators_add_error_messages','2024-10-06 17:29:33.440238'),
(13,'auth','0008_alter_user_username_max_length','2024-10-06 17:29:33.459001'),
(14,'auth','0009_alter_user_last_name_max_length','2024-10-06 17:29:33.475868'),
(15,'auth','0010_alter_group_name_max_length','2024-10-06 17:29:33.493282'),
(16,'auth','0011_update_proxy_permissions','2024-10-06 17:29:33.501698'),
(17,'auth','0012_alter_user_first_name_max_length','2024-10-06 17:29:33.518176'),
(18,'sessions','0001_initial','2024-10-06 17:29:33.543337'),
(19,'slz','0001_initial','2024-10-06 17:29:33.623754'),
(20,'slz','0002_slz','2024-10-06 17:29:33.636128'),
(21,'slz','0003_remove_post_categories_post_author','2024-10-06 17:29:33.665426'),
(22,'slz','0004_slz','2024-10-06 17:29:33.679358'),
(23,'slz','0005_statement','2024-10-06 17:29:33.688657'),
(24,'slz','0006_alter_statement_release_date','2024-10-06 17:29:33.691590'),
(25,'slz','0007_post_is_approved','2024-10-06 17:29:33.713261'),
(26,'slz','0008_alter_post_is_approved','2024-10-06 17:29:33.716067'),
(27,'slz','0009_event','2024-10-06 17:29:33.727374'),
(28,'slz','0010_remove_event_end_remove_event_start_event_end_date_and_more','2024-10-06 17:29:33.819220'),
(29,'slz','0011_event_start_date','2024-10-06 17:29:33.841807'),
(30,'slz','0012_alter_event_end_date_alter_event_end_time_and_more','2024-10-06 17:29:33.907982'),
(31,'token_blacklist','0001_initial','2024-10-06 17:29:33.980901'),
(32,'token_blacklist','0002_outstandingtoken_jti_hex','2024-10-06 17:29:34.005989'),
(33,'token_blacklist','0003_auto_20171017_2007','2024-10-06 17:29:34.023211'),
(34,'token_blacklist','0004_auto_20171017_2013','2024-10-06 17:29:34.070525'),
(35,'token_blacklist','0005_remove_outstandingtoken_jti','2024-10-06 17:29:34.093988'),
(36,'token_blacklist','0006_auto_20171017_2113','2024-10-06 17:29:34.113368'),
(37,'token_blacklist','0007_auto_20171017_2214','2024-10-06 17:29:34.227140'),
(38,'token_blacklist','0008_migrate_to_bigautofield','2024-10-06 17:29:34.344088'),
(39,'token_blacklist','0010_fix_migrate_to_bigautofield','2024-10-06 17:29:34.358153'),
(40,'token_blacklist','0011_linearizes_history','2024-10-06 17:29:34.359959'),
(41,'token_blacklist','0012_alter_outstandingtoken_user','2024-10-06 17:29:34.368919'),
(42,'slz','0013_subscriber','2024-10-08 13:13:38.246600'),
(43,'slz','0014_alter_subscriber_email','2024-10-08 13:13:38.277893'),
(44,'slz','0015_timelineevent','2024-10-26 18:16:34.063955'),
(45,'slz','0016_carouselimage','2024-10-28 17:40:56.837319'),
(46,'slz','0017_carouselimage_created_on_carouselimage_sequence','2024-10-28 17:40:56.924606'),
(47,'slz','0018_timelineevent_exlude_date_timelineevent_exlude_month','2024-11-02 16:56:24.407071'),
(48,'slz','0019_rename_exlude_date_timelineevent_exclude_date_and_more','2024-11-02 16:56:24.434640');
/*!40000 ALTER TABLE `django_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_session`
--

DROP TABLE IF EXISTS `django_session`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL,
  PRIMARY KEY (`session_key`),
  KEY `django_session_expire_date_a5c62663` (`expire_date`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_session`
--

LOCK TABLES `django_session` WRITE;
/*!40000 ALTER TABLE `django_session` DISABLE KEYS */;
INSERT INTO `django_session` VALUES
('3oj2n9w4jjzdsl5q6adksy6ffptjaffs','.eJxVjEEOwiAQRe_C2hCYSKEu3XsGMsMMUjWQlHbVeHdt0oVu_3vvbyriupS4dpnjxOqirDr9boTpKXUH_MB6bzq1uswT6V3RB-361lhe18P9OyjYy7dOmAjOQbJn63weBxvQoHjybgRwgVOw3jkmyIbIcGAcICeXDQRhEPX-APkzOJU:1t27Fi:4MpGwwCm3HVKhkLIye6KG4QRSdG-waSgmr4t5jkO9NY','2024-11-02 11:04:10.137545'),
('hmu484h5lbrslgsr4qoihzx03os0k8j7','.eJxVjEEOwiAQRe_C2hAGgRaX7j0DGYZBqgaS0q6MdzckXej2v_f-WwTctxL2zmtYkrgILU6_W0R6ch0gPbDem6RWt3WJcijyoF3eWuLX9XD_Dgr2Mmo9eULHAOhZRWeVZwPJszaoolJxNpxzVnCegWgyFnJmQ5YZdHaJxOcL7do4hQ:1t6CCI:5gvDe79VnwkYIYfC0Ef8BAcpf4mIBuycHIHNnBZrqvs','2024-11-13 17:09:30.522698'),
('k8835glxtelazkmvjlkhik6cw4kjmp38','.eJxVjEEOwiAQRe_C2hCYSKEu3XsGMsMMUjWQlHbVeHdt0oVu_3vvbyriupS4dpnjxOqirDr9boTpKXUH_MB6bzq1uswT6V3RB-361lhe18P9OyjYy7dOmAjOQbJn63weBxvQoHjybgRwgVOw3jkmyIbIcGAcICeXDQRhEPX-APkzOJU:1t5SNe:hBUee1o9jcK3PdTbIhjyFDBcaQwe0JHGOGcRgeFH35Y','2024-11-11 16:14:10.920154'),
('ktdq0q2y4ige75kqj9qxoge1of2ngulw','.eJxVjDsOwyAQBe9CHaEFr4FNmd5nQHyDkwgkY1dR7h5bcpG0b2bem1m3rcVuPS12juzKJLv8bt6FZ6oHiA9X742HVtdl9vxQ-Ek7n1pMr9vp_h0U18tea22AECCHQeWsQaA3mbTEUScxKIyZjAqSBAhJkLQT5CIlhD0cFXr2-QKu6jZx:1t4DIG:ug_1lRWkgjzmWtbDtpp0Nl4EEqIKvnBrXiZPwL2a0_w','2024-11-08 05:55:28.945010');
/*!40000 ALTER TABLE `django_session` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `slz_carouselimage`
--

DROP TABLE IF EXISTS `slz_carouselimage`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `slz_carouselimage` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `title` longtext NOT NULL,
  `url` longtext NOT NULL,
  `created_on` datetime(6) NOT NULL,
  `sequence` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `sequence` (`sequence`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `slz_carouselimage`
--

LOCK TABLES `slz_carouselimage` WRITE;
/*!40000 ALTER TABLE `slz_carouselimage` DISABLE KEYS */;
INSERT INTO `slz_carouselimage` VALUES
(1,'SOAS Liberated Zone 4 Gaza','https://i.postimg.cc/cJ72zVC4/soas-lib-zone-4-gaza.jpg','2024-10-28 17:54:51.574518',1),
(2,'May SLZ','https://i.postimg.cc/sD2n0bFd/slz.png','2024-10-30 20:24:36.631441',2),
(3,'SLZ 1.0','https://i.postimg.cc/VvjJBpJT/slz-copy.png','2024-10-31 17:17:53.052917',3),
(4,'Globalise the student revolution','https://i.postimg.cc/dtbW0yFV/globalise.png','2024-10-31 17:19:26.073489',4);
/*!40000 ALTER TABLE `slz_carouselimage` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `slz_category`
--

DROP TABLE IF EXISTS `slz_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `slz_category` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `slz_category`
--

LOCK TABLES `slz_category` WRITE;
/*!40000 ALTER TABLE `slz_category` DISABLE KEYS */;
INSERT INTO `slz_category` VALUES
(1,'Statement');
/*!40000 ALTER TABLE `slz_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `slz_event`
--

DROP TABLE IF EXISTS `slz_event`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `slz_event` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `title` longtext NOT NULL,
  `allDay` tinyint(1) NOT NULL,
  `created_on` datetime(6) NOT NULL,
  `last_modified` datetime(6) NOT NULL,
  `end_date` date DEFAULT NULL,
  `end_time` time(6) DEFAULT NULL,
  `start_time` time(6) DEFAULT NULL,
  `start_date` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `slz_event`
--

LOCK TABLES `slz_event` WRITE;
/*!40000 ALTER TABLE `slz_event` DISABLE KEYS */;
INSERT INTO `slz_event` VALUES
(1,'HONOURING OUR MARTYRS',0,'2024-10-06 21:30:14.619807','2024-10-24 19:22:45.612736','2024-10-07','13:00:00.000000','12:30:00.000000','2024-10-07'),
(4,'test',1,'2024-10-08 13:19:37.808984','2024-10-08 13:19:37.809007',NULL,NULL,NULL,'2024-10-06'),
(5,'test',1,'2024-10-08 13:19:49.369154','2024-10-08 13:19:49.369181',NULL,NULL,NULL,'2024-10-06'),
(6,'test',0,'2024-10-08 13:19:59.301377','2024-10-08 13:19:59.301400',NULL,NULL,NULL,'2024-10-06'),
(7,'test',1,'2024-10-08 13:20:11.629916','2024-10-08 13:20:11.629938',NULL,NULL,NULL,'2024-10-06');
/*!40000 ALTER TABLE `slz_event` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `slz_post`
--

DROP TABLE IF EXISTS `slz_post`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `slz_post` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `body` longtext NOT NULL,
  `created_on` datetime(6) NOT NULL,
  `last_modified` datetime(6) NOT NULL,
  `author` longtext NOT NULL,
  `is_approved` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `slz_post`
--

LOCK TABLES `slz_post` WRITE;
/*!40000 ALTER TABLE `slz_post` DISABLE KEYS */;
INSERT INTO `slz_post` VALUES
(1,'first_post','this is the first post','2024-10-06 17:29:33.676971','2024-10-28 16:12:59.834637','adil',1),
(3,'Letter from Gaza','Dear Mustafa,\n\nI have now received your letter, in which you tell me that you\'ve done everything necessary to enable me to stay with you in Sacramento. I\'ve also received news that I have been accepted in the department of Civil Engineering in the University of California. I must thank you for everything, my friend. But it\'ll strike you as rather odd when I proclaim this news to you -- and make no doubt about it, I feel no hesitation at all, in fact I am pretty well positive that I have never seen things so clearly as I do now. No, my friend, I have changed my mind. I won\'t follow you to \"the land where there is greenery, water and lovely faces\" as you wrote. No, I\'ll stay here, and I won\'t ever leave.\n\nI am really upset that our lives won\'t continue to follow the same course, Mustafa. For I can almost hear you reminding me of our vow to go on together, and of the way we used to shout: \"We\'ll get rich!\" But there\'s nothing I can do, my friend. Yes, I still remember the day when I stood in the hall of Cairo airport, pressing your hand and staring at the frenzied motor. At that moment everything was rotating in time with the ear-splitting motor, and you stood in front of me, your round face silent.\n\nYour face hadn\'t changed from the way it used to be when you were growing up in the Shajiya quarter of Gaza, apart from those slight wrinkles. We grew up together, understanding each other completely and we promised to go on together till the end. But...\n\n\"There\'s a quarter of an hour left before the plane takes off. Don\'t look into space like that. Listen! You\'ll go to Kuwait next year, and you\'ll save enough from your salary to uproot you from Gaza and transplant you to California. We started off together and we must carry on. . .\"\n\nAt that moment I was watching your rapidly moving lips. That was always your manner of speaking, without commas or full stops. But in an obscure way I felt that you were not completely happy with your flight. You couldn\'t give three good reasons for it. I too suffered from this wrench, but the clearest thought was: why don\'t we abandon this Gaza and flee? Why don\'t we? Your situation had begun to improve, however. The ministry of Education in Kuwait had given you a contract though it hadn\'t given me one. In the trough of misery where I existed you sent me small sums of money. You wanted me to consider them as loans. because you feared that I would feel slighted. You knew my family circumstances in and out; you knew that my meagre salary in the UNRWA schools was inadequate to support my mother, my brother\'s widow and her four children.\n\n\"Listen carefully. Write to me every day... every hour... every minute! The plane\'s just leaving. Farewell! Or rather, till we meet again!\"\n\nYour cold lips brushed my cheek, you turned your face away from me towards the plane, and when you looked at me again I could see your tears.\n\nLater the Ministry of Education in Kuwait gave me a contract. There\'s no need to repeat to you how my life there went in detail. I always wrote to you about everything. My life there had a gluey, vacuous quality as though I were a small oyster, lost in oppressive loneliness, slowly struggling with a future as dark as the beginning of the night, caught in a rotten routine, a spewed-out combat with time. Everything was hot and sticky. There was a slipperiness to my whole life, it was all a hankering for the end of the month.\n\n\n\n<img height=\"322\" width=\"455\" alt=\"Ghassan Khanafani\" title=\"Ghassan Khanafani\" src=\"https://agencemediapalestine.fr/wp-content/uploads/2019/10/Ghassan_Kanafani.jpg\" />\n\n\n\nIn the middle of the year, that year, the Jews bombarded the central district of Sabha and attacked Gaza, our Gaza, with bombs and flame-throwers. That event might have made some change in my routine, but there was nothing for me to take much notice of; I was going to leave. this Gaza behind me and go to California where I would live for myself, my own self which had suffered so long. I hated Gaza and its inhabitants. Everything in the amputated town reminded me of failed pictures painted in grey by a sick man. Yes, I would send my mother and my brother\'s widow and her children a meagre sum to help them to live, but I would liberate myself from this last tie too, there in green California, far from the reek of defeat which for seven years had filled my nostrils. The sympathy which bound me to my brother\'s children, their mother and mine would never be enough to justify my tragedy in taking this perpendicu lar dive. It mustn\'t drag me any further down than it already had. I must flee!\n\nYou know these feelings, Mustafa, because you\'ve really experienced them. What is this ill-defined tie we had with Gaza which blunted our enthusiasm for flight? Why didn\'t we analyse the matter in such away as to give it a clear meaning? Why didn\'t we leave this defeat with its wounds behind us and move on to a brighter future which would give us deeper consolation? Why? We didn\'t exactly know.\n\nWhen I went on holiday in June and assembled all my possessions, longing for the sweet departure, the start towards those little things which give life a nice, bright meaning, I found Gaza just as I had known it, closed like the introverted lining of a rusted snail-shell thrown up by the waves on the sticky, sandy shore by the slaughter-house. This Gaza was more cramped than the mind of a sleeper in the throes of a fearful nightmare, with its narrow streets which had their bulging balconies...this Gaza! But what are the obscure causes that draw a man to his family, his house, his memories, as a spring draws a small flock of mountain goats? I don\'t know. All I know is that I went to my mother in our house that morning. When I arrived my late brother\'s wife met me there and asked me, weeping, if I would do as her wounded daughter, Nadia, in Gaza hospital wished and visit her that evening. Do you know Nadia, my brother\'s beautiful thirteen-year-old daughter?\n\nThat evening I bought a pound of apples and set out for the hospital to visit Nadia. I knew that there was something about it that my mother and my sister-in-law were hiding from me, something which their tongues could not utter, something strange which I could not put my finger on. I loved Nadia from habit, the same habit that made me love all that generation which had been so brought up on defeat and displacement that it had come to think that a happy life was a kind of social deviation.\n\nWhat happened at that moment? I don\'t know. I entered the white room very calm. Ill children have something of saintliness, and how much more so if the child is ill as result of cruel, painful wounds. Nadia was lying on her bed, her back propped up on a big pillow over which her hair was spread like a thick pelt. There was profound silence in her wide eyes and a tear always shining in the depths of her black pupils. Her face was calm and still but eloquent as the face of a tortured prophet might be. Nadia was still a child, but she seemed more than a child, much more, and older than a child, much older.\n\n\"Nadia!\"\n\nI\'ve no idea whether I was the one who said it, or whether it was someone else behind me. But she raised her eyes to me and I felt them dissolve me like a piece of sugar that had fallen into a hot cup of tea. \'\n\nTogether with her slight smile I heard her voice. \"Uncle! Have you just come from Kuwait?\"\n\nHer voice broke in her throat, and she raised herself with the help of her hands and stretched out her neck towards me. I patted her back and sat down near her.\n\n\"Nadia! I\'ve brought you presents from Kuwait, lots of presents. I\'ll wait till you can leave your bed, completely well and healed, and you\'ll come to my house and I\'ll give them to you. I\'ve bought you the red trousers you wrote and asked me for. Yes, I\'ve bought them.\"\n\nIt was a lie, born of the tense situation, but as I uttered it I felt that I was speaking the truth for the first time. Nadia trembled as though she had an electric shock and lowered her head in a terrible silence. I felt her tears wetting the back of my hand.\n\n\"Say something, Nadia! Don\'t you want the red trousers?\" She lifted her gaze to me and made as if to speak, but then she stopped, gritted her teeth and I heard her voice again, coming from faraway.\n\n\"Uncle!\"\n\nShe stretched out her hand, lifted the white coverlet with her fingers and pointed to her leg, amputated from the top of the thigh.\n\nMy friend ... Never shall I forget Nadia\'s leg, amputated from the top of the thigh. No! Nor shall I forget the grief which had moulded her face and merged into its traits for ever. I went out of the hospital in Gaza that day, my hand clutched in silent derision on the two pounds I had brought with me to give Nadia. The blazing sun filled the streets with the colour of blood. And Gaza was brand new, Mustafa! You and I never saw it like this. The stone piled up at the beginning of the Shajiya quarter where we lived had a meaning, and they seemed to have been put there for no other reason but to explain it. This Gaza in which we had lived and with whose good people we had spent seven years of defeat was something new. It seemed to me just a beginning. I don\'t know why I thought it was just a beginning. I imagined that the main street that I walked along on the way back home was only the beginning of a long, long road leading to Safad. Everything in this Gaza throbbed with sadness which was not confined to weeping. It was a challenge: more than that it was something like reclamation of the amputated leg!\n\nI went out into the streets of Gaza, streets filled with blinding sunlight. They told me that Nadia had lost her leg when she threw herself on top of her little brothers and sisters to protect them from the bombs and flames that had fastened their claws into the house. Nadia could have saved herself, she could have run away, rescued her leg. But she didn\'t.\n\nWhy?\n\nNo, my friend, I won\'t come to Sacramento, and I\'ve no regrets. No, and nor will I finish what we began together in childhood. This obscure feeling that you had as you left Gaza, this small feeling must grow into a giant deep within you. It must expand, you must seek it in order to find yourself, here among the ugly debris of defeat.\n\nI won\'t come to you. But you, return to us! Come back, to learn from Nadia\'s leg, amputated from the top of the thigh, what life is and what existence is worth.\n\nCome back, my friend! We are all waiting for you.','2024-10-07 04:30:23.651891','2024-10-07 04:33:44.784272','Ghassan Khanafani',1),
(4,'Honourary Student In Deir Al Balah, Gaza','Haitham Gbreel is a 22 year old nursing student from Gaza who studied nursing at Al Aqsa University in Gaza.The Zionist Entity’s genocidal campaign completely destroyed Gaza’s university infrastructure. This is a deliberate attempt by the Zionist Entity to try to attack all forms of education in Gaza in order to try to ethnically cleanse Palestinian history and heritage. Ever since the beginning of the genocide, countless homes have been destroyed including Haitham’s, he now currently lives with his family in tents in Central Gaza, in Deir Al Balah. Deir Al Balah is currently being targeted by the Zionist Entity and multiple evacuation orders have been issued despite the fact that there is nowhere safe to go too. Haitham’s siblings can no longer go to school as the school year ended early due to the massacres where tens of thousands of children were killed by the Zionist Entity and school infrastructure being destroyed. Haitham’s father cannot work due to the ongoing genocide, and his mother has rheumatic disease putting her in an extremely vulnerable position. Haitham has been a friend of the students at SOAS, specifically those of the SOAS Liberated Zone for Gaza. His presence has been so important for SOAS students, teaching us about his experiences in Gaza and he motivates students as part of the global student movement to continue to take action to hold institutions such as SOAS accountable for their crimes against the Palestinian people. His calls with students and his spirit have uplifted the students of SOAS, inspiring us with his steadfastness. Haitham and his friends have been spreading joy to the kids of Gaza and recently preparing and providing them with packs of aid that include food and drinks, despite the fact that there are little to no resources, in Gaza currently. Haitham, his family and friends still remain in Deir Al Balah despite evacuation orders, and are determined to remain steadfast. We draw our strength and commitment to the Palestinian struggle from people like Haitham. Haitham’s friends have been martyred and we will continue to honour them and highlight them on campus. Haitham is an inspiration to all students and hopes to continue his studies in the UK in nursing. The SOAS Liberated Zone for Gaza has been raising funds to try to help him and his family evacuate safely out of Gaza\n\n\n\n<img height=\"425\" width=\"340\" src=\"https://instagram.flhe7-1.fna.fbcdn.net/v/t39.30808-6/450897066_17853535932230351_8890579024096260360_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.flhe7-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=l1FlMA12ZsQQ7kNvgEQQxrL&_nc_gid=2f27c3031de743418a5cb9f4d6b2977f&edm=ACpohRwAAAAA&ccb=7-5&ig_cache_key=MzQxMTU1OTgzODU4MTQ0NzIwOA%3D%3D.3-ccb7-5&oh=00_AYCPC_PghCjNkm8uA5KnF7bFZODOZAmmQTngYm7PljLFPw&oe=6708143B&_nc_sid=2d3a3f\" />','2024-10-07 04:35:08.015841','2024-10-07 04:35:13.163320','Anonymous',1),
(5,'Welcome to SOAS Graduation 2024. Funded by apartheid and genocide','These pages are normally filled with congratulations and pride. Not this year. We are disgusted at the ceremony performed by SOAS, an institution which, 11 months into the latest stage of genocide against the Palestinian people, still fails to end their complicity. There can be no celebration for an education drenched in the blood of the Palestinian people. Let us be clear: through their mismangement of the institution, SOAS management have made all of us complicit in genocide. SOAS was founded in 1916 as a tool of empire, and continues in this tradition today. SOAS trains young people to act as agents of imperialism, coated with a veneer of decolonial language and illusions of social democracy. We are taught to bring learned ‘expertise’ on the global South into state programs, development organisations, banks, policy institutions... all these have failed to prevent, and some directly contribute to the genocide we are seeing in Palestine. This university fails to prepare students for the challenges we face in the world today. The alliance between SOAS’ management and the criminals profiting from war and genocide is exemplified through the institutions investments and partnerships. Data released in May 2024 showed over £6million invested in companies directly profiting from the genocide and settler colonial project being perpetrated against the Palestinian people. This includes investments in Albemarle, that produces and supplies white phosphorus to the terrorist Zionist Entity. Despite professing about histories of colonialism and slavery, SOAS continues to bank with Barclays, well known to have built their wealth through enslavement, a legacy which continues with their bankrolling of war and genocide today. When it comes to academic partnerships, students have been demanding for years that SOAS break ties with Haifa University. This institution, built on stolen Palestinian land, trains soldiers for the IOF, whilst awarding them a university degree. SOAS has enmeshed itself in the infrastructure of genocide; graduation here is a mark of shame on all of us. SOAS may once have had a reputation as a space where students develop critical attitudes, and push education forwards. This is certainly no longer true. Current Director, Adam Habib, explicitly stated his intention to ‘change the institutional culture’ in the last few years, creating an increasingly authoritarian environment on campus. In the last 3 years, bailiffs have been called 3 times to remove students from campus; whilst this ceremony takes place, 7 students are banned from campus, one of whom has been permanently excluded, for holding management accountable for the school’s continuing complicity in genocide. This repression has extended to the students union, where 2 of the 4 elected officers for the coming year were dismissed on their first day, without any warning or due process. These shifts should be deeply alarming, and set a dangerous precedent for the legacy of this cohort of students. We find ourselves at a critical juncture: to continue with our heads in the sand, accepting the awards and accolades of these rotten institutions? Or to look elsewhere, to the dignity and principles shown by the Palestinian people, to the most educated population in the world, in Gaza. We need to reset our educational priorities, not just for the sake of our degree qualifications, but for the sake of life in an increasingly genocidal world. This brochure is a reminder of what SOAS University stands for, but also points to a different kind of education, one rooted in communities of resistance around the world. We have received a miseducation from SOAS, but it is part of a bigger educational process that is only just beginning.&#x20;\n\n\n\nLa lucha continua.','2024-10-07 04:37:35.668433','2024-10-07 19:27:18.871595','Anonymous',1);
/*!40000 ALTER TABLE `slz_post` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `slz_statement`
--

DROP TABLE IF EXISTS `slz_statement`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `slz_statement` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `body` longtext NOT NULL,
  `release_date` date NOT NULL,
  `created_on` datetime(6) NOT NULL,
  `last_modified` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `slz_statement`
--

LOCK TABLES `slz_statement` WRITE;
/*!40000 ALTER TABLE `slz_statement` DISABLE KEYS */;
INSERT INTO `slz_statement` VALUES
(2,'SOAS Liberated Zone for Gaza Takes Direct Action to Increase Wheelchair Access on Campus','**London**. This afternoon, 13 May, SOAS students and allied community members with Disabled People Against Cuts (<u>DPAC</u>) took direct action to improve the accessibility of the Liberated Zone for Gaza and the SOAS campus as a whole by installing a wheelchair accessible ramp. \n\nSince last Monday, 6 May, the SOAS Liberated Zone has occupied the central green on campus, a space which has historically not been accessible to disabled students and community members, despite longstanding advocacy from the SOAS Disabled Students’ Society. Today, after a week of occupation in which SOAS failed to make the space accessible and following feedback from disabled comrades in the movement, members of the Liberated Zone and allies took matters into their own hands by directly installing a ramp themselves. \n\nThis move reflects the Liberated Zone’s values of inclusion for all those in the community and is based on consultation with the Disabled Students’ Society, DPAC, and others. We recognize that the struggle for Palestinian liberation is inseparable from all struggles against oppression, and we welcome disabled and non-disabled comrades in that struggle. \n\nStella, the president of SOAS Disabled Students’ Society, commented on the significance of the installation, saying, “I\'m filled with joy that the Liberated Zone has managed to get a custom ramp for the green, finally making our only green space on campus wheelchair accessible. Amidst institutional failings, we keep each other safe.”\n\nAs Israel’s ongoing genocide on Gaza enters its seventh month and escalates into an invasion of Rafah, we in the Liberated Zone remember that the Zionist settler colonial project produces disability and death. As groups like the Gaza Sunbirds have noted, the besieged Gaza Strip has over 3,000 amputee residents, one of the highest rates of amputation in the world. Denial of access to healthcare, travel for medically necessary procedures, and the deliberate use of starvation and denial of humanitarian aid as a tool of war have all underscored the ways in which the struggle against Zionism is a struggle for disability justice. It is with an awareness of these realities that we at the Liberated Zone re-center and improve access in our space. \n\nAlex, a committee member of the Disabled Society, gave further context to the necessity of today’s action:\n\n“We have tried to borrow the ramp from the university but it is not the appropriate size and they keep asking us to return it every night--violating the principle of autonomy for wheelchair users, who must feel able to come and go as they please and not have to beg for accessible entry and egress from the green.\n\nNow we are finally solving the problem the administration has refused to solve and showing what inclusivity and accessibility looks like. We invite our comrades with accessibility needs to come to the encampment and be in conversations about how we can make the green and SOAS as a whole more accessible!”\n\nThe SOAS Liberated Zone for Gaza is an ongoing student and community led protest action calling on SOAS to implement seven specific demands from the Palestinian call for Boycott, Divestment, and Sanctions (BDS) against the Zionist entity. These demands include divesting from companies complicit in the ongoing genocide, cutting ties with the University of Haifa and all Israeli academic institutions, and committing to the rebuilding of Palestinian educational institutions.&#x20;\n\n**Contact: <u>soasliberatedzone4gaza@proton.me</u>**\n\n**IG: @soasliberatedzone**&#x20;','2024-05-13','2024-10-07 04:22:27.855422','2024-10-07 04:41:06.112464'),
(3,'SOAS Security Assaults Demonstrators at Liberated Zone for Gaza Rally on June 4th','**London**. At 6pm on Tuesday (4 June) the SOAS Liberated Zone for Gaza held a peaceful demonstration that brought together students, alumni, and the wider community in solidarity with Palestine and with members of the SOAS student body who have been formally disciplined for protesting genocide on campus. During the demonstration, SOAS security physically assaulted members of the SOAS Liberated Zone for Gaza, causing a woman who was protesting to fall down the stairs and two protesters to seek emergency medical treatment for injuries. \n\nThis violence by security was specifically targeted at Black and racialised protestors, who were pulled and dragged by their hair. One of these demonstrators\' attention was not focused on the security guard who grabbed them from behind and violently threw them to the ground, remaining on top of them, underscoring the indiscriminate nature of the violence. This is at least the fourth instance in the last two weeks in which SOAS security have used physical force against students protesting the university\'s complicity in genocide. It also follows a day in which SOAS administration announced disciplinary action against at least eight students. The severe increase in racialised repression is unacceptable and will not be tolerated by our community.\n\nLet us be clear: the violent anti-Blackness displayed by SOAS yesterday is not new to this university and it is not new to this administration. Both vice-chancellor Adam Habib and head of security Cornelius Potgieter have documented histories of deploying private security and state forces on students, workers, and other members of the community, stretching back to their tenures at the University of Witwatersrand in South Africa. As calls on SOAS to embody its stated values and to sever complicity with genocidal apartheid have heightened in pitch, SOAS has instead responded by delaying negotiations with the Liberated Zone, repressing students physically and administratively, expanding their private security staff, and calling police onto campus. Indeed, during Tuesday\'s rally, over six vans and thirty police officers were present on and around campus, continuing the trend of SOAS putting students—especially racialised students—at risk of state violence.\n\nThe SOAS Liberated Zone for Gaza reiterates its call on the SOAS community and the broader community to support the student encampment and its seven demands, which include divesting from companies complicit in the genocide, cutting ties with the University of Haifa, terminating SOAS\'s banking relationship with Barclays, and ending this targeted and escalating repression of solidarity with Palestine on campus.\n\nWe will not stop, we will not rest, until these demands are met. The SOAS Liberated Zone for Gaza will be holding a one month rally on the evening of Thursday, June 6 at 6:30pm, which will further address the events of this week. Press are invited to attend.\n\n**Contact: <u>soasliberatedzone4gaza@proton.me</u>**\n\n**IG: @soasliberatedzone**','2024-06-04','2024-10-07 04:23:47.238449','2024-10-07 04:41:39.098733'),
(4,'Response to SOAS management\'s \"progress\" on our demands','Following the SOAS executive board’s long communique on their reasons for supporting a possible eviction of the SOAS Liberated Zone for Gaza (SLZ) by the University of London, it is clear where their priorities lie. They left their so-called ‘progress’ on demands and negotiations to the end of their communique, following their false allegations on the SOAS Liberated Zone for Gaza, demonstrating their lack of appreciation for the gravity and urgency of the demands. For over two months, the SLZ has taken over the Walter Rodney Freedom Square and adjacent precinct in protest against the university’s complicity in the ongoing genocide in Gaza and the zionist settler colonial project. We have put forward seven demands to the school, covering: disclosure of investments; divestment from companies profiting from genocide and settler-colonialism; terminating banking arrangements with Barclays; breaking ties with the University of Haifa; committing to the rebuilding of hospitals and education in Gaza and supporting Palestinian students and academics; ending the silencing of Palestinians and pro-Palestinian activism on campus; and condemning the zionist occupation and calling for an arms embargo against the occupation forces. Since 4th June, senior management have held negotiation meetings with academic staff, UCU, UNISON, full time officers of the Student Union and the SOAS Islamic Society. We have refused to participate in these negotiations as they are not meaningful or in good faith. This decision was due to the unaccountable and opaque format in which the meetings are held. From the beginning, we have demanded that negotiations be accessible to the wider SOAS community, held in person, with minutes shared publicly. These are basic conditions for transparency to ensure that management can be held accountable to the commitments they make in the negotiation meetings. Secondly, we will not negotiate with management whilst they threaten students with academic sanctions and punish them for standing up against this University’s complicity in genocide. These disciplinaries not only violate our sixth demand, guaranteeing the right to protest, but they also underline management’s refusal to engage with our demands in good faith. It is no coincidence that the first set of disciplinaries was issued to multiple SLZ members in the 24 hours leading up to the first negotiations meeting. Since then, management have continued to escalate repression, with several facing disciplinary investigations and one being threatened with permanent exclusion. How can we negotiate with a management that backtracks on one of our demands before we are even in the negotiating room? In continuing our encampment, we are building the necessary forces to end SOAS’s complicity in the genocide and ongoing dispossession of Palestinian people. In light of the ineffective negotiation meetings, we brought a proposal of unity to the staff and student groups across the university \\[which many student societies have signed onto]. These principles emphasise our terms for accountable and transparent negotiations and the need to seriously oppose the repression of student protest with disciplinary procedures. The decision from groups to continue negotiating on management’s terms is preventing the possibility for meaningful negotiations, and therefore the possibility for achieving the seven demands. Not only do they undermine the sixth demand, but these meetings also give the illusion of staff and student voice in the institution’s decision-making process, which in reality continues to deny the demands being raised, using bureaucratic procedures and timescales to defer or refuse the implementation of demands. We must be clear: it is time to break the time frames of a colonial institution, and act instead on the timeframe of people experiencing and resisting genocide. Whilst the message from Palestine is to escalate our resistance, the proposal to begin work toward divestment from parties in negotiation would not come into force until December 2024. This is an abdication of our responsibility to raise the terms of struggle here in Britain. Rather than legitimise management’s disingenuous negotiations, we call on all people and organisations to join us at the SOAS Liberated Zone for Gaza where we will maintain our focus on deepening our connection to the resistance in Palestine and strengthening our organisation to escalate action here. This is our clear intention set out for the Summer period, which will include a programme of political education, workshops to improve our skills and capacity, direct action to force SOAS to implement the demands, and the building of unity across the student movement. When students return to campus in Autumn, they will meet a well organised and unified movement, continuing the work of the Liberated Zone to end the complicity of this management and their allies. In light of the new email, it is imperative to highlight that the SOAS Liberated Zone was provided with updates on the demands 70 days into the encampment. This further reiterates the unwillingness of management to prioritise these demands, and their lack of regard for the ongoing genocide in Gaza, as we must remember that we must act quickly as we are working on the time of those on the ground in Palestine. The following is our response to the Executive Boards so-called ‘progress’ on the demands... 1. Disclose details of all university investments immediately and continue to do so on an annual basis. The publication of SOAS’s investment portfolio is not a response to our demands, although the management seeks to frame it as a gesture of good faith towards the seven demands. As mentioned they are public institutions and are therefore required to share finances and investments. The details of these investments on the other hand have not been made public and will only be provided ‘as needed’, behind closed doors to those who have agreed to sham negotiations. Meeting our first demand and the call for full disclosure and being ‘committed to transparency’ requires more than the document provided on the website. It requires the details to be publicly shared and available to all stakeholders, not only the select few the university deems to be worthy. 2. Divest from companies complicit in Israel\'s occupation and denial of Palestinian rights, including Accenture, Albemarle, Alphabet, Barclays, Microsoft, Newton Investment Management, RELX, and Sony, and commit to not reinvesting. Once again, SOAS claims that they are “willing to share information on investments”, without actually giving the information needed. The ethical investment policy is outdated and has been written by management to the benefit of management. It has been used to hide their complicity in genocide, allowing for investments in companies that are actively funding Israeli war crimes, occupation and apartheid. This does not come as a surprise to us, given the ethical bankruptcy of this institution. The companies identified in the demand have been extensively researched and their complicity in Israeli war crimes are undeniable, contrary to what management imply in their email. For us the matter of being ‘policy-compliant’ is irrelevant, it does not take away from the fact that they implicate the institution and students paying tuition in Israel’s genocidal and apartheid practices. SOAS have also stated that they “will request that our Board of Trustees mandates a review of our Ethical Investment Policy”, once again neglecting the urgency to act quickly in light of the genocide, and also providing no timeline whatsoever for this claim. SOAS claims that it must “recognise” their responsibilities for “safeguarding the financial health of the institution”. This is a clear indication of how the university prioritises its profits over, not only the wellbeing of its students, but also the massacres of the Palestinian people. 3. Terminate the university\'s banking and lending arrangement with Barclays. The executive board continues to make weak excuses to justify banking with Barclays. We absolutely reject these excuses and continue to demand they terminate the banking agreement. We call out the management decision to enter this agreement in the first place: Barclays is well known as a bankroller of arms and war. It is the responsibility of management to rectify this financial decision, in order to end the complicity of the institution with the ongoing genocide. They claim that they cannot review their partnership with Barclays until their current loans with the bank have been fully paid off, which would be in 2027. In the meantime they claim they will “carry out a survey of banking options”, this is a weak argument for SOAS to delay action: we demand action now. 4. Cut ties with the University of Haifa and boycott all Israeli academic institutions, which are complicit in the genocidal campaign on Gaza and in widespread violation of Palestinian rights. SOAS management has written that “No students are currently taking part in this programme, and no funds are currently being sent to Haifa.” If this is the case, why not end the partnership now? By maintaining this partnership, SOAS continues to legitimise modern day settler colonialism in Palestine. SOAS states that it is risky to send students at this time to Haifa, neglecting to account for the extreme risk of discrimination and criminalisation that Palestinian students face at Haifa. Once again, SOAS puts forward empty promises through proposing to have a ‘collaborations task team’ to evaluate partnerships with different universities to review how ethical they are. Managements are concerned that a boycott of Israeli academic institutions would be discriminatory by not targeting all countries involved in human rights violations. This completely ignores the extreme gravity of the context of the present genocide that is being committed by the zionist entity. An academic boycott of Israeli institutions is supported by staff, students around the world. The narrative claiming that calling for an academic boycott for all Israeli academic institutions is restrictive on academic freedom and “violates the fundamental ethos of a university” is truly appalling. This institution continuously builds up a false illusion of being ‘decolonial’ but cannot even stand against the colonial infrastructure of the zionist entity. 5. Commit to supporting Palestinian education and the rebuilding of Gaza\'s destroyed schools, hospitals, and universities. Establish partnerships and exchanges with Palestinian institutions and academics, increase scholarships for Palestinian students, and advocate for the removal of restrictions on Palestinian expression and movement. The designation of a few scholarships for Palestinian students is an extremely minimal progression, particularly considering the majority of these scholarships have been ‘ring-fenced’ from existing scholarships, meaning other students in need of scholarships will now have reduced access to them. It is shameful that SOAS declare they are waiting on donors to establish more. There were no such reservations about increasing the Director’s establishment by £80,000, or spending hundreds of thousands on private security. The commitments to the rebuilding of Gaza’s university system are also lacking in the necessary quantitative details. An institution that is making over £10 million per year in profit has no excuse not to be committing funds. Rather than the weak stance of “gauging interest” in partnerships SOAS must take a bold stance to initiate this work. 6. Guarantee the right of students and staff to free expression and end the targeted repression of Palestine solidarity activism on campus. Revoke the new SOAS protest policy. We denounce in no uncertain terms the shameful lies of SOAS in their claims to defend freedom of speech and protest. This is completely at odds with the reality of their action. We recall the events of 2009, when management collaborated with the Home Office to carry out an immigration raid against workers who were organising for better rights and respect in the university. SOAS has still not apologised. In the past year, we have seen numerous students arbitrarily suspended for engaging in pro-Palestine protest, and members of the Palestine Society have received threatening letters. The trend of Adam Habib’s leadership at SOAS has reflected that of the former Conservative Government, who set harsh limits on what is and is not ‘acceptable’ protest. Management have made it clear that they are unwilling to tolerate any criticism of the leadership of the school, because they know they are deeply unpopular, and the simple act of expressing the truth exposes their complicity in genocide. Management have broken their own disciplinary procedure multiple times in attempts to persecute and silence their students. They have claimed that they ‘maintain consistency in the application of our rules’, while targeting a few individuals with disciplinaries for the actions of many. Most recently, SOAS have targeted incoming elected Student Union officers. Management ‘completely refute’ that they would ‘limit the rights’ of those elected to be SU officers, however two of the four incoming officers have just been issued with dismissals from their roles, partly on the basis of disciplinaries issued by the university. This is a clear attack on student democracy and a further regression on the 6th demand. 7. Advocate for the UK government to implement an immediate arms embargo on Israel and to use all leverage to effect an immediate, unconditional, and permanent ceasefire. SOAS’ quiet statements calling for a ceasefire must be replaced by clear and bold statements: condemning the genocide and settler-colonial occupation, make a clear call for an arms embargo. If the Vice-Chancellor is willing to write to the British Government, why has he not already? The lack of urgency and complacency displayed by SOAS management disgusts us; we will never be appeased by their weak and cowardly statements. The Palestinian people continue to resist and defeat the zionist occupation forces. We have learned from their struggle and the need for continuation in our fight to expose the complicity of British state institutions like SOAS who are complicit in the crimes of colonisation and genocide.&#x20;\n\n\n\nJoin us in building resistance until Palestine is free and all oppressors fall.','2024-07-15','2024-10-07 04:26:32.227176','2024-10-07 04:28:42.075582');
/*!40000 ALTER TABLE `slz_statement` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `slz_subscriber`
--

DROP TABLE IF EXISTS `slz_subscriber`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `slz_subscriber` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `email` longtext NOT NULL,
  `created_on` datetime(6) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `slz_subscriber_email_e318600f_uniq` (`email`) USING HASH
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `slz_subscriber`
--

LOCK TABLES `slz_subscriber` WRITE;
/*!40000 ALTER TABLE `slz_subscriber` DISABLE KEYS */;
INSERT INTO `slz_subscriber` VALUES
(1,'adilkhan49@hotmail.com','2024-10-08 13:15:26.609223'),
(2,'kamalkhn@gmail.com','2024-10-19 10:52:08.866865'),
(3,'daphneclara.saunders@gmail.com','2024-10-19 11:05:58.311151');
/*!40000 ALTER TABLE `slz_subscriber` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `slz_timelineevent`
--

DROP TABLE IF EXISTS `slz_timelineevent`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `slz_timelineevent` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `title` longtext NOT NULL,
  `timeline_date` date NOT NULL,
  `created_on` datetime(6) NOT NULL,
  `exclude_date` tinyint(1) NOT NULL,
  `exclude_month` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `slz_timelineevent`
--

LOCK TABLES `slz_timelineevent` WRITE;
/*!40000 ALTER TABLE `slz_timelineevent` DISABLE KEYS */;
INSERT INTO `slz_timelineevent` VALUES
(4,'Outsourced cleaners start organising against low wages, sick pay, and to be in-housed on the same terms and conditions as the rest of SOAS staff.','2006-01-01','2024-10-30 19:46:45.060777',0,1);
/*!40000 ALTER TABLE `slz_timelineevent` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `token_blacklist_blacklistedtoken`
--

DROP TABLE IF EXISTS `token_blacklist_blacklistedtoken`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `token_blacklist_blacklistedtoken` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `blacklisted_at` datetime(6) NOT NULL,
  `token_id` bigint(20) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `token_id` (`token_id`),
  CONSTRAINT `token_blacklist_blacklistedtoken_token_id_3cc7fe56_fk` FOREIGN KEY (`token_id`) REFERENCES `token_blacklist_outstandingtoken` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=211 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `token_blacklist_blacklistedtoken`
--

LOCK TABLES `token_blacklist_blacklistedtoken` WRITE;
/*!40000 ALTER TABLE `token_blacklist_blacklistedtoken` DISABLE KEYS */;
INSERT INTO `token_blacklist_blacklistedtoken` VALUES
(1,'2024-10-06 21:17:30.301211',1),
(2,'2024-10-06 21:29:49.159870',3),
(3,'2024-10-06 21:33:16.180821',5),
(4,'2024-10-06 21:40:10.628697',7),
(5,'2024-10-06 21:41:49.710802',6),
(6,'2024-10-06 21:44:10.938786',8),
(7,'2024-10-06 21:45:50.190329',9),
(8,'2024-10-06 21:48:11.287837',10),
(9,'2024-10-06 21:51:26.069553',11),
(10,'2024-10-06 21:52:11.552104',12),
(11,'2024-10-06 21:55:26.867680',13),
(12,'2024-10-06 22:01:30.332307',14),
(13,'2024-10-06 22:04:43.978753',15),
(14,'2024-10-06 22:11:36.399479',16),
(15,'2024-10-06 22:18:11.569139',17),
(16,'2024-10-06 22:18:21.125454',18),
(17,'2024-10-07 16:10:21.776282',24),
(18,'2024-10-07 16:14:22.717027',25),
(19,'2024-10-07 16:18:23.656530',26),
(20,'2024-10-07 16:22:24.819725',27),
(21,'2024-10-07 16:26:25.780328',28),
(22,'2024-10-07 16:30:26.682629',29),
(23,'2024-10-07 16:34:27.771399',30),
(24,'2024-10-07 16:38:28.652809',31),
(25,'2024-10-07 16:42:29.694671',32),
(26,'2024-10-07 16:46:30.716707',33),
(27,'2024-10-07 16:50:31.671412',34),
(28,'2024-10-07 16:54:32.659902',35),
(29,'2024-10-07 16:58:33.761921',36),
(30,'2024-10-07 17:02:34.680072',37),
(31,'2024-10-07 17:06:35.667299',38),
(32,'2024-10-07 17:10:36.707970',39),
(33,'2024-10-07 17:14:37.688303',40),
(34,'2024-10-07 17:18:38.773511',41),
(35,'2024-10-07 17:22:40.787004',42),
(36,'2024-10-07 17:26:41.779259',43),
(37,'2024-10-07 17:30:42.780572',44),
(38,'2024-10-07 17:34:43.754238',45),
(39,'2024-10-07 17:38:44.713788',46),
(40,'2024-10-07 17:42:45.791027',47),
(41,'2024-10-07 17:46:46.780209',48),
(42,'2024-10-07 17:50:47.688912',49),
(43,'2024-10-07 17:54:48.668470',50),
(44,'2024-10-07 17:58:49.805895',51),
(45,'2024-10-07 18:02:50.719195',52),
(46,'2024-10-07 18:23:14.669749',53),
(47,'2024-10-07 18:27:15.731742',54),
(48,'2024-10-07 18:31:16.660507',55),
(49,'2024-10-07 18:35:17.702259',56),
(50,'2024-10-07 18:49:14.678219',57),
(51,'2024-10-07 18:55:09.723057',58),
(52,'2024-10-07 18:59:10.746351',59),
(53,'2024-10-07 19:09:57.704796',60),
(54,'2024-10-07 19:13:58.705472',61),
(55,'2024-10-07 19:17:59.727636',62),
(56,'2024-10-07 19:22:00.664010',63),
(57,'2024-10-08 13:24:39.310817',65),
(58,'2024-10-08 13:28:40.621630',66),
(59,'2024-10-08 13:32:41.687525',67),
(60,'2024-10-08 13:36:42.695090',68),
(61,'2024-10-08 13:40:43.701760',69),
(62,'2024-10-08 13:44:44.611251',70),
(63,'2024-10-08 19:03:21.669386',71),
(64,'2024-10-08 19:07:22.453994',72),
(65,'2024-10-08 19:11:48.656489',73),
(66,'2024-10-08 19:15:49.655805',74),
(67,'2024-10-08 19:19:50.686876',75),
(68,'2024-10-08 19:23:51.776738',76),
(69,'2024-10-08 20:32:44.892349',77),
(70,'2024-10-08 21:46:01.611977',78),
(71,'2024-10-19 11:05:30.702974',82),
(72,'2024-10-19 11:15:06.039055',80),
(73,'2024-10-19 11:19:07.030926',83),
(74,'2024-10-26 18:18:30.055123',86),
(75,'2024-10-26 18:26:52.264113',87),
(76,'2024-10-28 16:21:39.188210',88),
(77,'2024-10-28 16:25:40.177359',89),
(78,'2024-10-28 16:29:41.183946',90),
(79,'2024-10-28 16:33:42.167254',91),
(80,'2024-10-28 16:37:43.174953',92),
(81,'2024-10-28 16:41:43.527513',93),
(82,'2024-10-28 16:45:43.872680',94),
(83,'2024-10-28 16:50:00.164377',95),
(84,'2024-10-28 16:54:01.189987',96),
(85,'2024-10-28 16:58:02.169544',97),
(86,'2024-10-28 17:02:03.180551',98),
(87,'2024-10-28 17:06:04.178574',99),
(88,'2024-10-28 17:10:05.173261',100),
(89,'2024-10-28 17:14:06.171490',101),
(90,'2024-10-28 17:18:07.172833',102),
(91,'2024-10-28 17:22:08.168580',103),
(92,'2024-10-28 17:26:09.171870',104),
(93,'2024-10-28 17:30:10.161975',105),
(94,'2024-10-28 17:34:11.177262',106),
(95,'2024-10-28 17:53:03.544604',107),
(96,'2024-10-28 17:57:04.533515',108),
(97,'2024-10-28 18:01:05.467025',109),
(98,'2024-10-28 18:05:06.527507',110),
(99,'2024-10-28 18:09:07.530894',111),
(100,'2024-10-28 18:13:08.521834',112),
(101,'2024-10-28 18:17:09.449814',113),
(102,'2024-10-28 19:04:42.220728',114),
(103,'2024-10-28 19:08:43.285261',115),
(104,'2024-10-28 19:12:44.201591',116),
(105,'2024-10-28 19:16:45.177289',117),
(106,'2024-10-28 19:20:46.228954',118),
(107,'2024-10-28 19:24:47.200578',119),
(108,'2024-10-28 19:28:48.202177',120),
(109,'2024-10-28 19:32:49.198793',121),
(110,'2024-10-28 19:36:50.191826',122),
(111,'2024-10-28 19:40:51.197567',123),
(112,'2024-10-28 19:44:52.209632',124),
(113,'2024-10-28 19:48:53.201883',125),
(114,'2024-10-28 19:52:54.198033',126),
(115,'2024-10-28 19:56:55.199306',127),
(116,'2024-10-28 20:00:56.210564',128),
(117,'2024-10-28 20:04:57.201742',129),
(118,'2024-10-28 20:08:58.201706',130),
(119,'2024-10-28 20:12:59.193359',131),
(120,'2024-10-28 21:22:44.678265',132),
(121,'2024-10-29 02:55:28.397281',133),
(122,'2024-10-29 11:40:50.460818',134),
(123,'2024-10-29 22:06:21.889846',135),
(124,'2024-10-29 22:10:22.681026',136),
(125,'2024-10-29 22:30:52.129277',137),
(126,'2024-10-29 22:51:35.305743',138),
(127,'2024-10-29 23:08:32.687237',139),
(128,'2024-10-29 23:59:54.355747',140),
(129,'2024-10-30 00:03:54.794360',141),
(130,'2024-10-30 00:07:55.802575',142),
(131,'2024-10-30 00:11:56.801012',143),
(132,'2024-10-30 00:33:42.173970',144),
(133,'2024-10-30 01:08:57.807132',145),
(134,'2024-10-30 01:12:58.813967',146),
(135,'2024-10-30 01:25:43.177265',147),
(136,'2024-10-30 02:39:18.738827',148),
(137,'2024-10-30 02:43:19.516420',149),
(138,'2024-10-30 02:47:20.597929',150),
(139,'2024-10-30 02:51:21.525304',151),
(140,'2024-10-30 02:55:22.516408',152),
(141,'2024-10-30 02:59:23.546359',153),
(142,'2024-10-30 03:03:24.550199',154),
(143,'2024-10-30 03:07:25.514045',155),
(144,'2024-10-30 03:11:26.520011',156),
(145,'2024-10-30 03:15:27.529753',157),
(146,'2024-10-30 03:19:28.516560',158),
(147,'2024-10-30 03:23:29.695068',159),
(148,'2024-10-30 03:27:30.521640',160),
(149,'2024-10-30 03:31:31.618329',161),
(150,'2024-10-30 03:35:32.506157',162),
(151,'2024-10-30 03:39:33.512341',163),
(152,'2024-10-30 03:43:34.521786',164),
(153,'2024-10-30 03:47:35.512637',165),
(154,'2024-10-30 03:51:36.507046',166),
(155,'2024-10-30 03:55:37.515545',167),
(156,'2024-10-30 03:59:38.507392',168),
(157,'2024-10-30 04:03:39.612809',169),
(158,'2024-10-30 04:07:40.518286',170),
(159,'2024-10-30 04:11:41.513455',171),
(160,'2024-10-30 04:15:49.998260',172),
(161,'2024-10-30 04:19:50.511770',173),
(162,'2024-10-30 04:23:51.509818',174),
(163,'2024-10-30 04:27:52.510300',175),
(164,'2024-10-30 04:31:53.504921',176),
(165,'2024-10-30 04:35:54.516091',177),
(166,'2024-10-30 04:40:28.683414',178),
(167,'2024-10-30 04:44:29.736389',179),
(168,'2024-10-30 04:48:30.676991',180),
(169,'2024-10-30 04:52:31.677421',181),
(170,'2024-10-30 16:04:05.870516',182),
(171,'2024-10-30 20:29:48.058475',183),
(172,'2024-10-30 20:33:49.051724',184),
(173,'2024-10-30 20:37:50.055403',185),
(174,'2024-10-30 20:41:51.053463',186),
(175,'2024-10-30 20:46:47.372613',187),
(176,'2024-10-30 20:50:48.332342',188),
(177,'2024-10-30 20:54:49.333838',189),
(178,'2024-10-30 20:58:50.334645',190),
(179,'2024-10-30 21:02:51.330749',191),
(180,'2024-10-31 15:53:29.976842',192),
(181,'2024-10-31 15:57:30.936594',193),
(182,'2024-10-31 16:01:31.935017',194),
(183,'2024-10-31 16:05:32.934728',195),
(184,'2024-10-31 16:09:33.999543',196),
(185,'2024-10-31 16:13:34.942440',197),
(186,'2024-10-31 16:17:35.940980',198),
(187,'2024-10-31 16:21:36.934086',199),
(188,'2024-10-31 16:25:37.936732',200),
(189,'2024-10-31 16:29:38.938743',201),
(190,'2024-10-31 16:33:39.946839',202),
(191,'2024-10-31 16:37:40.943709',203),
(192,'2024-10-31 16:41:42.336994',204),
(193,'2024-10-31 16:45:42.938784',205),
(194,'2024-10-31 16:49:44.252049',206),
(195,'2024-10-31 16:53:44.941768',207),
(196,'2024-10-31 16:57:45.945191',208),
(197,'2024-10-31 17:01:46.942632',209),
(198,'2024-10-31 17:05:47.942094',210),
(199,'2024-10-31 17:09:48.945917',211),
(200,'2024-10-31 17:13:49.945325',212),
(201,'2024-10-31 17:17:50.951028',213),
(202,'2024-10-31 17:21:51.946835',214),
(203,'2024-10-31 17:25:52.938923',215),
(204,'2024-10-31 17:29:53.979923',216),
(205,'2024-10-31 17:33:54.940121',217),
(206,'2024-10-31 17:37:55.948977',218),
(207,'2024-10-31 17:41:56.965829',219),
(208,'2024-10-31 19:29:50.935443',220),
(209,'2024-10-31 19:33:51.908212',222),
(210,'2024-10-31 19:37:52.905743',223);
/*!40000 ALTER TABLE `token_blacklist_blacklistedtoken` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `token_blacklist_outstandingtoken`
--

DROP TABLE IF EXISTS `token_blacklist_outstandingtoken`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `token_blacklist_outstandingtoken` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `token` longtext NOT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `expires_at` datetime(6) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `jti` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `token_blacklist_outstandingtoken_jti_hex_d9bdf6f7_uniq` (`jti`),
  KEY `token_blacklist_outs_user_id_83bc629a_fk_auth_user` (`user_id`),
  CONSTRAINT `token_blacklist_outs_user_id_83bc629a_fk_auth_user` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=224 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `token_blacklist_outstandingtoken`
--

LOCK TABLES `token_blacklist_outstandingtoken` WRITE;
/*!40000 ALTER TABLE `token_blacklist_outstandingtoken` DISABLE KEYS */;
INSERT INTO `token_blacklist_outstandingtoken` VALUES
(1,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyODMzNTYxMCwiaWF0IjoxNzI4MjQ5MjEwLCJqdGkiOiJjOTExNTZlNzIyNDI0YTRkOTRjYzE0OTg1YWY0NTQ0NSIsInVzZXJfaWQiOjF9.XyyEtyuZZFr5hMHkAvjFXOofPLzoOUy7Seh8reqwmUU','2024-10-06 21:13:30.030876','2024-10-07 21:13:30.000000',1,'c91156e722424a4d94cc14985af45445'),
(2,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyODMzNTcyNiwiaWF0IjoxNzI4MjQ5MzI2LCJqdGkiOiJlNGMxN2I3YjkwMDQ0OTMxYmZkMmFkMjkzNDNkYWFmNiIsInVzZXJfaWQiOjF9.oPGxOl5MvDDkGbBojyB6gPfj4Z3dv6ORfsxZsa_D_P8','2024-10-06 21:15:26.462990','2024-10-07 21:15:26.000000',1,'e4c17b7b90044931bfd2ad29343daaf6'),
(3,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyODMzNTczOCwiaWF0IjoxNzI4MjQ5MzM4LCJqdGkiOiIyMjAyYzU3NmJhMjU0MDgwYTdkZjQ1YmI2ZGUwNTdjMiIsInVzZXJfaWQiOjF9.VfzTSrn6yeFfj7PZxUSIyy--bS63g4bYvO3rC0KC-aI','2024-10-06 21:15:38.371615','2024-10-07 21:15:38.000000',1,'2202c576ba254080a7df45bb6de057c2'),
(4,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyODMzNTkyNCwiaWF0IjoxNzI4MjQ5NTI0LCJqdGkiOiI4ODUyMDVkM2U4Mjc0ODI2YTViYmVmN2Q2NTc1NjY2MiIsInVzZXJfaWQiOjF9.NoQ_FsFTYO6lQGWLoscF_ihrNGhhQrAgtmaUxHazbJY','2024-10-06 21:18:44.861058','2024-10-07 21:18:44.000000',1,'885205d3e8274826a5bbef7d65756662'),
(5,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyODMzNjE2OCwiaWF0IjoxNzI4MjQ5NzY4LCJqdGkiOiJhMWFiNDg1N2FhOWU0YjgyOTE5YTQwMzAwNDhiOGY4NSIsInVzZXJfaWQiOjF9.mDMkzY61RSyHcDh8lt2oovKnMPTNmLL1SzBpyhpjP-Q','2024-10-06 21:22:48.761723','2024-10-07 21:22:48.000000',1,'a1ab4857aa9e4b82919a4030048b8f85'),
(6,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyODMzNzA1NSwiaWF0IjoxNzI4MjUwNjU1LCJqdGkiOiJlMDRmYWQ0YTBhMGE0YmU1OGNmMmUxZWU1YzIyMTIyNSIsInVzZXJfaWQiOjF9.YDcF90N90_oGUKQYBN_RCZitX8OTyDVyGfSfO931z_4','2024-10-06 21:37:35.689171','2024-10-07 21:37:35.000000',1,'e04fad4a0a0a4be58cf2e1ee5c221225'),
(7,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyODMzNjU4OSwiaWF0IjoxNzI4MjUwMTg5LCJqdGkiOiI4NDEwMzRjMzk4MzI0Y2I0YmM1MGZkMTVmNzk0ZTcwNiIsInVzZXJfaWQiOjF9.HoNXGirWuXa-vdsbN5ZDNbKDcbwIZCcFCSHSgaAS2bM',NULL,'2024-10-07 21:29:49.000000',NULL,'841034c398324cb4bc50fd15f794e706'),
(8,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyODMzNzIxMCwiaWF0IjoxNzI4MjUwODEwLCJqdGkiOiJkOWM5MGMxNGVhZTk0MTY0YTliNjRlYmE0N2NlMGFkMyIsInVzZXJfaWQiOjF9.dRycb37yOecRTkaNUCUnEi_fi9uRVcnzXiwW3TjV1AM',NULL,'2024-10-07 21:40:10.000000',NULL,'d9c90c14eae94164a9b64eba47ce0ad3'),
(9,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyODMzNzMwOSwiaWF0IjoxNzI4MjUwOTA5LCJqdGkiOiJjNTRlZDQzMWFmMTM0YmYyYjZiNmVjNWRiYWU1NDgxYyIsInVzZXJfaWQiOjF9.k6VD_2edAubJjylhNjlF6gcaNnY3bMF-ftnqbncRgMI',NULL,'2024-10-07 21:41:49.000000',NULL,'c54ed431af134bf2b6b6ec5dbae5481c'),
(10,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyODMzNzQ1MCwiaWF0IjoxNzI4MjUxMDUwLCJqdGkiOiI0ZDI4MGM1YTk3YTI0YjBjOWVmZjIxODc3MmUwNjQwOSIsInVzZXJfaWQiOjF9.578RlJ1AX9Mc4RUvrdG6kH4oGkNa8b6ifA6wsmakaQk',NULL,'2024-10-07 21:44:10.000000',NULL,'4d280c5a97a24b0c9eff218772e06409'),
(11,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyODMzNzU1MCwiaWF0IjoxNzI4MjUxMTUwLCJqdGkiOiI3NDQyMDNiNDAyOTI0ZjQ2YjBkMjcxNzNkMmExMmJlNCIsInVzZXJfaWQiOjF9.UcYvQjGD-P-p4vapdP-c4Uf6jlARGozmXHc1NUjIFhA',NULL,'2024-10-07 21:45:50.000000',NULL,'744203b402924f46b0d27173d2a12be4'),
(12,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyODMzNzY5MSwiaWF0IjoxNzI4MjUxMjkxLCJqdGkiOiI4ZmQ4N2Y0ZjFmYTQ0OTA1YjdmOTk2NzQ0ZjE4NTNkOCIsInVzZXJfaWQiOjF9.RZIc8uX6Qq01n4Bl3zfU3UkjFkq_pT6lBesCogzN_eg',NULL,'2024-10-07 21:48:11.000000',NULL,'8fd87f4f1fa44905b7f996744f1853d8'),
(13,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyODMzNzg4NiwiaWF0IjoxNzI4MjUxNDg2LCJqdGkiOiJiYWNjOGNlZGFlNWY0NjFkYWIwYWIyMTk0OTE2OTA0YiIsInVzZXJfaWQiOjF9.pyJOrUYMTs1ew7Sx3-SScNfJWD3MzTl9pbUNdzbUaiU',NULL,'2024-10-07 21:51:26.000000',NULL,'bacc8cedae5f461dab0ab2194916904b'),
(14,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyODMzNzkzMSwiaWF0IjoxNzI4MjUxNTMxLCJqdGkiOiJlMjhlYWI0Y2MwNWI0ZDhjOThlNTQwODk2OTM4NGEzNSIsInVzZXJfaWQiOjF9.c21DsJnQPy4xqoJDKGUxdvB0JAwJNATaVubJLM5lgXY',NULL,'2024-10-07 21:52:11.000000',NULL,'e28eab4cc05b4d8c98e5408969384a35'),
(15,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyODMzNjc5NiwiaWF0IjoxNzI4MjUwMzk2LCJqdGkiOiI0OTg3NTQ3NmE2NTY0NTM0YmYwNDk4OWZlZDg2NTJiMSIsInVzZXJfaWQiOjF9.CZlFacnpg1XvdfOUyuHbMq-VSyoa-2zGgTrL_2EWYj4',NULL,'2024-10-07 21:33:16.000000',NULL,'49875476a6564534bf04989fed8652b1'),
(16,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyODMzODY4MywiaWF0IjoxNzI4MjUyMjgzLCJqdGkiOiJmMTU5ZjcyNjMwZjY0YjA5ODQwODg1NWFhMDFlODdmNCIsInVzZXJfaWQiOjF9.kyWLcxXm3-1QOCNr7RXneybXcHwh_y5YIR1_n_d9lMA',NULL,'2024-10-07 22:04:43.000000',NULL,'f159f72630f64b098408855aa01e87f4'),
(17,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyODMzOTA5NiwiaWF0IjoxNzI4MjUyNjk2LCJqdGkiOiJiYjdhNzc1YTkyMmQ0YzEyOTA5Y2MwZGUwZGVkMTY1MSIsInVzZXJfaWQiOjF9.KdDUuCzw_6WOCrGb50NPrYNE7ezxOT5iLuuerj0nBEU',NULL,'2024-10-07 22:11:36.000000',NULL,'bb7a775a922d4c12909cc0de0ded1651'),
(18,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyODMzODQ5MCwiaWF0IjoxNzI4MjUyMDkwLCJqdGkiOiI3YzkwNDczYTE3NDI0MmIyOTkzNzZhZWY0Mzc4ODJiZCIsInVzZXJfaWQiOjF9.Gu36VIA6oXLmr_ByzGN7CGrW3ohmF6BC6X1_A0OVJWM',NULL,'2024-10-07 22:01:30.000000',NULL,'7c90473a174242b299376aef437882bd'),
(19,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyODM1MzM3OCwiaWF0IjoxNzI4MjY2OTc4LCJqdGkiOiJhOWEzNzcyYjBhOTQ0N2M4OTgxNzFmM2IxMTE4YzNmNCIsInVzZXJfaWQiOjF9.x1aYPAuCS4LJpkbw6kVTFJjedIDU3toA5LD_7GKpFk0','2024-10-07 02:09:38.776949','2024-10-08 02:09:38.000000',1,'a9a3772b0a9447c898171f3b1118c3f4'),
(20,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyODM1OTU4MiwiaWF0IjoxNzI4MjczMTgyLCJqdGkiOiJjMmE4M2Y2NTY1MGM0Y2E1ODEzYzhiOTBhYzdhZGE0NSIsInVzZXJfaWQiOjF9.GsQqLLEYsZmlJn_LyzFMo8QD_pJ4l08hosf_72YUL5g','2024-10-07 03:53:02.387495','2024-10-08 03:53:02.000000',1,'c2a83f65650c4ca5813c8b90ac7ada45'),
(21,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyODM1OTY0OSwiaWF0IjoxNzI4MjczMjQ5LCJqdGkiOiIzOWI2YzdlMDE3Yzk0OWZhYTZkNGIwZTdhYmViYTBmNCIsInVzZXJfaWQiOjF9.igbXBnSPSHV3YKgNxJGqtzSMstpS_NApi8NjonQLnjA','2024-10-07 03:54:09.603199','2024-10-08 03:54:09.000000',1,'39b6c7e017c949faa6d4b0e7abeba0f4'),
(22,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyODM2MTI1MiwiaWF0IjoxNzI4Mjc0ODUyLCJqdGkiOiIxMmRkYTc1ODNmNzQ0ZmJmOWJlZWFiNWFhNWRiNDJhYSIsInVzZXJfaWQiOjF9.GWHCgauM309FxkrVyQzqIJcDRpCvPwL_q-w4H4WD0NQ','2024-10-07 04:20:52.209996','2024-10-08 04:20:52.000000',1,'12dda7583f744fbf9beeab5aa5db42aa'),
(23,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyODM2MjQ1NSwiaWF0IjoxNzI4Mjc2MDU1LCJqdGkiOiJkOTkxMzNkODAxNTY0Mzc5YTg2ZDQzMDk3ZGI2OGI2MSIsInVzZXJfaWQiOjF9.KdawL6is1ZeJuy7d67fXvdfRX4xyUDGL8odoQSUejXc','2024-10-07 04:40:55.718020','2024-10-08 04:40:55.000000',1,'d99133d801564379a86d43097db68b61'),
(24,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyODQwMzU3NiwiaWF0IjoxNzI4MzE3MTc2LCJqdGkiOiI5NTI2MTI0MzE3MGE0Y2I4OWM3NjM5OWExNzI3Y2Q2NyIsInVzZXJfaWQiOjF9.KSa-pK0sTbzm_qPDYJse_7aZvAoeyzn4eF0RuPtPFhs','2024-10-07 16:06:16.125784','2024-10-08 16:06:16.000000',1,'95261243170a4cb89c76399a1727cd67'),
(25,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyODQwMzgyMSwiaWF0IjoxNzI4MzE3NDIxLCJqdGkiOiJiYzFkZjhhNTcyN2I0Njc0YjlhODcwZDhjNzE5NjIxMSIsInVzZXJfaWQiOjF9.8kefNiKihEABeFmdxjPsvsdoyZsgGm8aqxZ6eUUlvtI',NULL,'2024-10-08 16:10:21.000000',NULL,'bc1df8a5727b4674b9a870d8c7196211'),
(26,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyODQwNDA2MiwiaWF0IjoxNzI4MzE3NjYyLCJqdGkiOiJlN2FhNTJjNjVjZjA0NmZlOTk1ZmQ0NWI2ZmU1ZTI1YyIsInVzZXJfaWQiOjF9.Pel9FQ8JHcibpb63lpKIC-8KZM4v-cODShlVnvdCi1Q',NULL,'2024-10-08 16:14:22.000000',NULL,'e7aa52c65cf046fe995fd45b6fe5e25c'),
(27,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyODQwNDMwMywiaWF0IjoxNzI4MzE3OTAzLCJqdGkiOiI4ZDU1NjlmMWQxNGU0MDUwODI0NmJkMDkyNWFiMDNlMCIsInVzZXJfaWQiOjF9.F3C30IWfMjyAKr4rZbg6dGpGOIWtRX2Vi0QD--Zz9xM',NULL,'2024-10-08 16:18:23.000000',NULL,'8d5569f1d14e40508246bd0925ab03e0'),
(28,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyODQwNDU0NCwiaWF0IjoxNzI4MzE4MTQ0LCJqdGkiOiJjNzVlYmQyNjQ5OTA0YzViOGZkNzQ0MTU1YzdjYmFlNSIsInVzZXJfaWQiOjF9.IHa2gCUUYVzrk-y1iPI4WJOE0rSEzD5ub1CT19nRNn4',NULL,'2024-10-08 16:22:24.000000',NULL,'c75ebd2649904c5b8fd744155c7cbae5'),
(29,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyODQwNDc4NSwiaWF0IjoxNzI4MzE4Mzg1LCJqdGkiOiIyNTJhNGNmOGE1ZmQ0OWQ4ODk1NmM1YzE3NGJlZDNmMiIsInVzZXJfaWQiOjF9.MxebvreC1ZQl02Sg6uVxp5y0FaHqq5SHDOBL9wTUmJU',NULL,'2024-10-08 16:26:25.000000',NULL,'252a4cf8a5fd49d88956c5c174bed3f2'),
(30,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyODQwNTAyNiwiaWF0IjoxNzI4MzE4NjI2LCJqdGkiOiI0OWZiMjU3NDM5MDc0Yjc3OWE3MTNkMGMxNzhmMGVjMSIsInVzZXJfaWQiOjF9.Q8tLWEU2sx0G3VI07Pb8Fio5d7NDexvDUYENTvG8MWU',NULL,'2024-10-08 16:30:26.000000',NULL,'49fb257439074b779a713d0c178f0ec1'),
(31,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyODQwNTI2NywiaWF0IjoxNzI4MzE4ODY3LCJqdGkiOiJmZWFlYjZkOGY2ZWM0ZDc3ODU4ZDQyMmY5YzhhMDgxZCIsInVzZXJfaWQiOjF9.k9ksNd9f3wtSBKfxs5XcVVfB43MWblLqW_S9lbPDUCQ',NULL,'2024-10-08 16:34:27.000000',NULL,'feaeb6d8f6ec4d77858d422f9c8a081d'),
(32,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyODQwNTUwOCwiaWF0IjoxNzI4MzE5MTA4LCJqdGkiOiI4NGVkMzk3NWFhNDM0Mzg2YmE2NzNkMzIwNjJjMWM3MSIsInVzZXJfaWQiOjF9.3sI9AcX2d7vYxEmZ88y-HxMnxBgsROdbQlGoka1yp4Y',NULL,'2024-10-08 16:38:28.000000',NULL,'84ed3975aa434386ba673d32062c1c71'),
(33,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyODQwNTc0OSwiaWF0IjoxNzI4MzE5MzQ5LCJqdGkiOiJhYjE2MWRlNWMyOTI0NzY4OTgyYzFlNjMzY2Q3MGUyYSIsInVzZXJfaWQiOjF9.o-EH_biuRKrfixJo3sU8-IWEckIQOc620CIkIuHgf5I',NULL,'2024-10-08 16:42:29.000000',NULL,'ab161de5c2924768982c1e633cd70e2a'),
(34,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyODQwNTk5MCwiaWF0IjoxNzI4MzE5NTkwLCJqdGkiOiI1NTdmODVmZDhhMmY0MmFkYWM2OTdlZWI3MDg0ZjA1NiIsInVzZXJfaWQiOjF9.VACBiDENF2in3MLlJlhlE0jKI08uG5-3LSKV9OHrFUU',NULL,'2024-10-08 16:46:30.000000',NULL,'557f85fd8a2f42adac697eeb7084f056'),
(35,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyODQwNjIzMSwiaWF0IjoxNzI4MzE5ODMxLCJqdGkiOiJjZTFiMTQxZDNlNjY0NjVkODFlODQ0OTkyOGU2ZGI4MSIsInVzZXJfaWQiOjF9.8Xb-bA8w7VdXxHhINzhLefrSSPd3Rvj2C9oHfvMIlYU',NULL,'2024-10-08 16:50:31.000000',NULL,'ce1b141d3e66465d81e8449928e6db81'),
(36,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyODQwNjQ3MiwiaWF0IjoxNzI4MzIwMDcyLCJqdGkiOiI1MjJkYTI1NzA2MmE0YzYyYWYxMzEzOTQ1NDAwMGQ5YSIsInVzZXJfaWQiOjF9.F4wi_CvOl2NCdCPhRXtfI6qX2hsGjeAoybbXfqhoOYQ',NULL,'2024-10-08 16:54:32.000000',NULL,'522da257062a4c62af13139454000d9a'),
(37,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyODQwNjcxMywiaWF0IjoxNzI4MzIwMzEzLCJqdGkiOiJkNWE3N2Q3ZWM3OTA0MTcwOGFlZTNhZGFlY2RlMDY2ZCIsInVzZXJfaWQiOjF9.WMUHwyTOflwKRzdrzMBVFcTJhnjkRa5pqoopGtvtY0E',NULL,'2024-10-08 16:58:33.000000',NULL,'d5a77d7ec79041708aee3adaecde066d'),
(38,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyODQwNjk1NCwiaWF0IjoxNzI4MzIwNTU0LCJqdGkiOiI2YWJmYjM2MGVjYzM0MDQ4OGYyNWU0NDdlYTE0MzBlNyIsInVzZXJfaWQiOjF9.q7kjma8euHS3JC7HzwFEZT07UbZXSLwTmbfkEpilP74',NULL,'2024-10-08 17:02:34.000000',NULL,'6abfb360ecc340488f25e447ea1430e7'),
(39,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyODQwNzE5NSwiaWF0IjoxNzI4MzIwNzk1LCJqdGkiOiI1NmEyMzMzODk5Yzk0NDlhOWE1NmE2OTI0ODE5OTExNSIsInVzZXJfaWQiOjF9.EAs4YrcLgzjcEczFIwEl2wmwP_7CDSb8dv5LIO_Kyh4',NULL,'2024-10-08 17:06:35.000000',NULL,'56a2333899c9449a9a56a69248199115'),
(40,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyODQwNzQzNiwiaWF0IjoxNzI4MzIxMDM2LCJqdGkiOiIxNjUyZDczODcxYmM0NDlkODQyZWMzZmExNzE0YTNmZiIsInVzZXJfaWQiOjF9.DC8BQoMLPJ1Ln64yNDI5rnwRHQxOtXO9F6nLrEWutN8',NULL,'2024-10-08 17:10:36.000000',NULL,'1652d73871bc449d842ec3fa1714a3ff'),
(41,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyODQwNzY3NywiaWF0IjoxNzI4MzIxMjc3LCJqdGkiOiJkZjU0NDAxYmI0YmE0ZmQzYjRiYTY4MWMzYzhkZTcxZiIsInVzZXJfaWQiOjF9.HGA81pQbju7gyuEPajajeIPDuDPPw1yLbgyrzJjrgOY',NULL,'2024-10-08 17:14:37.000000',NULL,'df54401bb4ba4fd3b4ba681c3c8de71f'),
(42,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyODQwNzkxOCwiaWF0IjoxNzI4MzIxNTE4LCJqdGkiOiI1NDI4NDdiNDI5Y2M0ZjY5YmY0ZmNhNTQxY2U0ZGRiYyIsInVzZXJfaWQiOjF9.VCXq1KW2xM_vHWU7omaBkpjPJGOan34RrsgkMv0IlSo',NULL,'2024-10-08 17:18:38.000000',NULL,'542847b429cc4f69bf4fca541ce4ddbc'),
(43,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyODQwODE2MCwiaWF0IjoxNzI4MzIxNzYwLCJqdGkiOiI1MWE0ZTdkNWNjMTM0Yzc1OTc2MDcyMzU0NjMwYjgwOSIsInVzZXJfaWQiOjF9.U2qvEb8kqMJYONn-eNh4sjPYqSLvyF_hHP2OfBN3w-E',NULL,'2024-10-08 17:22:40.000000',NULL,'51a4e7d5cc134c75976072354630b809'),
(44,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyODQwODQwMSwiaWF0IjoxNzI4MzIyMDAxLCJqdGkiOiIzN2U0MzM1M2VjZDQ0NDE2YTI5NWY1YzA5ZWFhMDBkMyIsInVzZXJfaWQiOjF9.Ri13keaYoek6pC3jUZK2TrwFRP4SzwZtv_ZsAbvM0hQ',NULL,'2024-10-08 17:26:41.000000',NULL,'37e43353ecd44416a295f5c09eaa00d3'),
(45,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyODQwODY0MiwiaWF0IjoxNzI4MzIyMjQyLCJqdGkiOiJjNTQxYjcwOTE2NmQ0YmIzYTg0N2IzNzRlNGZjZWQ2NSIsInVzZXJfaWQiOjF9.8wSEV9rTQX-qn7YIP4Mv40kbL-eXcFSkQGVG1aPAcfQ',NULL,'2024-10-08 17:30:42.000000',NULL,'c541b709166d4bb3a847b374e4fced65'),
(46,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyODQwODg4MywiaWF0IjoxNzI4MzIyNDgzLCJqdGkiOiJjZTQxOTgzYjA2OWI0MDM2ODQzYTIyOTExMTQ0OWM0ZiIsInVzZXJfaWQiOjF9.pE5PcmJGqkK68ARuIb8x2KfnKynK69kjABfh4PZDofo',NULL,'2024-10-08 17:34:43.000000',NULL,'ce41983b069b4036843a229111449c4f'),
(47,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyODQwOTEyNCwiaWF0IjoxNzI4MzIyNzI0LCJqdGkiOiI1ODFmOTVhMTE3ZTY0MTg4OWEzZmY3NDIwY2I0NGMyNiIsInVzZXJfaWQiOjF9.M-ldVyrIciqsyqheBP7FQLPhFDkxtLiUmCrDKciWyMU',NULL,'2024-10-08 17:38:44.000000',NULL,'581f95a117e641889a3ff7420cb44c26'),
(48,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyODQwOTM2NSwiaWF0IjoxNzI4MzIyOTY1LCJqdGkiOiIwYzBkZmYxNWY5NDk0Y2RlOTljMTdiMGExOWMxYTM5MSIsInVzZXJfaWQiOjF9.-441paN1UQx2u9RZDnibHtZQALqrLPsT2yxoUCdUl54',NULL,'2024-10-08 17:42:45.000000',NULL,'0c0dff15f9494cde99c17b0a19c1a391'),
(49,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyODQwOTYwNiwiaWF0IjoxNzI4MzIzMjA2LCJqdGkiOiI2MDcxNjg3NjQ3Mzg0MWExOGUxOTdiOWZmNmI0ZjhlMyIsInVzZXJfaWQiOjF9.Hzfx2zKC1eiVEUWaugMnyuB52vMmgVEBAY8Gz2_Ww7c',NULL,'2024-10-08 17:46:46.000000',NULL,'60716876473841a18e197b9ff6b4f8e3'),
(50,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyODQwOTg0NywiaWF0IjoxNzI4MzIzNDQ3LCJqdGkiOiJiY2I5MTA1NjY5ZmU0ZmY1ODU1Y2JmZDk1OGUyZGI5NCIsInVzZXJfaWQiOjF9.cvJFgyWQa9PQbm2lN50nNZziPF5T71sO3t2Gvc4wHk4',NULL,'2024-10-08 17:50:47.000000',NULL,'bcb9105669fe4ff5855cbfd958e2db94'),
(51,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyODQxMDA4OCwiaWF0IjoxNzI4MzIzNjg4LCJqdGkiOiJiMTYzNmJiNDQ0MTg0YmYwODU3NThhYTdiMDg0YjQ4NiIsInVzZXJfaWQiOjF9.O3JkIY-wXeK5xG0veJmR_sDqmFXZGw2ahpCa6DImDYY',NULL,'2024-10-08 17:54:48.000000',NULL,'b1636bb444184bf085758aa7b084b486'),
(52,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyODQxMDMyOSwiaWF0IjoxNzI4MzIzOTI5LCJqdGkiOiI5OTA3ZDExODJhNTE0ZGYwYTRjMTlmZWFjYTlmODM2ZiIsInVzZXJfaWQiOjF9.DTCOEkZ_JnPkY3wmkVTIyQfCHTeqqwyAePMzv9EYo0M',NULL,'2024-10-08 17:58:49.000000',NULL,'9907d1182a514df0a4c19feaca9f836f'),
(53,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyODQxMDU3MCwiaWF0IjoxNzI4MzI0MTcwLCJqdGkiOiJlMDdhOWY2NmU2Zjk0ZWUzYmFiNGZkMjA4MWY5OWI2MCIsInVzZXJfaWQiOjF9.tFR_brVqRNRX8tyj6r2OUTjajCp10CKVVmraxlMT44I',NULL,'2024-10-08 18:02:50.000000',NULL,'e07a9f66e6f94ee3bab4fd2081f99b60'),
(54,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyODQxMTc5NCwiaWF0IjoxNzI4MzI1Mzk0LCJqdGkiOiI4NTQwMTgwZGUwZGE0ODJlOWM5YTU0M2E5YmRkNmMzNyIsInVzZXJfaWQiOjF9.szZk84bi7zkM1OEyXEYgBrW6w53dzksjnSiJBNV-Ntk',NULL,'2024-10-08 18:23:14.000000',NULL,'8540180de0da482e9c9a543a9bdd6c37'),
(55,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyODQxMjAzNSwiaWF0IjoxNzI4MzI1NjM1LCJqdGkiOiI0ZDU2NDc1ZGU2YTQ0NmZjYWM0YTM4OWNlNmRlMjAzMyIsInVzZXJfaWQiOjF9.4FhhAPVkG0ql1N6inlsL91l_IZB-byN0uDXAsUEIYfM',NULL,'2024-10-08 18:27:15.000000',NULL,'4d56475de6a446fcac4a389ce6de2033'),
(56,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyODQxMjI3NiwiaWF0IjoxNzI4MzI1ODc2LCJqdGkiOiI4NjIyMzRhZTJlYmE0NzY0OGZkNmE4NDUwMWQ0Yjg3NCIsInVzZXJfaWQiOjF9.KOer8geTBElDcJjbnwCJoMf6Dj8T-h-QGLpp9lVXcJ4',NULL,'2024-10-08 18:31:16.000000',NULL,'862234ae2eba47648fd6a84501d4b874'),
(57,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyODQxMzAyMCwiaWF0IjoxNzI4MzI2NjIwLCJqdGkiOiJmMTA2OWRiNjY5Y2E0OGYzYjYxMTA1MTBlNmFhYWFhOCIsInVzZXJfaWQiOjF9.O1LH-BDEsLq4Z0D-GCLfmtJslPB7KE4TBNECRuWo8lQ','2024-10-07 18:43:40.059507','2024-10-08 18:43:40.000000',1,'f1069db669ca48f3b6110510e6aaaaa8'),
(58,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyODQxMzM1NCwiaWF0IjoxNzI4MzI2OTU0LCJqdGkiOiJmODc4NGY2YzVmMjM0MjYxODk3MjkwMGMwOGEzMDgxMyIsInVzZXJfaWQiOjF9.NbikPa5OAZiQHTJaKtTJ3WHqiQ1LzlMyylzUCYVfeTM',NULL,'2024-10-08 18:49:14.000000',NULL,'f8784f6c5f2342618972900c08a30813'),
(59,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyODQxMzcwOSwiaWF0IjoxNzI4MzI3MzA5LCJqdGkiOiIzNWNkNzhmYzMyNzc0NTFkODBkMjMzYmU5ZWI3YzQyOCIsInVzZXJfaWQiOjF9.KDi6_vX3X822r0nwc7HJlMAuysPHRZ-okCuCDGgXSeM',NULL,'2024-10-08 18:55:09.000000',NULL,'35cd78fc3277451d80d233be9eb7c428'),
(60,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyODQxMzk1MCwiaWF0IjoxNzI4MzI3NTUwLCJqdGkiOiJmMjQ2NDQ4Njg5NmI0YWU5YTFiNGYwOTk5MzRhZTkzNSIsInVzZXJfaWQiOjF9.Aru5yq7_maTthjjEPt9oqsaNMyBbD9MpLCAHyp-Ruvc',NULL,'2024-10-08 18:59:10.000000',NULL,'f2464486896b4ae9a1b4f099934ae935'),
(61,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyODQxNDU5NywiaWF0IjoxNzI4MzI4MTk3LCJqdGkiOiI1ZTAwMzUwZGUyYzA0NGIyODk0MjRmZjFlZDIyM2MwZiIsInVzZXJfaWQiOjF9.qCqzosNV0sIYCJDl4vULKn5WDdKXW-FkA-fBpba9J_I',NULL,'2024-10-08 19:09:57.000000',NULL,'5e00350de2c044b289424ff1ed223c0f'),
(62,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyODQxNDgzOCwiaWF0IjoxNzI4MzI4NDM4LCJqdGkiOiIwNmE0OWExNzQxMGM0ZGUxOTVjNjA5MzgxZTEyZmM3NSIsInVzZXJfaWQiOjF9.a48CfEldg49A9yL5aQPmZc59WIn60wwl9WyNN8RzJVs',NULL,'2024-10-08 19:13:58.000000',NULL,'06a49a17410c4de195c609381e12fc75'),
(63,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyODQxNTA3OSwiaWF0IjoxNzI4MzI4Njc5LCJqdGkiOiI1NjZhNzRiMDc3YmY0YmYyYTU1NDMzNzFiYmUyNzFiZSIsInVzZXJfaWQiOjF9.iNTZM_0H57Ajw3As--lrvaig6zq-Ga584DJ0zZmROEI',NULL,'2024-10-08 19:17:59.000000',NULL,'566a74b077bf4bf2a5543371bbe271be'),
(64,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyODQxNTYyOCwiaWF0IjoxNzI4MzI5MjI4LCJqdGkiOiI3NDJhYTVmNWY1MGE0NTQ3YjNlMDY4NTgyM2E0OGJhMSIsInVzZXJfaWQiOjF9.pDkeMFT411aM3nReEWvaInLrZQO1uRBrxEkAsSHsc7k','2024-10-07 19:27:08.201045','2024-10-08 19:27:08.000000',1,'742aa5f5f50a4547b3e0685823a48ba1'),
(65,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyODQ3OTgzOCwiaWF0IjoxNzI4MzkzNDM4LCJqdGkiOiJiOWFhZGQyYzUyMjk0ZmE1YTY2ZTc4MDdkNTQzYWI2YSIsInVzZXJfaWQiOjF9.lkod4SN_wZrRO3HWGB_oAJINqWoPRnLZQ4hF3bSEr9E','2024-10-08 13:17:18.920031','2024-10-09 13:17:18.000000',1,'b9aadd2c52294fa5a66e7807d543ab6a'),
(66,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyODQ4MDI3OSwiaWF0IjoxNzI4MzkzODc5LCJqdGkiOiJjNzgzOWNlNDg2MGQ0YjExYjZmZDJhZDMwYTVmN2M5ZiIsInVzZXJfaWQiOjF9.sXpWmat1IDYJcT6EPFL4mEjc3t6-fXEYTl3xlsxFe6Q',NULL,'2024-10-09 13:24:39.000000',NULL,'c7839ce4860d4b11b6fd2ad30a5f7c9f'),
(67,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyODQ4MDUyMCwiaWF0IjoxNzI4Mzk0MTIwLCJqdGkiOiIwN2E1MDA5ZjNkZjg0ZTQzYTk2NzgxZjE0ZTk0MGNlMyIsInVzZXJfaWQiOjF9.qBaGOxPwxxWCnx28XNdZP2iOVtASLmdl0fApCOyAM_8',NULL,'2024-10-09 13:28:40.000000',NULL,'07a5009f3df84e43a96781f14e940ce3'),
(68,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyODQ4MDc2MSwiaWF0IjoxNzI4Mzk0MzYxLCJqdGkiOiIwN2ZmYzMxZGFlYTc0Yjg4ODgzZDdkZDE2ZTAxZmNjMCIsInVzZXJfaWQiOjF9.CkFJDVogWiOQ5UauFCum9Lwd2IBLV7KVqA5qokcBCs8',NULL,'2024-10-09 13:32:41.000000',NULL,'07ffc31daea74b88883d7dd16e01fcc0'),
(69,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyODQ4MTAwMiwiaWF0IjoxNzI4Mzk0NjAyLCJqdGkiOiI0MzY1MTk5ZWYzOTA0NTk4YmMyNGE5YTg1Y2RiOTExYyIsInVzZXJfaWQiOjF9.jmnAcjHQBqSFjhWvltaJRyT7SGqCi_2B8lbW6gz6qos',NULL,'2024-10-09 13:36:42.000000',NULL,'4365199ef3904598bc24a9a85cdb911c'),
(70,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyODQ4MTI0MywiaWF0IjoxNzI4Mzk0ODQzLCJqdGkiOiJiNmUzZGRiNjQwM2E0YTRlYjZiZDJjZDhjYjdkMDUyNCIsInVzZXJfaWQiOjF9.Z2GbZj-_0A4gU-pna7Z3RTDhZ-yZKtCn5Rmypgos-aI',NULL,'2024-10-09 13:40:43.000000',NULL,'b6e3ddb6403a4a4eb6bd2cd8cb7d0524'),
(71,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyODQ4MTQ4NCwiaWF0IjoxNzI4Mzk1MDg0LCJqdGkiOiI3NTcyNjE1YTMxN2I0Y2U1ODkxNDJiMTRjZmQ3NzYxYyIsInVzZXJfaWQiOjF9.oC02K9lUCgd279T8NmcLxum4SsahjFvfA6KY71C21qI',NULL,'2024-10-09 13:44:44.000000',NULL,'7572615a317b4ce589142b14cfd7761c'),
(72,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyODUwMDYwMSwiaWF0IjoxNzI4NDE0MjAxLCJqdGkiOiI2Y2YyNGUwMzZlY2M0OTA1YTJjZmNhMDNlNDQ2ZmNkYiIsInVzZXJfaWQiOjF9.9LQvl4G0KDd6YOx34Lr6xDJ0Pzi06vH4KmuBIgbNxZU',NULL,'2024-10-09 19:03:21.000000',NULL,'6cf24e036ecc4905a2cfca03e446fcdb'),
(73,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyODUwMDg0MiwiaWF0IjoxNzI4NDE0NDQyLCJqdGkiOiJkY2VkMDUzODg5NWI0NDEwYjA4MDdkZmM0ZWI3Mjc3MCIsInVzZXJfaWQiOjF9.YwHR5-9F8nZvSX_nmqFmdDw6y3CtMFk_jRRShGZADz0',NULL,'2024-10-09 19:07:22.000000',NULL,'dced0538895b4410b0807dfc4eb72770'),
(74,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyODUwMTEwOCwiaWF0IjoxNzI4NDE0NzA4LCJqdGkiOiJiNjBkZmFmNDc2M2U0NDYxYjE1YzgwZDBkODc1ZjIwMiIsInVzZXJfaWQiOjF9.KCNODqf1LP0hC-qo83SjTFrnQo3SEKApj3gGk4f9_X0',NULL,'2024-10-09 19:11:48.000000',NULL,'b60dfaf4763e4461b15c80d0d875f202'),
(75,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyODUwMTM0OSwiaWF0IjoxNzI4NDE0OTQ5LCJqdGkiOiI0ZWU3NGI1YzIxODc0NDNkYWRkNTcyYjVmYjlmODlkYSIsInVzZXJfaWQiOjF9.KjR74F1w-USL07OblNWEb_77KWVGM0vUXEU4_DgNfY0',NULL,'2024-10-09 19:15:49.000000',NULL,'4ee74b5c2187443dadd572b5fb9f89da'),
(76,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyODUwMTU5MCwiaWF0IjoxNzI4NDE1MTkwLCJqdGkiOiIzMjM3M2I0MzBjNTk0ZTI0OGVjMDUwYjM5NmRhYTcyNiIsInVzZXJfaWQiOjF9.W7lTAECWykHmyny7FoWFgBj8nq0nS2insli08Bl6k88',NULL,'2024-10-09 19:19:50.000000',NULL,'32373b430c594e248ec050b396daa726'),
(77,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyODUwMTgzMSwiaWF0IjoxNzI4NDE1NDMxLCJqdGkiOiI3NTU1OWNhNGMwYzk0YmNiYjFjODlhNmNmMDQ3MmRmMyIsInVzZXJfaWQiOjF9.cgiNaHrzkPa8mta_amNFz32-9NxG0gFfiosQdO2G7ro',NULL,'2024-10-09 19:23:51.000000',NULL,'75559ca4c0c94bcbb1c89a6cf0472df3'),
(78,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyODUwNTk2NCwiaWF0IjoxNzI4NDE5NTY0LCJqdGkiOiJkMWMzYzU3NmFlMjg0ZmQ1YmQzYzViN2JhNjg1MDIyMiIsInVzZXJfaWQiOjF9.Tj3aMgxf-GypcF6q0bLo8bG2-MfbUpSG7hHABBLOHqA',NULL,'2024-10-09 20:32:44.000000',NULL,'d1c3c576ae284fd5bd3c5b7ba6850222'),
(79,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyOTM2NjMxMywiaWF0IjoxNzI5Mjc5OTEzLCJqdGkiOiJlMzNlMzZmZDQwNTE0YWYzOWNlZWJjOGJmMDQyZjAwYyIsInVzZXJfaWQiOjF9.ZGFgvkkhJU4949NNgPv3XsvHisZ0XPVca_kp72TbTFQ','2024-10-18 19:31:53.150060','2024-10-19 19:31:53.000000',1,'e33e36fd40514af39ceebc8bf042f00c'),
(80,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyOTM2NjMzNCwiaWF0IjoxNzI5Mjc5OTM0LCJqdGkiOiIyMDA0ZWM5MGY3ODc0ZDBmOTVmZDg5MTVlYTJiNGIxNSIsInVzZXJfaWQiOjF9.sSd_JPoJzdvLSpAcgHzpk7oRfv6BqfCivwPjlZu-zHY','2024-10-18 19:32:14.405581','2024-10-19 19:32:14.000000',1,'2004ec90f7874d0f95fd8915ea2b4b15'),
(81,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyOTQyMTQxMiwiaWF0IjoxNzI5MzM1MDEyLCJqdGkiOiIxOWY5NGFiYzhlM2Y0ZjE2YTIxNzlmMTdkNGZhZmI4YyIsInVzZXJfaWQiOjF9.MokuqssUYxGLCkBKCarCwZJsCgg9cU5nWixvCXfWmL0','2024-10-19 10:50:12.105963','2024-10-20 10:50:12.000000',1,'19f94abc8e3f4f16a2179f17d4fafb8c'),
(82,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyOTQyMjMyOSwiaWF0IjoxNzI5MzM1OTI5LCJqdGkiOiJlZGZmYTBiNjc3ZDI0Y2M5YjhlMzA1Njc3YTBkZWZkNCIsInVzZXJfaWQiOjF9.ihyVoLj0ie7r7Qj5hHlFpXknV8LdDa4rqu1AbNjoA0s','2024-10-19 11:05:29.098533','2024-10-20 11:05:29.000000',1,'edffa0b677d24cc9b8e305677a0defd4'),
(83,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyOTQyMjkwNiwiaWF0IjoxNzI5MzM2NTA2LCJqdGkiOiI2NWZkYWMxN2VmMzk0OTAyOWVhNDJmZmNhYjFhYmQ3YiIsInVzZXJfaWQiOjF9.2TwE9TVlx479smbckHeqV0BPF2GxJTvd_xtseERwdS8',NULL,'2024-10-20 11:15:06.000000',NULL,'65fdac17ef3949029ea42ffcab1abd7b'),
(84,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyOTgxMDk0MCwiaWF0IjoxNzI5NzI0NTQwLCJqdGkiOiJmYmFmM2I0YWU2Njk0YjZlYmRkMzBjNjU0ODRlM2VkNCIsInVzZXJfaWQiOjF9.jkLvxiP6lzCT3uz6of6zULHmeIsHZzzelUG2_AgQA58','2024-10-23 23:02:20.644819','2024-10-24 23:02:20.000000',1,'fbaf3b4ae6694b6ebdd30c65484e3ed4'),
(85,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyOTgxMTI4MywiaWF0IjoxNzI5NzI0ODgzLCJqdGkiOiI3MGNkOGJlNDA3NWE0YWI1YTg2ZmVkYzViMTQ4NzViZiIsInVzZXJfaWQiOjJ9.USUYRRZo9tAqjvutXyeqfwIzM8RpLtEW5n5HWNpHsXY','2024-10-23 23:08:03.514526','2024-10-24 23:08:03.000000',2,'70cd8be4075a4ab5a86fedc5b14875bf'),
(86,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDA1MzEwOCwiaWF0IjoxNzI5OTY2NzA4LCJqdGkiOiI2NmFhOGFmNjlmMTM0MTVjYWQ2YjlhMWYzNjk1NzRiOCIsInVzZXJfaWQiOjF9.6nmdkJXptLVz6j3SJFBk11765KOxrteOBkBJIfqQOeI','2024-10-26 18:18:28.080978','2024-10-27 18:18:28.000000',1,'66aa8af69f13415cad6b9a1f369574b8'),
(87,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDA1MzYxMCwiaWF0IjoxNzI5OTY3MjEwLCJqdGkiOiIxNjYzMGE4OTgyNWQ0YmM0ODg1MGVhMjlmYzI1YzkyNSIsInVzZXJfaWQiOjF9.xgGB_c3N_NiqTI0jUr3dzUXpeCXr2tPfmiYfcb9nynw','2024-10-26 18:26:50.010983','2024-10-27 18:26:50.000000',1,'16630a89825d4bc48850ea29fc25c925'),
(88,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDIxODM0NywiaWF0IjoxNzMwMTMxOTQ3LCJqdGkiOiIwMjNmMDM5MmRhZTU0ZGE0OGE1OTc3MWU5ZDEzMDdlMSIsInVzZXJfaWQiOjJ9.1MtR2ppG5yXhFSQx_OIU6QTo3WXt4ICgtX3qc83r42E','2024-10-28 16:12:27.029191','2024-10-29 16:12:27.000000',2,'023f0392dae54da48a59771e9d1307e1'),
(89,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDIxODg5OSwiaWF0IjoxNzMwMTMyNDk5LCJqdGkiOiI0NjFiNjlkNjEyNjg0MDgwODhjYWM1YTk1NTRlNWZkZSIsInVzZXJfaWQiOjJ9.G0OkC4q8Ror-wFkvBY3GQtNJHigtngZXDXHXBL4x418',NULL,'2024-10-29 16:21:39.000000',NULL,'461b69d61268408088cac5a9554e5fde'),
(90,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDIxOTE0MCwiaWF0IjoxNzMwMTMyNzQwLCJqdGkiOiJlZDFkNDgxYjBjMjA0MzVmOGI3N2UzNmUxZmQxZjMyNCIsInVzZXJfaWQiOjJ9._fiV2SlSIobN070UfBGk-ReLIhy8uag4Ob3aRcfgaFc',NULL,'2024-10-29 16:25:40.000000',NULL,'ed1d481b0c20435f8b77e36e1fd1f324'),
(91,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDIxOTM4MSwiaWF0IjoxNzMwMTMyOTgxLCJqdGkiOiJlMDVkN2I2N2RkZTM0MWU2YTgzNWNiOTVjY2IyNmEyNCIsInVzZXJfaWQiOjJ9.Pb9OKUsT0w07XtBIN0ixNMJpDPlBSLFyGub-iw4G_w4',NULL,'2024-10-29 16:29:41.000000',NULL,'e05d7b67dde341e6a835cb95ccb26a24'),
(92,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDIxOTYyMiwiaWF0IjoxNzMwMTMzMjIyLCJqdGkiOiJkMWZhMTJjNGRiY2Q0MjM0OWUzNzU1NDczZGUxOWRhNCIsInVzZXJfaWQiOjJ9.ev2D-BH_CyF1jNFzYkE02MrgIVpbti9lRA5iolIl5_w',NULL,'2024-10-29 16:33:42.000000',NULL,'d1fa12c4dbcd42349e3755473de19da4'),
(93,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDIxOTg2MywiaWF0IjoxNzMwMTMzNDYzLCJqdGkiOiIwY2QxYjAyMDYwMjI0MjQ5OWVjNzIxMDhmMGFmN2MzZiIsInVzZXJfaWQiOjJ9.lvKmEaQupu3KX4YVHxAaSzjUgt83Be4VbN7LnvnWAmc',NULL,'2024-10-29 16:37:43.000000',NULL,'0cd1b020602242499ec72108f0af7c3f'),
(94,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDIyMDEwMywiaWF0IjoxNzMwMTMzNzAzLCJqdGkiOiJkMTExN2QwNjUxYTM0ODQ2ODdjYWYzZGUyZWQ3NzBjYyIsInVzZXJfaWQiOjJ9.PSnyu99PbEkqdsf8L5RrXwzwy3AFa0TadWMZE3wkpAg',NULL,'2024-10-29 16:41:43.000000',NULL,'d1117d0651a3484687caf3de2ed770cc'),
(95,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDIyMDM0MywiaWF0IjoxNzMwMTMzOTQzLCJqdGkiOiIxZmNhN2ViMDYwZTQ0MTViOGQ1MmU1Mjg4NWJkNDllZCIsInVzZXJfaWQiOjJ9.eFa9i7Bv3DVxS1yzEL_WSwrDHR7bvw6arq7FRUhNBec',NULL,'2024-10-29 16:45:43.000000',NULL,'1fca7eb060e4415b8d52e52885bd49ed'),
(96,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDIyMDYwMCwiaWF0IjoxNzMwMTM0MjAwLCJqdGkiOiJkYmVkMTNmZDg1ZTg0MzVmYWU0ZTQ0MWI1YTE1NjA5NiIsInVzZXJfaWQiOjJ9.jcq3cFecMcN8Uhk1mh5Apcut5DRu8rlYktKZiuNz4Bo',NULL,'2024-10-29 16:50:00.000000',NULL,'dbed13fd85e8435fae4e441b5a156096'),
(97,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDIyMDg0MSwiaWF0IjoxNzMwMTM0NDQxLCJqdGkiOiIyNTk0ODAxYjdmYjk0NTlhYjc3OTRhOTJjNDIwNDE0YSIsInVzZXJfaWQiOjJ9.WwQ2brQLxbEFsWDfGAnycdI_PuuwzpWm89HpMHDVx_8',NULL,'2024-10-29 16:54:01.000000',NULL,'2594801b7fb9459ab7794a92c420414a'),
(98,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDIyMTA4MiwiaWF0IjoxNzMwMTM0NjgyLCJqdGkiOiIxZDRmOTI3Y2RiZDA0NzJkODE2ZDAzNjkyZDVmOTdmYyIsInVzZXJfaWQiOjJ9.hLN3eFoVKNwFfohicrDUUcguO_blHXbxMgiNofT8PyU',NULL,'2024-10-29 16:58:02.000000',NULL,'1d4f927cdbd0472d816d03692d5f97fc'),
(99,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDIyMTMyMywiaWF0IjoxNzMwMTM0OTIzLCJqdGkiOiIwZGMzYmUzMjNkOTI0MDYyYTEwNDY2NzBlYzMyMzMyNSIsInVzZXJfaWQiOjJ9.n9I0vViD7rhMWgK925NjEH63TBOhQOXU6B2gaWum9mM',NULL,'2024-10-29 17:02:03.000000',NULL,'0dc3be323d924062a1046670ec323325'),
(100,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDIyMTU2NCwiaWF0IjoxNzMwMTM1MTY0LCJqdGkiOiIxY2NiODQ2YjY4YTM0YmE0YTE3ZTFiODIzOTBmZmUwOCIsInVzZXJfaWQiOjJ9.dzPwaPpacF9Ykum-jzPnXCoumVB6WSQmqNm-qBLRICg',NULL,'2024-10-29 17:06:04.000000',NULL,'1ccb846b68a34ba4a17e1b82390ffe08'),
(101,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDIyMTgwNSwiaWF0IjoxNzMwMTM1NDA1LCJqdGkiOiJlZjkzODQxYzAxZGM0NGUyOWU5N2I3MDNiOWFjZTA0MSIsInVzZXJfaWQiOjJ9.WNxmVnkzqqB_Y0_M5VqU3lm4gnozAhqqnGy9-Jj2Ngw',NULL,'2024-10-29 17:10:05.000000',NULL,'ef93841c01dc44e29e97b703b9ace041'),
(102,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDIyMjA0NiwiaWF0IjoxNzMwMTM1NjQ2LCJqdGkiOiJlYWViNDZhMGJmM2Q0NDA2OGIyNmU2NDk0OWQwYjAwYSIsInVzZXJfaWQiOjJ9.bkTu-1102T9PkWebfYO6vPqaRTSFflPaEbQXVYVtfOg',NULL,'2024-10-29 17:14:06.000000',NULL,'eaeb46a0bf3d44068b26e64949d0b00a'),
(103,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDIyMjI4NywiaWF0IjoxNzMwMTM1ODg3LCJqdGkiOiJiMzlmNjc2ZDdlZDY0MDIzODU4MDM1OGJlZjc0ZTc2MyIsInVzZXJfaWQiOjJ9.nDy9YIeDqBOA7_9dOG5gs10DLM4nCcKoEjrziab0VhY',NULL,'2024-10-29 17:18:07.000000',NULL,'b39f676d7ed640238580358bef74e763'),
(104,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDIyMjUyOCwiaWF0IjoxNzMwMTM2MTI4LCJqdGkiOiJlODM2ZWMyZmJhMDM0NzBmYjVhNDAwNmU1N2FlNTgxOCIsInVzZXJfaWQiOjJ9.a1-o3QaV2iDlGx86xxdzKx5IR6N6HRogb9AB1Fr38ko',NULL,'2024-10-29 17:22:08.000000',NULL,'e836ec2fba03470fb5a4006e57ae5818'),
(105,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDIyMjc2OSwiaWF0IjoxNzMwMTM2MzY5LCJqdGkiOiJmYWE2M2RmODgxODQ0N2U2ODQxZTFhMGI1MTk5NWRiNiIsInVzZXJfaWQiOjJ9.8whRHW59RfLduuGd_Kug257ngCYfER0dQIc3P_RJUSI',NULL,'2024-10-29 17:26:09.000000',NULL,'faa63df8818447e6841e1a0b51995db6'),
(106,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDIyMzAxMCwiaWF0IjoxNzMwMTM2NjEwLCJqdGkiOiI5MTg3ZjgwNGMyZjg0ODBkYjg1YzcwOTk3ZGY1ZWRiNSIsInVzZXJfaWQiOjJ9.JC_jzvLr2nsQwnYI4bzzqxO-UpTDchVNbfxeQKXwjJM',NULL,'2024-10-29 17:30:10.000000',NULL,'9187f804c2f8480db85c70997df5edb5'),
(107,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDIyMzI1MSwiaWF0IjoxNzMwMTM2ODUxLCJqdGkiOiJlMzNhNzRhNmNiOWM0ZGZkYmI2ZGZkMGUyMGQwYWU2ZSIsInVzZXJfaWQiOjJ9.KqlLL9Y7ddxrsYr75buHGQxWsyJbzynogBjtYTHSkCs',NULL,'2024-10-29 17:34:11.000000',NULL,'e33a74a6cb9c4dfdbb6dfd0e20d0ae6e'),
(108,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDIyNDM4MywiaWF0IjoxNzMwMTM3OTgzLCJqdGkiOiJhODMwNjM4MzI0NTk0OGZhYjQ4OGEzYTRlODljMjc5MiIsInVzZXJfaWQiOjJ9.psf0CBOm1eyprffIBInm9TIczTUqY70Y8fqEw0GHax0',NULL,'2024-10-29 17:53:03.000000',NULL,'a8306383245948fab488a3a4e89c2792'),
(109,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDIyNDYyNCwiaWF0IjoxNzMwMTM4MjI0LCJqdGkiOiIwN2E1Nzg4OWY5MDE0MTJhODIwNGE1NzI1YzBlOTE0NiIsInVzZXJfaWQiOjJ9.4i5a8MQvsuv-vt8vbh6BcT3adoWZ1fdy1TxUwDPfksg',NULL,'2024-10-29 17:57:04.000000',NULL,'07a57889f901412a8204a5725c0e9146'),
(110,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDIyNDg2NSwiaWF0IjoxNzMwMTM4NDY1LCJqdGkiOiIxMjdiNGQ1NWFmOWU0ZTNjYmY5ZmJjODkzMTZjOTg4NiIsInVzZXJfaWQiOjJ9.h5MOQ7F91AzUgSo1kwcuPFCaAY7Wh3NmcjBpnIjWimA',NULL,'2024-10-29 18:01:05.000000',NULL,'127b4d55af9e4e3cbf9fbc89316c9886'),
(111,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDIyNTEwNiwiaWF0IjoxNzMwMTM4NzA2LCJqdGkiOiIzODIyZjg0NTEwNTk0YjQ1YTE0MTYzNTI4NjYxM2ViYiIsInVzZXJfaWQiOjJ9.o5dDOnkRwm3aecyuO7ZjQqAL_v31JCqMlMd8B4NAJ8g',NULL,'2024-10-29 18:05:06.000000',NULL,'3822f84510594b45a141635286613ebb'),
(112,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDIyNTM0NywiaWF0IjoxNzMwMTM4OTQ3LCJqdGkiOiI4NDE5ODA2YzQxMjc0NDYyYmY3MDBkZWQ3Yzg3NDE4MiIsInVzZXJfaWQiOjJ9.mtwvAT8JMkw2baeZz52M8zIiyfJnKAOniyixQYq59E4',NULL,'2024-10-29 18:09:07.000000',NULL,'8419806c41274462bf700ded7c874182'),
(113,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDIyNTU4OCwiaWF0IjoxNzMwMTM5MTg4LCJqdGkiOiJlYjE1OGU0ZDliYzU0YzFmYTNlNzUxM2VkY2YwMTA1OSIsInVzZXJfaWQiOjJ9.nAm_eCowImOP6uyM59dASG8NDXobx_Z6Q4u8Hevf8cM',NULL,'2024-10-29 18:13:08.000000',NULL,'eb158e4d9bc54c1fa3e7513edcf01059'),
(114,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDIyNTgyOSwiaWF0IjoxNzMwMTM5NDI5LCJqdGkiOiI5MjU2NTQwZGEzMzE0YWNiOTU1ZDJhMTM1ZTA4OWVjOSIsInVzZXJfaWQiOjJ9.h1201OI-wUApOmbJldkNN9XQr-ro3j-9IEC4STYtC1c',NULL,'2024-10-29 18:17:09.000000',NULL,'9256540da3314acb955d2a135e089ec9'),
(115,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDIyODY4MiwiaWF0IjoxNzMwMTQyMjgyLCJqdGkiOiI1Y2QyYzRkOTEyNTk0N2VhODIxN2Y0NzdiZTM4MmRlMCIsInVzZXJfaWQiOjJ9.wVZlc_23Lt8NJHnwYstNgp73YwlgQ0jUb3r21FD_Ets',NULL,'2024-10-29 19:04:42.000000',NULL,'5cd2c4d9125947ea8217f477be382de0'),
(116,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDIyODkyMywiaWF0IjoxNzMwMTQyNTIzLCJqdGkiOiIyNGFjMmEyYWY5NzQ0Y2U4YmJmZjU3YTljNTNjNmU3ZiIsInVzZXJfaWQiOjJ9.m5NfG8vhUIqCIl3gCmbzDzMm8vVAF_4vXZTkZ2tgX9Q',NULL,'2024-10-29 19:08:43.000000',NULL,'24ac2a2af9744ce8bbff57a9c53c6e7f'),
(117,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDIyOTE2NCwiaWF0IjoxNzMwMTQyNzY0LCJqdGkiOiJjYzg3YmQzOTZiODQ0MTUzYWI3OTNiNjhjOWQzYzYyZSIsInVzZXJfaWQiOjJ9.RJKRAwJMctkrDaX4qdpqUm1g8nXy8k2c7P9ZAyvHz8E',NULL,'2024-10-29 19:12:44.000000',NULL,'cc87bd396b844153ab793b68c9d3c62e'),
(118,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDIyOTQwNSwiaWF0IjoxNzMwMTQzMDA1LCJqdGkiOiJmZWNjODI4NDg3Nzc0NWNiYjNmOTU0YzUxZGI4MDc2NSIsInVzZXJfaWQiOjJ9.jcDfuyT5iIgDf-FVrZDBc-WO-Co-X-SnzIT0ERAjE_A',NULL,'2024-10-29 19:16:45.000000',NULL,'fecc8284877745cbb3f954c51db80765'),
(119,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDIyOTY0NiwiaWF0IjoxNzMwMTQzMjQ2LCJqdGkiOiIzYzcwOTllMDNhY2I0ZDAzODBkYjI4MjYxMTYwNTc3YiIsInVzZXJfaWQiOjJ9.Hmb7Jdh9mN7tZi_dk3Gnx8ZKsO411OssCL_A0wFfInI',NULL,'2024-10-29 19:20:46.000000',NULL,'3c7099e03acb4d0380db28261160577b'),
(120,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDIyOTg4NywiaWF0IjoxNzMwMTQzNDg3LCJqdGkiOiI4MzU1YjIwMmFjYjc0YTA3YjdhMGMyMGJmYzVhYTVhZiIsInVzZXJfaWQiOjJ9.tEJvwITSRwISpx9f-3DtUk5r7NAZSHUSfZNI2WpWHEw',NULL,'2024-10-29 19:24:47.000000',NULL,'8355b202acb74a07b7a0c20bfc5aa5af'),
(121,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDIzMDEyOCwiaWF0IjoxNzMwMTQzNzI4LCJqdGkiOiIxODNjNDQ2ZjE5Y2Y0ZjBhYTY1MDQ5OGM4MmFiZTExNiIsInVzZXJfaWQiOjJ9.0_R5LIKgLxUWSXmB-SvWUlQylu_bVM72SQewDHcPPSU',NULL,'2024-10-29 19:28:48.000000',NULL,'183c446f19cf4f0aa650498c82abe116'),
(122,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDIzMDM2OSwiaWF0IjoxNzMwMTQzOTY5LCJqdGkiOiI3ZjExMWVmZmUyZjk0N2ZkYWVmODJmN2RhMTViMzA4MiIsInVzZXJfaWQiOjJ9.3ZPg4I0iDwnUJoOSBD6cJYNKbFzbaY8PN3iSgjjJrtQ',NULL,'2024-10-29 19:32:49.000000',NULL,'7f111effe2f947fdaef82f7da15b3082'),
(123,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDIzMDYxMCwiaWF0IjoxNzMwMTQ0MjEwLCJqdGkiOiI5MmExMWQxNzIzNzU0ZWE4OGRlODNhNDg0ZDEzOGI5NiIsInVzZXJfaWQiOjJ9.O3HlDcLMY0elubWUpZq-i7QLCWlhzd-pgOy4hxdyONU',NULL,'2024-10-29 19:36:50.000000',NULL,'92a11d1723754ea88de83a484d138b96'),
(124,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDIzMDg1MSwiaWF0IjoxNzMwMTQ0NDUxLCJqdGkiOiJmMTA4NzliMzE3N2Y0OWEwODQzNmZlZGZlNGNkNTZlOSIsInVzZXJfaWQiOjJ9.4dj4MuIzXZcJ1KWmzXf_1WigvT1PEXbKVxoJxTNcpOU',NULL,'2024-10-29 19:40:51.000000',NULL,'f10879b3177f49a08436fedfe4cd56e9'),
(125,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDIzMTA5MiwiaWF0IjoxNzMwMTQ0NjkyLCJqdGkiOiI5ZTI3N2IxOTViMjI0ZjIxYThmMjIwZjNhYThkZGJmYiIsInVzZXJfaWQiOjJ9.hqm9zyZ8RClQBbGUzqOCSXiaQmeN7dUcrcqhJQyZmlU',NULL,'2024-10-29 19:44:52.000000',NULL,'9e277b195b224f21a8f220f3aa8ddbfb'),
(126,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDIzMTMzMywiaWF0IjoxNzMwMTQ0OTMzLCJqdGkiOiI0ZGMxYTExMGExNmQ0MjRiOGU3Njk4YWM5OTRiYTE4NSIsInVzZXJfaWQiOjJ9.p3uvyVFsyBYQCWJP1mJU_T2FTOME7vJ3Nv0vKxHCEC4',NULL,'2024-10-29 19:48:53.000000',NULL,'4dc1a110a16d424b8e7698ac994ba185'),
(127,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDIzMTU3NCwiaWF0IjoxNzMwMTQ1MTc0LCJqdGkiOiJmYjRjMTg3MmU5Yjg0YjljOTJhNmFjYjM2MDVlNWQwYSIsInVzZXJfaWQiOjJ9._V2J_cOpbfY6IpfSKE2A-DSzrNYjX3cwcsnYLPcqQoE',NULL,'2024-10-29 19:52:54.000000',NULL,'fb4c1872e9b84b9c92a6acb3605e5d0a'),
(128,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDIzMTgxNSwiaWF0IjoxNzMwMTQ1NDE1LCJqdGkiOiI4MzUyMTI0YmQ1ZDI0OTI2YmRkYjE3Mjk4MTFiZjJlNSIsInVzZXJfaWQiOjJ9.TcudE6Lz371ltp_it2ouFvTz0kr6ul_ywZfc7Zodtzo',NULL,'2024-10-29 19:56:55.000000',NULL,'8352124bd5d24926bddb1729811bf2e5'),
(129,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDIzMjA1NiwiaWF0IjoxNzMwMTQ1NjU2LCJqdGkiOiIzM2UwZGVlMjAxZGM0NzU5OTMzYTQyMDBlMjMzOWU3ZiIsInVzZXJfaWQiOjJ9.r0ay464TFdIK2WKCsG0eXue1xZM_UkTE5KsSXMTTVAI',NULL,'2024-10-29 20:00:56.000000',NULL,'33e0dee201dc4759933a4200e2339e7f'),
(130,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDIzMjI5NywiaWF0IjoxNzMwMTQ1ODk3LCJqdGkiOiI1YmU4YzhmMzcxZWI0YWI0YTYzYmYxZDYzYzQyYjI2ZiIsInVzZXJfaWQiOjJ9.kRvZNEI-xIa4qxFa_1kIU69_DY0k8b5i7Ch9gQIHa2w',NULL,'2024-10-29 20:04:57.000000',NULL,'5be8c8f371eb4ab4a63bf1d63c42b26f'),
(131,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDIzMjUzOCwiaWF0IjoxNzMwMTQ2MTM4LCJqdGkiOiI2ZGQzNWRhMWM2MjA0MzhjYWVkNTAzODg2OWY2ZDI3MyIsInVzZXJfaWQiOjJ9.oUaRcp20RM9OZ1N8hX1a5S7taFT6wwRS8JFy4-MV7hM',NULL,'2024-10-29 20:08:58.000000',NULL,'6dd35da1c620438caed5038869f6d273'),
(132,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDIzMjc3OSwiaWF0IjoxNzMwMTQ2Mzc5LCJqdGkiOiI3NDVmODMxYTU5ZTA0YWNhYWE5ODZhMTJiOTJlNDE2MCIsInVzZXJfaWQiOjJ9.WbJziqLVV21DmaQSu4enbnsr6_9BNMtN3kyfWj_ijFo',NULL,'2024-10-29 20:12:59.000000',NULL,'745f831a59e04acaaa986a12b92e4160'),
(133,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDIzNjk2NCwiaWF0IjoxNzMwMTUwNTY0LCJqdGkiOiIyMDhkNzgzMWY2YjU0ZjgzOTA0ZTBjMWY2YWNmN2FiZCIsInVzZXJfaWQiOjJ9.9V4fyzlPc5kHQLpDPcfpj-1s_iGPu3oxnBBuJYHzXCE',NULL,'2024-10-29 21:22:44.000000',NULL,'208d7831f6b54f83904e0c1f6acf7abd'),
(134,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDI1NjkyOCwiaWF0IjoxNzMwMTcwNTI4LCJqdGkiOiI1NmY5OWNjODE5ZTU0YTFhYmNmMzdjNWY4MDk3ODg0YSIsInVzZXJfaWQiOjJ9.G5NLl2DL8XoIN7SzNkl2rJWiNBWBjW3yLbMRGP6rRe8',NULL,'2024-10-30 02:55:28.000000',NULL,'56f99cc819e54a1abcf37c5f8097884a'),
(135,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDI4ODQ1MCwiaWF0IjoxNzMwMjAyMDUwLCJqdGkiOiJjMzdiODcwYzlhYTE0Mzg2YTA4MzNmZDg4ZjAxYzI3ZiIsInVzZXJfaWQiOjJ9.4tC5pcrJTRgJsxnWl_s5v02UnZFtF_3xF-nDHt5XXtc',NULL,'2024-10-30 11:40:50.000000',NULL,'c37b870c9aa14386a0833fd88f01c27f'),
(136,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDMyNTk4MSwiaWF0IjoxNzMwMjM5NTgxLCJqdGkiOiJjMjY5OTk5NTA0MTk0MTZmYmQ3ZWE5NzMyNzlkMWY3NyIsInVzZXJfaWQiOjJ9.l7RRVOKK5Uo0toYazrVtY7A2wm6k5KRYpLy4awLdWas',NULL,'2024-10-30 22:06:21.000000',NULL,'c26999950419416fbd7ea973279d1f77'),
(137,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDMyNjIyMiwiaWF0IjoxNzMwMjM5ODIyLCJqdGkiOiI3OTgzNTZlNGViNWQ0MDg0ODM5MjA1ZDM2YzI4NDA0MiIsInVzZXJfaWQiOjJ9.9Ry8HkIirYIrS8iynA1_6A3RplAKgClyfDQkoMTurOA',NULL,'2024-10-30 22:10:22.000000',NULL,'798356e4eb5d4084839205d36c284042'),
(138,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDMyNzQ1MiwiaWF0IjoxNzMwMjQxMDUyLCJqdGkiOiJmZGM2MjJmYmVkN2Y0MDQ5OTBlMGEyYjBkNTk1MWE1ZCIsInVzZXJfaWQiOjJ9.XbvSDLXDrqqx41GyivzI8pN8LSNxXr0j3z0wv1LpO8c',NULL,'2024-10-30 22:30:52.000000',NULL,'fdc622fbed7f404990e0a2b0d5951a5d'),
(139,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDMyODY5NSwiaWF0IjoxNzMwMjQyMjk1LCJqdGkiOiJjZGNlNTY5NzNjZjM0ZTFlYjIxYmQ2ZDg4ZWEzYTExYiIsInVzZXJfaWQiOjJ9.qnbR2E5Tf_vLgIAVyLqZPDLECRdxrkEIWf3vOjFSzZ0',NULL,'2024-10-30 22:51:35.000000',NULL,'cdce56973cf34e1eb21bd6d88ea3a11b'),
(140,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDMyOTcxMiwiaWF0IjoxNzMwMjQzMzEyLCJqdGkiOiI1N2FlNWQ0MDUwZGI0N2JkYWY4MDA1MThiMGQ0MTI2NCIsInVzZXJfaWQiOjJ9.01eUFjJv01dEAMf0m-VNHZsH1ThD8PJuMQ6YQ3ODly4',NULL,'2024-10-30 23:08:32.000000',NULL,'57ae5d4050db47bdaf800518b0d41264'),
(141,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDMzMjc5NCwiaWF0IjoxNzMwMjQ2Mzk0LCJqdGkiOiI5MGVmZmQwOGZkMjE0OTE0YjQzNWY4NDVjYjdmNDQzNyIsInVzZXJfaWQiOjJ9.5fKZNp7_hPjZWjIJUdEbg6PF9lovr5TCVer7Wt_ME70',NULL,'2024-10-30 23:59:54.000000',NULL,'90effd08fd214914b435f845cb7f4437'),
(142,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDMzMzAzNCwiaWF0IjoxNzMwMjQ2NjM0LCJqdGkiOiJhOWU0YTcxZjcwNDg0YWRhODk0ZWNhNDNhY2JmYTM0ZCIsInVzZXJfaWQiOjJ9.fgdNkUP23ytWKN6dzt6DRrw2Ednl6BdpGV-8bnnmFHc',NULL,'2024-10-31 00:03:54.000000',NULL,'a9e4a71f70484ada894eca43acbfa34d'),
(143,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDMzMzI3NSwiaWF0IjoxNzMwMjQ2ODc1LCJqdGkiOiJmMTRjZWJkOWNmMDE0NDkzOTlkMTNjYjIwZGQxZThkMCIsInVzZXJfaWQiOjJ9.9hTPJ3u4lOrbQOqrwZan7qm08Azhnq-bT99Yn5_wZYs',NULL,'2024-10-31 00:07:55.000000',NULL,'f14cebd9cf01449399d13cb20dd1e8d0'),
(144,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDMzMzUxNiwiaWF0IjoxNzMwMjQ3MTE2LCJqdGkiOiJhYzM5YjhhYmNiMjE0NWMxOGQ2NGE3M2RhMGE4YjNmZCIsInVzZXJfaWQiOjJ9.-7sjl56XSOltp3Y-aTuU5dbUlRgfMjRy2rfaWzjKFLs',NULL,'2024-10-31 00:11:56.000000',NULL,'ac39b8abcb2145c18d64a73da0a8b3fd'),
(145,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDMzNDgyMiwiaWF0IjoxNzMwMjQ4NDIyLCJqdGkiOiI3ZGMxN2E4MmYzYWE0ZjRkOGMyNTUxZDMyMThlYTI2OCIsInVzZXJfaWQiOjJ9.6aLH-tbd-pJ6azoawfUTlzxp9v3WXcNNPelROOOy-V0',NULL,'2024-10-31 00:33:42.000000',NULL,'7dc17a82f3aa4f4d8c2551d3218ea268'),
(146,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDMzNjkzNywiaWF0IjoxNzMwMjUwNTM3LCJqdGkiOiI5YzRiMThiZThmMjk0YzQ2YTNjOTUyNTQ2ZmE2ZjNlMSIsInVzZXJfaWQiOjJ9.ORI8tJm3DN0zw9RsVJUmR3Ru4oXoJPSuF2nkpiwIXbw',NULL,'2024-10-31 01:08:57.000000',NULL,'9c4b18be8f294c46a3c952546fa6f3e1'),
(147,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDMzNzE3OCwiaWF0IjoxNzMwMjUwNzc4LCJqdGkiOiI4Y2FiMTBmNTI1YzU0OWM5OWMyNmI5N2JjZjU4M2ZiZCIsInVzZXJfaWQiOjJ9.I2rRl44dfICtG_6-W0MkkZbrTlO6a0qoOHdoD7H8W2c',NULL,'2024-10-31 01:12:58.000000',NULL,'8cab10f525c549c99c26b97bcf583fbd'),
(148,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDMzNzk0MywiaWF0IjoxNzMwMjUxNTQzLCJqdGkiOiI0N2ZlMTAyZWVlNTc0ZmFmYWUwN2FjMGFhNDhkY2MyOSIsInVzZXJfaWQiOjJ9.jKjqrleGP-s1zixLo2vEa5Iz6Qu_ENJBrgB762qdf6E',NULL,'2024-10-31 01:25:43.000000',NULL,'47fe102eee574fafae07ac0aa48dcc29'),
(149,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDM0MjM1OCwiaWF0IjoxNzMwMjU1OTU4LCJqdGkiOiI3YTBhZDg0Mzk4MGE0ODgwOTMzYmU0ZmJlNGFlZTdmNyIsInVzZXJfaWQiOjJ9.0yg6ChSXnbFA0bDSk1Mj89-suWDoDgFqIUuerigPj4w',NULL,'2024-10-31 02:39:18.000000',NULL,'7a0ad843980a4880933be4fbe4aee7f7'),
(150,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDM0MjU5OSwiaWF0IjoxNzMwMjU2MTk5LCJqdGkiOiI4NjIyNGJkYzk1NTM0NDZmYjZjYzQ4MWFhNGVhM2E0ZSIsInVzZXJfaWQiOjJ9.PbAgsP9ovOOWXhJdZi9apiH0aBHGvgR33-aN5e6i9vo',NULL,'2024-10-31 02:43:19.000000',NULL,'86224bdc9553446fb6cc481aa4ea3a4e'),
(151,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDM0Mjg0MCwiaWF0IjoxNzMwMjU2NDQwLCJqdGkiOiJkYTgwNzYyNjdjZjE0MjhjODFmZmFhM2EwMmZhMDFlNyIsInVzZXJfaWQiOjJ9.LlgtQrFzVNTSQQgdJhpg2iKZ36fbep3DG-BBmtQG4wI',NULL,'2024-10-31 02:47:20.000000',NULL,'da8076267cf1428c81ffaa3a02fa01e7'),
(152,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDM0MzA4MSwiaWF0IjoxNzMwMjU2NjgxLCJqdGkiOiJkM2QwMjU3MWM1YjU0OTg5YTkxMWI4OTAwNmNhYzY4YyIsInVzZXJfaWQiOjJ9.iLKorRQpAyoRkzMfOMJ18NHtiaPCP04mK4dPX1SmjCA',NULL,'2024-10-31 02:51:21.000000',NULL,'d3d02571c5b54989a911b89006cac68c'),
(153,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDM0MzMyMiwiaWF0IjoxNzMwMjU2OTIyLCJqdGkiOiIyZTMxYmIwOTViMzU0MzgxOTQyYjlhOTU4ZDY4MDZlYSIsInVzZXJfaWQiOjJ9.k9rTIv17g7Vosf0n9QJyZgTsudpMXAnnXQo6lSp37Zs',NULL,'2024-10-31 02:55:22.000000',NULL,'2e31bb095b354381942b9a958d6806ea'),
(154,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDM0MzU2MywiaWF0IjoxNzMwMjU3MTYzLCJqdGkiOiJmZDcxNGZiN2U1OTk0YWQxYmI0ZjBiMTkyYThiNmFjMCIsInVzZXJfaWQiOjJ9.D9pIULS5B72bVlA5lbG__5Bp4O4OOLVZz8E1XRzTRaM',NULL,'2024-10-31 02:59:23.000000',NULL,'fd714fb7e5994ad1bb4f0b192a8b6ac0'),
(155,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDM0MzgwNCwiaWF0IjoxNzMwMjU3NDA0LCJqdGkiOiIwMWI4YTUxZDNlNGE0MjgxYmNhMjFlNmEyN2YxNTRiNCIsInVzZXJfaWQiOjJ9.mI6VC6rpvu-0Vegzd5u1ZhHGrsf8KnHKrth5QMZeAwo',NULL,'2024-10-31 03:03:24.000000',NULL,'01b8a51d3e4a4281bca21e6a27f154b4'),
(156,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDM0NDA0NSwiaWF0IjoxNzMwMjU3NjQ1LCJqdGkiOiJmZmE1Y2Q4MWYwZDE0NzJlOGQ2NmIzNjFkMmNmYzBiZiIsInVzZXJfaWQiOjJ9.novtNvboUbAxsI-OdwS8qtSQIyDEsr7KDyGI7oYrJFs',NULL,'2024-10-31 03:07:25.000000',NULL,'ffa5cd81f0d1472e8d66b361d2cfc0bf'),
(157,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDM0NDI4NiwiaWF0IjoxNzMwMjU3ODg2LCJqdGkiOiIyNDkzNDE3YjhiNWQ0MzBhYjUxN2UyNjU4ZmYzZWIyYSIsInVzZXJfaWQiOjJ9.AtQqzRXGmjlLduQcrO0dADjS4hKuNSdKu7_mNIguP6w',NULL,'2024-10-31 03:11:26.000000',NULL,'2493417b8b5d430ab517e2658ff3eb2a'),
(158,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDM0NDUyNywiaWF0IjoxNzMwMjU4MTI3LCJqdGkiOiIyYjY2OWYzNmExOGQ0NWEwOTk0ZTM5NjYzZGNiNzUyOCIsInVzZXJfaWQiOjJ9.E5BNtoj7fpG4lM5VlgoTAQS8CPPZKXAuzwOPb0F63mI',NULL,'2024-10-31 03:15:27.000000',NULL,'2b669f36a18d45a0994e39663dcb7528'),
(159,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDM0NDc2OCwiaWF0IjoxNzMwMjU4MzY4LCJqdGkiOiI3YmJiYjQ5Y2Y2ZDI0YmIzYjQ5ZjBiZWU3MWFjNzJkYyIsInVzZXJfaWQiOjJ9.DvfqzzPED4c49zVAHwwE3-F0hSZYyDZ6XVpiBpsq5iY',NULL,'2024-10-31 03:19:28.000000',NULL,'7bbbb49cf6d24bb3b49f0bee71ac72dc'),
(160,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDM0NTAwOSwiaWF0IjoxNzMwMjU4NjA5LCJqdGkiOiI0NTM5MTc2NTZjZWU0ZDcyOGRhMGRmZTNjYTE1MzExNSIsInVzZXJfaWQiOjJ9.rYX0v3rwZK_FMJKzW-houZxxo5qgq2ylqde7iVzsKl0',NULL,'2024-10-31 03:23:29.000000',NULL,'453917656cee4d728da0dfe3ca153115'),
(161,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDM0NTI1MCwiaWF0IjoxNzMwMjU4ODUwLCJqdGkiOiJkNmZhOTYzMDc3NWU0NGUxODQ4ZjUyZmEwNTY4MDYwZSIsInVzZXJfaWQiOjJ9.kAvdbZwvMLNrII5yr3HZPE3OHXju5CDJfTQ3ITIuJP8',NULL,'2024-10-31 03:27:30.000000',NULL,'d6fa9630775e44e1848f52fa0568060e'),
(162,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDM0NTQ5MSwiaWF0IjoxNzMwMjU5MDkxLCJqdGkiOiIxZTY3MDAyNWNmMTg0YWJlODMzNjYzMzI5NThjZWM1MSIsInVzZXJfaWQiOjJ9.se6jw0x3ThFQaUKtfMxPKCZtfOt_DT9Sesl8fUTb-7c',NULL,'2024-10-31 03:31:31.000000',NULL,'1e670025cf184abe83366332958cec51'),
(163,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDM0NTczMiwiaWF0IjoxNzMwMjU5MzMyLCJqdGkiOiIxNTg1YmJlNTQ3NDI0YWVhYjJmNDgxOTgxM2M2MGZhOCIsInVzZXJfaWQiOjJ9.ePNTQ4awfEQmSxd-9fNQhi1zz1y0pOurXwhjmi0Hls0',NULL,'2024-10-31 03:35:32.000000',NULL,'1585bbe547424aeab2f4819813c60fa8'),
(164,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDM0NTk3MywiaWF0IjoxNzMwMjU5NTczLCJqdGkiOiI0MTMyODUyODAzNzk0YjRlYjI4YjZjNmIxOWQ2MzQ2YyIsInVzZXJfaWQiOjJ9.MXUDjtrb6Ei9iodYuiEuuH9cMTXkv-CzuKybl6lD0Qs',NULL,'2024-10-31 03:39:33.000000',NULL,'4132852803794b4eb28b6c6b19d6346c'),
(165,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDM0NjIxNCwiaWF0IjoxNzMwMjU5ODE0LCJqdGkiOiJhYzYzN2ZjN2FmNWY0ZDc1OTY5Y2QwYzRmMDBhZTA5NCIsInVzZXJfaWQiOjJ9.XxRovrm5DWw4etx_B_eGcclrZ8btra6z1RDEoxZbNsw',NULL,'2024-10-31 03:43:34.000000',NULL,'ac637fc7af5f4d75969cd0c4f00ae094'),
(166,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDM0NjQ1NSwiaWF0IjoxNzMwMjYwMDU1LCJqdGkiOiJhMmVkNmQyZjNlYTU0NGU2YTI2YjFlMWY2ZjhlNzcxNyIsInVzZXJfaWQiOjJ9.Yo9yTkTz6axiRcjlN2g0N8pgTqzqakF_UWGMyk3My2U',NULL,'2024-10-31 03:47:35.000000',NULL,'a2ed6d2f3ea544e6a26b1e1f6f8e7717'),
(167,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDM0NjY5NiwiaWF0IjoxNzMwMjYwMjk2LCJqdGkiOiIwODZhY2E4MzAwODk0MTE0ODNiODJiYjA2NGEzMGYzMCIsInVzZXJfaWQiOjJ9.NF-zZtO3SqAKfTL33byz8-6idW3LJkyTObC_S1gB2Xs',NULL,'2024-10-31 03:51:36.000000',NULL,'086aca830089411483b82bb064a30f30'),
(168,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDM0NjkzNywiaWF0IjoxNzMwMjYwNTM3LCJqdGkiOiJmMjA3ZDk2YTZlMWI0MjBjOTQ5NTA4NDg2YzM4YWMwOSIsInVzZXJfaWQiOjJ9.IGXO40W3HTy_LGg36c6hymIaubWSzL236dsQCnck-CE',NULL,'2024-10-31 03:55:37.000000',NULL,'f207d96a6e1b420c949508486c38ac09'),
(169,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDM0NzE3OCwiaWF0IjoxNzMwMjYwNzc4LCJqdGkiOiI2ODY4YzQ3MDdhYTA0ZjkxYTAxOTYzNjIzNzMwMWUwNSIsInVzZXJfaWQiOjJ9.O6eBpY5k3wHIPi_z3yNp-Ba2OkdUt0A5gil7LHhRV-0',NULL,'2024-10-31 03:59:38.000000',NULL,'6868c4707aa04f91a019636237301e05'),
(170,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDM0NzQxOSwiaWF0IjoxNzMwMjYxMDE5LCJqdGkiOiJlMzM4MDc5NTJkN2Y0ZjE2OWVhMGU2MzhhZDU1MDcyOCIsInVzZXJfaWQiOjJ9.XNh9fxCD2MTKAfnzeS_zpnRwUVJYXzMEz8rFJHFImZc',NULL,'2024-10-31 04:03:39.000000',NULL,'e33807952d7f4f169ea0e638ad550728'),
(171,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDM0NzY2MCwiaWF0IjoxNzMwMjYxMjYwLCJqdGkiOiI4YmM5NWQ3ZjI4NDc0ODExOGFhYTNkYWI5OTA1ZWU1MiIsInVzZXJfaWQiOjJ9.33Kks2gX40rQVPk6wTQUJIOHinRKZqTBg-hi7yT-2N4',NULL,'2024-10-31 04:07:40.000000',NULL,'8bc95d7f284748118aaa3dab9905ee52'),
(172,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDM0NzkwMSwiaWF0IjoxNzMwMjYxNTAxLCJqdGkiOiJmZmE0MTJiZGVhNmU0YzNhYjg1NTEzOGU2NGU2ODgyOCIsInVzZXJfaWQiOjJ9.fOXZ1mj13tfYNJ8o7cGx-MRaUj8ocPI2rUh2lYEtKVg',NULL,'2024-10-31 04:11:41.000000',NULL,'ffa412bdea6e4c3ab855138e64e68828'),
(173,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDM0ODE0OSwiaWF0IjoxNzMwMjYxNzQ5LCJqdGkiOiI5ZmY5NDY2YWYxZGU0MzBmOGRiZTg0OWNiNzNlZGI3YyIsInVzZXJfaWQiOjJ9.j_Ng7tG_qfjMoPsAzZ4fekzqhBDOZGFmO8eC0AIcgvk',NULL,'2024-10-31 04:15:49.000000',NULL,'9ff9466af1de430f8dbe849cb73edb7c'),
(174,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDM0ODM5MCwiaWF0IjoxNzMwMjYxOTkwLCJqdGkiOiJiOTYxODY2ODBiZTE0MjUwYWU1ODExNThmMGM1YWZjYiIsInVzZXJfaWQiOjJ9.IKjg326SJ7iyfPatawjGlMJvhL8Z1q4dX2u25DL7VeU',NULL,'2024-10-31 04:19:50.000000',NULL,'b96186680be14250ae581158f0c5afcb'),
(175,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDM0ODYzMSwiaWF0IjoxNzMwMjYyMjMxLCJqdGkiOiJkMGJlMDY4YWRhYjQ0MjZjYmNlMGJhYzU2ODgxOTRjNCIsInVzZXJfaWQiOjJ9.NPXzOdS9CzlvlH-FYQ61q4vnfgwamshWvovUUnqu9ZE',NULL,'2024-10-31 04:23:51.000000',NULL,'d0be068adab4426cbce0bac5688194c4'),
(176,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDM0ODg3MiwiaWF0IjoxNzMwMjYyNDcyLCJqdGkiOiIzMzhmN2M4ODdlNTA0YmNlOGQ0ZDMyZmFhNzVhNDEyMyIsInVzZXJfaWQiOjJ9.SC7TkmFKUqBX0tC0SnE76WuP51LfZUASNQ7J1pzlxeo',NULL,'2024-10-31 04:27:52.000000',NULL,'338f7c887e504bce8d4d32faa75a4123'),
(177,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDM0OTExMywiaWF0IjoxNzMwMjYyNzEzLCJqdGkiOiI0MjFkODk1ZDc1NTE0ZWMyOTA0YzMyMDg2MmVkMTA0MiIsInVzZXJfaWQiOjJ9.2APrBlBhp3fs_9_D92CG-4fMd-SKtrJefSjRHCXUI0c',NULL,'2024-10-31 04:31:53.000000',NULL,'421d895d75514ec2904c320862ed1042'),
(178,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDM0OTM1NCwiaWF0IjoxNzMwMjYyOTU0LCJqdGkiOiJkOTM5MTc2OTM2ODk0NzY5OTdmZjk5MjQ0MWYxZGViZSIsInVzZXJfaWQiOjJ9.eJPQjnuDY1u3uFFwrMEv5bvH9ub0SiyztEcMBQk8kp4',NULL,'2024-10-31 04:35:54.000000',NULL,'d93917693689476997ff992441f1debe'),
(179,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDM0OTYyOCwiaWF0IjoxNzMwMjYzMjI4LCJqdGkiOiJiZWE1MDM1MTU5ZDE0MDI1OWI5MzBlMDdkM2EyZTZiOCIsInVzZXJfaWQiOjJ9.A4-6HJ9XZieMD0CEC5HaB_rpDi0HABaeDFtEC10Go6s',NULL,'2024-10-31 04:40:28.000000',NULL,'bea5035159d140259b930e07d3a2e6b8'),
(180,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDM0OTg2OSwiaWF0IjoxNzMwMjYzNDY5LCJqdGkiOiJlYTI0NzE5NmZmMTc0MjFmYWU5OTliYjMxNjdmODhiMyIsInVzZXJfaWQiOjJ9.7j_cU4pPZfq6pkcrMWtQPK-S2SWEIAVoqSpSXaAPl94',NULL,'2024-10-31 04:44:29.000000',NULL,'ea247196ff17421fae999bb3167f88b3'),
(181,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDM1MDExMCwiaWF0IjoxNzMwMjYzNzEwLCJqdGkiOiI4MzM3ZDBhZWNkZjA0Nzc4OTMxNjA0MGY5ODgwOGZmMiIsInVzZXJfaWQiOjJ9.UyjvRBbQS4cuURMYBkEwWaDs1mAUlpy0x6mqf2GlcvI',NULL,'2024-10-31 04:48:30.000000',NULL,'8337d0aecdf047789316040f98808ff2'),
(182,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDM1MDM1MSwiaWF0IjoxNzMwMjYzOTUxLCJqdGkiOiIxZGM0NmVmM2I5N2Q0NzllOGVmNmZiMTBkZmMzYzI5YiIsInVzZXJfaWQiOjJ9.z-t6q9aQym8ztUJzdBJWFgLZFY19vxzrH3Gex1isf2Q',NULL,'2024-10-31 04:52:31.000000',NULL,'1dc46ef3b97d479e8ef6fb10dfc3c29b'),
(183,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDM5MDY0NSwiaWF0IjoxNzMwMzA0MjQ1LCJqdGkiOiI1NDA5ZWVkYjM4Y2E0YmI4Yjg1NDY0YWQ5ZDM5OTIzMyIsInVzZXJfaWQiOjJ9.lfjsl2H9X02Bl8Iphg4bEvL7a16tNF2QZWrTRB_beRg',NULL,'2024-10-31 16:04:05.000000',NULL,'5409eedb38ca4bb8b85464ad9d399233'),
(184,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDQwNjU4OCwiaWF0IjoxNzMwMzIwMTg4LCJqdGkiOiJjNzk2ZWRiZmUwOTI0ZTA0OTFmYzY0NTI1NzIxZDAzMiIsInVzZXJfaWQiOjJ9.faEvi8ED05s0mno9D4DwZj3m57MzEJTgQpUsEXzxF6E',NULL,'2024-10-31 20:29:48.000000',NULL,'c796edbfe0924e0491fc64525721d032'),
(185,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDQwNjgyOSwiaWF0IjoxNzMwMzIwNDI5LCJqdGkiOiJkZjJjZDRmNGYyOGY0NTU0Yjc3ZDIyYjRlMGExMTA2ZSIsInVzZXJfaWQiOjJ9.4WHM74i3XsFBFQoqCzfTU64VYwN7jWqKtm5kVjVsouU',NULL,'2024-10-31 20:33:49.000000',NULL,'df2cd4f4f28f4554b77d22b4e0a1106e'),
(186,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDQwNzA3MCwiaWF0IjoxNzMwMzIwNjcwLCJqdGkiOiI4NGFhNGRjNDlkOTk0NTZlOWQ2N2JlOGU0ZWJkNjIwOSIsInVzZXJfaWQiOjJ9.MREw8bECuu7HLGyIelOhxz6sc5bnucZg7T7n5W8yBsc',NULL,'2024-10-31 20:37:50.000000',NULL,'84aa4dc49d99456e9d67be8e4ebd6209'),
(187,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDQwNzMxMSwiaWF0IjoxNzMwMzIwOTExLCJqdGkiOiIyMDRmODY0Zjc4NGE0Zjg4YjNjMzA5ZGY1ZmY2NDEzZiIsInVzZXJfaWQiOjJ9.1nml0Y2dNHbqMHn6CI4oTXmE2THm1Nrcq7UN4pf8Da4',NULL,'2024-10-31 20:41:51.000000',NULL,'204f864f784a4f88b3c309df5ff6413f'),
(188,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDQwNzYwNywiaWF0IjoxNzMwMzIxMjA3LCJqdGkiOiIyYmY4MTE2ZTlkYzc0ZWIwYWRmMjZkZjZlN2FhYjFkZCIsInVzZXJfaWQiOjJ9.AL_EqFaOyqv0j2cbUsgaMAPTUsShdG6UlUa_wCqpqCY',NULL,'2024-10-31 20:46:47.000000',NULL,'2bf8116e9dc74eb0adf26df6e7aab1dd'),
(189,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDQwNzg0OCwiaWF0IjoxNzMwMzIxNDQ4LCJqdGkiOiI4NzI3Yjc2N2Y2NTg0ZWFiOWQxMWJhYTE1NDFjZWNjZCIsInVzZXJfaWQiOjJ9.ls4gBWrVXxf7oC6a13fmUX61uO81TQSwcsQfqgQS9lM',NULL,'2024-10-31 20:50:48.000000',NULL,'8727b767f6584eab9d11baa1541ceccd'),
(190,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDQwODA4OSwiaWF0IjoxNzMwMzIxNjg5LCJqdGkiOiI5ODNhZTBkNmVhY2U0OGRkODg3YTk3NTM2YmYxY2IzMyIsInVzZXJfaWQiOjJ9.LKPObFnrZOlgDd1PrqGHMiCFEWlK3iykKYusXm0VDxQ',NULL,'2024-10-31 20:54:49.000000',NULL,'983ae0d6eace48dd887a97536bf1cb33'),
(191,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDQwODMzMCwiaWF0IjoxNzMwMzIxOTMwLCJqdGkiOiIyM2NiNmEwZWUxMGI0OWM0OWFiM2RkNjZlMTY3ZTQ3OSIsInVzZXJfaWQiOjJ9.T8ta55pnYjNehZ7pTyskkRH8S4ctd6TBJjb1Pu53fd0',NULL,'2024-10-31 20:58:50.000000',NULL,'23cb6a0ee10b49c49ab3dd66e167e479'),
(192,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDQwODU3MSwiaWF0IjoxNzMwMzIyMTcxLCJqdGkiOiJmMjhjYzc1MzI5MGQ0ZTQ3YWNjNTI3ZjZmMWYyY2Y5YSIsInVzZXJfaWQiOjJ9.hyqGDYBr3BHO7sO1TWaKwldLTyL1tttEPwJHEhinCJs',NULL,'2024-10-31 21:02:51.000000',NULL,'f28cc753290d4e47acc527f6f1f2cf9a'),
(193,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDQ3NjQwOSwiaWF0IjoxNzMwMzkwMDA5LCJqdGkiOiJiYjU5YmQ3ZWNjNmI0MzcyYWIwZGVmNjAwNmY5MjgxMSIsInVzZXJfaWQiOjJ9.2yR3Hq14h7_RC1adG8U3lPGQ5E9tpPArk1ZtIxpRqfo',NULL,'2024-11-01 15:53:29.000000',NULL,'bb59bd7ecc6b4372ab0def6006f92811'),
(194,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDQ3NjY1MCwiaWF0IjoxNzMwMzkwMjUwLCJqdGkiOiJjNmM3NmViYWMyNTM0OTllODEwOGI5MTJkNzljZWVmMCIsInVzZXJfaWQiOjJ9.-JMBGecJWT_OCdgYk7u7jq7akmk7pFIkeOaJJUsUVeo',NULL,'2024-11-01 15:57:30.000000',NULL,'c6c76ebac253499e8108b912d79ceef0'),
(195,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDQ3Njg5MSwiaWF0IjoxNzMwMzkwNDkxLCJqdGkiOiI4ZWUwMmNmNzg3NWE0ZjliODI1N2FmOTBlNmExZWQ5ZSIsInVzZXJfaWQiOjJ9.OsAYv9x-gpnjYpGGoHxlpY5CiWQZ2UFLT1HFaSdDsgs',NULL,'2024-11-01 16:01:31.000000',NULL,'8ee02cf7875a4f9b8257af90e6a1ed9e'),
(196,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDQ3NzEzMiwiaWF0IjoxNzMwMzkwNzMyLCJqdGkiOiJlYjEwY2U0OGY2M2U0MjRlYTBkYjU2MDY2NDA3ODg3YSIsInVzZXJfaWQiOjJ9.x_J2I_0ZPOIqBRtjEgNC5vYotAfSkI79vwEtE_QFTIY',NULL,'2024-11-01 16:05:32.000000',NULL,'eb10ce48f63e424ea0db56066407887a'),
(197,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDQ3NzM3MywiaWF0IjoxNzMwMzkwOTczLCJqdGkiOiJlMjk3MWZiMjZkZWU0NjA2YjE1NjNjOGFjZThlM2E1NyIsInVzZXJfaWQiOjJ9.1ZWUGpwwdnFcLEyhhcm9LZLcHkIkT2nmTj4v8HxW-c0',NULL,'2024-11-01 16:09:33.000000',NULL,'e2971fb26dee4606b1563c8ace8e3a57'),
(198,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDQ3NzYxNCwiaWF0IjoxNzMwMzkxMjE0LCJqdGkiOiI0Y2FlZThiODgyZGI0MGM2YWMwMTY0Mzk2ZDhiMjliMSIsInVzZXJfaWQiOjJ9.ouBpqXOy1InDmtEVLGLA-5iUaE1dq51EInWtSzEgT28',NULL,'2024-11-01 16:13:34.000000',NULL,'4caee8b882db40c6ac0164396d8b29b1'),
(199,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDQ3Nzg1NSwiaWF0IjoxNzMwMzkxNDU1LCJqdGkiOiIyOGQ0ZTgwYmFmN2M0MTQ1YTBhNzJlY2Y3ODdjMDU4OCIsInVzZXJfaWQiOjJ9.hZ_Y5NqMB1VTqnQfOnyF1Joc1xdTDrzXdQOBZa7kkcQ',NULL,'2024-11-01 16:17:35.000000',NULL,'28d4e80baf7c4145a0a72ecf787c0588'),
(200,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDQ3ODA5NiwiaWF0IjoxNzMwMzkxNjk2LCJqdGkiOiJkMzVlYmVhNWJmMDk0YTJlOGI4NzU0ZThlZjAyODYxZSIsInVzZXJfaWQiOjJ9.XL7o9s9fEMmAllPLyeByY3px2W3I1NjUwQbgDcawtkc',NULL,'2024-11-01 16:21:36.000000',NULL,'d35ebea5bf094a2e8b8754e8ef02861e'),
(201,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDQ3ODMzNywiaWF0IjoxNzMwMzkxOTM3LCJqdGkiOiI4ZDgyYjk5ZWE1OWQ0ZWFkYTE3MWYwYTYyZTExZWY0MyIsInVzZXJfaWQiOjJ9.0aomF_ZJ136urp2izFUMlr4XKeF_9bgZCxogzfmBQRs',NULL,'2024-11-01 16:25:37.000000',NULL,'8d82b99ea59d4eada171f0a62e11ef43'),
(202,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDQ3ODU3OCwiaWF0IjoxNzMwMzkyMTc4LCJqdGkiOiJjY2U1M2ViMmU4OWU0Mzg2YWE5NTIyMWUyMTU5YzIxZiIsInVzZXJfaWQiOjJ9.gSFi03tw_N_HEcozrhzK26Ei5H7FSg0UydXs5ndXm-o',NULL,'2024-11-01 16:29:38.000000',NULL,'cce53eb2e89e4386aa95221e2159c21f'),
(203,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDQ3ODgxOSwiaWF0IjoxNzMwMzkyNDE5LCJqdGkiOiI2NzY1NzA0NzViNDE0NjNlOWIyMzJkN2Q1NjVkMmFmMSIsInVzZXJfaWQiOjJ9.l4C36X-NED3DMQf0uUdH4dG1Y1IJS05acZoW0ZUMxiw',NULL,'2024-11-01 16:33:39.000000',NULL,'676570475b41463e9b232d7d565d2af1'),
(204,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDQ3OTA2MCwiaWF0IjoxNzMwMzkyNjYwLCJqdGkiOiIxOWZkNDYwMDNjMjE0ZGMzODI1ZGJmY2NlMzM5YTExYyIsInVzZXJfaWQiOjJ9.NlHTmuyi07tH0Pn42wRFYxY-DQaiG2auCFC0hMl06LI',NULL,'2024-11-01 16:37:40.000000',NULL,'19fd46003c214dc3825dbfcce339a11c'),
(205,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDQ3OTMwMiwiaWF0IjoxNzMwMzkyOTAyLCJqdGkiOiJmMjQwMWYxMDAxOTM0NmU5YTk1Mzk3OWNiZGNiNjlkMiIsInVzZXJfaWQiOjJ9.iiyPNR-AlYPWBD8DdYOWXielJRf55ScNXwnRIw3ZVkg',NULL,'2024-11-01 16:41:42.000000',NULL,'f2401f10019346e9a953979cbdcb69d2'),
(206,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDQ3OTU0MiwiaWF0IjoxNzMwMzkzMTQyLCJqdGkiOiI1NGJkYzdlYjg4YmQ0NjA1OWY1ODc4NDQ3ZDNhNDE4ZiIsInVzZXJfaWQiOjJ9.QFOJ-lPp3h7v4keVu3OV86pRAc1_8wRp7N8o2px9f0U',NULL,'2024-11-01 16:45:42.000000',NULL,'54bdc7eb88bd46059f5878447d3a418f'),
(207,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDQ3OTc4NCwiaWF0IjoxNzMwMzkzMzg0LCJqdGkiOiI1ZDA1MWFmNzMwZTQ0ZWQxODE3OWEwNmY2MTNhYzkxOSIsInVzZXJfaWQiOjJ9.jp2p4TR9FfbrT-0wxApePR0oi5_hmaVEODsjpT8SFJw',NULL,'2024-11-01 16:49:44.000000',NULL,'5d051af730e44ed18179a06f613ac919'),
(208,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDQ4MDAyNCwiaWF0IjoxNzMwMzkzNjI0LCJqdGkiOiJlYmZjZWVlNDA3OTY0OGE4YmE2MWU4ZWVhYWExOWJkZiIsInVzZXJfaWQiOjJ9.JsakSjNW-uiFOqvyTaMFKb-g5Q8C__qngScm6t2rHiI',NULL,'2024-11-01 16:53:44.000000',NULL,'ebfceee4079648a8ba61e8eeaaa19bdf'),
(209,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDQ4MDI2NSwiaWF0IjoxNzMwMzkzODY1LCJqdGkiOiJlYmNhMmJmYWI0ZTk0M2JiYjgwMWIyOGRkZjNkZjhhZiIsInVzZXJfaWQiOjJ9.xv1JoBklpbqFkScBlu4X4w3ut-hVcBoQfBJNe2HqqNw',NULL,'2024-11-01 16:57:45.000000',NULL,'ebca2bfab4e943bbb801b28ddf3df8af'),
(210,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDQ4MDUwNiwiaWF0IjoxNzMwMzk0MTA2LCJqdGkiOiIyN2VjZWExNjk1YzM0ZThhYmE4YzI0NDc2MWE1MDMyYSIsInVzZXJfaWQiOjJ9.BVN4zG7robNq6xgqLUtE0A-IDFos8_eig9ZrVoRXQPY',NULL,'2024-11-01 17:01:46.000000',NULL,'27ecea1695c34e8aba8c244761a5032a'),
(211,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDQ4MDc0NywiaWF0IjoxNzMwMzk0MzQ3LCJqdGkiOiI5N2Y2NGM2YjQ5MmM0YmUyYWM2M2NmMmViNmU0MGRlYiIsInVzZXJfaWQiOjJ9.P07crE1YxyNNoojkNClKl2fcuRqwimePH05vvKIpAAo',NULL,'2024-11-01 17:05:47.000000',NULL,'97f64c6b492c4be2ac63cf2eb6e40deb'),
(212,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDQ4MDk4OCwiaWF0IjoxNzMwMzk0NTg4LCJqdGkiOiIxMzAyN2FlNDRiMDQ0N2U3OTY2NmYxMTgyYjc1OGRmNSIsInVzZXJfaWQiOjJ9.6CCdbMfCDjhkV8vzb85JmGl_IdROGc_H7634A7JPzts',NULL,'2024-11-01 17:09:48.000000',NULL,'13027ae44b0447e79666f1182b758df5'),
(213,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDQ4MTIyOSwiaWF0IjoxNzMwMzk0ODI5LCJqdGkiOiJjZTEyOWFjMGY2YzI0MGUzYTNkNTdjY2NjNDVkZWNmMiIsInVzZXJfaWQiOjJ9.JGiMdbSXf7R92ZPytg7JUVMnMSpzF_UcOO3-qUumYvw',NULL,'2024-11-01 17:13:49.000000',NULL,'ce129ac0f6c240e3a3d57cccc45decf2'),
(214,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDQ4MTQ3MCwiaWF0IjoxNzMwMzk1MDcwLCJqdGkiOiIxNTM2OGYxYjA2Y2I0YzMyODY3NjlmZmZiOTBmYzUzYSIsInVzZXJfaWQiOjJ9.t7z4j1v0Uiwi093H0ylMibUlkBrTR4rOmKSkbaowLhI',NULL,'2024-11-01 17:17:50.000000',NULL,'15368f1b06cb4c3286769fffb90fc53a'),
(215,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDQ4MTcxMSwiaWF0IjoxNzMwMzk1MzExLCJqdGkiOiJlNDczOWQ5Njc5Yzk0OTA4OGRkMzUwZDQ3MzM0NWU5YyIsInVzZXJfaWQiOjJ9.D51Y61FoxmrXwRjVPawQeFgfopuIFPfMn1sDWO1oCs0',NULL,'2024-11-01 17:21:51.000000',NULL,'e4739d9679c949088dd350d473345e9c'),
(216,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDQ4MTk1MiwiaWF0IjoxNzMwMzk1NTUyLCJqdGkiOiIzZGRlYjY5MzMwYmY0YzIzYjFmMWM4M2UzYjQ1YzE1MyIsInVzZXJfaWQiOjJ9.wooHXyCjfLrOO3hozBToO1ul_lXvZ-z2osNHVj9cBNI',NULL,'2024-11-01 17:25:52.000000',NULL,'3ddeb69330bf4c23b1f1c83e3b45c153'),
(217,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDQ4MjE5MywiaWF0IjoxNzMwMzk1NzkzLCJqdGkiOiJiMWFmNzJlMmQ0ZjI0NGZiYTUyYTczMzViZjQyNmM4MiIsInVzZXJfaWQiOjJ9.jBOdAHY6drRfN4Uvz5kA2kNbFDaHTLuHVD-x6kid28w',NULL,'2024-11-01 17:29:53.000000',NULL,'b1af72e2d4f244fba52a7335bf426c82'),
(218,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDQ4MjQzNCwiaWF0IjoxNzMwMzk2MDM0LCJqdGkiOiI0MmIwY2UxOWVmYjI0MzA2YWFiOGJhNDMxMjVmYWJkMCIsInVzZXJfaWQiOjJ9.xaP6flm48ihxMAzpaOO7xGE8DMxQhNx3wAl7p3ltfHs',NULL,'2024-11-01 17:33:54.000000',NULL,'42b0ce19efb24306aab8ba43125fabd0'),
(219,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDQ4MjY3NSwiaWF0IjoxNzMwMzk2Mjc1LCJqdGkiOiIzNzQ1ZTM4N2I4YmM0ZmY3ODljOTIxNjI2NzllNzRmYyIsInVzZXJfaWQiOjJ9.vkdFHTYqA-N4Unu4ZMEdLZG29rSaSxTVDQNI-bB2VyU',NULL,'2024-11-01 17:37:55.000000',NULL,'3745e387b8bc4ff789c92162679e74fc'),
(220,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDQ4MjkxNiwiaWF0IjoxNzMwMzk2NTE2LCJqdGkiOiI1YmE5ODE2ZjQ2OGU0MWE3OGM1M2VjOGIwZjllMjFlYiIsInVzZXJfaWQiOjJ9.E0zYtSuQbJbkzHsXh7ZsHeP5iWQ4HOdqu3SGxr9toz8',NULL,'2024-11-01 17:41:56.000000',NULL,'5ba9816f468e41a78c53ec8b0f9e21eb'),
(221,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDQ4OTU2MiwiaWF0IjoxNzMwNDAzMTYyLCJqdGkiOiJkZTAzZjg0ZjcwZjg0YWU5OGUxOGU0MDNjZTY0MWEzYiIsInVzZXJfaWQiOjF9.gkTgwxHRooK_DyBlNwJ9LzgZI8nleMZja4uOXhSnOyw','2024-10-31 19:32:42.834736','2024-11-01 19:32:42.000000',1,'de03f84f70f84ae98e18e403ce641a3b'),
(222,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDQ4OTM5MCwiaWF0IjoxNzMwNDAyOTkwLCJqdGkiOiIzMjdlZTBhOWYxMzQ0OWQyODMxY2NhNGNmOTAwMmQ2OSIsInVzZXJfaWQiOjJ9.ec1NSoxugTJC20wuwmyisLDZKxserBsW7ZQ5UiNoxpo',NULL,'2024-11-01 19:29:50.000000',NULL,'327ee0a9f13449d2831cca4cf9002d69'),
(223,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMDQ4OTYzMSwiaWF0IjoxNzMwNDAzMjMxLCJqdGkiOiIxOTU3NmEwMGRkY2Y0ZjNjYmYzYzg2NTU1YjVhZjNjNCIsInVzZXJfaWQiOjJ9.33Qukec0-ilIGtGt9owEhVxeZwyABa1zH9MpCMdJ-PA',NULL,'2024-11-01 19:33:51.000000',NULL,'19576a00ddcf4f3cbf3c86555b5af3c4');
/*!40000 ALTER TABLE `token_blacklist_outstandingtoken` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*M!100616 SET NOTE_VERBOSITY=@OLD_NOTE_VERBOSITY */;

-- Dump completed on 2024-11-13 22:26:55
