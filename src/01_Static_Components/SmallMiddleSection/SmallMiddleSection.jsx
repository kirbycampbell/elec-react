import React from 'react';
import RockPhoto from '../../00_Public_Files/PNGs/RockPhoto.png';
import './SmallMiddleSection.css';
const SmallMiddleSection = () => {
  return (
    <div className="Small-Outer-Rock">
      <img className="Small-Rock-Photo" src={RockPhoto} alt="Small-MainPhoto" />
    </div>
  );
};

export default SmallMiddleSection;
