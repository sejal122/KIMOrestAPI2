const mongoose = require('mongoose')
const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:false
        },
        username:{
        type:String,
        required:true,
        unique:true
        },
        age:{
        type:Number,
        required:true,
        unique:false
        },
        email:{
        type:String,
        required:true,
        unique:true
        }

})
//created a collection
const zomatoUsers=new mongoose.model('ZomatoUsers',UserSchema)
//const variable-name=new mongoose.model('collection name ',schema name)
module.exports=zomatoUsers;