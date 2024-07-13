import "./index.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faUserPlus, faBell } from "@fortawesome/free-solid-svg-icons";
function Header(props) {
  const [active, setActive] = useState("");
  const user = localStorage.getItem("username");
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div className="header-container">
      <div class="header-tab">
        {!user ? (
          <>
            <button class="header-register">
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

            <button class="header-login">
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
            <button class="header-register">
              {/* <Link
                to="/activity-list"
                className={`header-link ${
                  active === "activity" ? "header-active" : ""
                }`}
                onClick={() => setActive("activity")}
              > */}
              <FontAwesomeIcon className="header-icon" icon={faBell} />
              Thông báo
              {/* </Link> */}
            </button>

            <button class="header-login">
              <Link
                className={`header-link ${
                  active === "target" ? "header-active" : ""
                }`}
                onClick={() => setActive("target")}
                to="/define-goal"
              >
                <FontAwesomeIcon className="header-icon" icon={faUser} />
                Tài khoản
              </Link>
            </button>
          </>
        )}
      </div>
      <div className="header-call">
        <img
          src="/logo.jpg"
          alt="Logo"
          className="header-img"
          style={{ width: "267px", height: "96px" }}
        />
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
