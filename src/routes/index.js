const usuariosContoller = require("../controllers/usuariosContoller")
const rolContoller = require("../controllers/rolController")
const proveedorContoller = require("../controllers/proveedorController")
const landingController = require("../controllers/landingController")
const productoController = require("../controllers/productoController")
const compraController = require("../controllers/compraController")
const ventaController = require("../controllers/ventaController")
const signupContoller = require("../controllers/signupController")
const loginController = require("../controllers/loginController")



const rutasApi = (app) => {
    // CRUD USUARIOS
app.get("/", landingController.inicio)

app.get("/usuarios", usuariosContoller.listar) // acceder a el listar que se encuentra dentro de user controller abrala por si no se acuerda de como es
app.post("/add", usuariosContoller.save)
app.get("/update/:id", usuariosContoller.edit)
app.post("/update/:id", usuariosContoller.update)
app.get("/delete/:id", usuariosContoller.delete)

// CRUD PROVEEDORES
app.get("/proveedor", proveedorContoller.listarP)
app.post("/addP", proveedorContoller.saveP)
app.get("/updateProveedor/:id", proveedorContoller.editP)
app.post("/updateProveedor/:id", proveedorContoller.updateP)
app.get("/deleteProveedor/:id", proveedorContoller.deleteP)

// CRUD PRODUCTO
app.get("/producto", productoController.listarProd)
app.post("/addProd", productoController.saveProd)
app.get("/updateProducto/:id_Producto", productoController.editProd)
app.post("/updateProducto/:id_Producto", productoController.updateProd)
app.get("/deleteProducto/:id_Producto", productoController.deleteProd)


// CRUD COMPRA
app.get("/compra", compraController.listarCompra)
app.post("/addCompra", compraController.saveCompra)
app.get("/updateCompra/:id_Compra", compraController.editCompra)
app.post("/updateCompra/:id_Compra", compraController.updateCompra)
app.get("/deleteCompra/:id_Compra", compraController.deleteCompra)


// ROL
app.get("/rol", rolContoller.listarR )
app.get("/info", rolContoller.permiso)
app.get("/infoC", rolContoller.permisoC)

//Venta
app.get("/venta", ventaController.listarV )


app.get("/signup", signupContoller.registrate)
app.post("/signup", signupContoller.formulario)

app.get("/login", loginController.ingresar)
app.post("/login", loginController.loguear)



}

module.exports = rutasApi