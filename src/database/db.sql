-- --create database 
-- create database psbarberMysql

-- --using database
use psbarberMysql

--create table
create table usuarios(
    id int(11) UNSINGNED  AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(80) not null,
    documento int(20) not null,
    telefono VARCHAR(11) NOT NULL,
    email VARCHAR(50)NOT NULL,
    contraseña varchar(15) NOT NULL,
    estado: boolean()
);
INSERT INTO usuarios (`id`,`nombre`,`documento`,`telefono`,`email`, `estado`) VALUES (null,'carlos','10000','330404', 'carlos@gmail.com', 1);
-- read table 
SHOW TABLES;

-- to describe tables 
describe usuarios;




CREATE TABLE proveedor
(id_proveedor int(10) PRIMARY KEY AUTO_INCREMENT,
 nit varchar(30) not null,
 nombre varchar(20) not null,
 telefono varchar(12) not null,
 email varchar(30) not null,
 direccion varchar(30) not null,
 estado boolean not null,
 persona_encardada varchar(20) not null,
 telefono_Pe varchar(12)not null
); 

INSERT INTO `proveedor`(`id_proveedor`, `nit`, `nombre`, `telefono`, `email`, `direccion`, `estado`, `persona_encardada`, `telefono_Pe`) VALUES (null,'10000202','p&g','3045939','p&g@gmail.com','poblado','1','camilo','302838383')

-- SELECT p.nombre, p.precio, dt.cantidad, dt.subtotal FROM detalle_compra dt INNER JOIN producto p ON  dt.id_Producto = p.id_Producto