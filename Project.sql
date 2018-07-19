-- phpMyAdmin SQL Dump
-- version 4.8.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 19, 2018 at 11:12 AM
-- Server version: 10.1.33-MariaDB
-- PHP Version: 7.2.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `project_user_e-c_game`
--

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `id` int(10) NOT NULL,
  `product_id` int(10) NOT NULL,
  `user_id` int(10) NOT NULL,
  `process_data` int(10) NOT NULL,
  `finalprice` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int(10) NOT NULL,
  `category` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `description1` varchar(300) COLLATE utf8_unicode_ci NOT NULL,
  `description2` varchar(300) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `category`, `description1`, `description2`) VALUES
(1, 'Action', 'sassds', 'sadsads'),
(2, 'Simulation', 'GGG', 'GGG'),
(3, 'Horror', 'HHHH', 'HHHH'),
(4, 'Survival', 'SSS', 'SSS'),
(5, 'Fantasy', 'FFF', 'FFF'),
(6, 'RPG', 'sss', 'sss'),
(7, 'Sport', 'PPPPP', 'PPPP'),
(8, 'War', 'ssss', 'sww'),
(9, 'Strategy', 'sss', 'sss');

-- --------------------------------------------------------

--
-- Table structure for table `master_user`
--

CREATE TABLE `master_user` (
  `id` int(10) NOT NULL,
  `E_mail` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `master_user`
--

INSERT INTO `master_user` (`id`, `E_mail`, `password`) VALUES
(1, 'mitchellaeron14@gmail.com', '1b6a15583aed9368516951289cb6749a0a8cce01213a24af28fbde64772f9fd7');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(10) NOT NULL,
  `product_name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `harga` int(20) NOT NULL,
  `image` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `min_os` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `min_processor` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `min_memory` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `min_graphic` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `min_storage` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `max_os` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `max_processor` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `max_memory` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `max_graphic` int(50) NOT NULL,
  `max_storage` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `category_id` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `profile`
--

CREATE TABLE `profile` (
  `id` int(10) NOT NULL,
  `userid` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `e-mail` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `phonenumber` varchar(15) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(10) NOT NULL,
  `user_name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `user_name`, `password`) VALUES
(0, '0', '0'),
(1, 'Zero', '7fe887ef6195e450c84bf791618900cd33e3e22c9afa4e25966301a98910e37c'),
(2, 'Wibu', 'a13d6cd13311e47f7d833a645c42084475cd3b9a7cb54f7189183633918593ae'),
(15, 'Poke', 'bb9995f05fd7886164c0dff939e9f731dccb812cad0eb9424148e8e79897ca01'),
(16, 'POP', '54a8be926aa7e5eb77079a5a08a48b4902a93001b1176f5d92cce82193d12ef0');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userid` (`user_id`),
  ADD KEY `prodid` (`product_id`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `master_user`
--
ALTER TABLE `master_user`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `categoryid` (`category_id`);

--
-- Indexes for table `profile`
--
ALTER TABLE `profile`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `userid` (`userid`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `master_user`
--
ALTER TABLE `master_user`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `profile`
--
ALTER TABLE `profile`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `cart`
--
ALTER TABLE `cart`
  ADD CONSTRAINT `prodid` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`),
  ADD CONSTRAINT `userid` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

--
-- Constraints for table `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `categoryid` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
