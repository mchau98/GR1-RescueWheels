import "./index.css";
import React from "react";
import { Input, Select, Card } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalfAlt,
  faDongSign,
} from "@fortawesome/free-solid-svg-icons";
import {
  SearchOutlined,
  EnvironmentOutlined,
  CarOutlined,
  DollarOutlined,
} from "@ant-design/icons";

function Services() {
  const { Option } = Select;
  const { Meta } = Card;

  const services = [
    {
      id: 1,
      name: "Dịch vụ cứu hộ xe máy",
      price: "200.000",
      location: "Đống Đa",
      rating: 4.5,
    },
    {
      id: 2,
      name: "Dịch vụ cứu hộ ô tô",
      price: "500.000",
      location: "Cầu Giấy",
      rating: 3.7,
    },
    {
      id: 2,
      name: "Dịch vụ cứu hộ ô tô",
      price: "500.000",
      location: "Cầu Giấy",
      rating: 4.8,
    },
    {
      id: 2,
      name: "Dịch vụ cứu hộ ô tô",
      price: "500.000",
      location: "Cầu Giấy",
      rating: 3.0,
    },
    {
      id: 2,
      name: "Dịch vụ cứu hộ ô tô",
      price: "500.000",
      location: "Cầu Giấy",
      rating: 3.0,
    },
    {
      id: 2,
      name: "Dịch vụ cứu hộ ô tô",
      price: "500.000",
      location: "Cầu Giấy",
      rating: 3.0,
    },
    {
      id: 2,
      name: "Dịch vụ cứu hộ ô tô",
      price: "500.000",
      location: "Cầu Giấy",
      rating: 3.0,
    },
    {
      id: 2,
      name: "Dịch vụ cứu hộ ô tô",
      price: "500.000",
      location: "Cầu Giấy",
      rating: 3.0,
    },
    {
      id: 2,
      name: "Dịch vụ cứu hộ ô tô",
      price: "500.000",
      location: "Cầu Giấy",
      rating: 3.0,
    },
    {
      id: 2,
      name: "Dịch vụ cứu hộ ô tô",
      price: "500.000",
      location: "Cầu Giấy",
      rating: 3.0,
    },
    {
      id: 2,
      name: "Dịch vụ cứu hộ ô tô",
      price: "500.000",
      location: "Cầu Giấy",
      rating: 3.0,
    },
    {
      id: 2,
      name: "Dịch vụ cứu hộ ô tô",
      price: "500.000",
      location: "Cầu Giấy",
      rating: 3.0,
    },
  ];

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <FontAwesomeIcon key={i} icon={faStar} style={{ color: "#ffc107" }} />
      );
    }

    if (halfStar) {
      stars.push(
        <FontAwesomeIcon
          key={stars.length}
          icon={faStarHalfAlt}
          style={{ color: "#ffc107" }}
        />
      );
    }

    return stars;
  };

  return (
    <div className="service-container">
      <div className="service-filter">
        <div className="service-box">
          <SearchOutlined className="service-icon" />
          <Input placeholder="Tìm kiếm dịch vụ, tổ chức cứu hộ" />
        </div>
        <div className="service-box">
          <EnvironmentOutlined className="service-icon" />
          <Select defaultValue="Địa điểm" className="service-select">
            <Option value="dong-da">Đống Đa</Option>
            <Option value="ba-dinh">Ba Đình</Option>
            <Option value="hai-ba-trung">Hai Bà Trưng</Option>
            <Option value="cau-giay">Cầu Giấy</Option>
            <Option value="long-bien">Long Biên</Option>
            <Option value="hoang-mai">Hoàng Mai</Option>
          </Select>
        </div>
        <div className="service-box">
          <CarOutlined className="service-icon" />
          <Select defaultValue="Loại xe" className="service-select">
            <Option value="xe-may">Xe máy</Option>
            <Option value="xe-dap-dien">Xe đạp điện</Option>
            <Option value="o-to">Ô tô</Option>
            <Option value="xe-tai">Xe tải</Option>
            <Option value="xe-dap">Xe đạp</Option>
          </Select>
        </div>
        <div className="service-box">
          <DollarOutlined className="service-icon" />
          <Select defaultValue="Giá" className="service-select">
            <Option value="< 100000">&lt; 100.000</Option>
            <Option value="100000-500000"> 100.000-500.000</Option>
            <Option value="500000-1000000"> 500.000-1.000.000</Option>
            <Option value=">1000000">&gt; 1.000.000</Option>
          </Select>
        </div>
      </div>
      <div className="service-grid-container">
        {services.map((service) => (
          <Card
            key={service.id}
            hoverable
            className="service-card"
            // cover={<img alt={service.name} src={service.img} />}
          >
            <div className="service-card-body">
              <h4 className="service-card-title">{service.name}</h4>
              <p className="service-card-description">{service.description}</p>
              <p className="service-card-price">
                <FontAwesomeIcon icon={faDongSign} />
                {service.price}
              </p>
              <p className="service-card-location">
                <EnvironmentOutlined className="service-icon" />
                {service.location}
              </p>
              <div className="service-card-rating">
                {renderStars(service.rating)}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
export default Services;
