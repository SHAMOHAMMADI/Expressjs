// // const express = require('express')
// // const router = express.Router()



// // router.get('/', (req, res)=>{
// //     res.send("this is a home page")
// // })

// // router.get('*', (req , res)=>{
// //   res.send('not found 404')
// // })

// // module.exports = router


// const express = require("express")
// const router = express.Router()


// router.get('/',(req,res)=>{
//   // res.send('Home Page2')
//   res.render('home')
// })

// router.get('/about',(req,res)=>{
//   res.send('aboutus Page')
// })


// router.get('/gallery',(req,res)=>{
//   res.render('gallery')
//   // res.send('gallery Page')
// })

// router.get('*',(req,res)=>{
//   res.send('Page not foung - 404')
// })




// module.exports = router











//////////////////////////













const aboutRouter = express.Router()



aboutRouter.get("/about",(req,res)=>{
  res.send('about')
  // res.render('about')
})





















