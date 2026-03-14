import { useState } from "react";
import "../../assets/styles/admin/admintasks.css";

function AdminTasks() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Design UI", assigned: "John", status: "pending", dueDate: "2024-03-15" },
    { id: 2, title: "Fix Bug", assigned: "Jane", status: "in-progress", dueDate: "2024-03-20" }
  ]);

  const [title, setTitle] = useState("");
  const [assigned, setAssigned] = useState("");
  const [dueDate, setDueDate] = useState("");

  const addTask = (e) => {
    e.preventDefault();

    const newTask = {
      id: tasks.length + 1,
      title,
      assigned,
      status: "pending",
      dueDate
    };

    setTasks([...tasks, newTask]);

    setTitle("");
    setAssigned("");
    setDueDate("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="main-content">

      <h2 className="page-title">Task Management</h2>

      {/* Add Task Form */}
      <form className="task-form" onSubmit={addTask}>
        <input
          type="text"
          placeholder="Task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Assigned to"
          value={assigned}
          onChange={(e) => setAssigned(e.target.value)}
          required
        />

        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          required
        />

        <button type="submit">Add Task</button>
      </form>

      {/* Task Table */}
      <div className="task-table">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Assigned To</th>
              <th>Status</th>
              <th>Due Date</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {tasks.map((task) => (
              <tr key={task.id}>
                <td>{task.title}</td>
                <td>{task.assigned}</td>
                <td>{task.status}</td>
                <td>{task.dueDate}</td>
                <td>
                  <button
                    className="edit-btn"
                    onClick={() => deleteTask(task.id)}
                  >
                    Edit
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() => deleteTask(task.id)}
                  >
                    Delete
                  </button>

                </td>
              </tr> 
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default AdminTasks;