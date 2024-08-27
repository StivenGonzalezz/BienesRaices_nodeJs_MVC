import express from "express";

// se trean las funciones que se usaran del controlador del usuario vvvv
import { formularioLogin, formularioRegistro,registrar, formularioOlvidePassword } from "../controllers/usuarioController.js";

const router = express.Router();

// Routing
// como primer parametro se envia la ruta la cual queremos accerder y segundo parametro es la funcion que se realizara

router.get("/login", formularioLogin);

router.get("/registro", formularioRegistro)
router.post("/registro", registrar)

router.get("/olvide-password", formularioOlvidePassword)



// Forma de enlazar una misma direccion a varios tipos de direccione sin tener que volver a crearlo como se ve arriba (linea 6 a 12)
// router.route("/")
//   .get(function (req, res) {
//     res.send("hola mundo en express");
//   })
//   .post(function (req, res) {
//     res.json({ msg: "respuesta de tipo Post" });
// });

export default router;