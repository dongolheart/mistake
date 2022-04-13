const express = require('express')
const { showInfo } = require('../controller/categoryController')
const router = express.Router()
router.get('/',(request,res)=>{
    res.send('welcome to express js niresh')
    
})
router.get('/second',showInfo)

module.exports = router
