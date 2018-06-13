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
CREATE DATABASE IF NOT EXISTS `didactical_games`;

CREATE USER 'didactical_games'@'localhost' IDENTIFIED BY '1234';

GRANT USAGE ON * . * TO 'didactical_games'@'localhost';


GRANT ALL PRIVILEGES ON `didactical_games`.* TO 'didactical_games'@'localhost';

USE `didactical_games`;
-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `administradores`
--

CREATE TABLE `administradores` (
  `idAdmin` int(11) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `apellidos` varchar(75) NOT NULL,
`password` varchar(255) not null,
  `departamento` varchar(75) NOT NULL,
  `categoria` varchar(75) NOT NULL,
  `telefono` int(9) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `emociones`
--

CREATE TABLE `emociones` (
  `num` int(5) NOT NULL,
  `emocion` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `emociones`
--

INSERT INTO `emociones` (`num`, `emocion`) VALUES
(1, 'feliz'),
(2, 'contento'),
(3, 'asco'),
(4, 'ira'),
(5, 'tristeza'),
(6, 'miedo'),
(7, 'desanimado'),
(8, 'enfadado'),
(9, 'soledad'),
(10, 'culpa'),
(11, 'bullying'),
(12, 'celos'),
(13, 'sorpresa'),
(14, 'amor');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `imagen`
--

CREATE TABLE `imagen` (
  `idImagen` int(11) NOT NULL,
  `nombre_img` varchar(255) NOT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `source` varchar(256) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `imagen`
--

INSERT INTO `imagen` (`idImagen`, `nombre_img`, `descripcion`, `source`) VALUES
(1, 'amistad', 'Afecto personal, puro y desinteresado, compartido con otra persona, que nace y se fortalece con el trato.', ''),
(2, 'ayuda', 'Hacer un esfuerzo, poner los medios para el logro de algo.', ''),
(3, 'bullying', 'Acoso escolar y toda forma de maltrato físico, verbal o psicológico de forma reiterada y a lo largo del tiempo.', ''),
(4, 'felicidad', 'Estado de grata satisfacción espiritual y física.', ''),
(5, 'ira', 'Sentimiento de indignación que causa enojo.', ''),
(6, 'pareja', 'Conjunto de dos personas, animales o cosas que tienen entre sí alguna correlación o semejanza.', ''),
(7, 'tragedia', 'Situación o suceso lamentable que afecta a personas o sociedades humanas.', ''),
(8, 'tristeza', 'Afligido, apesadumbrado.', ''),
(9, 'amor', NULL, 'images/preguntasImagenes/amor.gif'),
(10, 'asco1', NULL, '../quizTest/images/preguntasImagenes/asco1.png'),
(11, 'asco2', '', '../quizTest/images/preguntasImagenes/asco2.png'),
(12, 'asco3', NULL, '../quizTest/images/preguntasImagenes/asco3.png'),
(13, 'bullying', '', '../quizTest/images/preguntasImagenes/bullying.jpg'),
(14, 'caras1', NULL, '../quizTest/images/preguntasImagenes/caras1.jpg'),
(15, 'celos', NULL, '../quizTest/images/preguntasImagenes/celos.png'),
(16, 'contento1', NULL, '../quizTest/images/preguntasImagenes/contento1.jpg'),
(17, 'contento2', NULL, '../quizTest/images/preguntasImagenes/contento2.jpg'),
(18, 'contento3.jpg', NULL, '../quizTest/images/preguntasImagenes/contento3.jpg'),
(19, 'culpa', NULL, '../quizTest/images/preguntasImagenes/culpa.jpg'),
(20, 'deprimido1.jpg', NULL, '../quizTest/images/preguntasImagenes/deprimido1.jpg'),
(21, 'deprimido2', NULL, '../quizTest/images/preguntasImagenes/deprimido2.jpg'),
(22, 'deprimido3', NULL, '../quizTest/images/preguntasImagenes/deprimido3.png'),
(23, 'enfadado1', NULL, '../quizTest/images/preguntasImagenes/enfadado1.png'),
(24, 'enfado2', NULL, '../quizTest/images/preguntasImagenes/enfado2.jpg'),
(25, 'enfado3', NULL, '../quizTest/images/preguntasImagenes/enfado3.jpg'),
(26, 'euforia', NULL, '../quizTest/images/preguntasImagenes/euforia.png'),
(27, 'feliz1', NULL, '../quizTest/images/preguntasImagenes/feliz1.jpg'),
(28, 'feliz2', NULL, '../quizTest/images/preguntasImagenes/feliz2.png'),
(29, 'feliz3', NULL, '../quizTest/images/preguntasImagenes/feliz3.png'),
(30, 'ira1', NULL, '../quizTest/images/preguntasImagenes/ira1.jpg'),
(31, 'ira2', NULL, '../quizTest/images/preguntasImagenes/ira2.jpg'),
(32, 'ira3', NULL, '../quizTest/images/preguntasImagenes/ira3.jpg'),
(33, 'miedo1', NULL, '../quizTest/images/preguntasImagenes/miedo1.jpg'),
(34, 'miedo2', NULL, '../quizTest/images/preguntasImagenes/miedo2.jpg'),
(35, 'miedo3', NULL, '../quizTest/images/preguntasImagenes/miedo3.png'),
(36, 'soledad', NULL, '../quizTest/images/preguntasImagenes/soledad.jpg'),
(37, 'sorpresa.jpg', NULL, '../quizTest/images/preguntasImagenes/sorpresa.jpg'),
(38, 'triste1', NULL, '../quizTest/images/preguntasImagenes/triste1.jpg'),
(39, 'triste2', NULL, '../quizTest/images/preguntasImagenes/triste2.jpg'),
(40, 'triste3.jpg', NULL, '../quizTest/images/preguntasImagenes/triste3.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `nivel`
--

CREATE TABLE `nivel` (
  `id` int(255) NOT NULL,
  `id_user` int(255) NOT NULL,
  `cod_nivel` int(255) NOT NULL,
  `puntos` int(255) DEFAULT NULL,
  `tiempo` varchar(165) DEFAULT NULL,
  `fecha_actual` date DEFAULT NULL,
  `juego` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `nivel`
--


-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `niveles`
--

CREATE TABLE `niveles` (
  `idNivel` int(255) NOT NULL,
  `nombre` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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

CREATE TABLE `preguntas` (
  `numero` int(5) NOT NULL,
  `nivel` int(11) NOT NULL,
  `emocion` varchar(255) NOT NULL,
  `pregunta` varchar(255) NOT NULL,
  `respuesta` varchar(255) NOT NULL,
  `id_imagen` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `preguntas`
--

INSERT INTO `preguntas` (`numero`, `nivel`, `emocion`, `pregunta`, `respuesta`, `id_imagen`) VALUES
(1, 1, 'feliz', '¿Cómo ves a la mujer y al bebe?', 'op1', 27),
(2, 1, 'feliz', 'Reconoce a la persona que esta feliz', 'op2', 28),
(3, 1, 'feliz', 'Con que color identificarias la felicidad', 'op1', 29),
(4, 2, 'contento', 'Me Pongo contento cuando:', 'op1', 16),
(5, 2, 'contento', '¿Cómo te sientes cuando ganas un juego?', 'op2', 17),
(6, 2, 'contento', '¿Cómo me siento cuando ayudo a mi compañero/a?', 'op2', 18),
(7, 3, 'asco', '¿Qué refleja este hombre?', 'op4', 10),
(8, 3, 'asco', '¿Qué sientes cuando ves un bicho en tu plato?', 'op3', 11),
(9, 3, 'asco', '¿Qué te produce mas asco?', 'op3', 12),
(10, 4, 'ira', '¿Qué representa esta cara?', 'op2', 30),
(11, 4, 'ira', '¿Qué frase identificas con la ira?', 'op2', 31),
(12, 4, 'ira', 'Me provoca ira cuando:', 'op1', 32),
(13, 5, 'tristeza', '¿Con que frase indentificas la tristeza?', 'op2', 38),
(14, 5, 'tristeza', 'Al ver esta imagen, ¿Que sientes?', 'op3', 39),
(15, 5, 'tristeza', 'Cuando castigan a mi mejor amigo/a, ¿Cómo me siento?', 'op2', 40),
(16, 6, 'miedo', '¿Cómo esta la niña?', 'op1', 33),
(17, 6, 'miedo', '¿Por qué crees que se siente miedo?', 'op2', 34),
(18, 6, 'miedo', 'Di la accion que te produzca mas miedo', 'op2', 35),
(19, 7, 'desanimado', 'Como se siente el chico de la imagen', 'op4', 20),
(20, 7, 'desanimado', 'Cuando fracasas, ¿Qué sientes?', 'op1', 21),
(21, 7, 'desanimado', 'Identifica a la persona que esta decaida', 'op3', 22),
(22, 8, 'enfadado', 'Di que niño esta cabreado', 'op4', 23),
(23, 8, 'enfadado', '¿Que te hace sentir enfadado/a?', 'op2', 24),
(24, 8, 'enfadado', 'Cuando alguien se enfada:', 'op1', 25),
(25, 9, 'bullying', 'Me hacen bullying cuando:', 'op2', 13),
(26, 9, 'soledad', 'Como se siente la chica de la imagen:', 'op3', 36),
(27, 9, 'culpa', 'Cuando reconozco que hago algo mal siento:', 'op2', 19),
(28, 10, 'celos', 'Siento celos cuando:', 'op1', 15),
(29, 10, 'sorpresa', 'Me sorprende que:', 'op2', 37),
(30, 10, 'amor', 'Siento amor por:', 'op3', 9);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `respuestas`
--

CREATE TABLE `respuestas` (
  `numero` int(3) NOT NULL,
  `op1` varchar(255) DEFAULT NULL,
  `op2` varchar(255) DEFAULT NULL,
  `op3` varchar(255) DEFAULT NULL,
  `op4` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `respuestas`
--

INSERT INTO `respuestas` (`numero`, `op1`, `op2`, `op3`, `op4`) VALUES
(1, 'Felices', 'Asustados', 'Preocupados', 'Tristes'),
(2, 'La primera de arriba', 'La segunda de arriba', 'La primera de abajo', 'La segunda de abajo'),
(3, 'Amarillo', 'Marron', 'Negro', 'Naranja'),
(4, 'Juego con mis amigos', 'Mis amigos no me dejan jugar', 'Mis amigos no me hacen caso', 'Siempre pierdo en los juegos'),
(5, 'Me siento euforico', 'Me siento contento', 'Me siento triste', 'Siento ira'),
(6, 'Enfadado', 'Contento', 'Asqueado', 'Celoso'),
(7, 'Ira', 'Amor', 'Tristeza', 'Asco'),
(8, 'Miedo', 'Ira', 'Asco', 'Sorpresa'),
(9, 'Olor a fruta podrida', 'Olor a flores', 'Olor a basura', 'Olor a chuches'),
(10, 'Furia', 'Ira', 'Miedo', 'Rencor'),
(11, 'Mi trabajo esta bien hecho', '¡Esto es intorelable!', 'Mi equipo favorito ha ganado', 'He perdido mi juguete favorito'),
(12, 'Hacen trampa', 'Me abrazan', 'Me Felicitan', 'Me ayudan'),
(13, '¿Compartimos el bocadillo?', 'Mi hermana  esta mala', 'Me han regaldo un movil por mi cumple', '¿Por qué me tratan mal?'),
(14, 'Soledad', 'Pena', 'Tristeza', 'Emocion'),
(15, 'Cabreado/a', 'Triste', 'Feliz', 'Culpable'),
(16, 'tiene miedo', 'esta feliz', 'esta asqueada', 'esta enfadada'),
(17, 'Por que te sientes en peligro', 'Por que alguien te amenaza', 'Por que llega el verano', 'Por que voy al campo a pasear'),
(18, 'Tirarte por un tobogan', 'Que te pique una avispa', 'Pintarte la cara', 'Halloween'),
(19, 'Alegre', 'Enfadado', 'Pensativo', 'Desanimado'),
(20, 'Me siento desanimado', 'Pierdo el interes', 'Me siento afortunado', 'Siento tranquilidad'),
(21, 'La primera', 'La Tercera', 'La ultima', 'La segunda'),
(22, 'Primero', 'Segundo', 'Tercero', 'El ultimo'),
(23, 'Que te rompan un juego', 'Cuando me hacen algo aposta', 'Que no me pongan deberes', 'El ultimo dia de clase'),
(24, 'Frunce el ceño y se cruza de brazos', 'Da saltos de algeria', 'Se cruza de brazos', 'Escuchas tu cancion favorita'),
(25, 'Juegan conmigo', 'Me acosan', 'Me ayudan', 'Me escuchan'),
(26, 'Culpable', 'Alegre', 'Sola', 'Apego'),
(27, 'Rechazo', 'Culpa', 'Feliz', 'Inocente'),
(28, 'Hacen un regalo a mi hermano y a mi no', 'El profesor felicita a toda la clase', 'Ganamos un trofeo', 'Comemos hamburguesas'),
(29, 'Flote un trasanlantico', 'Mi madre me haga un bocadillo', 'Duermo en mi cama', 'Mis abuelos me quieran'),
(30, 'Los deberes', 'El despertador', 'Mi familia', 'La vecina del septimo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `idUser` int(255) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `apellidos` varchar(75) NOT NULL,
  `password` varchar(255) NOT NULL,
  `padre` varchar(125) DEFAULT NULL,
  `madre` varchar(125) DEFAULT NULL,
  `fecha_nac` date NOT NULL,
  `telefono` int(9) DEFAULT NULL,
  `direccion` varchar(255) DEFAULT NULL,
  `discapacidad` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`idUser`, `nombre`, `apellidos`, `password`, `padre`, `madre`, `fecha_nac`, `telefono`, `direccion`, `discapacidad`) VALUES
(1, 'usuario', 'prueba prueba', md5('1234'), NULL, NULL, '0000-00-00', NULL, NULL, 'asperger');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `administradores`
--
ALTER TABLE `administradores`
  ADD PRIMARY KEY (`idAdmin`);

--
-- Indices de la tabla `emociones`
--
ALTER TABLE `emociones`
  ADD PRIMARY KEY (`num`);

--
-- Indices de la tabla `imagen`
--
ALTER TABLE `imagen`
  ADD PRIMARY KEY (`idImagen`);

--
-- Indices de la tabla `nivel`
--
ALTER TABLE `nivel`
  ADD PRIMARY KEY (`id`,`id_user`,`cod_nivel`),
  ADD KEY `fk_user` (`id_user`),
  ADD KEY `fk_niv` (`cod_nivel`);

--
-- Indices de la tabla `niveles`
--
ALTER TABLE `niveles`
  ADD PRIMARY KEY (`idNivel`);

--
-- Indices de la tabla `preguntas`
--
ALTER TABLE `preguntas`
  ADD PRIMARY KEY (`numero`,`nivel`),
  ADD KEY `fk_nivel` (`nivel`);

--
-- Indices de la tabla `respuestas`
--
ALTER TABLE `respuestas`
  ADD PRIMARY KEY (`numero`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`idUser`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `administradores`
--
ALTER TABLE `administradores`
  MODIFY `idAdmin` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `imagen`
--
ALTER TABLE `imagen`
  MODIFY `idImagen` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT de la tabla `nivel`
--
ALTER TABLE `nivel`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `niveles`
--
ALTER TABLE `niveles`
  MODIFY `idNivel` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `idUser` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

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
