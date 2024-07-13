import "./index.css";
import React from "react";
import { Col, Row } from "antd";
function Footer() {
  const data = [
    {
      name: "CỨU HỘ XE MÁY BA ĐÌNH",
      address: "10 Nguyễn Thái Học, Ba Đình",
      hotline: "0985648928",
      time: "24/24",
    },
    {
      name: "CỨU HỘ XE MÁY ĐỐNG ĐA",
      address: "201 Xã Đàn, Đống Đa",
      hotline: "0985763720",
      time: "24/24",
    },
    {
      name: "CỨU HỘ XE MÁY CẦU GIẤY",
      address: "110 Nguyễn Khánh Toàn, Cầu Giấy",
      hotline: "0335869862",
      time: "24/24",
    },
  ];
  return (
    <div className="footer-container">
      <div className="footer-name">
        <h2 className="app-footer-name" id="footer-red">
          RESCUEWHEELS
        </h2>
        <h5 id="footer-red">
          Là hệ thống cứu hộ xe. Quy tụ các tổ chức cứu trợ uy tín, thường trực
          làm việc, liên tục được đào tạo kỹ thuật chuyên sâu
        </h5>
      </div>
      <div className="footer-address">
        <Row
          gutter={{
            xs: 8,
            sm: 16,
            md: 24,
            lg: 32,
          }}
        >
          {data.map((item, index) => (
            <Col className="gutter-row" span={6} key={index}>
              <div className="first-name">
                <h4>{item.name}</h4>
              </div>
              <div>
                <p>ĐC: {item.address}</p>
                <p>Hotline: {item.hotline}</p>
                <p>Giờ làm việc: {item.time}</p>
              </div>
            </Col>
          ))}
        </Row>
        <Row
          gutter={{
            xs: 8,
            sm: 16,
            md: 24,
            lg: 32,
          }}
        >
          {data.map((item, index) => (
            <Col className="gutter-row" span={6} key={index}>
              <div className="first-name">
                <h4>{item.name}</h4>
              </div>
              <div>
                <p>ĐC: {item.address}</p>
                <p>Hotline: {item.hotline}</p>
                <p>Giờ làm việc: {item.time}</p>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default Footer;
