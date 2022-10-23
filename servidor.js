const express = require('express'); //constante de express para poder importarla
//crear una isntancia de express
const app = express();
//importar mongoose
const mongoose = require('mongoose');
//importar desde modelos
const TareaSchema = require('./modelos/Tarea.js');
//definir Router
const router = express.Router();
app.use(express.urlencoded({extended: true}));
app.use(express.json());
//para poder usar las rutas
app.use(router);
//conectarme al servidor con cadena de conexion
mongoose.connect('mongodb+srv://prog_web:ProgWebMintic2022@clusterprogweb.egmynyq.mongodb.net/expressg68?retryWrites=true&w=majority')
//activar el servidor con una funcion lambda
app.listen(3000, () => {

    console.log('Escuchando por puerto 3000');
    
    });
    //servidor sin rutas
//definir la ruta raiz
router.get('/', (req, res) => {
    res.send('Inicio de la API');
    
    });
//Verbo POST
// definir las rutas para crear API REST para las tareas con ayuda de postman
router.post('/tarea', (req, res) => {
    let nuevaTarea = new TareaSchema({
    
        idTarea: req.body.id,
        nombreTarea: req.body.nombre,
        detalleTarea: req.body.detalle   
    });
    nuevaTarea.save(function(err, datos){
        if (err) {
            console.log(err);
        }
        else{        
            res.send('Tarea almacenada correctamente');    
        }
    });
});
//Verbo GET
router.get('/tarea', (req, res) => {
    TareaSchema.find(function(err, datos){
        if (err) {
            console.log("Error leyendo las tareas");
        
        }
        else{
            res.send(datos);
        }
    });
    
});