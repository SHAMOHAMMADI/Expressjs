// const express = require('express')
// const homeRouter = require('./routes/home.js')
// const aboutUsRouter = require('./routes/aboutUs.js')
// const userRouter = require('./routes/users.js')
// const app = express()
// const port = 3025


// // app.use('/', homeRouter);
// // app.use('/aboutUs', aboutUsRouter);
// // app.use('/users',userRouter)

// //middleware
// const mylogger = function(req,res,next){
//     req.activeTime = (new Date()).toLocaleTimeString()
//     next()
// }

// app.use(mylogger)

// app.get('/',(req , res)=>{
//     res.send(`Home Page last active ${req.activeTime}`)
// })

// app.get('/test',function(req,res){
//     res.send(`Test Page - last active ${req.activeTime}`)
// })

// app.get('/about',
//     (req,res,next)=>{
//         console.log('middleware')
//         next()
//     },
//     function(req,res){
//     res.send(`About Page - last active${req.activeTime}`)
// })
// app.listen(port , ()=>{
//     console.log(`the server is listening ${port}`)
// })




const express = require('express')
const  app = express()
const port = 3025

const homeRouter = require('./routes/index.js')
const usersRouter = require('./routes/users')




app.set('view engine','pug')
app.set('views','./views')

app.use(express.static('public'))
app.use(express.static('images'))
app.use(express.static('files'))

app.use('/static', express.static('public'))
app.use('/images',express.static('images'))


app.use('/',homeRouter)
app.use('/users',usersRouter)

/////////////////////////middleware//////////////////

// // const myLogger = (req , res , next)=>{
// //   console.log("logged")
// //   next()
// // }

// // app.use(myLogger)

// app.get('/test',(req,res,next)=>{
// console.log("logged")
// req.activeTime = (new Date).toLocaleTimeString()
// req.activeDate = (new Date).toLocaleDateString()
// res.send(`last visit : ${req.activeTime} ${req.activeDate}`)
// next()
// },(req,res,next)=>{
//     console.log('second ')
//     res.send('second')
// })

// app.get('/about',(req,res,next)=>{
//     console.log('third')
//     res.send('third')
// })


app.listen(port , ()=>{
    console.log(`the server is listening in port ${port}`)
})