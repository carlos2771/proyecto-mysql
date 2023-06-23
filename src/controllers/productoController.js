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


controller.saveProd = (req, res) => {
    const newProducto = req.body;
    req.getConnection((err, conn) => {
        conn.query("INSERT INTO producto set ?", [newProducto]);
        console.log(newProducto);
        res.redirect("/producto");
    })
};


controller.editProd = (req, res) => {
    const { id_Producto } = req.params; // dentro del cuerpo de body esta todos los campos de mysql nombre id telefono etc..
    req.getConnection((err, conn) => {
        conn.query("select * from producto where id_Producto= ?", [id_Producto], (err, producto) => {
            res.render("./producto/producto_edit", {
                data: producto[0]
            })

        })
    })
}

// select prov

controller.updateProd = (req, res) => {
    const { id_Producto } = req.params
    const newProveedor = req.body
    req.getConnection((err, conn) => {
        conn.query("update producto set ? where id_Producto = ?", [newProveedor, id_Producto], (err, rows) => {
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


// select pvd.nombre from proveedor pvd join producto prod ON (pvd.id = prod.id_Proveedor)
controller.proveedor = (req, res) => {

    req.getConnection(async(e, conn) => {
        await conn.query ("SELECT nombreP FROM proveedor", (e, proveedor) => {
            if (e) {
                res.json(e);
            } else {
                console.log(proveedor);
                res.render("./producto/producto", {
                    data: proveedor
                });
            }
        });
    });
};

module.exports = controller