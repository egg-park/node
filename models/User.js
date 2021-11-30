const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name : {
        type : String,
        maxlength : 50
    },
    email : {
        type : String,
        trim : true,
        unique:1
    },
    password : {
        type : String,
        minlength : 5
    },
    lastname : {
        type : String,
        maxlength : 50
    },
    role : {
        type : Number,
        default : 0
    },
    image : String,
    token : {
        type : String
    },
    tokenExp : {
        type : Number
    }
})

// Model은 Schema를 감싸주는 역할
const User = mongoose.model('User', userSchema)

// 해당 Model을 다른 곳에서도 사용할 수 있도록 exports 해줌
module.exports = {User}