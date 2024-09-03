const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    username : String,
    email : String , 
    password : String,
    joinDate : {
        type : Date , 
        default : Date.now
    }
})

User = mongoose.model('User',userSchema)

module.exports = User