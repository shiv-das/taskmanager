const Task = require("../models/taskSchema");
var mongoose = require("mongoose");
const _ = require("lodash");

exports.fetchTasks = async (req, res, next) => {
  console.log(req.query);
  console.log(req.headers);
  const pageNum = req.query.pageNum + 1;
  const itemsPerPage = req.query.itemsPerPage;
  try {
    const tasks = await Task.find()
      .skip((pageNum - 1) * 100)
      .sort({ id: -1 });

    res.send(tasks);
  } catch (error) {
    console.log("Can't fetch Tasks" + error);
  }
};

exports.createTask = async (req, res) => {
  try {
    const { title, description, status, dateOfTask, creator } = req.body;
    const result = await Task.create({
      title: title,
      description: description,
      status: status,
      dateOfTask: dateOfTask,
      creator: creator,
    });
    console.log(result);
    res.status(200).send(result);
  } catch (error) {
    console.log(error);
    res.status(404);
  }
};

exports.editTask = async (req, res) => {
  try {
    //console.log(req.body);

    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    console.log(task);
    res.status(200).send(task);
  } catch (error) {
    console.log(error);
  }
};

exports.deleteTask = async (req, res) => {
  try {
    console.log(req.params);

    const task = await Task.findByIdAndDelete(req.params.id);
    res.status(200).send(task);
  } catch (error) {
    console.log(error);
  }
};

exports.fetchTask = async (req, res) => {
  try {
    console.log(req.params);

    const task = await Task.findById(req.params.id);

    res.status(200).send(task);
  } catch (error) {
    console.log(error);
  }
};

exports.searchTasks = async (req, res, next) => {
  console.log(req.query);
  const { searchByName, filterByDateField } = req.query;

  try {
    if (searchByName && !filterByDateField) {
      const tasks = await Task.find();
      const filteredTask = Object.values(tasks).filter((task) => {
        return task.title.toLowerCase().includes(searchByName.toLowerCase());
      });
      console.log(filteredTask);
      res.send(filteredTask);
    } else if (!searchByName && filterByDateField) {
      var mydate = new Date(filterByDateField);
      console.log(mydate);
      const tasks = await Task.find();
      const filteredTask = Object.values(tasks).filter((task) => {
        return task.dateOfTask.getDate() == mydate.getDate();
      });
      console.log(filteredTask);
      res.send(filteredTask);
    } else if (searchByName && filterByDateField) {
      var mydate = new Date(filterByDateField);
      console.log(mydate);

      const tasks = await Task.find();
      const filteredTask = Object.values(tasks).filter((task) => {
        return (
          tasks.dateOfTask.getDate() == mydate.getDate() &&
          task.title.toLowerCase().includes(searchByName.toLowerCase())
        );
      });
      res.send(filteredTask);
    } else {
      const tasks = await Task.find();
      res.send(tasks);
    }
  } catch (error) {
    res.status(404).send(error);
    console.log(error);
  }
};
