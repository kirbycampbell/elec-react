import React from 'react';
import RockPhoto from '../PNGs/RockPhoto.png';
import './middleSection.css';
const MiddleSection = () => {
  return (
    <div className="Outer-Rock">
      <img className="Rock-Photo" src={RockPhoto} alt="MainPhoto" />
      <div className="Outer-Next-Conf">
        <div className="Next-Conference">Next Conference</div>
        <div className="Next-Conf-Info">More info</div>
        <div className="Next-Conf-Info">More info</div>
        <div className="Next-Conf-Location">Seattle, soadf</div>
      </div>
    </div>
  );
};

export default MiddleSection;
