const express = require('express')
const aboutRouter = express.Router()
const galleryRouter = express.Router()
const contactus = express.Router()
const homeRouter = express.Router()


aboutRouter.get("/about",(req,res)=>{
    // res.send('about')
    res.render('about')
})

galleryRouter.get('/',(req,res)=>{
    res.send("gallery")
})

contactus.get("/contactus",(req,res)=>{
    res.send("contactus")
})


homeRouter.get('/',(req,res)=>{
    res.render("home")
})





module.exports = aboutRouter
module.exports = galleryRouter
module.exports = contactus
module.exports = homeRouter