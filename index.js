// const express = require('express');  COMMOND JS FORMA ANTIGUA DE REALIZAR PROYECTO EN EXPRESS

// Forma actual de hacerlo
import express from "express";
import usuarioRoutes from './routes/usuarioRoutes.js'
import db from './config/db.js'


// Crear la app
const app = express();

// Habilitar lectura de datos de formulario
app.use(express.urlencoded({extended: true}))

// Conexion a la base de datos
try{
    await db.authenticate();
    db.sync()
    console.log('Conexion Establecida con exito');
}catch(error){
    console.log(error)
}

// Habilitacion de pug
app.set('view engine', 'pug')
app.set('views', './views')

// Carpeta publica
app.use(express.static('public'))

// Routing
app.use('/auth', usuarioRoutes)

// Defini un puerto y arrancar el proyecto
const port = 3000;
app.listen(port, ()=>{
    console.log(`Proyecto funcionando en el puerto ${port}`);
})
