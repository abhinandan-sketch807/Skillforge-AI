const moongoose = require("mongoose");
const skillSchema = new moongoose.Schema({
    title:String,
    level:String,
    progress:Number
});
module.exports=mongoose.model("skill",skillSchema);