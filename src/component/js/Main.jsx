import React from "react";
import "../css/header/main.css";
import me from "../../assets/images/me.jpg";

function Main() {
  return (
    <div>
      <div className="button-flex">
        <div>
          <button>Welcome to my porfolio</button>
          <p className="animate">
            I'm a <span></span>
          </p>

          <p>
            I have experience with languages such as Python, Java, and
            JavaScript and a proven ability to quickly pick up new technologies.
            I am highly motivated, detail-oriented, and dedicated to producing
            high-quality work. I am excited to start my career as a software
            engineer and make an impact by delivering innovative solutions for
            real-world problems.
          </p>
        </div>
        <div>
          <img className="me" src={me} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Main;
