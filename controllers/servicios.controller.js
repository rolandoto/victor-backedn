const Servicio = require("../models/servicios.model");
let response ={
    msg: "",
    exito: false
}

exports. create = function(req,res){
    let servicio = new Servicio({
        servicio_id: req.body.servicio_id,
        nombre_barbero: req.body.nombre_barbero,
        precio: req.body.precio,
        fecha: req.body.fecha,
        descripcion: req.body.descripcion,
        observaciones: req.body.observaciones,
    }  )

servicio.save(function(err){
    if(err){
        console.error(err),
        response.exito = false,
        response.msg = "Error al guardar servicio"
        res.json(response)
        return;
    }
    
    response.exito = true,
    response.msg = "el servicio fue guardado exitosamente"
    res.json(response)
 })
}
exports.find  = function(req,res){
    Servicio.find(function(err, servicios){
        res.json(servicios)
    })
}
exports.findOne  = function(req,res){
    Servicio.findOne({_id: req.params.id},function(err, cliente){
        res.json(Servicio)
    })
}

exports.update = function(req,res){
    let servicio = {
        servicio_id: req.body.servicio_id,
        nombre_barbero: req.body.nombre_barbero,
        precio: req.body.precio,
        fecha: req.body.fecha,
        descripcion: req.body.descripcion,
        observaciones: req.body.observaciones,
    }

    Servicio.findByIdAndUpdate(req.params.id, {$set: empleado}, function(err){
        if(err){
            console.error(err),
            response.exito = false,
            response.msg = "Error al modificar servicio"
            res.json(response)
            retourn;
        }

        response.exito = true,
        response.msg = "El servicio fue modificado correctamente"
        res.json(response)
    })

}
exports.remove = function(req,res){
    Servicio.findByIdAndRemove({_id: req.params.id}, function(err){
        if(err){
            console.error(err),
            response.exito = false,
            response.msg = "Error al eliminar servicio"
            res.json(response)
            return;     
        }

        response.exito = true,
        response.msg = "El servicio ha sido eliminado correctamente"
        res.json(response)
        
    })


}