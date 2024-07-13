import "./index.css";
import { useState } from "react";
import React from "react";
import poster from "../../../assets/poster.jpeg";
import Navbar from "../../../components/navbar";
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
          style={{ width: "1450px", height: "544px" }}
        />
      </div>
    </div>
  );
}
export default Home;
