const controller = {}
controller.listarProd = (req, res) => {
    req.getConnection((error, conn) => {
      if (error) {
        res.json(error);
        return;
      }
  
      const sqlProveedor = "SELECT * FROM proveedor";
      const sqlProducto = "SELECT * FROM producto";
  
      conn.query(sqlProveedor, (errorProveedor, proveedor) => {
        if (errorProveedor) {
          res.json(errorProveedor);
          return;
        }
  
        conn.query(sqlProducto, (errorProducto, producto) => {
          if (errorProducto) {
            res.json(errorProducto);
            return;
          }
  
          res.render("./producto/producto", {
            data: {
              proveedor: proveedor,
              producto: producto
            }
          });
        });
      });
    });
  };







// controller.listarProd = (req, res) => { // para listar lo que haya en la tabla usuarios
//     req.getConnection((e, conn) => {
//         conn.query("SELECT p.nombre, p.precio, p.id_Producto, p.cantidad, p.estado, pr.id as 'id_Proveedor', pr.nombre as 'nombrePr' FROM producto p INNER JOIN proveedor pr ON p.id_Proveedor = pr.id where cantidad>0", (e, producto) => {
//             if (e) {
//                 res.json(err)
//             }
//             console.log(producto);
//             res.render("./producto/producto", { // provedor archivo de las vistas
//                 data: producto
//             }) // se trae de las vistas
//         })
//     })
// }


controller.saveProd = (req, res) => {
    const newProducto = req.body;
    req.getConnection((err, conn) => {
        conn.query("INSERT INTO producto set ?", [newProducto]);
        console.log(newProducto);
        res.redirect("/producto");
    })
};

controller.editProd = (req, res) => {
    const { id_Producto } = req.params;
    const { id_Proveedor} = req.params;
    req.getConnection((error, conn) => {
      if (error) {
        res.json(error);
        return;
      }
      
      const sqlProveedor1 = "SELECT pvd.nombre, pvd.id FROM proveedor pvd INNER JOIN producto p on ( p.id_Proveedor = pvd.id )";
      const sqlProducto = "SELECT * FROM producto where id_Producto= ?" ;
  
      conn.query(sqlProveedor1,[id_Proveedor], (errorProveedor, proveedor) => {
        if (errorProveedor) {
          res.json(errorProveedor);
          return;
        }
  
        conn.query(sqlProducto, [id_Producto], (errorProducto, producto) => {
          if (errorProducto) {
            res.json(errorProducto);
            return;
          }
  
          res.render("./producto/producto_edit", {
            data: {
              proveedor: proveedor[0],
              producto: producto[0]
            }
          });
        });
      });
    });
  };


  
// controller.editProd = (req, res) => {
//     const { id_Producto } = req.params; // dentro del cuerpo de body esta todos los campos de mysql nombre id telefono etc..
//     req.getConnection((err, conn) => {
//         conn.query("SELECT * producto where id_Producto= ?", [id_Producto], (err, producto) => {
//             res.render("./producto/producto_edit", {
//                 data: producto[0]
//             })

//         })
//     })
// }





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
    const { id_Producto } = req.params;
    req.getConnection((err, conn) => {
        const result = conn.query("DELETE FROM producto WHERE id_Producto = ?", [id_Producto]);
        if (result.affectedRows === 1) {
            res.json({ message: "producto  deleted" });
        }
        res.redirect("/producto");
    })
};




module.exports = controller