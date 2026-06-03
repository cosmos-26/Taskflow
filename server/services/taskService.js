const fs = require("fs/promises");
const path = require("path");

const filePath = path.join(__dirname, "../data/tasks.json");

async function getAllTasks() {
  const data = await fs.readFile(filePath, "utf-8");
  return JSON.parse(data);
}

async function createTask(taskData) {
  const tasks = await getAllTasks();

  const newTask = {
    id: Date.now().toString(),
    title: taskData.title,
    description: taskData.description || "",
    dueDate: taskData.dueDate || null,
    completed: false,
    createdAt: new Date().toISOString(),
  };

  tasks.push(newTask);

  await fs.writeFile(
    filePath,
    JSON.stringify(tasks, null, 2)
  );

  return newTask;
}
async function updateTask(id, taskData) {
  const tasks = await getAllTasks();

  const taskIndex = tasks.findIndex(
    task => task.id === id
  );

  if (taskIndex === -1) {
    return null;
  }

  tasks[taskIndex] = {
    ...tasks[taskIndex],
    ...taskData,
  };

  await fs.writeFile(
    filePath,
    JSON.stringify(tasks, null, 2)
  );

  return tasks[taskIndex];
}
async function deleteTask(id) {
  const tasks = await getAllTasks();

  const filteredTasks = tasks.filter(
    task => task.id !== id
  );

  if (tasks.length === filteredTasks.length) {
    return false;
  }

  await fs.writeFile(
    filePath,
    JSON.stringify(filteredTasks, null, 2)
  );

  return true;
}
async function toggleTask(id) {
  const tasks = await getAllTasks();

  const task = tasks.find(
    task => task.id === id
  );

  if (!task) {
    return null;
  }

  task.completed = !task.completed;

  await fs.writeFile(
    filePath,
    JSON.stringify(tasks, null, 2)
  );

  return task;
}
module.exports = {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
  toggleTask,
};