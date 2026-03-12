import '../../assets/styles/employee/tasks.css';

function Tasks()
{
    const stats = [
    { title: 'Total Tasks', value: '156', icon: 'fa-users', color: '#3b82f6' },
    { title: 'Pending', value: '100', icon: 'fa-check-circle', color: '#10b981'},
    { title: 'Completed', value: '56', icon: 'fa-briefcase', color: '#f59e0b' }
  ];

  const tasks = [
    { name: 'UI Design', deadline: '12 Mar 2026', priority: 'High', status: 'Pending' },
    {  name: 'Monthly Report', deadline: '15 Marv 2026', priority: 'Medium', status: 'Completed' },
    {  name: 'Meeting Slides', deadline: '18 Mar 2026', priority: 'Low', status: 'In Progress' },
  ];
    return(
        <div className='tasks-page'>
            <div className="stats-grid">
                    {stats.map((stat, index) => (
                <div key={index} className="stat-card">
                    <div className="stat-icon" style={{ background: `${stat.color}15` }}>
                        <i className={`fas ${stat.icon}`} style={{ color: stat.color }}></i>
                    </div>
                    <div className="stat-content">
                        <div>
                            <p className="stat-label">{stat.title}</p>
                            <h3 className="stat-value">{stat.value}</h3>
                        </div>
                        <span className="stat-change positive">{stat.change}</span>
                    </div>
                </div>
                ))}
            </div>

            <div className="task-table">
                <h2>Task List</h2>

                <table>
                    <thead>
                        <tr>
                            <th>Task Name</th>
                            <th>Deadline</th>
                            <th>Priority</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {tasks.map((task, index) => (
                            <tr key={index}>
                                <td>{task.name}</td>
                                <td>{task.deadline}</td>
                                <td>{task.priority}</td>
                                <td>{task.status}</td>
                                <td>
                                    <button className="update-btn">Update</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Tasks;