import React from "react";
import "./Conferences.css";
import UpcomingConf from "./UpcomingConf";
import SmallMiddleSection from "../01_Static_Components/SmallMiddleSection/SmallMiddleSection";
// import conferenceList from '../02_Data/ConferenceData';
import { Link } from "react-router-dom";

const Conferences = props => {
  return (
    <React.Fragment>
      <SmallMiddleSection />
      <div className="Main-Section" style={{ minHeight: "34vh" }}>
        <div className="Outer-Body">
          <div className="UpcomingConf">
            <UpcomingConf />
          </div>
          <div className="Body-Right">
            <div>
              <div className="ConfTitle">Upcoming Conferences</div>
              {props.confList.map(conf => {
                return (
                  <div className="Conf-Card" key={conf.date}>
                    <div className="Conf-Card-Title">
                      <Link to={`/Conferences/${conf.id}`}>{conf.title}</Link>
                    </div>
                    <div>{conf.org}</div>
                    <div>{conf.info}</div>
                    <div>{conf.topic}</div>
                    <div>{conf.date}</div>
                    <div>{conf.location}</div>
                    <div>{conf.city}</div>
                  </div>
                );
              })}
            </div>
            <div className="ConfTitle">Past Conferences</div>
            {props.pastConfs.map(conf => {
              return (
                <div className="Conf-Card" key={conf.date}>
                  <div className="Conf-Card-Title">
                    {" "}
                    <Link
                      to={`/Conferences/${conf.id}`}
                      onClick={() => props.setConf}
                    >
                      {conf.title}
                    </Link>
                  </div>
                  <div>{conf.org}</div>
                  <div>{conf.info}</div>
                  <div>{conf.topic}</div>
                  <div>{conf.date}</div>
                  <div>{conf.location}</div>
                  <div>{conf.city}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Conferences;
