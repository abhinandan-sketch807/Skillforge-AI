const mongoose = require("mongoose");
const userSchema = new mongoose.Schema ({
    name:{
        type:String,
        require: true 
    },
    email: {
        type:String,
        required: true
    },
    skills:[
        {
            type:String
        }
    ]
});

module.exports = mongoose.model ("User",userSchema);
