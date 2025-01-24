const fs = require('fs');
const path = require('path');
const ruta = path.join(__dirname, "../db/bandas.json");
const bandas = () =>{
    return JSON.parse(fs.readFileSync(ruta, 'utf-8'));
}



const product = {

    venta: (req, res) => {
        res.render('products/productsVenta')
    },

    add: (req, res) => {
        
        res.render('products/productsAdd');
    },
   carga: (req, res) => {
    const agregar = bandas();
        const {nombre, imagen, genero} = req.body;
        agregar.push({
            nombre,
            imagen,
            genero,
        }); 
        fs.writeFileSync(ruta, JSON.stringify(agregar), 'utf-8');
     res.send(agregar);
    },

    edit: (req, res) => {
        res.render('products/productsEdit');
    }


}

module.exports = product;