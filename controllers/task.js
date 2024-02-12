const data = require("../data");
const Tasks = require("../model/maindb");

//Retrieve all tasks (GET)
const getData = async(req, res) => {
  try{
    const result=await Tasks.find({});
    res.status(200).json({success:true,data:result});
  }catch(error){
    res.status(500).json("Internal error");
  }
};

//Create a new task (POST )
const sendData = async (req, res) => {
  try {
    if (req.body.name) {
      const task = await Tasks.create(req.body);
      return res.status(201).json({ success: true, data: task });
    }
    return res.status(404).send("Resouce not found");
  } catch (error) {
    console.log(error);
  }
};
// const sendData = async (req, res) => {
//   try {
//     const {title}=req.body;
//     let size=data.length+1
//     let newid = data.length > 0 ? size : 1;
//     let item = {
//       userid: 2345678,
//       id: newid,
//       title: title,
//     };
//     data.push(item)
//     if (!title) {
//       return res.status(404).send("No resource found");
//     }
//     res.status(201).json({ success: true, data: data });
//   } catch (error) {
//     res.status(500).send("unable to create new task");
//   }
// };

//Retrieve a single task by ID (/tasks/:id)
const gettask = async (req, res) => {
  try {
    const { id:TaskID } = req.params;
    const result=await Tasks.findOne({_id:TaskID});
    if (!result) {
      return res.status(404).send("Resource not found");
    }
    res.status(200).json({ success: true, data: result });
  } catch (error) {
    res.status(500).send("Internal error");
  }
};

//Update a task by ID (/tasks/:id)

const updatetask = async(req, res) => {
 try{
  const { id:TaskID } = req.params;
  const result =await Tasks.findOneAndUpdate({_id:TaskID},req.body,{new:true,runValidators:true});
  if (!result) {
      res.status(404).json("Resource not found...")
    }
    return res.status(201).json({ success: true, data: result });
 }
 catch(error){
  res.status(500).json(error);
 }
}


//delete a task by ID ( /tasks/:id)
const deleteTask = async (req, res) => {
  try {
    const { id:TaskID } = req.params;
    const task =await Tasks.findOneAndDelete({_id:TaskID});
    if (!task) {
      return res.status(404).send("Resource not found");
    }
    
    res.status(200).json({ success: true, data: task });
  } catch (error) {
    res.status(500).send("Internal error");
  }
};

module.exports = { getData, sendData, gettask, updatetask, deleteTask };
