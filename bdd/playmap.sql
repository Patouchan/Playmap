-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Mar 23, 2021 at 08:34 AM
-- Server version: 5.7.32
-- PHP Version: 7.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `playmap`
--
CREATE DATABASE IF NOT EXISTS `playmap` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `playmap`;

-- --------------------------------------------------------

--
-- Table structure for table `beta`
--

CREATE TABLE `beta` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `age` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `beta`
--

INSERT INTO `beta` (`id`, `name`, `age`) VALUES
(1, 'michel', 51),
(2, 'marie', 20),
(3, 'patrick', 33),
(4, 'stella', 37),
(5, 'marc', 20),
(6, 'benjamin', 44);

-- --------------------------------------------------------

--
-- Table structure for table `doctrine_migration_versions`
--

CREATE TABLE `doctrine_migration_versions` (
  `version` varchar(191) COLLATE utf8_unicode_ci NOT NULL,
  `executed_at` datetime DEFAULT NULL,
  `execution_time` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `doctrine_migration_versions`
--

INSERT INTO `doctrine_migration_versions` (`version`, `executed_at`, `execution_time`) VALUES
('DoctrineMigrations\\Version20210322154150', '2021-03-22 15:42:03', 67),
('DoctrineMigrations\\Version20210322154441', '2021-03-22 15:44:53', 147);

-- --------------------------------------------------------

--
-- Table structure for table `stat`
--

CREATE TABLE `stat` (
  `id` int(11) NOT NULL,
  `total_distance` int(11) NOT NULL,
  `monthly_distance` int(11) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `stat`
--

INSERT INTO `stat` (`id`, `total_distance`, `monthly_distance`, `user_id`) VALUES
(1, 386, 46, 2);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `email` varchar(180) COLLATE utf8mb4_unicode_ci NOT NULL,
  `roles` longtext COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '(DC2Type:array)',
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pseudo` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lastname` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `firstname` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `postal_code` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `city` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `newsletter` tinyint(1) NOT NULL,
  `grade` int(11) NOT NULL,
  `level` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `email`, `roles`, `password`, `pseudo`, `lastname`, `firstname`, `address`, `postal_code`, `city`, `newsletter`, `grade`, `level`) VALUES
(1, 'azer@mail.com', 'a:0:{}', '$argon2id$v=19$m=65536,t=4,p=1$7XlJHqzFeTWIyCgj+DEctw$eJJOnCvkJuNPgk9VfTdxmTQwkRWP9vCaQeumHz7xLjs', 'azer', 'Azz', 'Err', NULL, NULL, NULL, 0, 3, 3),
(2, 'matteo@mail.com', 'a:1:{i:0;s:10:\"ROLE_ADMIN\";}', '$argon2id$v=19$m=65536,t=4,p=1$lXclroBq1ETd8bIIh68Kog$1J9oIl3E/QBACFd0tExaVlv0tW0t3L7FW4PdaExzcZk', 'matteo', 'Porrani', 'Matteo', NULL, NULL, NULL, 0, 5, 5),
(3, 'balise@mail.com', 'a:0:{}', '$argon2id$v=19$m=65536,t=4,p=1$cA2nD0/yDNJCySYMUbqbCA$cWl2wRAufF5nblOXpW4U4gWBAApgi3NxiYFS0Cg/pHw', 'balise', 'Bal', 'Lise', NULL, NULL, NULL, 0, 2, 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `beta`
--
ALTER TABLE `beta`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `doctrine_migration_versions`
--
ALTER TABLE `doctrine_migration_versions`
  ADD PRIMARY KEY (`version`);

--
-- Indexes for table `stat`
--
ALTER TABLE `stat`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_20B8FF21A76ED395` (`user_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_8D93D649E7927C74` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `beta`
--
ALTER TABLE `beta`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `stat`
--
ALTER TABLE `stat`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `stat`
--
ALTER TABLE `stat`
  ADD CONSTRAINT `FK_20B8FF21A76ED395` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
