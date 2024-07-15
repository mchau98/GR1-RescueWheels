import "./index.css";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
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
  const navigate = useNavigate();

  // Initial state for services
  const [services, setServices] = useState([
    {
      id: 1,
      name: "Dịch vụ cứu hộ khẩn cấp",
      price: "500.000",
      location: "Hai Bà Trưng",
      rating: 5.0,
    },
    {
      id: 2,
      name: "Dịch vụ cứu hộ khẩn cấp",
      price: "1000.000",
      location: "Hoàng Mai",
      rating: 3.0,
    },
    {
      id: 3,
      name: "Dịch vụ cứu hộ khẩn cấp",
      price: "700.000",
      location: "Cầu Giấy",
      rating: 4.5,
    },
    {
      id: 4,
      name: "Dịch vụ cứu hộ khẩn cấp",
      price: "500.000",
      location: "Hà Đông",
      rating: 2.0,
    },
    {
      id: 5,
      name: "Rửa xe",
      price: "50.000",
      location: "Đống Đa",
      rating: 4.5,
    },
    {
      id: 6,
      name: "Rửa xe",
      price: "100.000",
      location: "Cầu Giấy",
      rating: 3.7,
    },
    {
      id: 7,
      name: "Thay dầu xe máy",
      price: "150.000",
      location: "Long Biên",
      rating: 4.8,
    },
    {
      id: 8,
      name: "Bảo dưỡng xe tay ga",
      price: "500.000",
      location: "Cầu Giấy",
      rating: 4.5,
    },
    {
      id: 9,
      name: "Bảo dưỡng ô tô",
      price: "1500.000",
      location: "Cầu Giấy",
      rating: 5.0,
    },
    {
      id: 10,
      name: "Vệ sinh và kiểm tra",
      price: "300.000",
      location: "Đống Đa",
      rating: 3.5,
    },
    {
      id: 11,
      name: "Kiểm tra vít ốc toàn bộ",
      price: "200.000",
      location: "Hà Đông",
      rating: 3.0,
    },
    {
      id: 12,
      name: "Súc rửa bình xăng",
      price: "120.000",
      location: "Hai Bà Trưng",
      rating: 4.5,
    },
  ]);

  // State for filters and search
  const [locationFilter, setLocationFilter] = useState("all");
  const [priceFilter, setPriceFilter] = useState("all");
  const [searchText, setSearchText] = useState("");

  // Function to render star icons based on rating
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

  // Filtered services based on current filters and search text
  const filteredServices = services.filter((service) => {
    // Filter by location
    if (locationFilter !== "all" && service.location !== locationFilter) {
      return false;
    }

    // Filter by price range
    if (priceFilter !== "all") {
      const [minPrice, maxPrice] = priceFilter.split("-").map(Number);
      const servicePrice = parseInt(service.price.replace(".", ""), 10);

      if (servicePrice < minPrice || servicePrice > maxPrice) {
        return false;
      }
    }

    // Filter by search text (name)
    if (
      searchText &&
      !service.name.toLowerCase().includes(searchText.toLowerCase())
    ) {
      return false;
    }

    return true;
  });

  const handleServiceClick = (service) => {
    navigate(`/service/${service.id}`, { state: { service } });
  };

  return (
    <div className="service-container">
      {/* Filter section */}
      <div className="service-filter">
        <div className="service-box">
          <SearchOutlined className="service-icon" />
          <Input
            placeholder="Tìm kiếm dịch vụ"
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
        <div className="service-box">
          <EnvironmentOutlined className="service-icon" />
          <Select
            defaultValue="all"
            className="service-select"
            onChange={(value) => setLocationFilter(value)}
          >
            <Option value="all">Tất cả địa điểm</Option>
            <Option value="Đống Đa">Đống Đa</Option>
            <Option value="Ba Đình">Ba Đình</Option>
            <Option value="Hai Bà Trưng">Hai Bà Trưng</Option>
            <Option value="Cầu Giấy">Cầu Giấy</Option>
            <Option value="Long Biên">Long Biên</Option>
            <Option value="Hoàng Mai">Hoàng Mai</Option>
            <Option value="Hà Đông">Hà Đông</Option>
          </Select>
        </div>
        <div className="service-box">
          <CarOutlined className="filter-icon" />
          <Select defaultValue="all" className="service-select">
            <Option value="all">Tất cả loại xe</Option>
            <Option value="xe-may">Xe máy</Option>
            <Option value="xe-dap-dien">Xe đạp điện</Option>
            <Option value="o-to">Ô tô</Option>
            <Option value="xe-tai">Xe tải</Option>
            <Option value="xe-dap">Xe đạp</Option>
          </Select>
        </div>
        <div className="service-box">
          <DollarOutlined className="service-icon" />
          <Select
            defaultValue="all"
            className="service-select"
            onChange={(value) => setPriceFilter(value)}
          >
            <Option value="all">Tất cả giá</Option>
            <Option value="0-100000">Dưới 100.000</Option>
            <Option value="100000-500000">100.000 - 500.000</Option>
            <Option value="500000-1000000">500.000 - 1.000.000</Option>
            <Option value="1000000-999999999">Trên 1.000.000</Option>
          </Select>
        </div>
      </div>

      {/* Service cards section */}
      <div className="service-grid-container">
        {filteredServices.map((service) => (
          <Card
            key={service.id}
            hoverable
            className="service-card"
            onClick={() => handleServiceClick(service)}
          >
            <div className="service-card-body">
              <h4 className="service-card-title">{service.name}</h4>
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
