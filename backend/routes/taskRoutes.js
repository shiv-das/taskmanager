const express = require("express");

const router = express.Router();
const {
  fetchTasks,
  fetchTask,
  searchTasks,
  createTask,
  deleteTask,
  editTask,
} = require("../controllers/taskController");

router.get("/", fetchTasks);

router.get("/search/", searchTasks);

router.get("/:id", fetchTask);

router.post("/", createTask);

router.post("/edit/:id", editTask);

router.delete("/:id", deleteTask);

module.exports = router;
