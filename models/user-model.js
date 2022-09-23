var db = require('../connection/connection');
var bcrypt = require('bcrypt')

module.exports = {
    doSignup:(userData)=>{
        return new Promise(async (resolve,reject)=>{
            userdata.password = bcrypt.hash(userData.password,12);
            db.get().collection('user').insertOne(userData).then((data)=>{
                resolve(data)
                console.log(data);
            })
        })
        

    }
}