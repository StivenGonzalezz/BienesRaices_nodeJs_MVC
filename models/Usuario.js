import { DataTypes } from "sequelize";
import db from '../config/db.js'

//se crea objeto de tipo usuario para que luego el ORM sequelize cree la tabla en nuestra base de datos

//       vvvvvvvvv creacion del objeto
const Usuario = db.define('usuarios',{
    // Variables que tendra nuestro objeto
    nombre: {
        // v Se da un tipo de dato el cual sera la variable, En este caso la variable nombre sera de tigo String v
        type: DataTypes.STRING,
        // v Esta opcion hace que la variable si o si tenga que estar al crear el objeto v 
        alllowNull: false
    },
    email:{
        type: DataTypes.STRING,
        alllowNull: false
    },
    password: {
        type: DataTypes.STRING,
        alllowNull: false
    },
    // v Las variables las cuales solamente tienen una condicion / caractristica se pueden iniciar de esta forma mas corta v 
    token: DataTypes.STRING,
    confirmado: DataTypes.BOOLEAN
})

export default Usuario