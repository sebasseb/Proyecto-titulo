-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 08-12-2021 a las 04:33:59
-- Versión del servidor: 10.4.20-MariaDB
-- Versión de PHP: 8.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `canchaseb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `rut` varchar(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `telefono` int(11) NOT NULL,
  `isEstudiante` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`rut`, `nombre`, `telefono`, `isEstudiante`) VALUES
('12345678-9', 'Juan Carlos', 999999999, 0),
('19015485-8', 'Sebastián Escobar', 990562314, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(20) NOT NULL,
  `valorProducto` int(11) NOT NULL,
  `stock` int(11) NOT NULL,
  `proveedor` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `nombre`, `valorProducto`, `stock`, `proveedor`) VALUES
(1, 'Gatorade', 1000, 40, 'Proveedor1'),
(6, 'CocaCola 591mL', 1000, 40, 'Otro Proveedor Rando'),
(7, 'Triton', 400, 0, 'Proveedor4'),
(8, 'Powerade 815mL', 1000, 25, 'UnProveedorRandom'),
(10, 'Cachantun 790mL', 600, 25, 'Un Proveedor');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proveedores`
--

CREATE TABLE `proveedores` (
  `id` int(11) NOT NULL,
  `proveedor` varchar(20) NOT NULL,
  `telefono` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `proveedores`
--

INSERT INTO `proveedores` (`id`, `proveedor`, `telefono`) VALUES
(1, 'Proveedor1', 912345678),
(2, 'Proveedor2', 987654321),
(3, 'Proveedor3', 912131516);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reservasfuncional`
--

CREATE TABLE `reservasfuncional` (
  `rutCliente` varchar(11) NOT NULL,
  `nombreCliente` varchar(40) NOT NULL,
  `telefono` int(11) NOT NULL,
  `datetime` varchar(20) NOT NULL,
  `reserva` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `reservasfuncional`
--

INSERT INTO `reservasfuncional` (`rutCliente`, `nombreCliente`, `telefono`, `datetime`, `reserva`) VALUES
('12345678-9', 'Gregorio', 654987321, '2021-12-03 15:00:00', 'funcional'),
('1015485-8', 'Sebastián', 940340950, '2021-12-07 19:00:00', 'funcional');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reservasfutbolito`
--

CREATE TABLE `reservasfutbolito` (
  `rutCliente` varchar(11) NOT NULL,
  `nombreCliente` varchar(40) NOT NULL,
  `telefono` int(11) NOT NULL,
  `datetime` varchar(20) NOT NULL,
  `reserva` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `reservasfutbolito`
--

INSERT INTO `reservasfutbolito` (`rutCliente`, `nombreCliente`, `telefono`, `datetime`, `reserva`) VALUES
('98765432-1', 'carlos', 159753654, '2021-12-03 19:00:00', 'futbolito'),
('19773423-k', 'dani', 978267355, '2021-12-07 15:00:00', 'futbolito'),
('992992929', 'daniela', 2147483647, '2021-12-07 18:00:00', 'futbolito'),
('12345678-9', 'Kuky', 1234, '2021-12-17 15:00:00', 'futbolito');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reservasfuttenis`
--

CREATE TABLE `reservasfuttenis` (
  `rutCliente` varchar(11) NOT NULL,
  `nombreCliente` varchar(40) NOT NULL,
  `telefono` int(11) NOT NULL,
  `datetime` varchar(20) NOT NULL,
  `reserva` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `reservasfuttenis`
--

INSERT INTO `reservasfuttenis` (`rutCliente`, `nombreCliente`, `telefono`, `datetime`, `reserva`) VALUES
('98765432-1', 'Thor', 912345678, '2021-12-08 18:00:00', 'futtenis'),
('19015485-8', 'Seba', 940340950, '2021-12-08 20:00:00', 'futtenis');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reservasquincho`
--

CREATE TABLE `reservasquincho` (
  `rutCliente` varchar(11) NOT NULL,
  `nombreCliente` varchar(40) NOT NULL,
  `telefono` int(11) NOT NULL,
  `datetime` varchar(20) NOT NULL,
  `reserva` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `reservasquincho`
--

INSERT INTO `reservasquincho` (`rutCliente`, `nombreCliente`, `telefono`, `datetime`, `reserva`) VALUES
('12345678-7', 'Maxi', 654987321, '2021-12-03 16:00:00', 'quincho'),
('32165498-7', 'Gregorio', 321654987, '2021-12-03 19:00:00', 'quincho');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `trabajadores`
--

CREATE TABLE `trabajadores` (
  `id` int(11) NOT NULL,
  `rut` varchar(11) NOT NULL,
  `passwd` varchar(11) DEFAULT NULL,
  `nombre` varchar(100) NOT NULL,
  `direccion` varchar(100) NOT NULL,
  `fono` int(11) NOT NULL,
  `isAdmin` tinyint(1) NOT NULL,
  `salario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `trabajadores`
--

INSERT INTO `trabajadores` (`id`, `rut`, `passwd`, `nombre`, `direccion`, `fono`, `isAdmin`, `salario`) VALUES
(1, '19015485-8', '123456', 'Sebastián Escobar', 'Pje Rio bueno 68', 940340950, 1, 780000),
(2, '12345678-9', '123456', 'Ramon Ramirez', 'Pje Limarí 68, Villa Alemana', 924638514, 0, 470000),
(125, '98765432-1', '123456789', 'Charlyboi96', 'Barón', 912345678, 0, 680000),
(129, '9811606-0', '123456', 'ivo plex', 'baron', 123456789, 0, 380000),
(131, '14725836-9', '123456', 'Queti', 'valparaiso', 123456789, 1, 500000);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ventas`
--

CREATE TABLE `ventas` (
  `id` int(11) NOT NULL,
  `fecha` datetime NOT NULL,
  `total` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `ventas`
--

INSERT INTO `ventas` (`id`, `fecha`, `total`) VALUES
(6, '2021-12-08 02:28:29', 3800),
(7, '2021-12-08 02:30:29', 3800),
(8, '2021-12-08 02:31:39', 3800),
(9, '2021-12-08 02:32:18', 3800),
(10, '2021-12-08 02:32:39', 3800),
(11, '2021-12-08 02:34:46', 15000),
(12, '2021-12-08 02:57:20', 12800),
(13, '2021-12-08 03:00:34', 3400),
(14, '2021-12-08 03:01:37', 7000),
(15, '2021-12-08 03:02:31', 8000),
(16, '2021-12-08 03:03:23', 3000),
(17, '2021-12-08 03:03:53', 5000),
(18, '2021-12-08 03:04:41', 3000),
(19, '2021-12-08 03:05:11', 3000),
(20, '2021-12-08 03:05:35', 2000),
(21, '2021-12-08 03:05:57', 2000),
(22, '2021-12-08 03:06:17', 400),
(23, '2021-12-08 03:16:01', 800),
(24, '2021-12-08 03:26:11', 800),
(25, '2021-12-08 03:31:20', 1200);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`rut`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `proveedores`
--
ALTER TABLE `proveedores`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `reservasfuncional`
--
ALTER TABLE `reservasfuncional`
  ADD PRIMARY KEY (`datetime`);

--
-- Indices de la tabla `reservasfutbolito`
--
ALTER TABLE `reservasfutbolito`
  ADD PRIMARY KEY (`datetime`);

--
-- Indices de la tabla `reservasfuttenis`
--
ALTER TABLE `reservasfuttenis`
  ADD PRIMARY KEY (`datetime`);

--
-- Indices de la tabla `reservasquincho`
--
ALTER TABLE `reservasquincho`
  ADD PRIMARY KEY (`datetime`);

--
-- Indices de la tabla `trabajadores`
--
ALTER TABLE `trabajadores`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `rut` (`rut`);

--
-- Indices de la tabla `ventas`
--
ALTER TABLE `ventas`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `proveedores`
--
ALTER TABLE `proveedores`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `trabajadores`
--
ALTER TABLE `trabajadores`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=132;

--
-- AUTO_INCREMENT de la tabla `ventas`
--
ALTER TABLE `ventas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
