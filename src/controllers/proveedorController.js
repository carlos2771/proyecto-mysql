const controller = {}


controller.listarP = (req, res) => { // para listar lo que haya en la tabla usuarios
    req.getConnection((e, conn) => {
        conn.query("select * from proveedor", (e, proveedor) => {
            if (e) {
                res.json(err)
            }
            console.log(proveedor);
            res.render("./proveedor/proveedor", { // provedor archivo de las vistas
                data: proveedor
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

controller.saveP = (req, res) => {
    const newProveedor = req.body;
    req.getConnection( (err, conn) => {
         conn.query("INSERT INTO proveedor set ?", [newProveedor]);
        console.log(newProveedor);
        res.redirect("/proveedor");
    })
};


controller.editP = (req,res) =>{
    const { id } = req.params; // dentro del cuerpo de body esta todos los campos de mysql nombre id telefono etc..
    req.getConnection((err, conn)=>{
        conn.query("select * from proveedor where id= ?", [id], (err, proveedor)=>{
            res.render("./proveedor/proveedor_edit",{
                data : proveedor[0]
            })
            
        })
    })
}

controller.updateP = (req, res)=>{
    const { id } = req.params
    const newProveedor = req.body
    req.getConnection((err, conn)=>{
        conn.query("update proveedor set ? where id = ?",[newProveedor, id], (err,rows)=>{
            res.redirect("/proveedor")
        })
    })
}


controller.deleteP = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
        const result = conn.query("DELETE FROM proveedor WHERE id = ?", [id]);
        if (result.affectedRows === 1) {
            res.json({ message: "proveedor  deleted" });
        }
        res.redirect("/proveedor");
    })
};



module.exports = controller