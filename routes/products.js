var express = require('express');
var router = express.Router();
const {venta,add,edit} = require("../controllers/productsControllers");



//ruta para la creacion de productos
router.get("/venta", venta);
router.get("/add", add);

router.get("/edit", edit);


//router.get("/detalle/:id", productsController.detail);
//rutas del administrador aplicando middleware
//router.get("/create", productsController.create);
// router.post("/create", productsController.store);
//router.get("/edit/:id", productsController.edit);
// router.put("/edit/:id", productsController.update);
// router.delete("/delete/:id", productsController.destroy);

module.exports = router;
