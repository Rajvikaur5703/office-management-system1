import { useState } from "react";
import "../../assets/styles/employee/leave.css";

function Leave() {

  const [leaves, setLeaves] = useState([]); //create state variable

  //store form fields
  const [formData, setFormData] = useState({
    type: "",
    from: "",
    to: "",
    description: "",
    appliedDate: ""
  });

  // handle input change :- updates form data when the user type
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const newLeave = {
      ...formData,
      status: "Pending"
    };

    setLeaves([...leaves, newLeave]);

    // clear form
    setFormData({
      type: "",
      from: "",
      to: "",
      description: "",
      appliedDate: ""
    });
  };

  return (
    <div className="leave">

      <div className="leave-section">

        {/* Add Leave Form */}
        <div className="add-leave">
          <div className="card">
            <h3>➕ Add Leave</h3>

            <form className="add-leave-form" onSubmit={handleSubmit}>

              <label>Leave Type</label>
              <input
                type="text"
                name="type"
                value={formData.type}
                onChange={handleChange}
                required
              />

              <label>From</label>
              <input
                type="date"
                name="from"
                value={formData.from}
                onChange={handleChange}
                required
              />

              <label>To</label>
              <input
                type="date"
                name="to"
                value={formData.to}
                onChange={handleChange}
                required
              />

              <label>Description</label>
              <input
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
              />

              <label>Applied Date</label>
              <input
                type="date"
                name="appliedDate"
                value={formData.appliedDate}
                onChange={handleChange}
                required
              />

              <button type="submit" className="btn-add-leave">
                Add Leave
              </button>

            </form>
          </div>
        </div>

        {/* Leave Table */}
        <div className="total-leave">
          <div className="card">
            <h3>Total Leave</h3>

            <table className="leave-table">
              <thead>
                <tr>
                  <th>SNO</th>
                  <th>LEAVE TYPE</th>
                  <th>FROM - TO</th>
                  <th>DESCRIPTION</th>
                  <th>APPLIED DATE</th>
                  <th>STATUS</th>
                </tr>
              </thead>

              <tbody>

                {leaves.map((leave, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{leave.type}</td>
                    <td>{leave.from} - {leave.to}</td>
                    <td>{leave.description}</td>
                    <td>{leave.appliedDate}</td>
                    <td className="blue">{leave.status}</td>
                  </tr>
                ))}

              </tbody>
            </table>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Leave;