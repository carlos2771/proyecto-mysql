const controller = {}


controller.listar = (req, res) => { // para listar lo que haya en la tabla usuarios
    req.getConnection((e, conn) => {
        conn.query("select * from usuarios ", (e, usuarios) => {
            if (e) {
                res.json(err)
            }
            console.log(usuarios);
            res.render("./usuarios/usuarios", {
                data: usuarios
            }) // se trae de las vistas
        })
    })
}


// controller.save = (req, res) => {
//     const data = req.body
//     req.getConnection((err, conn) => {
//         conn.query('INSERT INTO usuarios set ?', [data], (err, usuarios) => {
//             console.log(usuarios);
//             res.render("/")
//         })
//     })
// }
const bcryptjs = require("bcryptjs");

controller.save = async (req, res) => {
  const { nombre, documento, email, id_Rol, estado, contrasena } = req.body;

  try {
    const hashedPassword = await bcryptjs.hash(contrasena, 10);
    const array = {
      nombre,
      documento,
      email,
      id_Rol,
      estado,
      contrasena: hashedPassword
    };

    req.getConnection((err, conn) => {
      conn.query("INSERT INTO usuarios SET ?", array, (error, results) => {
        if (error) {
          throw error;
        }
        console.log(array);
        res.redirect("/usuarios");
      });
    });
  } catch (error) {
    console.error("Error al encriptar la contraseña:", error);
    res.status(500).json({ error: "Error al encriptar la contraseña" });
  }
};


controller.edit = (req,res) =>{
    const { id } = req.params; // dentro del cuerpo de body esta todos los campos de mysql nombre id telefono etc..
    req.getConnection((err, conn)=>{
        conn.query("select * from usuarios where id= ?", [id], (err, usuarios)=>{
            res.render("./usuarios/usuarios_edit",{ // usuarios_edit es la vista ejs
                data : usuarios[0]
            })
        })
    })
}

controller.update = (req, res)=>{
    const { id } = req.params
    const newUsuarios = req.body
    req.getConnection((err, conn)=>{
        conn.query("update usuarios set ? where id = ?",[newUsuarios, id], (err,rows)=>{
            res.redirect("/usuarios")
        })
    })
}


controller.delete = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
        const result = conn.query("DELETE FROM usuarios WHERE id = ?", [id]);
        if (result.affectedRows === 1) {
            res.json({ message: "Customer deleted" });
        }
        res.redirect("/usuarios");
    })
};



module.exports = controller