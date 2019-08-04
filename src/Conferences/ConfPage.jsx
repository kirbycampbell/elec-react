import React from 'react';
import './Conferences.css';
import './ConfPage.css';
import SmallMiddleSection
  from '../01_Static_Components/SmallMiddleSection/SmallMiddleSection';
import {conferenceList} from '../02_Data/ConferenceData';
import SmallRegistrationBox from './Register/SmallRegistrationBox';

const ConfPage = ({match}) => {
  let conf = {};

  for (var key in conferenceList) {
    if (conferenceList.hasOwnProperty (key)) {
      if (conferenceList[key].id === parseInt (match.params.id, 10)) {
        conf = conferenceList[key]; // Assigns conf to upcoming conference
      }
    }
  }
  console.log (conf);

  return (
    <React.Fragment>
      <SmallMiddleSection />
      <div className="Main-Section" style={{minHeight: '34vh'}}>
        <div className="Outer-Body">
          <div className="UpcomingConf">
            <SmallRegistrationBox reg={conf.registration} />
          </div>
          <div className="Body-Right">
            <div className="Conf-Page-Title">{conf.title}</div>
            <div className="Conf-Page-Org">{conf.org}</div>
            <div className="Conf-Page-Extra">{conf.extra}</div>
            <div>
              {conf.schedule.map (c => {
                return (
                  <div className="Time-Section" key={c[0]}>
                    <div className="Conf-Split">
                      <div className="Time">{c[0]}</div>
                      <div className="Flex-Col">
                        {c.map (function (con, index) {
                          if (index > 0 && index % 2 === 1 && con.length > 0) {
                            return (
                              <div className="odd-style" key={con}>{con}</div>
                            );
                          }
                          if (index > 0 && index % 2 === 0 && con.length > 0) {
                            return (
                              <div className="even-style" key={con}>
                                <li>{con}</li>
                              </div>
                            );
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
