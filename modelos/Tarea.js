//modelo esquematizado para la tabla
//importar mongoose para trabajar con la clase eschema
const mongoose = require('mongoose');
//definir el esquema con  un objeto de la clase de mongoose 
let TareaSchema = new mongoose.Schema({
    idTarea: Number, //campo y tipo de variable
    nombreTarea: String,
    detalleTarea: String
});
//necesitamos exportarlo
module.exports = mongoose.model('Tarea', TareaSchema);