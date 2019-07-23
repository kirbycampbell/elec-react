import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import RockPhoto from './RockPhoto.png';
const Test = () => {
  return (
    <div>
      <img src={RockPhoto} alt="MainPhoto" />
    </div>
  );
};

export default Test;
