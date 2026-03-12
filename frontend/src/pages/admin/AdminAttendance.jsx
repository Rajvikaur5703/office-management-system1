import React from "react";
import "../../assets/styles/admin/adminattendance.css";

function AdminAttendance() {
  return (
    <div className="main-content">
      <h2 className="page-title">Attendance</h2>

      <p>Employee attendance records.</p>

      <div className="attendance-table">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1</td>
              <td>John Doe</td>
              <td className="present">Present</td>
            </tr>

            <tr>
              <td>2</td>
              <td>Jane Smith</td>
              <td className="absent">Absent</td>
            </tr>

            <tr>
              <td>3</td>
              <td>Mike Johnson</td>
              <td className="present">Present</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminAttendance;