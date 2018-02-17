'use strict';

const express = require('express');
const router = express.Router();

const Anuncio = require ('../../models/Anuncio.js');


// controlador GET
// Consultar anuncios

router.get('/', async (req, res, next) => {   
    try {

        // Extracción a variables de los parámetros de entrada
        const nombre = req.query.nombre;
        const venta = req.query.venta;
        const precio = req.query.precio;
        const p_max = req.query.p_max;
        const p_min = req.query.p_min;
        const foto = req.query.foto;
        const tag = req.query.tag;
        const skip = parseInt(req.query.skip);
        const limit = parseInt(req.query.limit);
        const sort = req.query.sort;
        //const fields = req.query.fields +" -_id"; // Eliminamos el _id de la respuesta
        const fields = req.query.fields; 

       console.log(req.query)
    
        const filtro = {};
    
        if (typeof nombre !== 'undefined') { 
          filtro.nombre = nombre; 
        }
    
        if (typeof venta !== 'undefined') {
          filtro.venta = venta;
        }

        if (typeof precio !== 'undefined') {
            filtro.precio = precio;
          }

        if (typeof foto !== 'undefined') {
          filtro.foto = foto;
        }

        if (typeof tag !== 'undefined') {
            filtro.tag = tag;
          }
        
        const docs = await Anuncio.listar(filtro, skip, limit, sort, fields); 
        
        res.json({ success: true, result: docs });  
      } catch(err) {
        next(err);
        return;
      } 
});

// controlador GET
// Contar anuncios 

router.get('/contar', async (req, res, next) => {   
    try {
        const total = await Anuncio.find().count().exec();    
        res.json({ success: true, result: total });  

  } catch(err) {
        next(err);
        return;
  }  
});



// controlador GET
// Consultar anuncios por _id

router.get('/:id', async (req, res, next) => {   
    try {
        const _id = req.params.id;
        const docs = await Anuncio.find({_id: _id}).exec();    
        res.json({ success: true, result: docs });  

  } catch(err) {
        next(err);
        return;
  }  
});

// controlador POST 
// Añadir un anuncio

router.post('/', async (req, res, next) => {   
        try {            
            const data = req.body;
            //console.log(req.body);
            console.log('Nuevo documento creado: ', data);
            
            // Creación de nuevo documento basado en el modelo Anuncio para mongoose
            const anuncio = new Anuncio(data);
            
            // Grabación en mongodb por mongoose
            await anuncio.save((err, anuncioGuardado) => {
                res.json({ success: true, result: anuncioGuardado });
                });

        } catch(err) {
            next(err);
            return;
      }  
    });


    // Controlador DELETE /
    // Eliminación de un anuncio a traves de su _id

router.delete('/:id', async (req, res, next) => {
    try {
        const _id = req.params.id;
        await Anuncio.remove({_id: _id}).exec();
        res.json({ success: true });
    } catch(err) {
        next(err);
        return;
    }
});
    
    // Controlador PUT 
    // Actualización de un anuncio

router.put('/:id', async (req, res, next) => {
    try {
        const _id = req.params.id;
        const data = req.body;
        const anuncioActualizado = await Anuncio.findByIdAndUpdate(_id, data, { 
        new: true });    
        res.json({ success: true, result: anuncioActualizado });
    
    } catch(err) {
        next(err);
        return;
  }
});

module.exports = router;
