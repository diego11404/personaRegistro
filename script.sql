/*

ejecutar estas lineas si no se conecta a mysql (ER_NOT_SUPPORTED_AUTH_MODE)

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root';
flush privileges;

*/


CREATE SCHEMA `diego` ;

CREATE TABLE `diego`.`persona` (
  `idpersona` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(20) NULL,
  `apellido` VARCHAR(20) NULL,
  `direccion` VARCHAR(50) NULL,
  `telefono` VARCHAR(12) NULL,
  `celular` VARCHAR(12) NULL,
  `fechaNacimiento` DATETIME NULL,
  `hasCoronavirus` VARCHAR(3) NULL,
  `hasSintomas` VARCHAR(3) NULL,
  PRIMARY KEY (`idpersona`));


INSERT INTO `diego`.`persona` ( `nombre`, `apellido`, `direccion`, `telefono`, `celular`, `fechaNacimiento`, `hasCoronavirus`, `hasSintomas`) 
VALUES
 ('rodrigo', 'Diaz', 'urbanizacion monserrate', '044256745', '965874584', '2002-04-18', 'no', 'no'),
 ('cesar ', 'quiroz', 'monserrate', '044589689', '930168808', '1992-05-08', 'no', 'ye')
 ;
 
 