// requirements
const mongoose = require("mongoose")

const schema = mongoose.Schema

const Note = new schema( {
    name:{ type:String, requred:true },
    user:{ type:String, require:true },
    content:{ type:String, require:true }
},
{ timestamps:true } 
 )

 module.exports = mongoose.model("Note", Note)
 