import React from "react";
import "../css/body/card.css";
import menstral from "../../assets/images/menstral.png";
const Card = () => {
  return (
    <div>
      <div class="card">
        <img class="card-img-top" src={menstral} alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">Menstral Calculator</h5>
          <p class="card-text">
            Menstral calculation app to help you track your next menstral
            period, fertile period, save period, and ovulation date.
          </p>
          <a
            href="https://oreoluwa-menstrualcalculator.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            class="btn"
          >
            CLICK HERE
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
