import "./index.css";
import { useState } from "react";
import React from "react";
import poster from "../../../assets/poster.jpeg";
import Navbar from "../../../components/navbar";
import intro from "../../../assets/intro.jpg";
import { Button } from "antd";
function Home() {
  const [activities, setActivities] = useState([
    {
      id: 0,
      content: "Học thiết kế Web",
    },
  ]);
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-poster">
        <img
          src={poster}
          alt="posters"
          style={{ width: "1440px", height: "544px" }}
        />
      </div>
      <div className="home-introduce">
        <div className="home-intro-img">
          <img
            src={intro}
            alt="OOPS! SOMETHING WAS WRONG"
            style={{ width: "511px", height: "288px" }}
          />
        </div>
        <div className="home-intro-text">
          <h3 id="intro-name">GIỚI THIỆU DỊCH VỤ CỨU HỘ</h3>
          Dịch vụ cứu hộ xe máy là một trong những dịch vụ quan trọng và cần
          thiết để giúp đỡ các tài xế khi gặp sự cố trên đường.Chúng tôi cung
          cấp các giải pháp cứu hộ nhanh chóng và chuyên nghiệp, bao gồm kéo xe,
          sửa chữa tại chỗ, cung cấp nhiên liệu và thay lốp. Với đội ngũ nhân
          viên kỹ thuật chuyên nghiệp, các thiết bị và công nghệ hiện đại, dịch
          vụ cứu hộ xe máy tại Hà Nội đảm bảo sẽ giúp bạn khắc phục sự cố và
          tiếp tục hành trình một cách an toàn và tiện lợi.
          <a href="tel:0972088534" className="call-button">
            <Button className="home-button-call" type="primary">
              GỌI CỨU HỘ NGAY
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Home;
