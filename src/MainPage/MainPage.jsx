import React from "react";
import "./MainPage.css";
import UpcomingConf from "../Conferences/UpcomingConf";
import MiddleSection from "../01_Static_Components/MiddleSection/MiddleSection";
// import conferenceList from '../02_Data/ConferenceData';

const MainPage = props => {
  return (
    <React.Fragment>
      <MiddleSection confList={props.confList} />
      <div className="Main-Section" style={{ minHeight: "34vh" }}>
        <div className="Outer-Body">
          <div className="UpcomingConf">
            <UpcomingConf confList={props.confList} setConf={props.setConf} />
          </div>
          <div className="Body-Right">
            The Environmental Law Education Center produces top quality
            education opportunities for environmental professionals. Our
            comprehensive conferences and intensive workshops bring together
            diverse professionals to explore environmental laws, science, public
            policies and complex technical solutions. We focus on the most
            timely and important environmental issues.
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MainPage;
