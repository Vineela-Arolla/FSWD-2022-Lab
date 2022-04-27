let express = require('express')
let app = express()
let mongoose = require('mongoose')
mongoose.connect("mongodb+srv://5e4:5497@cluster0.oeili.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
mongoose.Promise=global.Promise
var db=mongoose.connection
db.on("error",error=>{
  console.log('Problem connection to the database')
});
db.once("open",callback=>{
  console.log('connection established successfully')
});
app.listen(80)