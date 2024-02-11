const express=require('express');
const app = express();
const data=require('./data')
const dotenv=require('dotenv').config()
const PORT=process.env.PORT || 3001;
const router=require('./routes/route')
const connectDB=require('./Db/connect')

app.use(express.json());
app.get('/',(req,res)=>{
        res.send(data)
})
app.use('/tasks',router)

const start=async()=>{
       try{
        await connectDB(process.env.MONGO_CONNECTION);
        app.listen(PORT,(error)=>{
                if(!error){
                console.log('App running on '+ PORT)
                }
                else{
                        console.log(error);
                }
        })
       }catch(error)
       {
        console.log("error occured:" + error);
       }
}

start();

