const controller = {}


controller.listarR = (req, res) => { // para listar lo que haya en la tabla usuarios
    req.getConnection((e, conn) => {
        conn.query("select * from rol", (e, rol) => {
            if (e) {
                res.json(err)
            }
            console.log(rol);
            res.render("./rol/rol", { // provedor archivo de las vistas
                data: rol
            }) // se trae de las vistas
        })
    })
}


controller.permiso = (req, res) => {
    req.getConnection((e, conn)=>{
        conn.query("select p.nombre AS 'nombrePermiso', r.id_Rol AS 'idDelRol' from permiso p inner join rol_permiso r on p.id_Permiso = r.id_Permiso where id_Rol= 1",(e,inner)=>{
            if(e){
                res.json(e)
            }
            console.log(inner);
            res.render("./rol/permisos",{
                data: inner
            })
        })
    })
}
controller.permisoC = (req, res) => {
    req.getConnection((e, conn)=>{
        conn.query("select p.nombre AS 'nombrePermiso', r.id_Rol AS 'idDelRol' from permiso p inner join rol_permiso r on p.id_Permiso = r.id_Permiso where id_Rol= 2",(e,inner)=>{
            if(e){
                res.json(e)
            }
            console.log(inner);
            res.render("./rol/permisosC",{
                data: inner
            })
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

// controller.saveR = (req, res) => {
//     const newrol = req.body;
//     req.getConnection( (err, conn) => {
//          conn.query("INSERT INTO rol set ?", [newrol]);
//         console.log(newrol);
//         res.redirect("/rol");
//     })
// };


// controller.editR = (req,res) =>{
//     const { id } = req.params; // dentro del cuerpo de body esta todos los campos de mysql nombre id telefono etc..
//     req.getConnection((err, conn)=>{
//         conn.query("select * from rol where id= ?", [id], (err,rolr)=>{
//             res.render("./rol/rol_edit",{
//                 data : proveedor[0]
//             })
            
//         })
//     })
// }

// controller.updateR = (req, res)=>{
//     const { id } = req.params
//     const newrol = req.body
//     req.getConnection((err, conn)=>{
//         conn.query("update rol set ? where id = ?",[newrol, id], (err,rows)=>{
//             res.redirect("/rol")
//         })
//     })
// }


// controller.deleteR = (req, res) => {
//     const { id } = req.params;
//     req.getConnection((err, conn) => {
//         const result = conn.query("DELETE FROM rol WHERE id = ?", [id]);
//         if (result.affectedRows === 1) {
//             res.json({ message: "rol  deleted" });
//         }
//         res.redirect("/rol");
//     })
// };



module.exports = controller