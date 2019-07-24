import React from 'react';
import SmallMiddleSection from '../01_Static_Components/SmallMiddleSection/SmallMiddleSection';
import UpcomingConf from '../Conferences/UpcomingConf';
const About = () => {
  return (
    <div>
      <SmallMiddleSection />
      <div className="Main-Section">
        <div className="Outer-Body">
          <div className="UpcomingConf">
            <UpcomingConf />
          </div>

          <div className="Body-Right">
            <h1>About ELEC</h1>
            The Environmental Law Education Center has produced top quality
            educational programs for environmental professionals in the
            Northwest since 1994. Our conferences and workshops include cutting
            edge discussions on environmental laws, science and public policy.
            <br />
            <br />
            The conference participants generally include a rich mixture of
            environmental professionals including: attorneys, consultants,
            scientists, engineers, and representatives of industry,
            municipalities, government agencies, academia and community
            organizations.
            <br />
            <br />
            Instructors are knowledgeable, highly respected and excellent
            speakers. Participants benefit from the diversity of perspectives
            and timeliness of the topics, and consistently rank our programs as
            the best they have ever attended.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
