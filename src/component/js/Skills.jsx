import React from "react";
import fifteen from "../../assets/images/1.png";
import five from "../../assets/images/5+.png";
import fivehundred from "../../assets/images/500+.png";
import "../css/body/skills.css";

import percent from "../../assets/images/percent.png";
const Skills = () => {
  return (
    <div className="skills">
      <div className="flex4">
        <div>
          <img className="skill" src={fifteen} alt="" />
          <h3>Github</h3>
          <h4>Repositories</h4>
        </div>
        <div>
          <img className="skill" src={fivehundred} alt="" />
          <h3>LinkedIn</h3>
          <h4>Connections</h4>
        </div>
        <div>
          <img className="skill" src={five} alt="" />
          <h4>Projects</h4>
        </div>
      </div>
    </div>
  );
};

export default Skills;
