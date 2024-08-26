import express from "express";
import { formularioLogin, formularioRegistro, formularioOlvidePassword } from "../controllers/usuarioController.js";

const router = express.Router();

// Routing
router.get("/login", formularioLogin);
router.get("/registro", formularioRegistro)
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