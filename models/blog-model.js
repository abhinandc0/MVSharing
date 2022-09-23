var db = require('../connection/connection');

module.exports ={
    addPost:(post,callback)=>{
        db.get().collection('posts').insertOne(post).then((data)=>{
            console.log(data);
            callback(data)
        });
    },
    getPost:()=>{
        return new Promise(async(resolve,reject)=>{
            let posts =await db.get().collection('posts').find().toArray();
            resolve(posts);
        })
    }
}