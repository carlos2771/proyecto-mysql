const controller = {}


controller.listarProd = (req, res) => { // para listar lo que haya en la tabla usuarios
    req.getConnection((e, conn) => {
        conn.query("select * from producto", (e, producto) => {
            if (e) {
                res.json(err)
            }
            console.log(producto);
            res.render("./producto/producto", { // provedor archivo de las vistas
                data: producto
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

controller.saveProd = (req, res) => {
    const newProducto = req.body;
    req.getConnection( (err, conn) => {
         conn.query("INSERT INTO producto set ?", [newProducto]);
        console.log(newProducto);
        res.redirect("/producto");
    })
};


controller.editProd = (req,res) =>{
    const { id_Producto } = req.params; // dentro del cuerpo de body esta todos los campos de mysql nombre id telefono etc..
    req.getConnection((err, conn)=>{
        conn.query("select * from producto where id_Producto= ?", [id_Producto], (err, producto)=>{
            res.render("./producto/producto_edit",{
                data : producto[0]
            })
            
        })
    })
}

controller.updateProd = (req, res)=>{
    const { id_Producto } = req.params
    const newProveedor = req.body
    req.getConnection((err, conn)=>{
        conn.query("update producto set ? where id_Producto = ?",[newProveedor, id_Producto], (err,rows)=>{
            res.redirect("/producto")
        })
    })
}


controller.deleteProd = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
        const result = conn.query("DELETE FROM producto WHERE id_Producto = ?", [id]);
        if (result.affectedRows === 1) {
            res.json({ message: "producto  deleted" });
        }
        res.redirect("/producto");
    })
};



module.exports = controller