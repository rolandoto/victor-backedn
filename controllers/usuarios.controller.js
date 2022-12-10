const Usuario = require("../models/usuarios.model");
const crypto = require("crypto")
const jwt = require("jsonwebtoken")
const {response} = require("express")
const bcryptjs = require('bcryptjs')

exports.login = async(req, res=response) =>{

        const  {pass} = req.body

  try {

    const isLogin  = await Usuario.findOne({usuario:req.body.usuario})
    
    if(!isLogin){
        return res.status(401).json({
            ok:false,
            msg:"no estas registado"
        })
    }

    const validPassword = bcryptjs.compareSync(pass,isLogin.pass)

    if(!validPassword){
        return res.status(401).json({
            ok:false,
            msg:"contraeña incorrecta"
        })
    }

    Usuario.findOne({ usuario: req.body.usuario, pass: 12345465}, function(err, usuario){
        let response = {
        token:null
        }

        if(Usuario !== null){
            response.token =jwt.sign({
                id: Usuario._id,
                Usuario: Usuario.usuario
            }, "__recret__",
            { expiresIn: '12h'}
            )
        }
        res.json(response);
    })
    
  } catch (error) {
    res.status(401).json({
        ok:false
    })
  }
}






