import "./index.css";
import React from "react";
import { Col, Row } from "antd";
function Footer() {
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
          <Col className="gutter-row" span={6}>
            <div>
              <h5>CỨU HỘ XE MÁY BA ĐÌNH</h5>
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div>col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div>col-6</div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Footer;
