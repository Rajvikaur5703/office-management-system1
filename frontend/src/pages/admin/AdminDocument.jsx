import React from "react";
import "../../assets/styles/admin/admindocument.css";

function AdminDocuments() {
  return (
    <div className="main-content">
      <h2 className="page-title">Documents</h2>

      <p>Company documents and files.</p>

      <div className="documents-box">
        <ul>
          <li>Employee Handbook.pdf</li>
          <li>Company Policy.docx</li>
          <li>Project Plan.xlsx</li>
        </ul>
      </div>
    </div>
  );
}

export default AdminDocuments;