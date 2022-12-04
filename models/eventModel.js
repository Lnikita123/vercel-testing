const mongoose = require('mongoose')


const eventschema = new mongoose.Schema({


   slug:{
    type:String,
    required:true,
   },

   name:{
    type:String,
    required:true,
   },
   
   description:{
    type:String,
    required:true,
   },
   

    start_date:{
        type: String,
        required: true,
    
    },
    end_date:{
        type:String,
        required:true,
    },
   
    published :{
        type: Boolean,
        default: false,

    },
    
}, { timestamps: true});

module.exports = mongoose.model("Event", eventschema)