const controller = {}


controller.listarV = (req, res) => { // para listar lo que haya en la tabla usuarios
    req.getConnection((e, conn) => {
        conn.query("select * from venta", (e, venta) => {
            if (e) {
                res.json(err)
            }
            console.log(venta);
            res.render("./ventas/venta", { // provedor archivo de las vistas
                data: venta
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