const {connect} = require("mongoose");

const host = "localhost";
const port = "27017";
const db = "hr";

const dbConnection =() =>{
    
    const db = connect(process.env.URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() =>{
        console.log('connect database mongoDb')
    }).catch(() =>{
        console.log('error no connection')
    })
    return db
}
module.exports ={ dbConnection}

