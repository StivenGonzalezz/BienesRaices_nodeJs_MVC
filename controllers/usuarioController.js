import Usuario from "../models/Usuario.js";

// Aqui se crean las funciones/acciones que tendra la clase de usuario
const formularioLogin = (req, res) =>{
    res.render('auth/login',{
        pagina:'Iniciar Sesion'
      });
}

const formularioRegistro = (req, res) =>{
    res.render('auth/registro',{
        pagina: 'Crear Cuenta'
      });
}

const registrar = async (req, res) =>{
    const usuario = await Usuario.create(req.body);

    res.json(usuario)
}

const formularioOlvidePassword = (req, res) =>{
    res.render('auth/olvide-password',{
        pagina: 'Recupera tu Cuenta'
      });
}

// se exportan las funciones
export{
    formularioLogin,
    formularioRegistro,
    registrar,
    formularioOlvidePassword
}