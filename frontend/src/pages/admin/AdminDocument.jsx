import React from "react";
import "../../assets/styles/admin/admindocument.css";

function AdminDocuments() {
  return (
    <div className="main-content">
      <h2 className="page-title">Documents</h2>

      <p>Company documents and files.</p>

      <div>
        <div className="quick-access">
        <h2>Quick Access</h2>
        <div className="folder-grid">
          <div className="folder-item">
            <i className="fas fa-folder" style={{ color: '#3498db' }}></i>
            <span>PDF</span>
          </div>
          <div className="folder-item">
            <i className="fas fa-folder" style={{ color: '#3498db' }}></i>
            <span>Excel</span>
          </div>
          <div className="folder-item">
            <i className="fas fa-folder" style={{ color: '#3498db' }}></i>
            <span>DOCX</span>
          </div>
        </div>
      </div>
      </div>

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