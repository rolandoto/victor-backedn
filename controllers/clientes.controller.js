const Cliente = require("../models/clientes.model");
let response ={
    msg: "",
    exito: false
}

exports.create = function(req,res){
    let cliente = new Cliente({
        nombre: req.body.nombre,
        apellido_p: req.body.apellido_p,
        apellido_m: req.body.apellido_m,
        telefono: req.body.telefono,
        email: req.body.email,
        direccion: req.body.direccion,
    }  )

cliente.save(function(err){
    if(err){
        console.error(err),
        response.exito = false,
        response.msg = "Error al guardar cliente"
        res.json(response)
        return;
    }
    
    response.exito = true,
    response.msg = "el cliente fue guardado exitosamente"
    res.json(response)
 })
}
exports.find  = function(req,res){
   
    Cliente.find(function(err, clientes){
        res.json(clientes)
    })
}
exports.findOne  = function(req,res){
    Cliente.findOne({_id: req.params.id},function(err, cliente){
        res.json(cliente)
    })
}



exports.update = function(req,res){
    
    Cliente.findByIdAndUpdate(req.params.id, {$set: req.body}, function(err){
        if(err){
            console.error(err),
            response.exito = false,
            response.msg = "Error al modificar cliente"
            res.json(response)
            retourn;
        }

        response.exito = true,
        response.msg = "El Cliente fue modificado correctamente"
        res.json(response)
    })

}
exports.remove = function(req,res){
    Cliente.findByIdAndRemove({_id: req.params.id}, function(err){
        if(err){
            console.error(err),
            response.exito = false,
            response.msg = "Error al eliminar cliente"
            res.json(response)
            return;     
        }

        response.exito = true,
        response.msg = "El cliente ha sido eliminado correctamente"
        res.json(response)
        
    })


}