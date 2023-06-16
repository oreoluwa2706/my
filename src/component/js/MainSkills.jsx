import React from "react";
import "../css/header/mainSkills.css";

const MainSkills = () => {
  return (
    <div>
      <div className="mainskills">
        SKILLS
        <ul>
          Backend Enginering <i className="ri-arrow-drop-down-fill"></i>
          <li>Java</li>
          <li>Python</li>
          <li>NodeJs</li>
        </ul>
        <ul>
          Frontend Enginering
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
        </ul>
        <ul>
          DevOps
          <li>AWS</li>
        </ul>
      </div>
      <div></div>
    </div>
  );
};

export default MainSkills;
