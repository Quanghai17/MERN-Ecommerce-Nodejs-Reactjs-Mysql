-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jul 11, 2024 at 10:31 AM
-- Server version: 8.0.30
-- PHP Version: 8.0.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ecommerce_node`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int NOT NULL,
  `name` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL,
  `imageUrl` varchar(255) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `description` text COLLATE utf8mb3_unicode_ci,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `imageUrl`, `description`, `createdAt`, `updatedAt`) VALUES
(1, 'Tai Nghe', 'public\\uploads\\categoryImage-1720599412399.jpg', 'test tai nghe', '2024-07-10 08:16:52', '2024-07-10 08:16:52'),
(2, 'Điện thoại', 'public\\uploads\\categoryImage-1720602797538.png', 'điện thoại iphone', '2024-07-10 09:13:17', '2024-07-10 09:13:17'),
(3, 'Apple Watch Series', 'public\\uploads\\categoryImage-1720606558046.png', 'Apple Watch Series', '2024-07-10 10:15:58', '2024-07-10 10:15:58');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int NOT NULL,
  `name` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL,
  `imageUrl` varchar(255) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `price` decimal(10,0) NOT NULL,
  `description` text COLLATE utf8mb3_unicode_ci,
  `body` text COLLATE utf8mb3_unicode_ci,
  `stock` int NOT NULL,
  `sellNumber` int NOT NULL,
  `categoryId` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `imageUrl`, `price`, `description`, `body`, `stock`, `sellNumber`, `categoryId`, `createdAt`, `updatedAt`) VALUES
(12, 'Tai nghe Bluetooth B&O BeoPlay H9', 'public\\uploads\\productImage-1720689134488.jpg', '160000000', ' Chế độ 1 chạm có thể giúp người dùng nhanh chóng điều chỉnh tai nghe để nghe thấy âm thanh bên ngoài rõ hơn.', 'Sử dụng bộ âm thanh cao cấp aptX/A2DP kết hợp với hệ thống âm thanh chống ồn ANC (Active Noise Cancelling) giúp cho chất lượng âm thanh rõ ràng, chi tiết đến không ngờ.', 20, 10, 1, '2024-07-10 04:15:42', '2024-07-11 09:12:14'),
(13, 'Tai nghe TrueWireless SOUL S-Live 30', 'public\\uploads\\productImage-1720689105241.png', '2000000', 'Tai nghe TrueWireless SOUL S-Live 30 cho phép người dùng nghe nhạc cả ngày với thời lượng bên đến 30 giờ khi kèm hộp sạc', 'Tai nghe TrueWireless SOUL S-Live 30 cho phép người dùng nghe nhạc cả ngày với thời lượng bên đến 30 giờ khi kèm hộp sạc. Đồng thời tai nghe có khả năng duy trì kết nối ổn định lên đến 10 mét với công nghệ bluetooth 5.3. Bên cạnh đó, nó còn có khả năng kháng nước chuẩn IPX4, không sợ mồ hôi tập luyện hay mưa nhẹ. Chống ồn ENC giúp nghe nhạc thoải mái không ngại tiếng ồn xung quanh.', 100, 101, 1, '2024-07-10 07:34:56', '2024-07-11 09:11:45'),
(15, 'iPhone 14 Pro Max 128GB Quốc Tế', 'public\\uploads\\productImage-1720606361921.png', '20000000', 'Cuối cùng thì Apple cũng trình làng chiếc iPhone 14 Pro Max 128GB Quốc Tế - chiếc điện thoại sáng giá nhất trong bộ sưu tập iPhone 2022. Máy được ra mắt với một diện mạo vừa lạ vừa quen, cùng với đó là những nâng cấp mạnh mẽ về phần cứng và cụm camera sau.', 'Cuối cùng thì Apple cũng trình làng chiếc iPhone 14 Pro Max 128GB Quốc Tế - chiếc điện thoại sáng giá nhất trong bộ sưu tập iPhone 2022. Máy được ra mắt với một diện mạo vừa lạ vừa quen, cùng với đó là những nâng cấp mạnh mẽ về phần cứng và cụm camera sau.', 100, 19, 2, '2024-07-10 10:12:41', '2024-07-10 10:12:41'),
(16, 'Apple Watch Series 9 LTE 41mm NHÔM (Mới 100% - VN/A)', 'public\\uploads\\productImage-1720606665849.png', '39000000', 'Trong sự kiện Wonderlust 2023, Táo khuyết đã chính thức ra mắt thế hệ smartwatch mới nhất của mình - Apple Watch Series 9 GPS + Cellular 41mm viền nhôm dây silicon', 'Trong sự kiện Wonderlust 2023, Táo khuyết đã chính thức ra mắt thế hệ smartwatch mới nhất của mình - Apple Watch Series 9 GPS + Cellular 41mm viền nhôm dây silicon', 100, 30, 3, '2024-07-10 10:17:45', '2024-07-10 10:17:45');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `name` varchar(255) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `role` varchar(255) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `role`, `createdAt`, `updatedAt`) VALUES
(1, 'Quang hai', 'nguyenquanghai@gmail.com', '$2a$10$1v5aVfMeFj.Wv6dbUI0geeFnY0qJ1o6Z5q/cU7FbiqADyCTooLhCy', 'ADMIN', '2024-07-04 09:26:13', '2024-07-04 09:26:13'),
(2, 'Quang hai', 'quanghai123@gmail.com', '$2a$10$r/lu3.vmPLF8JVkeTc7E2OKJuHVejhLFlmd/h021vNq2srPM4kEn.', 'GENERAL', '2024-07-04 10:21:11', '2024-07-04 10:21:11'),
(3, 'Nguyễn Quang hải', 'contact@hallobaby.vn', '$2a$10$/PNSmCqQ/L3GzaDm9rNj9us14Jp7yLvP8yOFM8nz88BLzlhjX42vq', 'GENERAL', '2024-07-04 10:21:43', '2024-07-04 10:21:43'),
(4, 'Nguyễn Quang hải', 'contact123@hallobaby.vn', '$2a$10$9RfTa6QCazA6OqfNu9WBuOTggZ9vDodSVVx3oJ0LqpSKN0zCONGLa', 'GENERAL', '2024-07-04 10:29:56', '2024-07-04 10:29:56'),
(5, 'Nguyễn Quang hải', 'nguyenquanghai123@gmail.com', '$2a$10$KQgjt0gqHJtpaxilja6BiepuUr.MIW6vLyi5AePYxPFO9ggZO0hG.', 'GENERAL', '2024-07-05 01:20:29', '2024-07-05 01:20:29'),
(6, 'Nguyễn Quang hải', 'nguyenquanghai17@gmail.com', '$2a$10$n2URGHhEV5Ax4T1e3xU65e9a6tA63R8lk9YjsnNc3mDDR44nkkQPi', 'GENERAL', '2024-07-05 02:43:16', '2024-07-05 02:43:16');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
