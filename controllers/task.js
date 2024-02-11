const data = require("../data");
const Task = require("../model/maindb");

//Retrieve all tasks (GET)
const getData = (req, res) => {
  res.status(200).send(data);
};

//Create a new task (POST )
const sendData = async (req, res) => {
  try {
    if (req.body.name) {
      const task = await Task.create(req.body);
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
    const { id } = req.params;
    const result = data.find((data) => data.id == Number(id));
    if (!result) {
      return res.status(404).send("Resource not found");
    }
    res.status(200).json({ success: true, data: result });
  } catch (error) {
    res.status(500).send("Internal error");
  }
};

//Update a task by ID (/tasks/:id)

const updatetask = (req, res) => {
  const { id } = req.params;
  const result = data.find((data) => data.id == id);
  if (result) {
    if (req.body.title) {
      result.title = req.body.title;
    }
    return res.status(201).json({ success: true, data: result });
  }
  res.status(404).send("Resource not found");
};

//delete a task by ID ( /tasks/:id)
const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = data.find((data) => data.id === Number(id));
    if (!task) {
      return res.status(404).send("Resource not found");
    }
    const delete_data = data.filter((data) => data.id !== Number(id));
    res.status(200).json({ success: true, data: delete_data });
  } catch (error) {
    res.status(500).send("Internal error");
  }
};

module.exports = { getData, sendData, gettask, updatetask, deleteTask };
