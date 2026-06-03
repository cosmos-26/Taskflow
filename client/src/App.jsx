import { useEffect, useState } from "react";
import api from "./services/taskApi";
import TaskForm from "./components/TaskForm";
import TaskItem from "./components/TaskItem";
import "./App.css";
function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const completedTasks = tasks.filter(
  task => task.completed
  ).length;
  const filteredTasks = tasks.filter((task) => {
  if (filter === "active") return !task.completed;
  if (filter === "completed") return task.completed;
  return true;
  });
  useEffect(() => {
    fetchTasks();
  }, []);

  async function fetchTasks() {
  try {
    const response = await api.get("/");
    console.log("DATA:", response.data);
    setTasks(response.data);
  } catch (error) {
    console.error("FETCH ERROR:", error);
  }
  }
  async function addTask(taskData) {
  try {
    const response = await api.post("/", taskData);

    setTasks((prevTasks) => [
      response.data,
      ...prevTasks,
    ]);
  } catch (error) {
    console.error("Error creating task:", error);
  }
}
async function deleteTask(id) {
  try {
    await api.delete(`/${id}`);

    setTasks(tasks.filter(task => task.id !== id));
  } catch (error) {
    console.error(error);
  }
}
async function toggleTask(id) {
  try {
    const response = await api.patch(
      `/${id}/toggle`
    );

    setTasks(
      tasks.map((task) =>
        task.id === id ? response.data : task
      )
    );
  } catch (error) {
    console.error(error);
  }
}

  return (
    <div>
     <h1>TaskFlow - {tasks.length}</h1>
     <p>
      Completed: {completedTasks} / {tasks.length}
     </p>
      <TaskForm onAddTask={addTask} />
      <div className="filters">
  <button onClick={() => setFilter("all")}>
    All
  </button>

  <button onClick={() => setFilter("active")}>
    Active
  </button>

  <button onClick={() => setFilter("completed")}>
    Completed
  </button>
  </div>
      {tasks.length === 0 ? (
  <p className="empty-state">
    No tasks yet. Add your first task!
  </p>
) : (
  filteredTasks.map((task) => (
    <TaskItem
      key={task.id}
      task={task}
      onDelete={deleteTask}
      onToggle={toggleTask}
    />
  ))
)}
    </div>
  );
}

export default App;
