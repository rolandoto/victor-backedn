const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const serviciosSchema = new Schema({
    servicio_id:{type: String, required: true, max:60},
    nombre_barbero:{type: String, required: true, max:20},
    precio:{type: String, required: true, max:10},
    fecha:{type: String, required: true, max:10},
    descripcion:{type: String, required: true, max:200},
    observaciones:{type: String, required: true, max:100},
    
});

module.exports = mongoose.model("servicios", serviciosSchema);