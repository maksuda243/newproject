-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 26, 2023 at 04:54 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.2.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `react_crud`
--

-- --------------------------------------------------------

--
-- Table structure for table `banner`
--

CREATE TABLE `banner` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `columnSize` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `banner`
--

INSERT INTO `banner` (`id`, `name`, `image`, `columnSize`) VALUES
(1, 'Clothing Collections 2030', 'assets/img/banner/banner-1.jpg', 'col-lg-7 offset-lg-4'),
(2, 'Shoes Spring 2030', 'assets/img/banner/banner-3.jpg', 'col-lg-5'),
(3, 'Shoes Spring 2030', 'assets/img/banner/banner-3.jpg', 'col-lg-7');

-- --------------------------------------------------------

--
-- Table structure for table `blog`
--

CREATE TABLE `blog` (
  `id` int(11) NOT NULL,
  `image` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `short_description` text NOT NULL,
  `description` text NOT NULL,
  `author` text NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `blog`
--

INSERT INTO `blog` (`id`, `image`, `title`, `short_description`, `description`, `author`, `created_at`, `updated_at`) VALUES
(1, 'upload/img/blog/blog-1.jpg', 'What Curling Irons Are The Best Ones', 'Vyo-Serum along with tightening the skin also reduces the fine lines indicating aging of skin. Problems like dark circles, puffiness, and crow’s feet can be control from the strong effects of this serum.', 'Hydroderm is the highly desired anti-aging cream on the block. This serum restricts the\r\n                                occurrence of early aging sings on the skin and keeps the skin younger, tighter and\r\n                                healthier. It reduces the wrinkles and loosening of skin. This cream nourishes the skin\r\n                                and brings back the glow that had lost in the run of hectic years.\r\n                                product of natural selected proteins. This concentrate works actively in bringing about\r\n                                the natural youthful glow of the skin. It tightens the skin along with its moisturizing\r\n                                effect on the skin. The other important ingredient, making hydroderm so effective is\r\n                                “marine collagen” which along with Vyo-Serum helps revitalize the skin.Hydroderm is the highly desired anti-aging cream on the block. This serum restricts the\r\n                                occurrence of early aging sings on the skin and keeps the skin younger, tighter and\r\n                                healthier. It reduces the wrinkles and loosening of skin. This cream nourishes the skin\r\n                                and brings back the glow that had lost in the run of hectic years.', 'Aiden Blair', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 'upload/img/blog/blog-2.jpg', ' Bands Do Last Forever', 'Vyo-Serum along with tightening the skin also reduces the fine lines indicating aging of skin. Problems like dark circles, puffiness, and crow’s feet can be control from the strong effects of this serum.\n', 'Hydroderm is a multi-functional product that helps in reducing the cellulite and giving\r\n                                the body a toned shape, also helps in cleansing the skin from the root and not letting\r\n                                the pores clog, Hydroderm is a multi-functional product that helps in reducing the cellulite and giving\r\n                                the body a toned shape, also helps in cleansing the skin from the root and not letting\r\n                                the pores clog, nevertheless also let’s sweeps out the wrinkles and all signs of aging\r\n                                from the sensitive near the eyes                                from the sensitive near the eyes\r\nHydroderm is a multi-functional product that helps in reducing the cellulite and giving\r\nHydroderm is a multi-functional product that helps in reducing the cellulite and giving\r\n                                the body a toned shape, also helps in cleansing the skin from the root and not letting\r\n                                the pores clog, nevertheless also let’s sweeps out the wrinkles and all signs of aging\r\n                                from the sensitive near the eyes\r\n                                the body a toned shape, also helps in cleansing the skin from the root and not letting\r\n                                the pores clog, nevertheless also let’s sweeps out the wrinkles and all signs of aging\r\n                                from the sensitive near the eyes', 'John Smith', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 'upload/img/blog/blog-3.jpg', 'The Health Benefits Of Sunglasses', '“When designing an advertisement for many things should be\n                                researched like where it should be displayed.', 'Vyo-Serum along with tightening the skin also reduces the fine lines indicating aging of\r\n                                skin. Problems like dark circles, puffiness, and crow’s feet can be control from the\r\n                                strong effects of this serum.</p>\r\n                            <p>Hydroderm is a multi-functional product that helps in reducing the cellulite and giving\r\n                                the body a toned shape, also helps in cleansing the skin from the root and not letting\r\n                                the pores clog, nevertheless also let’s sweeps out the wrinkles and all signs of aging\r\n                                from the sensitive near the eyes.', 'Allen Jordan', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 'upload/img/blog/blog-4.jpg', 'Aiming For Higher The Mastopexy', '“When designing an advertisement for a particular product many things should be\r\n                                researched like where it should be displayed.', 'Vyo-Serum along with tightening the skin also reduces the fine lines indicating aging of\r\n                                skin. Problems like dark circles, puffiness, and crow’s feet can be control from the\r\n                                strong effects of this serum.Hydroderm is a multi-functional product that helps in reducing the cellulite and giving\r\n                                the body a toned shape, also helps in cleansing the skin from the root and not letting\r\n                                the pores clog, nevertheless also let’s sweeps out the wrinkles and all signs of aging\r\n                                from the sensitive near the eyes.', 'Alina ', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(5, 'upload/img/blog/blog-5.jpg', 'Wedding Rings A Gift For A Lifetime ', '“When designing an advertisement for a particular product many things should be\r\n                                researched like where it should be displayed.', 'Vyo-Serum along with tightening the skin also reduces the fine lines indicating aging of\r\n                                skin. Problems like dark circles, puffiness, and crow’s feet can be control from the\r\n                                strong effects of this serum.Hydroderm is a multi-functional product that helps in reducing the cellulite and giving\r\n                                the body a toned shape, also helps in cleansing the skin from the root and not letting\r\n                                the pores clog, nevertheless also let’s sweeps out the wrinkles and all signs of aging\r\n                                from the sensitive near the eyes.', 'Kumar Sani', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(6, 'upload/img/blog/blog-6.jpg', 'The Different Methods Of Hair Removal', '“When designing an advertisement for a particular product many things should be\r\n                                researched like where it should be displayed.', 'Vyo-Serum along with tightening the skin also reduces the fine lines indicating aging of\r\n                                skin. Problems like dark circles, puffiness, and crow’s feet can be control from the\r\n                                strong effects of this serum.Hydroderm is a multi-functional product that helps in reducing the cellulite and giving\r\n                                the body a toned shape, also helps in cleansing the skin from the root and not letting\r\n                                the pores clog, nevertheless also let’s sweeps out the wrinkles and all signs of aging\r\n                                from the sensitive near the eyes.', 'Sharmin', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(7, 'upload/img/blog/blog-7.jpg', 'Hoop Earrings A Style From History', '“When designing an advertisement for a particular product many things should be\r\n                                researched like where it should be displayed.', 'Vyo-Serum along with tightening the skin also reduces the fine lines indicating aging of\r\n                                skin. Problems like dark circles, puffiness, and crow’s feet can be control from the\r\n                                strong effects of this serum.Hydroderm is a multi-functional product that helps in reducing the cellulite and giving\r\n                                the body a toned shape, also helps in cleansing the skin from the root and not letting\r\n                                the pores clog, nevertheless also let’s sweeps out the wrinkles and all signs of aging\r\n                                from the sensitive near the eyes.', 'Ayman', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(8, 'upload/img/blog/blog-8.jpg', 'Lasik Eye Surgery Are You Ready', '“When designing an advertisement for a particular product many things should be\r\n                                researched like where it should be displayed.', 'Vyo-Serum along with tightening the skin also reduces the fine lines indicating aging of\r\n                                skin. Problems like dark circles, puffiness, and crow’s feet can be control from the\r\n                                strong effects of this serum.Hydroderm is a multi-functional product that helps in reducing the cellulite and giving\r\n                                the body a toned shape, also helps in cleansing the skin from the root and not letting\r\n                                the pores clog, nevertheless also let’s sweeps out the wrinkles and all signs of aging\r\n                                from the sensitive near the eyes.', 'Adiyat', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `brand`
--

CREATE TABLE `brand` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `brand`
--

INSERT INTO `brand` (`id`, `name`) VALUES
(1, 'Louis Vuitton'),
(2, 'Chanel'),
(3, 'Hermes'),
(4, 'Gucci');

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`) VALUES
(1, 'Men\'s Clothing'),
(2, 'Women\'s Clothing'),
(3, 'Bags'),
(4, 'Babies\' Clothing'),
(5, 'Shoes'),
(6, 'Accessories');

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `id` int(11) NOT NULL,
  `blog_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `comment` text NOT NULL,
  `reply_to` text NOT NULL,
  `created_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`id`, `blog_id`, `name`, `email`, `phone`, `comment`, `reply_to`, `created_at`) VALUES
(1, 2, '', '', '0', '', '', '2023-09-20'),
(2, 3, '', '', '', '', '', '2023-09-20'),
(3, 1, '', '', '', '', '', '2023-09-20');

-- --------------------------------------------------------

--
-- Table structure for table `coupons`
--

CREATE TABLE `coupons` (
  `id` int(11) NOT NULL,
  `code` varchar(255) NOT NULL,
  `discount_percentage` decimal(10,2) NOT NULL,
  `expiration_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `coupons`
--

INSERT INTO `coupons` (`id`, `code`, `discount_percentage`, `expiration_date`) VALUES
(3, 'WDPF54', '10.00', '2023-11-11');

-- --------------------------------------------------------

--
-- Table structure for table `images`
--

CREATE TABLE `images` (
  `id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `images`
--

INSERT INTO `images` (`id`, `product_id`, `image`) VALUES
(1, 1, 'assets/img/product/product-2.jpg'),
(2, 2, 'assets/img/product/product-3.jpg'),
(3, 3, 'assets/img/product/product-4.jpg'),
(4, 4, 'assets/img/product/product-5.jpg'),
(5, 5, 'assets/img/product/product-6.jpg'),
(6, 6, 'assets/img/product/product-7.jpg'),
(7, 7, 'assets/img/product/product-8.jpg'),
(8, 8, 'assets/img/product/product-9.jpg'),
(9, 1, 'assets/img/product/product-10.jpg'),
(10, 1, 'assets/img/product/product-11.jpg'),
(11, 1, 'assets/img/product/product-12.jpg'),
(12, 3, 'assets/img/product/product-13.jpg'),
(13, 3, 'assets/img/product/product-14.jpg'),
(26, 6, 'img/product/product0006.jpg'),
(27, 7, 'img/product/product07.jpg'),
(28, 7, 'img/product/product007.jpg'),
(29, 7, 'img/product/product0007.jpg'),
(30, 8, 'img/product/product08.jpg'),
(31, 8, 'img/product/product008.jpg'),
(32, 8, 'img/product/product0008.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `items` text DEFAULT NULL,
  `sub_total` decimal(10,2) DEFAULT NULL,
  `discount` decimal(10,2) DEFAULT NULL,
  `total` decimal(10,2) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `order_id`, `first_name`, `last_name`, `email`, `address`, `items`, `sub_total`, `discount`, `total`, `status`, `created_at`, `updated_at`) VALUES
(1, 0, 'Maksuda', 'Akter', 'maksuda@gmaill.com', 'Muradpur,Chattogram', 'W3siaWQiOiI2IiwibmFtZSI6IkJhc2ljIEZsb3dpbmcgU2NhcmYiLCJzaG9ydF9kZXNjcmlwdGlvbiI6IlBoYXNlbGx1cyBmYXVjaWJ1cyBhcmN1IHNpdCBhbWV0IHZlbGl0IHZlaGljdWxhIiwibG9uZ19kZXNjcmlwdGlvbiI6IlBoYXNlbGx1cyBwb3N1ZXJlIGFjIGp1c3RvIGlkIHN1c2NpcGl0LiBWZXN0aWJ1bHVtIHZlbmVuYXRpcyBpcHN1bSBzZWQgbnVsbGEgYmliZW5kdW0gdmVzdGlidWx1bS4gRXRpYW0gcGVsbGVudGVzcXVlIHF1aXMgc2FwaWVuIGVnZXQgc2VtcGVyLiBBbGlxdWFtIG5pc2wgZmVsaXMsIGZldWdpYXQgdmVsIHZlbGl0IHNvbGxpY2l0dWRpbiwgZGljdHVtIGV1aXNtb2QgZXJhdC4gVmVzdGlidWx1bSBxdWlzIGVyb3MgbnVuYy4gUGhhc2VsbHVzIGZhdWNpYnVzIGFyY3Ugc2l0IGFtZXQgdmVsaXQgdmVoaWN1bGEsIG5vbiB0ZW1wb3IgbWF1cmlzIGZhdWNpYnVzLiBGdXNjZSBtZXR1cyBuaXNsLCBpbnRlcmR1bSBvcm5hcmUgZXN0IGVnZXQsIHZvbHV0cGF0IGx1Y3R1cyBtZXR1cy4gUHJhZXNlbnQgZWdlc3RhcyBibGFuZGl0IGJpYmVuZHVtLiBQaGFzZWxsdXMgZWZmaWNpdHVyIGlwc3VtIG5lYyB0cmlzdGlxdWUgaWFjdWxpcy4gT3JjaSB2YXJpdXMgbmF0b3F1ZSBwZW5hdGlidXMgZXQgbWFnbmlzIGRpcyBwYXJ0dXJpZW50IG1vbnRlcywgbmFzY2V0dXIgcmlkaWN1bHVzIG11cy4iLCJwcmljZSI6IjU4MC4wMCIsImRpc2NvdW50IjoiMjAuMDAiLCJzcGVjaWZpY2F0aW9uIjoiQXZhaWxhYmxlIiwiY2F0ZWdvcnlfaWQiOiIxIiwiYnJhbmRfaWQiOiIxIiwiaW1hZ2UiOiJ1cGxvYWRcL2ltZ1wvcHJvZHVjdFwvcHJvZHVjdC03LmpwZyIsImJuYW1lIjoiTG91aXMgVnVpdHRvbiIsImNuYW1lIjoiTWVuJ3MgQ2xvdGhpbmciLCJxdWFudGl0eSI6MiwiaXRlbVRvdGFsIjoxMTYwfSx7ImlkIjoiMTQiLCJuYW1lIjoiRGVuaW0gU2hpcnQiLCJzaG9ydF9kZXNjcmlwdGlvbiI6ImtzamRsc2pmc2RsZyIsImxvbmdfZGVzY3JpcHRpb24iOiJmZHNnZmRzaGQiLCJwcmljZSI6IjEwMDAuMDAiLCJkaXNjb3VudCI6IjUuMDAiLCJzcGVjaWZpY2F0aW9uIjoiZGhlZGgiLCJjYXRlZ29yeV9pZCI6IjEiLCJicmFuZF9pZCI6IjEiLCJpbWFnZSI6InVwbG9hZFwvaW1nXC9wcm9kdWN0XC9wcm9kdWN0LTQuanBnIiwiYm5hbWUiOiJMb3VpcyBWdWl0dG9uIiwiY25hbWUiOiJNZW4ncyBDbG90aGluZyIsInF1YW50aXR5IjoxLCJpdGVtVG90YWwiOjEwMDB9XQ==', '2160.00', '0.00', '2160.00', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(6, 0, 'Mahmuda', 'Arobi', 'mahmuda@gmail.com', 'muradpur', 'W3siaWQiOiI2IiwibmFtZSI6IkJhc2ljIEZsb3dpbmcgU2NhcmYiLCJzaG9ydF9kZXNjcmlwdGlvbiI6IlBoYXNlbGx1cyBmYXVjaWJ1cyBhcmN1IHNpdCBhbWV0IHZlbGl0IHZlaGljdWxhIiwibG9uZ19kZXNjcmlwdGlvbiI6IlBoYXNlbGx1cyBwb3N1ZXJlIGFjIGp1c3RvIGlkIHN1c2NpcGl0LiBWZXN0aWJ1bHVtIHZlbmVuYXRpcyBpcHN1bSBzZWQgbnVsbGEgYmliZW5kdW0gdmVzdGlidWx1bS4gRXRpYW0gcGVsbGVudGVzcXVlIHF1aXMgc2FwaWVuIGVnZXQgc2VtcGVyLiBBbGlxdWFtIG5pc2wgZmVsaXMsIGZldWdpYXQgdmVsIHZlbGl0IHNvbGxpY2l0dWRpbiwgZGljdHVtIGV1aXNtb2QgZXJhdC4gVmVzdGlidWx1bSBxdWlzIGVyb3MgbnVuYy4gUGhhc2VsbHVzIGZhdWNpYnVzIGFyY3Ugc2l0IGFtZXQgdmVsaXQgdmVoaWN1bGEsIG5vbiB0ZW1wb3IgbWF1cmlzIGZhdWNpYnVzLiBGdXNjZSBtZXR1cyBuaXNsLCBpbnRlcmR1bSBvcm5hcmUgZXN0IGVnZXQsIHZvbHV0cGF0IGx1Y3R1cyBtZXR1cy4gUHJhZXNlbnQgZWdlc3RhcyBibGFuZGl0IGJpYmVuZHVtLiBQaGFzZWxsdXMgZWZmaWNpdHVyIGlwc3VtIG5lYyB0cmlzdGlxdWUgaWFjdWxpcy4gT3JjaSB2YXJpdXMgbmF0b3F1ZSBwZW5hdGlidXMgZXQgbWFnbmlzIGRpcyBwYXJ0dXJpZW50IG1vbnRlcywgbmFzY2V0dXIgcmlkaWN1bHVzIG11cy4iLCJwcmljZSI6IjU4MC4wMCIsImRpc2NvdW50IjoiMjAuMDAiLCJzcGVjaWZpY2F0aW9uIjoiQXZhaWxhYmxlIiwiY2F0ZWdvcnlfaWQiOiIxIiwiYnJhbmRfaWQiOiIxIiwiaW1hZ2UiOiJ1cGxvYWRcL2ltZ1wvcHJvZHVjdFwvcHJvZHVjdC03LmpwZyIsImJuYW1lIjoiTG91aXMgVnVpdHRvbiIsImNuYW1lIjoiTWVuJ3MgQ2xvdGhpbmciLCJxdWFudGl0eSI6MiwiaXRlbVRvdGFsIjoxMTYwfSx7ImlkIjoiMTQiLCJuYW1lIjoiRGVuaW0gU2hpcnQiLCJzaG9ydF9kZXNjcmlwdGlvbiI6ImtzamRsc2pmc2RsZyIsImxvbmdfZGVzY3JpcHRpb24iOiJmZHNnZmRzaGQiLCJwcmljZSI6IjEwMDAuMDAiLCJkaXNjb3VudCI6IjUuMDAiLCJzcGVjaWZpY2F0aW9uIjoiZGhlZGgiLCJjYXRlZ29yeV9pZCI6IjEiLCJicmFuZF9pZCI6IjEiLCJpbWFnZSI6InVwbG9hZFwvaW1nXC9wcm9kdWN0XC9wcm9kdWN0LTQuanBnIiwiYm5hbWUiOiJMb3VpcyBWdWl0dG9uIiwiY25hbWUiOiJNZW4ncyBDbG90aGluZyIsInF1YW50aXR5IjoxLCJpdGVtVG90YWwiOjEwMDB9XQ==', '2160.00', '0.00', '2160.00', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `short_description` text DEFAULT NULL,
  `long_description` text DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `discount` decimal(10,2) DEFAULT NULL,
  `specification` text DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL,
  `brand_id` int(11) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `short_description`, `long_description`, `price`, `discount`, `specification`, `category_id`, `brand_id`, `image`, `created_at`, `updated_at`) VALUES
(1, 'Piqué Biker Jacket', 'A T-shirt with long sleeves, suitable for cooler weather or as a layering piece.', 'Coat with quilted lining and an adjustable hood. Featuring long sleeves with adjustable\r\n                                cuff tabs, adjustable asymmetric hem with elastic side tabs and a front zip fastening\r\n                            with placket', '500.00', '0.00', 'Available', 4, 1, 'upload/img/product/653419d3f1e0f221.jpeg', '0000-00-00 00:00:00', '2023-10-21 20:34:59'),
(2, 'Puma Sneakers', 'City-inspired fashion for the modern man and woman.', 'Phasellus posuere ac justo id suscipit. Vestibulum venenatis ipsum sed nulla bibendum vestibulum. Etiam pellentesque quis sapien eget semper. Aliquam nisl felis, feugiat vel velit sollicitudin, dictum euismod erat. Vestibulum quis eros nunc. Phasellus faucibus arcu sit amet velit vehicula, non tempor mauris faucibus. Fusce metus nisl, interdum ornare est eget, volutpat luctus metus. Praesent egestas blandit bibendum. Phasellus efficitur ipsum nec tristique iaculis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', '325.00', '20.00', 'Available', 5, 2, 'upload/img/product/product-1.jpg', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 'Diagonal Textured Capsds', 'A dress with the essence of a power blazer for confident women.\r\n', 'Phasellus posuere ac justo id suscipit. Vestibulum venenatis ipsum sed nulla bibendum vestibulum. Etiam pellentesque quis sapien eget semper. Aliquam nisl felis, feugiat vel velit sollicitudin, dictum euismod erat. Vestibulum quis eros nunc. Phasellus faucibus arcu sit amet velit vehicula, non tempor mauris faucibus. Fusce metus nisl, interdum ornare est eget, volutpat luctus metus. Praesent egestas blandit bibendum. Phasellus efficitur ipsum nec tristique iaculis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', '430.00', '20.00', 'Available', 1, 3, 'upload/img/product/product-4.jpg', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 'Ankle Boots', 'Light and breathable linen shirts for any occasion.\r\n', 'Phasellus posuere ac justo id suscipit. Vestibulum venenatis ipsum sed nulla bibendum vestibulum. Etiam pellentesque quis sapien eget semper. Aliquam nisl felis, feugiat vel velit sollicitudin, dictum euismod erat. Vestibulum quis eros nunc. Phasellus faucibus arcu sit amet velit vehicula, non tempor mauris faucibus. Fusce metus nisl, interdum ornare est eget, volutpat luctus metus. Praesent egestas blandit bibendum. Phasellus efficitur ipsum nec tristique iaculis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', '360.00', '20.00', 'Available', 2, 4, 'upload/img/product/product-5.jpg', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(5, 'T-shirt Contrast Pocket', 'Nostalgic tees that evoke the spirit of bygone eras.\r\n', 'Phasellus posuere ac justo id suscipit. Vestibulum venenatis ipsum sed nulla bibendum vestibulum. Etiam pellentesque quis sapien eget semper. Aliquam nisl felis, feugiat vel velit sollicitudin, dictum euismod erat. Vestibulum quis eros nunc. Phasellus faucibus arcu sit amet velit vehicula, non tempor mauris faucibus. Fusce metus nisl, interdum ornare est eget, volutpat luctus metus. Praesent egestas blandit bibendum. Phasellus efficitur ipsum nec tristique iaculis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', '100.00', '20.00', 'Available', 2, 5, 'upload/img/product/product-6.jpg', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(6, 'Basic Flowing Scarf', 'Phasellus faucibus arcu sit amet velit vehicula', 'Phasellus posuere ac justo id suscipit. Vestibulum venenatis ipsum sed nulla bibendum vestibulum. Etiam pellentesque quis sapien eget semper. Aliquam nisl felis, feugiat vel velit sollicitudin, dictum euismod erat. Vestibulum quis eros nunc. Phasellus faucibus arcu sit amet velit vehicula, non tempor mauris faucibus. Fusce metus nisl, interdum ornare est eget, volutpat luctus metus. Praesent egestas blandit bibendum. Phasellus efficitur ipsum nec tristique iaculis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', '580.00', '20.00', 'Available', 1, 1, 'upload/img/product/product-7.jpg', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(7, 'Piqué Biker Jacket', 'Praesent egestas blandit bibendum non tempor mauris faucibus', 'Phasellus posuere ac justo id suscipit. Vestibulum venenatis ipsum sed nulla bibendum vestibulum. Etiam pellentesque quis sapien eget semper. Aliquam nisl felis, feugiat vel velit sollicitudin, dictum euismod erat. Vestibulum quis eros nunc. Phasellus faucibus arcu sit amet velit vehicula, non tempor mauris faucibus. Fusce metus nisl, interdum ornare est eget, volutpat luctus metus. Praesent egestas blandit bibendum. Phasellus efficitur ipsum nec tristique iaculis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', '570.00', '20.00', 'Available', 1, 2, 'upload/img/product/product-8.jpg', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(8, 'Multi-pocket Chest Bag', 'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus', 'Phasellus posuere ac justo id suscipit. Vestibulum venenatis ipsum sed nulla bibendum vestibulum. Etiam pellentesque quis sapien eget semper. Aliquam nisl felis, feugiat vel velit sollicitudin, dictum euismod erat. Vestibulum quis eros nunc. Phasellus faucibus arcu sit amet velit vehicula, non tempor mauris faucibus. Fusce metus nisl, interdum ornare est eget, volutpat luctus metus. Praesent egestas blandit bibendum. Phasellus efficitur ipsum nec tristique iaculis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', '450.00', '20.00', 'Available', 2, 3, 'upload/img/product/product-9.jpg', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(9, 'Diagonal Textured Cap', 'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus', 'Phasellus posuere ac justo id suscipit. Vestibulum venenatis ipsum sed nulla bibendum vestibulum. Etiam pellentesque quis sapien eget semper. Aliquam nisl felis, feugiat vel velit sollicitudin, dictum euismod erat. Vestibulum quis eros nunc. Phasellus faucibus arcu sit amet velit vehicula, non tempor mauris faucibus. Fusce metus nisl, interdum ornare est eget, volutpat luctus metus. Praesent egestas blandit bibendum. Phasellus efficitur ipsum nec tristique iaculis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', '250.00', '20.00', 'Available', 6, 4, 'upload/img/product/product-10.jpg', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(10, 'Gucci Bag', 'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus', 'Phasellus posuere ac justo id suscipit. Vestibulum venenatis ipsum sed nulla bibendum vestibulum. Etiam pellentesque quis sapien eget semper. Aliquam nisl felis, feugiat vel velit sollicitudin, dictum euismod erat. Vestibulum quis eros nunc. Phasellus faucibus arcu sit amet velit vehicula, non tempor mauris faucibus. Fusce metus nisl, interdum ornare est eget, volutpat luctus metus. Praesent egestas blandit bibendum. Phasellus efficitur ipsum nec tristique iaculis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', '800.00', '20.00', 'Available', 3, 3, 'upload/img/product/product-11.jpg', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(11, 'T-shirt Contrast Pocket', 'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus', 'Phasellus posuere ac justo id suscipit. Vestibulum venenatis ipsum sed nulla bibendum vestibulum. Etiam pellentesque quis sapien eget semper. Aliquam nisl felis, feugiat vel velit sollicitudin, dictum euismod erat. Vestibulum quis eros nunc. Phasellus faucibus arcu sit amet velit vehicula, non tempor mauris faucibus. Fusce metus nisl, interdum ornare est eget, volutpat luctus metus. Praesent egestas blandit bibendum. Phasellus efficitur ipsum nec tristique iaculis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', '450.00', '20.00', 'Available', 2, 3, 'upload/img/product/product-12.jpg', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(14, 'Denim Shirt', 'ksjdlsjfsdlg', 'fdsgfdshd', '1000.00', '5.00', 'dhedh', 1, 1, 'upload/img/product/product-4.jpg', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(20, 'Gucci Perfume', 'fsgrhwr', 'gtrtye5uyrtysfgder', '18000.00', NULL, 'dtfgerh', NULL, NULL, 'upload/img/product/product-10.jpg', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(21, 'Vatika Shampoo', 'eferhrj', 'rjhrj', '300.00', '0.00', 'htjdrj', 6, 3, 'upload/img/product/6534095805e91616.jpeg', '2023-10-21 19:24:40', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `token`, `image`) VALUES
(8, 'Adiyat', 'adi@gmail.com', '1234', '16960535567230d372948c91a062fc7edbb32004fec83', 'upload/img/user/6517b93460c18119.jpeg'),
(9, 'Maksuda Akter', 'maksuda@gmail.com', '1234', '16962259488330b05d2445907c9ab156b2ec3167de3dc', 'upload/img/user/651a5a9c673d7336.jpeg'),
(10, 'Sharmin', 'sharmin@gmail.com', '1234', '16976003682489b40aecd3c47cc98c5861e34f5ffee43', 'upload/img/user/652f537049fe4225.jpeg'),
(11, 'mahmuda', 'mahmuda@gmail.com', '1234', '16979123545053fb2678d3263a285998fb1cac57292c3', 'upload/img/user/6534162261858183.jpeg'),
(12, 'Jawaad', 'jawad@gmail.com', '123', '1703604226695223321362e3aada301c9970714cd4938', 'upload/img/user/658af002c4b5d631.jpeg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `banner`
--
ALTER TABLE `banner`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `blog`
--
ALTER TABLE `blog`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `brand`
--
ALTER TABLE `brand`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `coupons`
--
ALTER TABLE `coupons`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
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
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `banner`
--
ALTER TABLE `banner`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `blog`
--
ALTER TABLE `blog`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `brand`
--
ALTER TABLE `brand`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `coupons`
--
ALTER TABLE `coupons`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `images`
--
ALTER TABLE `images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
