const controller = {}


controller.listarCompra = (req, res) => {
    req.getConnection((error, conn) => {
      if (error) {
        res.json(error);
        return;
      }
  
      const sqlCompra = "SELECT * FROM compra";
      const sqlProducto = "SELECT * FROM producto";
  
      conn.query(sqlCompra, (errorCompra, compra) => {
        if (errorCompra) {
          res.json(errorCompra);
          return;
        }
  
        conn.query(sqlProducto, (errorProducto, producto) => {
          if (errorProducto) {
            res.json(errorProducto);
            return;
          }
  
          res.render("./compra/compra", {
            data: {
              compra: compra,
              producto: producto
            }
          });
        });
      });
    });
  };
controller.productos = (req, res) => {
    req.getConnection((e, conn)=>{
        conn.query("SELECT * FROM producto WHERE cantidad>0",(e,inner)=>{
            if(e){
                res.json(e)
            }
            console.log(inner);
            res.render("./compra/compra",{
                datas: inner
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

    controller.saveCompra = (req, res) => {
        const newCustomer = req.body;
        req.getConnection((err, conn) => {
            conn.query("INSERT INTO compra set ?", [newCustomer]);
            console.log(newCustomer);
            res.redirect("/compra");
        })
    };


controller.editCompra = (req, res) => {
    const { id_Compra } = req.params; // dentro del cuerpo de body esta todos los campos de mysql nombre id telefono etc..
    req.getConnection((err, conn) => {
        conn.query("select * from compra where id_Compra= ?", [id_Compra], (err, compra) => {
            res.render("./compra/Compra_edit", { // usuarios_edit es la vista ejs
                data: compra[0]
            })
        })
    })
}

controller.updateCompra = (req, res) => {
    const { id_Compra } = req.params
    const newCompra = req.body
    req.getConnection((err, conn) => {
        conn.query("update compra set ? where id_Compra = ?", [newCompra, id_Compra], (err, rows) => {
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

controller.dtCompra = (req, res) => { // para listar lo que haya en la tabla usuarios
    const { id_Compra } = req.params;
    req.getConnection((e, conn) => {
        conn.query("SELECT p.nombre, p.precio, dt.cantidad, dt.subtotal FROM detalle_compra dt INNER JOIN producto p ON  dt.id_Producto = p.id_Producto WHERE id_Compra = ?", [id_Compra], (e, compra) => {
            if (e) {
                res.json(e)
            }
            if (compra.length > 0) {
                const nombre = compra;
                for (let i = 0; i < nombre.length; i++) {
                    const subtotal = nombre[i].cantidad * nombre[i].precio;
                    console.log("sub", subtotal);
                }
            }
            res.render("./compra/detalle", {
                data: compra
            }) // se trae de las vistas
        })
    })
}

module.exports = controller