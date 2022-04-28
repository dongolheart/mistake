 const { default: mongoose } = require('mongoose')
const mogoose = require('mongoose')

 mongoose.connect(process.env.DATABASE,{
     useNewUrlParser:true,
     useUnifiedTopology:true

 })

 .then (() => console.log("Database connected sucessfully"))
 .catch((error)=>console.log(error))