const mongoose = require('mongoose')


mongoose.connect(process.env.DATABASE,{
    newNewUrlParser:true,
    useUnifiedTopplogy:true
})

.then(() => console.log("Databse connected sucessfully"))
.catch((error) => console.log(error)) 