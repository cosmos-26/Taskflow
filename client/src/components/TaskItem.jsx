function TaskItem({ task, onDelete, onToggle }) {
  return (
    <div className="task-card">
      <h3
        style={{
          textDecoration: task.completed
            ? "line-through"
            : "none",
        }}
      >
        {task.title}
      </h3>

      <p>{task.description}</p>
        <p>
        Status:
        {task.completed
            ? "  Completed"
            : "  Pending"}
        </p>
      <button
        className="complete-btn"
        onClick={() => onToggle(task.id)}
        >
        {task.completed ? "Undo" : "Complete"}
        </button>

        <button
        className="delete-btn"
        onClick={() => {
            if (window.confirm("Delete this task?")) {
            onDelete(task.id);
            }
        }}
        >
        Delete
        </button>
    </div>
  );
}

export default TaskItem;    