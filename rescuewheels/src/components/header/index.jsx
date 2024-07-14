import "./index.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faUserPlus, faBell } from "@fortawesome/free-solid-svg-icons";

function Header(props) {
  const [active, setActive] = useState("");
  const [showSubbar, setShowSubbar] = useState(false); // State quản lý subbar
  const user = localStorage.getItem("username");
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="header-container">
      <div className="header-tab">
        {!user ? (
          <>
            <button className="header-register">
              <Link
                className={`header-link ${
                  active === "register" ? "header-active" : ""
                }`}
                to="/register"
                onClick={() => setActive("register")}
              >
                <FontAwesomeIcon className="header-icon" icon={faUserPlus} />
                Đăng ký
              </Link>
            </button>

            <button className="header-login">
              <Link
                className={`header-link ${
                  active === "login" ? "header-active" : ""
                }`}
                to="/login"
                onClick={() => setActive("login")}
              >
                <FontAwesomeIcon className="header-icon" icon={faUser} />
                Đăng nhập
              </Link>
            </button>
          </>
        ) : (
          <>
            <button className="header-register">
              <FontAwesomeIcon className="header-icon" icon={faBell} />
              Thông báo
            </button>

            <button
              className="header-login"
              onClick={() => setShowSubbar(!showSubbar)}
            >
              <FontAwesomeIcon className="header-icon" icon={faUser} />
              Tài khoản
            </button>
            {showSubbar && (
              <div className="subbar">
                <Link to="/update-info" className="subbar-link">
                  Thông tin cá nhân
                </Link>
                <a
                  href="/"
                  className="subbar-link"
                  onClick={() => {
                    localStorage.removeItem("username");
                  }}
                >
                  Đăng xuất
                </a>
              </div>
            )}
          </>
        )}
      </div>
      <div className="header-call">
        <Link to="/home" onClick={() => setActive("")}>
          <img
            src="/logo.jpg"
            alt="Logo"
            className="header-img"
            style={{ width: "267px", height: "96px" }}
          />
        </Link>
        <a href="tel:0972088534">
          <Button className="header-button" type="primary">
            GỌI CỨU HỘ NGAY
          </Button>
        </a>
      </div>
    </div>
  );
}

export default Header;
