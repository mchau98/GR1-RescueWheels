import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Avatar } from "antd";
import { UserOutlined, MessageOutlined } from "@ant-design/icons";
import "./index.css";

function ServiceDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;

  if (!state || !state.service) {
    navigate("/services");
    return null;
  }

  const { service } = state;

  return (
    <div className="service-detail-container">
      <div className="service-detail-box">
        <img
          src="https://via.placeholder.com/150"
          alt={service.name}
          className="service-detail-img"
        />
        <div className="service-detail-info">
          <h2>{service.name}</h2>
          <p>Giá: {service.price}</p>
          <Button type="primary">Đăng ký sử dụng</Button>
        </div>
      </div>
      <div className="service-detail-box">
        <Avatar size={64} icon={<UserOutlined />} />
        <div className="service-org-info">
          <h3>Tổ chức cứu hộ</h3>
          <Button type="default" icon={<MessageOutlined />}>
            Chat ngay
          </Button>
        </div>
      </div>
      <div className="service-detail-box">
        <h3>Mô tả quy trình chi tiết</h3>
        <p>{service.description}</p>
      </div>
      <div className="service-detail-box">
        <h3>Đánh giá dịch vụ</h3>
        <div className="service-reviews">{/* Hiển thị các đánh giá */}</div>
      </div>
    </div>
  );
}

export default ServiceDetail;
