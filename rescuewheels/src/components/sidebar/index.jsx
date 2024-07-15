import React, { useState } from "react";
import "./index.css";
import { UserOutlined, KeyOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
const items = [
  {
    key: "1",
    icon: <UserOutlined />,
    label: "Tài khoản",
  },
  {
    key: "2",
    icon: <KeyOutlined />,
    label: "Dịch vụ đã dùng",
  },
];

function Sidebar() {
  const navigate = useNavigate();
  const [selectedKey, setSelectedKey] = useState("1");
  const handleItemClick = (key) => {
    const item = items.find((item) => item.key === key);
    setSelectedKey(key);
    switch (key) {
      case "1":
        navigate("/update-info");
        break;
      case "2":
        navigate("/used-services");
        break;
    }
  };
  return (
    <div className="navbar-option-container">
      <div className="navbar-frame">
        {items.map((item) => (
          <div key={item.key}>
            <div
              className={`navbar-item ${
                selectedKey === item.key ? "selected" : ""
              }`}
              onClick={() => handleItemClick(item.key)}
            >
              <div>
                <span className="icon"> {item.icon}</span>
                {item.label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
