// CREATE TABLE usuarios (
//     id int(10) PRIMARY KEY AUTO_INCREMENT,
//     nombre varchar(50) not null,
//     documento varchar(50) not null,
//     contraseña varchar(50) NOT null,
//     email varchar(50) not null,
//     id_Rol int(10) NOT null,
//     FOREIGN KEY (id_rol) REFERENCES rol(id_cliente)
// )



const mysql = require("mysql")
const connection = mysql.createConnection({
    // host :process.env.DB_HOST,
    // user :process.env.DB_USER,
    // password :process.env.DB_PASSWORD,
    // port : process.env.DB_PORT,
    // database :process.env.DB_DATABASE
    host: "localhost",
    user: "root",
    password: "",
    port: 3306,
    database: "psbarber"
})

connection.connect((error)=>{
    if(error){
        console.log(`el error de la conexion es: ${error}`);
        return
    }else{
        console.log("conectado a la base de datos ");
    }
})

module.exports = connection