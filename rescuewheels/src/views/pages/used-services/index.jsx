import "./index.css";
import React from "react";
import Sidebar from "../../../components/sidebar";

function UsedService() {
  return (
    <div className="used-service-container">
      <Sidebar />
      <div className="used-service-list">
        <div className="used-service-list-name">
          <h4>Cứu hộ xe Ba Đình</h4>
        </div>
      </div>
    </div>
  );
}
export default UsedService;
