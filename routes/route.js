const express = require("express");
const router = express.Router();
const { getData, sendData, gettask, updatetask, deleteTask } = require("../controllers/task");

router.route("/").get(getData).post(sendData);
router.route("/:id").get(gettask).put(updatetask).delete(deleteTask);

module.exports = router;
