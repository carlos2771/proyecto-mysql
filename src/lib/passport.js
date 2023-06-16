const passport = require("passport")
const localStrategy = require("passport-local").Strategy
const helpers = require("../lib/helpers")


passport.use("local.signup", new localStrategy ({
    nombreField : "nombre",
    documentoField : "documento",
    emailField : "email",
    contraseñaField : "contraseña",
    passReqToCallback : true // para poder recibir el objeto req dentro de la funcion que ejecute el localstrategy
}, async (req, nombre, documento, email, contraseña, done )=>{
    const newUsuarios ={
        nombre,
        documento,
        email,
        contraseña
    }
    newUsuarios.contraseña = await helpers.encrypPassword(contraseña)
    const result = req.getConnection((err, conn) => {
        conn.query("INSERT INTO usuarios set ?", [newUsuarios], (e, usuarios)=>{
            if (e) {
                res.json(err)
            }
            console.log(usuarios);
            res.render("./usuarios/usuarios", {
                data: usuarios
            })
        })
        console.log(result);
        res.redirect("/usuarios");
    })
})) 

// passport.serializeUser((usr, done)=>{

// })