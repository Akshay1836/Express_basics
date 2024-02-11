const mongoose=require('mongoose')

const TaskSchema=new mongoose.Schema({
        name:{
                type:String,
                required:true
        },
        status:{
                type:Boolean,
                required:true,
                // default:false
        }
})
module.exports=mongoose.model('Tasks',TaskSchema);