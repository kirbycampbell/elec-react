import React from 'react';
import './Conferences.css';
import UpcomingConf from './UpcomingConf';
const Conferences = () => {
  return (
    <div className="Outer-Conference">
      <div className="UpcomingConf">
        <UpcomingConf />
      </div>
      <div className="Conf-Info">
        The Environmental Law Education Center produces top quality education
        opportunities for environmental professionals. Our comprehensive
        conferences and intensive workshops bring together diverse professionals
        to explore environmental laws, science, public policies and complex
        technical solutions. We focus on the most timely and important
        environmental issues.
      </div>
    </div>
  );
};

export default Conferences;
