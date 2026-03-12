import React from "react";
import Sidebar from "../components/Sidebar";

function Layout({ children, role }) {
  return (
    <>
      <Sidebar role={role} />

      <div className="layout-content">
        {children}
      </div>
    </>
  );
}

export default Layout;