const express = require('express')
require('dotenv').config()
const db = require('./database/connection')


const bodyparser = require('body-parser')
const morgan = require('morgan')





const CategoryRoute = require ('./routes/categoryRoute') 
const ProductRoute = require('./routes/productRoute')
const UserRoute = require ('./routes/userRoute')

const app = express()
const port = process.env.PORT || 3000

 


//middleware
app.use(bodyparser.json())
app.use(morgan('dev'))
app.use('/image',express.static('public/uploads'))



//routes

app.use('/api',CategoryRoute)
app.use('/api',ProductRoute)
app.use('/api',UserRoute)







// to start server

app.listen(port, ()=>{
    console.log(`server started at ${port}`)
})

