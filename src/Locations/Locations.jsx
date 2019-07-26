import React from 'react';
import SmallMiddleSection from '../01_Static_Components/SmallMiddleSection/SmallMiddleSection';
import UpcomingConf from '../Conferences/UpcomingConf';
import Portland from './images/World-Trade-Center-Portland.jpg';
import Washington from './images/Washington-State-Convention-Center.jpg';
import './Locations.css';

const Locations = () => {
  return (
    <div>
      <SmallMiddleSection />
      <div className="Main-Section" style={{minHeight: '34vh'}}>
        <div className="Outer-Body">
          <div className="UpcomingConf">
            <UpcomingConf />
          </div>

          <div className="Body-Right">
            <h1>Conference Locations</h1>
            <div className="Location-Section">
              <div className="Location-Block">
                <div className="Location-Info">
                  <strong>World Trade Center Two</strong>
                  <br />
                  25 SW Salmon Street
                  <br />
                  Portland, Oregon 97204
                  <br />
                  <br />
                  Phone: 503-464-8688
                  <br />
                  Website: <a href="www.wtcpd.com">www.wtcpd.com</a>
                  <br />
                  <br />
                </div>
                <div className="Location-Map">
                  <img src={Portland} alt="World Trade Center Portland " />
                </div>
              </div>
              The World Trade Center Portland, located on the Waterfront in
              Downtown Portland, Oregon, is regarded as one of the city’s most
              elegant and spacious venues for events of all sizes. Well known
              for providing a stunning ambiance, elegant backdrop and offering
              the finest combination of breathtaking views, distinctive service,
              and unparalleled cuisine.
              <br /> <br />
              <iframe
                title="World Trade Portland"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.6932459436653!2d-122.67705904817596!3d45.516253378998975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54950a0fa6987e5f%3A0xb169e60a389beaf3!2sWorld+Trade+Center+Portland!5e0!3m2!1sen!2sus!4v1564077776056!5m2!1sen!2sus"
                width="98%"
                height="300px"
                margin="2%"
                style={{border: '0'}}
              />{' '}
              <br /> <br />
            </div>
            <div className="Location-Section">
              <div className="Location-Block">
                <div className="Location-Info">
                  <strong>Washington State Convention Center</strong>
                  <br />
                  800 Convention Place
                  <br />
                  Seattle, Washington 98101-2350
                  <br />
                  <br />
                  Phone: 206-694-5030
                  <br />
                  Website: <a href="www.wscc.com">www.wscc.com</a>
                  <br />
                  <br />
                </div>
                <div className="Location-Map">
                  <img
                    src={Washington}
                    alt="Washington State Convention Center "
                  />
                </div>{' '}
              </div>
              The Washington State Convention Center is located right in the
              heart of downtown Seattle. The Center features on-site parking,
              business services and a variety of eateries - all within easy
              walking distance of the city's best shops, sights, hotels and
              restaurants.
              <br /> <br />
              <iframe
                title="Washington State Convention Center"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d722.7821516921348!2d-122.33225081254342!3d47.61176444480222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54906ab5090f3cc7%3A0x38d32c762126bc69!2sWashington+State+Convention+Center!5e0!3m2!1sen!2sus!4v1564077943762!5m2!1sen!2sus"
                width="98%"
                height="300px"
                margin="2%"
                style={{border: '0'}}
              />{' '}
              <br />
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Locations;
