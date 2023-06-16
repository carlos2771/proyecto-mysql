const controller = {}


controller.listarCompra = (req, res) => { // para listar lo que haya en la tabla usuarios
    req.getConnection((e, conn) => {
        conn.query("select * from compra", (e, compra) => {
            if (e) {
                res.json(e)
            }
            console.log(compra);
            res.render("./compra/compra", {
                data: compra
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

controller.saveCompra = (req, res) => {
    const newCustomer = req.body;
    req.getConnection( (err, conn) => {
         conn.query("INSERT INTO compra set ?", [newCustomer]);
        console.log(newCustomer);
        res.redirect("/compra");
    })
};


controller.editCompra = (req,res) =>{
    const { id_Compra } = req.params; // dentro del cuerpo de body esta todos los campos de mysql nombre id telefono etc..
    req.getConnection((err, conn)=>{
        conn.query("select * from compra where id_Compra= ?", [id_Compra], (err, compra)=>{
            res.render("./compra/Compra_edit",{ // usuarios_edit es la vista ejs
                data : compra[0]
            })
        })
    })
}

controller.updateCompra = (req, res)=>{
    const { id_Compra } = req.params
    const newCompra = req.body
    req.getConnection((err, conn)=>{
        conn.query("update compra set ? where id_Compra = ?",[newCompra, id_Compra], (err,rows)=>{
            res.redirect("/compra")
        })
    })
}


controller.deleteCompra = (req, res) => {
    const { id_Compra } = req.params;
    req.getConnection((err, conn) => {
        const result = conn.query("DELETE FROM compra WHERE id_Compra = ?", [id_Compra]);
        if (result.affectedRows === 1) {
            res.json({ message: "Customer deleted" });
        }
        res.redirect("/compra");
    })
};



module.exports = controller