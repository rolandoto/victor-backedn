const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UsuarioShema = new Schema ({
    usuario:{type:String, required: true, max:100},
    pass:{type:String, required:true, max:120},
});

module.exports = mongoose.model("usuarios",UsuarioShema);