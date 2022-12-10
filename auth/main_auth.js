const jwt = require("jsonwebtoken")

const auth =(req, res, next) => {
        try {
        const token = req.headers.authorization
        const decoded = jwt.verify(token, "__recret__")
        req.usuario = decoded
        next()
        } catch (error){
            res.status(401)
            res.json({code:4, msg:"Usuario no tiene autorizacion para el contenido"})
        }
}

module.exports = auth
