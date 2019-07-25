import React from "react";
import "./Conferences.css";
import BulletLogo from "../00_Public_Files/PNGs/elecLOGO.png";
import { conferenceList } from "../02_Data/ConferenceData";

const UpcomingConf = () => {
  let confList = [];
  let tempObj = {};

  for (var key in conferenceList) {
    if (conferenceList.hasOwnProperty(key)) {
      // Map Through each Conference
      if (Date.parse(conferenceList[key].date) >= Date.now()) {
        tempObj = conferenceList[key]; // Assigns tempObj to upcoming conference
        confList = [...confList, tempObj]; // Adds tembObj to confList Array
        confList.sort(function(a, b) {
          return Date.parse(a.date) - Date.parse(b.date); // Sorts Confs
        });
      }
    }
  }

  return (
    <div>
      <div className="Upcoming-Conf">Upcoming Conferences</div>

      {confList.map(conf => {
        return (
          <div key={conf.title}>
            <div className="Double-Column-Conf">
              <img className="bullet-logo" src={BulletLogo} alt="Small-Logo" />

              <div className="Conf-Detail">
                <div>{conf.title}</div>
                <div>{conf.org}</div>
                <div>{conf.info}</div>
                <div>{conf.topic}</div>
                <div>{conf.date}</div>
                <div>{conf.location}</div>
                <div>{conf.city}</div>
              </div>
            </div>{" "}
          </div>
        );
      })}
    </div>
  );
};

export default UpcomingConf;
