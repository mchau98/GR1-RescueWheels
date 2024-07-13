import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";
function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <NavLink
            exact
            to="/home"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Trang chủ
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/services"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Dịch vụ
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/reviews"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Đánh giá
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/support"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Hỗ trợ
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
