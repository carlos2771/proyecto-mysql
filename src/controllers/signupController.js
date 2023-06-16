
const controller = {}
const bcryptjs =  require("bcryptjs")
const connection = require("../database/db")
controller.registrate = (req, res) => { // para listar lo que haya en la tabla usuarios
            res.render("./auth/autenticar")}

controller.formulario = async(req, res)=>{
    const nombre = req.body.nombre
    const documento = req.body.documento
    const email = req.body.email
    const id_Rol = req.body.id_Rol
    const contraseña = req.body.contraseña
    const estado = req.body.estado
    let passwordHaash = await bcryptjs.hash(contraseña, 8)
    connection.query("insert into usuarios set ?",{nombre: nombre, documento:documento, email:email, id_Rol:id_Rol, estado:estado, contraseña:passwordHaash}, async(error,results)=>{
        if(error){
            console.log(error);
        }else{
            res.render("./auth/autenticar",{
                alert: true,
                alertTitle: "Registracion",
                alertMessage: "se registro exitosamente",
                alertIcon: "exitoso",
                showConfirmButton: false,
                timer: 4500,
                ruta: ""
            })
        }
    })
}
module.exports = controller