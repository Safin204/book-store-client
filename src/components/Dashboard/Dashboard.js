/** @format */

import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="py-4 row dashboard">
      <div className="col-lg-4 leftDashboard">
        <Link to={""}>work</Link>
      </div>
      <div className="col-lg-8 righDashboard  ">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
