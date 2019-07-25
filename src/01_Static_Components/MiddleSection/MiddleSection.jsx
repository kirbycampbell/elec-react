import React from "react";
import RockPhoto from "../../00_Public_Files/PNGs/RockPhoto.png";
import "./middleSection.css";
const MiddleSection = props => {
  const conf = props.confList[0]; // Destructure props
  return (
    <div className="Outer-Rock">
      <img className="Rock-Photo" src={RockPhoto} alt="MainPhoto" />
      <div className="Outer-Next-Conf">
        <div className="Next-Conference">Next Conference</div>
        <div className="Next-Conf-Info">
          {conf.org} + {conf.info}
          <br />
          {conf.topic}
        </div>
        <div className="Next-Conf-Info">{conf.extra}</div>
        <div className="Next-Conf-Location">
          {conf.date} - {conf.city}
        </div>
      </div>
    </div>
  );
};

export default MiddleSection;
