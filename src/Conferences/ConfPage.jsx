import React from "react";
import "./Conferences.css";
import "./ConfPage.css";
import SmallMiddleSection from "../01_Static_Components/SmallMiddleSection/SmallMiddleSection";
import { conferenceList } from "../02_Data/ConferenceData";
import SmallRegistrationBox from "./Register/SmallRegistrationBox";

const ConfPage = ({ match }) => {
  let conf = {};

  for (var key in conferenceList) {
    if (conferenceList.hasOwnProperty(key)) {
      if (conferenceList[key].id === parseInt(match.params.id, 10)) {
        conf = conferenceList[key]; // Assigns conf to upcoming conference
      }
    }
  }
  console.log(conf);

  return (
    <React.Fragment>
      <SmallMiddleSection />
      <div className="Main-Section" style={{ minHeight: "34vh" }}>
        <div className="Outer-Body">
          <div className="UpcomingConf">
            <SmallRegistrationBox reg={conf.registration} />
          </div>
          <div className="Body-Right">
            <div className="Conf-Page-Title">{conf.title}</div>
            <div className="Conf-Page-Org">
              {conf.org} + {conf.info} + {conf.topic}
            </div>
            <div className="Conf-Page-Extra">{conf.extra}</div>
            <div>
              {conf.schedule.map(c => {
                return (
                  <div className="Time-Section" key={c[0]}>
                    <div className="Conf-Split">
                      <div className="Time">{c[0]}</div>
                      <div className="Flex-Col">
                        <div className="Conf-Sec-Title" />
                        {c.map(function(con, index) {
                          if (index > 0) {
                            if (con.title) {
                              return (
                                <div className="Conf-Sec-Title">
                                  {con.title}
                                </div>
                              );
                            } else if (con.speaker) {
                              return (
                                <div className="Conf-Speaker">
                                  {con.speaker}
                                </div>
                              );
                            } else if (con.cred) {
                              return (
                                <div className="Conf-Cred">{con.cred}</div>
                              );
                            } else if (con.bullet) {
                              return (
                                <li className="Conf-Bullet">{con.bullet}</li>
                              );
                            } else if (con.break) {
                              return (
                                <div className="Conf-Break">{con.break}</div>
                              );
                            }
                          }
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ConfPage;
