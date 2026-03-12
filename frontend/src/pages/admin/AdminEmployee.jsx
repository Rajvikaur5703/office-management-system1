import React, { useState } from "react";
import "../../assets/styles/admin/adminemployee.css";

function AdminEmployee() {
    const [employees, setEmployees] = useState([
        {id: 1, name: "John Doe", email: "john@gmail.com", department:"HR"},
        {id: 2, name: "Jane Smith", email: "jane@gmail.com", department:"IT"},
        {id: 3, name: "Mike Johnson", email: "mike@gmail.com", department:"Finance"}
    ]);

    const [showForm, setShowForm] = useState(false);
    const [newEmployee, setNewEmployee] = useState({
        name:"",
        email:"",
        department:""
    });
    
    //handle input changes - FIXED
    const handleInputChange = (e) => {
        const { name, value} = e.target;
        setNewEmployee({
            ...newEmployee,  // You need the spread operator here
            [name]: value
        });
    };

    //add new employee - FIXED
    const addEmployee = () => {
        //simple validation
        if(!newEmployee.name || !newEmployee.email || !newEmployee.department){
            alert("Please fill all fields");
            return;
        }

        //create new employee with new id - FIXED (was using employees.name instead of newEmployee.name)
        const employeeToAdd = {
            id: employees.length + 1, //simple id generation
            name: newEmployee.name,    // Changed from employees.name to newEmployee.name
            email: newEmployee.email,  // Changed from employees.email to newEmployee.email
            department: newEmployee.department // Changed from employees.department to newEmployee.department
        };

        //add to list - FIXED (was missing spread operator)
        setEmployees([...employees, employeeToAdd]); // Added spread operator

        //clear form and hide it 
        setNewEmployee({name:"", email:"", department:""});
        setShowForm(false);
    };

    // Delete employee
    const deleteEmployee = (id) => {
        if (window.confirm("Are you sure?")) {
            const updatedEmployees = employees.filter(emp => emp.id !== id);
            setEmployees(updatedEmployees);
        }
    };

    return (
        <div className="main-content">
            {/* Header with title and button */}
            <div className="header">
                <h2>Employee List</h2>
                <button className="add-button" onClick={()=>setShowForm(true)}>
                    + Add Employee
                </button>
            </div>

            {/* Add Employee Form - only show when showForm is true */}
            {showForm && (
                <div className="form-container">
                    <h3>Add New Employee</h3>

                    <div className="form-group">
                        <label>Name:</label>
                        <input 
                            type="text"
                            name="name"
                            value={newEmployee.name}
                            onChange={handleInputChange}
                            placeholder="Enter name"
                        />
                    </div>

                    <div className="form-group">
                        <label>Email:</label>
                        <input 
                            type="email"
                            name="email"
                            value={newEmployee.email}
                            onChange={handleInputChange}
                            placeholder="Enter email"
                        />
                    </div>

                    <div className="form-group">
                        <label>Department:</label>
                        <input 
                            type="text"
                            name="department"
                            value={newEmployee.department}
                            onChange={handleInputChange}
                            placeholder="Enter department"
                        />
                    </div>

                    <div className="form-buttons">
                        <button className="save-button" onClick={addEmployee}>Save</button>
                        <button className="cancel-button" onClick={()=> setShowForm(false)}>Cancel</button>
                    </div>
                </div>
            )}

            {/* Employee Table - This was incorrectly placed inside the form condition */}
            {employees.length > 0 ? (
                <table className="employee-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Department</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((emp) => (
                            <tr key={emp.id}>
                                <td>{emp.id}</td>
                                <td>{emp.name}</td>
                                <td>{emp.email}</td>
                                <td>{emp.department}</td>
                                <td>
                                    <button 
                                        className="delete-button"
                                        onClick={() => deleteEmployee(emp.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p className="no-data">No employees found. Add one!</p>
            )}
        </div>
    )
}

export default AdminEmployee;