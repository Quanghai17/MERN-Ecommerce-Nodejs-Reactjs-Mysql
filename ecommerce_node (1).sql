-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jul 17, 2024 at 09:51 AM
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
-- Table structure for table `carts`
--

CREATE TABLE `carts` (
  `id` int NOT NULL,
  `userId` int NOT NULL,
  `productId` int DEFAULT NULL,
  `quantity` int NOT NULL DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Dumping data for table `carts`
--

INSERT INTO `carts` (`id`, `userId`, `productId`, `quantity`, `createdAt`, `updatedAt`) VALUES
(51, 1, 12, 1, '2024-07-15 09:20:50', '2024-07-15 09:20:50'),
(52, 1, 13, 1, '2024-07-15 09:20:50', '2024-07-15 09:20:50'),
(53, 7, 13, 1, '2024-07-17 09:37:53', '2024-07-17 09:37:53'),
(54, 7, 15, 1, '2024-07-17 09:38:30', '2024-07-17 09:38:30'),
(55, 1, 23, 1, '2024-07-17 09:40:10', '2024-07-17 09:40:10'),
(56, 1, 21, 1, '2024-07-17 09:40:34', '2024-07-17 09:40:34'),
(57, 1, 19, 1, '2024-07-17 09:40:36', '2024-07-17 09:40:36');

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
(2, 'Iphone', 'public\\uploads\\categoryImage-1720602797538.png', 'điện thoại iphone', '2024-07-10 09:13:17', '2024-07-16 07:08:38'),
(3, 'Apple Watch', 'public\\uploads\\categoryImage-1720606558046.png', 'Apple Watch', '2024-07-10 10:15:58', '2024-07-16 09:34:32'),
(5, 'MacBook Air', 'public\\uploads\\categoryImage-1721123227237.png', 'Mac', '2024-07-12 00:49:38', '2024-07-16 09:47:07'),
(6, 'Ipad', 'public\\uploads\\categoryImage-1721113850635.png', 'Ipad', '2024-07-16 07:10:50', '2024-07-16 07:10:50'),
(7, 'IMac', 'public\\uploads\\categoryImage-1721113978627.png', 'IMac', '2024-07-16 07:12:58', '2024-07-16 07:12:58'),
(8, 'Tai nghe, Loa', 'public\\uploads\\categoryImage-1721114028323.png', 'Tai nghe, Loa', '2024-07-16 07:13:48', '2024-07-16 07:13:48'),
(9, 'Phụ kiện', 'public\\uploads\\categoryImage-1721114115196.png', 'Phụ kiện', '2024-07-16 07:15:15', '2024-07-16 07:15:15');

-- --------------------------------------------------------

--
-- Table structure for table `orderitems`
--

CREATE TABLE `orderitems` (
  `id` int NOT NULL,
  `orderId` int NOT NULL,
  `productId` int NOT NULL,
  `quantity` int NOT NULL,
  `price` decimal(10,0) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Dumping data for table `orderitems`
--

INSERT INTO `orderitems` (`id`, `orderId`, `productId`, `quantity`, `price`, `createdAt`, `updatedAt`) VALUES
(1, 1, 12, 2, '100', '2024-07-15 07:09:17', '2024-07-15 07:09:17'),
(2, 1, 13, 1, '200', '2024-07-15 07:09:17', '2024-07-15 07:09:17'),
(3, 3, 12, 1, '1600000', '2024-07-15 09:18:25', '2024-07-15 09:18:25'),
(4, 3, 13, 2, '2000000', '2024-07-15 09:18:25', '2024-07-15 09:18:25'),
(5, 3, 15, 1, '20000000', '2024-07-15 09:18:25', '2024-07-15 09:18:25'),
(6, 4, 12, 1, '1600000', '2024-07-15 10:05:55', '2024-07-15 10:05:55'),
(7, 4, 13, 1, '2000000', '2024-07-15 10:05:55', '2024-07-15 10:05:55'),
(8, 5, 12, 1, '1600000', '2024-07-15 10:14:26', '2024-07-15 10:14:26'),
(9, 5, 13, 1, '2000000', '2024-07-15 10:14:26', '2024-07-15 10:14:26');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int NOT NULL,
  `userId` int NOT NULL,
  `totalAmount` decimal(10,0) NOT NULL,
  `status` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL DEFAULT 'Pending',
  `shippingAddress` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL DEFAULT 'Pending',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `userId`, `totalAmount`, `status`, `shippingAddress`, `createdAt`, `updatedAt`) VALUES
(1, 1, '5200000', 'Pending', 'Thái Nguyên', '2024-07-15 07:09:17', '2024-07-15 07:09:17'),
(2, 1, '25600000', 'Pending', 'Pending', '2024-07-15 09:17:21', '2024-07-15 09:17:21'),
(3, 1, '25600000', 'Pending', 'Pending', '2024-07-15 09:18:25', '2024-07-15 09:18:25'),
(4, 1, '3600000', 'Pending', 'Thái Nguyên', '2024-07-15 10:05:55', '2024-07-15 10:05:55'),
(5, 1, '3600000', 'Pending', 'Thái Nguyên', '2024-07-15 10:14:26', '2024-07-15 10:14:26');

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
(12, 'Tai nghe Bluetooth B&O BeoPlay H9', 'public\\uploads\\productImage-1721123322617.png', '1600000', ' Chế độ 1 chạm có thể giúp người dùng nhanh chóng điều chỉnh tai nghe để nghe thấy âm thanh bên ngoài rõ hơn.', 'Sử dụng bộ âm thanh cao cấp aptX/A2DP kết hợp với hệ thống âm thanh chống ồn ANC (Active Noise Cancelling) giúp cho chất lượng âm thanh rõ ràng, chi tiết đến không ngờ.', 20, 10, 8, '2024-07-10 04:15:42', '2024-07-16 09:48:42'),
(13, 'Tai nghe TrueWireless SOUL S-Live 30', 'public\\uploads\\productImage-1721123339696.png', '2000000', 'Tai nghe TrueWireless SOUL S-Live 30 cho phép người dùng nghe nhạc cả ngày với thời lượng bên đến 30 giờ khi kèm hộp sạc', 'Tai nghe TrueWireless SOUL S-Live 30 cho phép người dùng nghe nhạc cả ngày với thời lượng bên đến 30 giờ khi kèm hộp sạc. Đồng thời tai nghe có khả năng duy trì kết nối ổn định lên đến 10 mét với công nghệ bluetooth 5.3. Bên cạnh đó, nó còn có khả năng kháng nước chuẩn IPX4, không sợ mồ hôi tập luyện hay mưa nhẹ. Chống ồn ENC giúp nghe nhạc thoải mái không ngại tiếng ồn xung quanh.', 100, 101, 8, '2024-07-10 07:34:56', '2024-07-16 09:48:59'),
(15, 'iPhone 14 Pro Max 128GB Quốc Tế', 'public\\uploads\\productImage-1721123297777.png', '20000000', 'Cuối cùng thì Apple cũng trình làng chiếc iPhone 14 Pro Max 128GB Quốc Tế - chiếc điện thoại sáng giá nhất trong bộ sưu tập iPhone 2022. Máy được ra mắt với một diện mạo vừa lạ vừa quen, cùng với đó là những nâng cấp mạnh mẽ về phần cứng và cụm camera sau.', 'Cuối cùng thì Apple cũng trình làng chiếc iPhone 14 Pro Max 128GB Quốc Tế - chiếc điện thoại sáng giá nhất trong bộ sưu tập iPhone 2022. Máy được ra mắt với một diện mạo vừa lạ vừa quen, cùng với đó là những nâng cấp mạnh mẽ về phần cứng và cụm camera sau.', 100, 19, 2, '2024-07-10 10:12:41', '2024-07-16 09:48:17'),
(16, 'Apple Watch Series 9', 'public\\uploads\\productImage-1721123278205.png', '3900000', 'Trong sự kiện Wonderlust 2023, Táo khuyết đã chính thức ra mắt thế hệ smartwatch mới nhất của mình - Apple Watch Series 9 GPS + Cellular 41mm viền nhôm dây silicon', 'Trong sự kiện Wonderlust 2023, Táo khuyết đã chính thức ra mắt thế hệ smartwatch mới nhất của mình - Apple Watch Series 9 GPS + Cellular 41mm viền nhôm dây silicon', 100, 30, 3, '2024-07-10 10:17:45', '2024-07-17 02:08:40'),
(18, 'MacBook Air 2023  M2 8GB', 'public\\uploads\\productImage-1721123247365.png', '24300000', 'Sản phẩm được kiểm tra kĩ lưỡng qua quy trình test cẩn thận 20 bước, đảm bảo hoạt động ổn định trước khi đến tay người dùng', 'Sản phẩm được kiểm tra kĩ lưỡng qua quy trình test cẩn thận 20 bước, đảm bảo hoạt động ổn định trước khi đến tay người dùng', 100, 19, 5, '2024-07-12 00:49:10', '2024-07-17 02:08:32'),
(19, 'Adapter sạc Apple USB-C 20W', 'public\\uploads\\productImage-1721121516973.png', '520000', 'Adapter sạc Apple USB-C 20W', 'Bộ Sạc Apple USB-C 20W giúp sạc nhanh và hiệu quả tại nhà, trong văn phòng hoặc khi đang di chuyển. Mặc dù bộ sạc này tương thích với mọi thiết bị có cổng sạc USB‑C, Apple khuyên bạn nên sử dụng phụ kiện này với iPad Pro và iPad Air để đạt hiệu quả sạc tối ưu. Bạn cũng có thể sử dụng với iPhone 8 hoặc các phiên bản cao hơn để tận dụng tính năng sạc nhanh. ', 100, 0, 9, '2024-07-16 09:18:36', '2024-07-16 09:18:36'),
(20, 'iPhone 13', 'public\\uploads\\productImage-1721181990858.png', '14590000', 'Bộ sản phẩm gồm: Hộp, Sách hướng dẫn, Cây lấy sim, Cáp Lightning - Type C', 'Bộ sản phẩm gồm: Hộp, Sách hướng dẫn, Cây lấy sim, Cáp Lightning - Type C', 100, 0, 2, '2024-07-17 02:06:30', '2024-07-17 02:06:30'),
(21, 'iPhone 11', 'public\\uploads\\productImage-1721182079669.png', '8790000', 'Bộ sản phẩm gồm: Hộp, Sách hướng dẫn, Cây lấy sim, Cáp Lightning - Type C', 'Bộ sản phẩm gồm: Hộp, Sách hướng dẫn, Cây lấy sim, Cáp Lightning - Type C', 100, 0, 2, '2024-07-17 02:07:59', '2024-07-17 02:07:59'),
(22, 'iPhone 12', 'public\\uploads\\productImage-1721182345697.png', '11990000', 'Hư gì đổi nấy 12 tháng tại 3078 siêu thị trên toàn quốc Xem chi tiết chính sách bảo hành, đổi trả', 'Hư gì đổi nấy 12 tháng tại 3078 siêu thị trên toàn quốc Xem chi tiết chính sách bảo hành, đổi trả', 100, 0, 2, '2024-07-17 02:12:25', '2024-07-17 02:12:25'),
(23, 'iPhone 14 Plus', 'public\\uploads\\productImage-1721182417113.png', '19990000', 'Thu cũ Đổi mới: Giảm đến 2 triệu (Tuỳ model máy cũ, Không kèm thanh toán qua cổng online, mua kèm)', 'Thu cũ Đổi mới: Giảm đến 2 triệu (Tuỳ model máy cũ, Không kèm thanh toán qua cổng online, mua kèm)', 100, 0, 2, '2024-07-17 02:13:37', '2024-07-17 02:13:37');

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
(6, 'Nguyễn Quang hải', 'nguyenquanghai17@gmail.com', '$2a$10$n2URGHhEV5Ax4T1e3xU65e9a6tA63R8lk9YjsnNc3mDDR44nkkQPi', 'GENERAL', '2024-07-05 02:43:16', '2024-07-05 02:43:16'),
(7, 'Nguyễn Quang Hải', 'nguyenquanghai24@gmail.com', '$2a$10$oV/4sz6derXic3/z0DSicednQPltjcPWdJox0o2XWFprkGlmVIQoi', 'GENERAL', '2024-07-17 09:16:11', '2024-07-17 09:16:11');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `carts`
--
ALTER TABLE `carts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orderitems`
--
ALTER TABLE `orderitems`
  ADD PRIMARY KEY (`id`),
  ADD KEY `orderId` (`orderId`),
  ADD KEY `productId` (`productId`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

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
-- AUTO_INCREMENT for table `carts`
--
ALTER TABLE `carts`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=58;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `orderitems`
--
ALTER TABLE `orderitems`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `orderitems`
--
ALTER TABLE `orderitems`
  ADD CONSTRAINT `orderitems_ibfk_1` FOREIGN KEY (`orderId`) REFERENCES `orders` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `orderitems_ibfk_2` FOREIGN KEY (`productId`) REFERENCES `products` (`id`);

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
