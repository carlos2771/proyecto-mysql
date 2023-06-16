const controller = {}
controller.inicio = (req, res) => { // para listar lo que haya en la tabla usuarios
            res.render("./landingPage/index")}
module.exports = controller