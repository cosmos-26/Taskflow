const taskService = require("../services/taskService");

async function getTasks(req, res) {
  try {
    const tasks = await taskService.getAllTasks();

    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch tasks",
    });
  }
}

async function createTask(req, res) {
  try {
    const newTask = await taskService.createTask(req.body);

    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({
      message: "Failed to create task",
    });
  }
}
async function updateTask(req, res) {
  try {
    const updatedTask = await taskService.updateTask(
      req.params.id,
      req.body
    );

    if (!updatedTask) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(500).json({
      message: "Failed to update task",
    });
  }
}
async function deleteTask(req, res) {
  try {
    const deleted = await taskService.deleteTask(
      req.params.id
    );

    if (!deleted) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    res.status(200).json({
      message: "Task deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete task",
    });
  }
}
async function toggleTask(req, res) {
  try {
    const task = await taskService.toggleTask(
      req.params.id
    );

    if (!task) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({
      message: "Failed to toggle task",
    });
  }
}

module.exports = {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
  toggleTask,
};