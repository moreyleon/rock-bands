const express = require('express');
const router = express.Router();
const{add,edit,venta,carga} = require('../controllers/productsControllers');



router.get('/venta',venta);
router.get('/add',add);
router.post('/productsAdd',carga);

router.get('/edit',edit);





module.exports = router;