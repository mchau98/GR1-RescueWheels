import "./index.css";
import { useState } from "react";
import React from "react";
import poster from "../../../assets/poster.jpeg";
function Landing() {
  const [activities, setActivities] = useState([
    {
      id: 0,
      content: "Học thiết kế Web",
    },
  ]);
  return (
    <div className="landing-container">
      <div className="landing-poster">
        <img
          src={poster}
          alt="posters"
          style={{ width: "1440px", height: "544px" }}
        />
      </div>
    </div>
  );
}
export default Landing;
