-- phpMyAdmin SQL Dump
-- version 4.8.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 28, 2018 at 09:47 AM
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
  `Jumlah` int(10) NOT NULL,
  `harga` int(10) NOT NULL,
  `hargatotal` int(10) NOT NULL
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
(7, 'Sport', 'PPPPP', 'PPPP'),
(8, 'War', 'ssss', 'sww'),
(9, 'Strategy', 'sss', 'sss');

-- --------------------------------------------------------

--
-- Table structure for table `invoice`
--

CREATE TABLE `invoice` (
  `id` int(10) NOT NULL,
  `user_id` int(10) NOT NULL,
  `nama_penerima` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `kode_pos` int(20) NOT NULL,
  `alamat` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `hp_penerima` int(20) NOT NULL,
  `finalprice` int(20) NOT NULL,
  `carakirim` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `carabayar` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `processdata` int(5) NOT NULL,
  `Time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `invoice`
--

INSERT INTO `invoice` (`id`, `user_id`, `nama_penerima`, `kode_pos`, `alamat`, `hp_penerima`, `finalprice`, `carakirim`, `carabayar`, `processdata`, `Time`) VALUES
(11, 1, 'saddsad', 12, 'saddsaasd', 1231, 200000, 'Gojek', 'Debit', 0, '2018-08-26 03:55:01'),
(12, 1, 'sada', 12332, 'adsdaass', 123123, 1000000, 'Gojek', 'Debit', 2, '2018-08-26 03:56:26'),
(13, 1, 'asd', 1231123, 'asdas', 123131, 231231, 'Gojek', 'Debit', 0, '2018-08-28 03:40:25'),
(14, 18, 'asha', 123, 'hasa', 123222, 2131312, 'Wahana', 'Debit', 2, '2018-08-28 04:59:28'),
(15, 19, 'aeron', 12345, 'hadad', 2147483647, 231231, 'Wahana', 'Debit', 0, '2018-08-28 07:35:11');

-- --------------------------------------------------------

--
-- Table structure for table `invoice_detail`
--

CREATE TABLE `invoice_detail` (
  `id` int(10) NOT NULL,
  `invoice_id` int(10) NOT NULL,
  `category_name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `product_name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `jumlah` int(10) NOT NULL,
  `harga` int(10) NOT NULL,
  `hargatotal` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `invoice_detail`
--

INSERT INTO `invoice_detail` (`id`, `invoice_id`, `category_name`, `product_name`, `jumlah`, `harga`, `hargatotal`) VALUES
(10, 11, 'Action', 'Persona5', 1, 200000, 200000),
(11, 12, 'Strategy', 'Yugioh', 1, 1000000, 1000000),
(12, 13, 'Fantasy', 'FallOut3', 1, 231231, 231231),
(13, 14, 'Fantasy', 'sad', 2, 2131312, 2131312),
(14, 15, 'Fantasy', 'FallOut3', 1, 231231, 231231);

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
(2, 'mitchellaeron14@gmail.com', '7fe887ef6195e450c84bf791618900cd33e3e22c9afa4e25966301a98910e37c');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(10) NOT NULL,
  `product_name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `harga` int(20) NOT NULL,
  `stock` int(10) NOT NULL,
  `image` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `min_os` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `min_processor` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `min_memory` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `min_graphic` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `min_storage` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `max_os` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `max_processor` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `max_memory` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `max_graphic` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `max_storage` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `category_id` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `product_name`, `harga`, `stock`, `image`, `min_os`, `min_processor`, `min_memory`, `min_graphic`, `min_storage`, `max_os`, `max_processor`, `max_memory`, `max_graphic`, `max_storage`, `category_id`) VALUES
(10, 'FallOut3', 231231, 37, 'it1tycd5wgjld1bfdk', 'asdasd', 'sdadsd', 'sdad', 'sad', 'sda', 'sad', 'dsa', 'd', 'dsa', 'sad', 5),
(11, 'sad', 2131312, 19, 'it1tycd5wgjld1c4o4', '23', 'lorem', 'lorem', 'lorem', 'lorem', 'lorem', 'lorem', 'lorem', 'lorem', 'lorem', 5),
(12, 'Dysnaty Warrior', 12313, 10, 'it1tycdci8jld3xzp7', 'dkajd', 'kj', 'kj', 'dasd', 'jj', 'h', 'hjh', 'jh', 'jjh', 'jh', 9);

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
(16, 'POP', '54a8be926aa7e5eb77079a5a08a48b4902a93001b1176f5d92cce82193d12ef0'),
(17, 'POPI', 'caaa8b8be7b1203e20423359eaa57ac73b8dfcaf4e9304040b9192be877ca6f1'),
(18, 'ichsan', '7f60856b45eb15564fcf230aae41642d6fb0141659c455f96478dc38658b09d3'),
(19, 'Kilo', 'f084f61c488d5115940abc9aab22a5dd09367d2a0add8277eb72c28df734438d');

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
-- Indexes for table `invoice`
--
ALTER TABLE `invoice`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `invoice_detail`
--
ALTER TABLE `invoice_detail`
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
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `invoice`
--
ALTER TABLE `invoice`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `invoice_detail`
--
ALTER TABLE `invoice_detail`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `master_user`
--
ALTER TABLE `master_user`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `profile`
--
ALTER TABLE `profile`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

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
