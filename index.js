const express = require('express')
require('dotenv').config()


const CategoryRoute = require ('./routes/caRoute') 

const port = process.env.PORT || 3000

const app = express()

//routes

app.use(CategoryRoute)







// to start server

app.listen(port, ()=>{
    console.log(`server started at ${port}`)
})

