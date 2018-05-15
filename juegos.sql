-- phpMyAdmin SQL Dump
-- version 4.8.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 15-05-2018 a las 23:58:32
-- Versión del servidor: 10.1.31-MariaDB
-- Versión de PHP: 7.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `didactical_games`
--
CREATE DATABASE IF NOT EXISTS `didactical_games` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `didactical_games`;

GRANT USAGE ON *.* TO 'admin'@'localhost' IDENTIFIED BY PASSWORD '*4ACFE3202A5FF5CF467898FC58AAB1D615029441';

GRANT ALL PRIVILEGES ON `didactical_games`.* TO 'admin'@'localhost';
-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `administradores`
--

DROP TABLE IF EXISTS `administradores`;
CREATE TABLE IF NOT EXISTS `administradores` (
  `idAdmin` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `apellidos` varchar(75) NOT NULL,
  `departamento` varchar(75) NOT NULL,
  `categoria` varchar(75) NOT NULL,
  `telefono` int(9) DEFAULT NULL,
  PRIMARY KEY (`idAdmin`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- RELACIONES PARA LA TABLA `administradores`:
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `imagen`
--

DROP TABLE IF EXISTS `imagen`;
CREATE TABLE IF NOT EXISTS `imagen` (
  `idImagen` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_img` varchar(255) NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  PRIMARY KEY (`idImagen`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

--
-- RELACIONES PARA LA TABLA `imagen`:
--

--
-- Volcado de datos para la tabla `imagen`
--

INSERT INTO `imagen` (`idImagen`, `nombre_img`, `descripcion`) VALUES
(1, 'amistad', 'Afecto personal, puro y desinteresado, compartido con otra persona, que nace y se fortalece con el trato.'),
(2, 'ayuda', 'Hacer un esfuerzo, poner los medios para el logro de algo.'),
(3, 'bullying', 'Acoso escolar y toda forma de maltrato físico, verbal o psicológico de forma reiterada y a lo largo del tiempo.'),
(4, 'felicidad', 'Estado de grata satisfacción espiritual y física.'),
(5, 'ira', 'Sentimiento de indignación que causa enojo.'),
(6, 'pareja', 'Conjunto de dos personas, animales o cosas que tienen entre sí alguna correlación o semejanza.'),
(7, 'tragedia', 'Situación o suceso lamentable que afecta a personas o sociedades humanas.'),
(8, 'tristeza', 'Afligido, apesadumbrado.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `nivel`
--

DROP TABLE IF EXISTS `nivel`;
CREATE TABLE IF NOT EXISTS `nivel` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `id_user` int(255) NOT NULL,
  `cod_nivel` int(255) NOT NULL,
  `puntos` int(255) DEFAULT NULL,
  `tiempo` varchar(165) DEFAULT NULL,
  `fecha_actual` date DEFAULT NULL,
  `juego` varchar(25) NOT NULL,
  PRIMARY KEY (`id`,`id_user`,`cod_nivel`),
  KEY `fk_user` (`id_user`),
  KEY `fk_niv` (`cod_nivel`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- RELACIONES PARA LA TABLA `nivel`:
--   `cod_nivel`
--       `niveles` -> `idNivel`
--   `id_user`
--       `usuario` -> `idUser`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `niveles`
--

DROP TABLE IF EXISTS `niveles`;
CREATE TABLE IF NOT EXISTS `niveles` (
  `idNivel` int(255) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  PRIMARY KEY (`idNivel`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

--
-- RELACIONES PARA LA TABLA `niveles`:
--

--
-- Volcado de datos para la tabla `niveles`
--

INSERT INTO `niveles` (`idNivel`, `nombre`) VALUES
(1, 'nivel 1'),
(2, 'nivel 2'),
(3, 'nivel 3'),
(4, 'nivel 4'),
(5, 'nivel 5'),
(6, 'nivel 6'),
(7, 'nivel 7'),
(8, 'nivel 8'),
(9, 'nivel 9'),
(10, 'nivel 10');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `preguntas`
--

DROP TABLE IF EXISTS `preguntas`;
CREATE TABLE IF NOT EXISTS `preguntas` (
  `numero` int(5) NOT NULL,
  `nivel` int(11) NOT NULL,
  `emocion` varchar(255) NOT NULL,
  `pregunta` varchar(255) NOT NULL,
  `respuesta` varchar(255) NOT NULL,
  PRIMARY KEY (`numero`,`nivel`),
  KEY `fk_nivel` (`nivel`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- RELACIONES PARA LA TABLA `preguntas`:
--   `nivel`
--       `niveles` -> `idNivel`
--

--
-- Volcado de datos para la tabla `preguntas`
--

INSERT INTO `preguntas` (`numero`, `nivel`, `emocion`, `pregunta`, `respuesta`) VALUES
(1, 1, 'feliz', '¿Cómo ves a la mujer y al bebe?', 'op1'),
(2, 1, 'feliz', 'Reconoce a la persona que esta feliz', 'op1'),
(3, 1, 'feliz', 'Con que color identificarias la felicidad', 'op3'),
(4, 2, 'contento', 'Me Pongo contento cuando:', 'op1'),
(5, 2, 'contento', '¿Cómo te sientes cuando ganas un juego?', 'op2'),
(6, 2, 'contento', '¿Cómo te sientes cuando ganas un juego?', 'op1');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `respuestas`
--

DROP TABLE IF EXISTS `respuestas`;
CREATE TABLE IF NOT EXISTS `respuestas` (
  `numero` int(3) NOT NULL,
  `op1` varchar(255) DEFAULT NULL,
  `op2` varchar(255) DEFAULT NULL,
  `op3` varchar(255) DEFAULT NULL,
  `op4` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`numero`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- RELACIONES PARA LA TABLA `respuestas`:
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

DROP TABLE IF EXISTS `usuario`;
CREATE TABLE IF NOT EXISTS `usuario` (
  `idUser` int(255) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `apellidos` varchar(75) NOT NULL,
  `password` varchar(255) NOT NULL,
  `padre` varchar(125) DEFAULT NULL,
  `madre` varchar(125) DEFAULT NULL,
  `fecha_nac` date NOT NULL,
  `telefono` int(9) DEFAULT NULL,
  `direccion` varchar(255) DEFAULT NULL,
  `discapacidad` varchar(255) NOT NULL,
  `imagen_user` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idUser`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- RELACIONES PARA LA TABLA `usuario`:
--

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `nivel`
--
ALTER TABLE `nivel`
  ADD CONSTRAINT `fk_niv` FOREIGN KEY (`cod_nivel`) REFERENCES `niveles` (`idNivel`),
  ADD CONSTRAINT `fk_user` FOREIGN KEY (`id_user`) REFERENCES `usuario` (`idUser`);

--
-- Filtros para la tabla `preguntas`
--
ALTER TABLE `preguntas`
  ADD CONSTRAINT `fk_nivel` FOREIGN KEY (`nivel`) REFERENCES `niveles` (`idNivel`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
