const mongoose=require('mongoose')

const TaskSchema=new mongoose.Schema({
        name:{
                type:String,
                required:[true,"Must provide name"],
                trim:true,
                maxlength:[20,"maximum length is 20"],
                minlength:[3,"minimum length is 3"], 
        },
        status:{
                type:Boolean,
                required:false,
                default:false
        }
})
module.exports=mongoose.model('Tasks',TaskSchema);