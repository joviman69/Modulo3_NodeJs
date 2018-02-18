'use strict';

const mongoose = require('mongoose');
const conn = mongoose.connection;
const Anuncio = require('../models/Anuncio');
const fs = require('fs');




conn.once('open', () => {
    
        
(async () => {
    try {
        await Anuncio.collection.drop();   
    } catch(err1) {
        console.log("Error en drop", err1);
    }
    try {
        const anuncios = JSON.parse(fs.readFileSync('public/anuncios.json', 'utf-8'));
        await Anuncio.insertMany(anuncios);

        console.log('anuncios.json importada a la base de datos');
        //res.render('load', {resultados: 'Collection anuncios reseteada con exito desde el fichero anuncios.jason' });  

  } catch(err2) {
        console.log("Error en insertMany", err2);
}
})().catch(err => console.log(err));
})