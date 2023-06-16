// ejecutar todo el servidor 
const express = require("express")
const path = require("path") // para poder trabajar con las rutas de los archivos
const morgan = require("morgan")
const mysql = require("mysql") // conxion mysql
const myConnection = require("express-myconnection") // poder usar rutas con mysql
const app = express()
const passport = require("passport")
const session = require('express-session'); // para poder usar el signup
const flash = require('connect-flash');

// importing routes
const rutasApi = require("./routes")
require("./lib/passport")




// settings
app.set("port", process.env.PORT || 3000) // para guardar cualquier tipo de valor sea primitivo o un objero .set
app.set("views", path.join(__dirname, "views")) // para decirle donde esta ubicado views
app.set('view engine', 'ejs') // para configurar el motor de plantilla que ya esta instalado 
 
//middlewares son  funciones que se ejecutan antes que vengan las peticiones de los usuarios



app.use(morgan("dev")) // para mostrar mensajes por consola de las peticiones que se hacen
app.use(myConnection(mysql, { // conexion a la base de datos
    host: "localhost",
    user: "root",
    password: "",
    port: 3306,
    database: "psbarber"
}, "single")) 
app.use(flash());

app.use(express.urlencoded({ extended: true})); //nos permitira entender todos los datos que vengan del formulario y como configuracion le pasamos eso ya que no va pasar imagenes parecido al bodyparser
app.use(session({ //para poder usar el signup 
    secret: 'secreto', 
    resave: false,
    saveUninitialized: false
  }));
app.use(express.json())
app.use(passport.initialize())
app.use(passport.session())


app.use((req, res, next)=>{
    app.locals.success = req.flash("success")
    next()
})


//routes
// app.use("/",usuariosRoutes)
// app.use("/proveedor",proveedorRoutes) // esta es tempral mientras se le agrega login
rutasApi(app)





//static files 
app.use(express.static(path.join(__dirname, "public"))) // para traer la carpeta public
// app.use(express.static('public/styles'))


app.listen(app.get("port"), ()=> {
    console.log(`se esta escuchando en el puerto: https://localhost:${app.get("port")}`);
})

