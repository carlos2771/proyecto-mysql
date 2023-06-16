const controller = {}

const bcryptjs =  require("bcryptjs")
const connection = require("../database/db")

controller.ingresar = (req, res)=>{
    res.render("./auth/login")
}

controller.loguear = async (req, res)=>{
    const email = req.body.email
    const contrasena = req.body.contrasena
    let passwordHaash = await bcryptjs.hash(contrasena, 8)
    if(email && contrasena){
        connection.query("select * from usuarios where email = ? ", [email], async (err, results)=>{
            if(results.length === 0 || !(await  bcryptjs.compare(contrasena, results[0].contrasena))){ // para ver si las contraseñas cohinciden
            res.render("./auth/login",{
                alert : true,
                alertTitle: "Error",
                alertMessage: "email o contrasena incorrecta",
                alertIcon: "error",
                showConfirmButton: true,
                ruta: ""
            })
            }else{
                req.session.loggedin = true
                req.session.nombre = results[0].nombre
                res.render("./partials/logiin",{
                    alert : true,
                    alertTitle: "Conexion exitosa",
                    alertMessage: "Login correcto",
                    alertIcon: "exitoso",
                    showConfirmButton: false,
                    timer: 5500,
                    ruta: ""
            })}
                
        })
    }else{
        res.render("./auth/login",{
            alert : true,
            alertTitle: "advertencia",
            alertMessage: "ingrese un email y correo",
            alertIcon: "warning",
            showConfirmButton: false,
            timer: 5500,
            ruta: ""
    })
    }
}




controller.bienvenida =(req,res)=>{
    if(req.session.loggedin){
        res.render("/auth/logiin",{
            login: true,
            nombre: req.session.nombre
        })
    }else{
        res.render("/auth/logiin",{
            login: false,
            nombre: "debe iniciar sesion"
        }
        )
    }
}


module.exports = controller