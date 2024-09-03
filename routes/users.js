// // const express = require('express')
// // const router = express.Router()

// // router.get('/register',(req,res)=>{
// //     res.send('register form')
// // })

// // router.get('/:id/:age([0-9]{2})',(req,res)=>{
// //     res.send(`id of user is ${req.params.id}and${req.params.age}`)
// // })

// // router.get('*',(req, res)=>{
// //     res.send('Not found 404')
// // })



// // module.exports = router






// const express = require('express')
// const router = express.Router()

// router.use('/',(req , res)=>{
//     res.send('users Page')
// })






// module.exports = router














/////////////////////

const express = require('express')
const router = express.Router()
// const port = 3233
// const res = require('express/lib/response')
const bodyParser = require('body-parser')



const User = require("../models/users.js")







router.get('/register',(req , res)=>{
    res.render('registerForm')
})

router.post('/registerForm',(req,res)=>{
// console.log(req.body.username)
// console.log(req.body.pass)
// console.log(req.body.email)
const userInfo = req.body ;
if(!userInfo.username || !userInfo.password || !userInfo.email){
    res.send('please fill ali inputs')
 }else{ 
        const newUser = new User({
            username : userInfo.username,
            email : userInfo.email,
            password : userInfo.password

        })
        newUser.save(function(err){
            if(err){
                res.send(err, User)
            }else{
                res.send(`username ${User.username} - email ${User.email} - password ${User.password}`)
            }
        })
    } 
    // res.send("your register was successfully.")
})


module.exports = router



