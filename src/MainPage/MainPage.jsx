import React from 'react';
import './MainPage.css';
import UpcomingConf from '../Conferences/UpcomingConf';
import MiddleSection from '../01_Static_Components/MiddleSection/MiddleSection';
import {Slide} from 'react-slideshow-image';

const p = process.env.PUBLIC_URL;
const slideImages = [
  p + '/slide-pics/Air-Quality.jpg',
  p + '/slide-pics/Climate-Change.jpg',
  p + '/slide-pics/Toxics.jpg',
  p + '/slide-pics/Contaminated-Sediment-Dredging.jpg',
  p + '/slide-pics/Environmental-Cleanup.jpg',
  p + '/slide-pics/flower-Green-Chemistry.jpg',
  p + '/slide-pics/source-control-2017.jpg',
  p + '/slide-pics/Water-Quality.jpg',
];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: false,
  arrows: false,
};

const MainPage = props => {
  return (
    <React.Fragment>
      <MiddleSection confList={props.confList} />
      <div className="Main-Section" style={{minHeight: '34vh'}}>
        <div className="Outer-Body">
          <div className="UpcomingConf">
            <UpcomingConf confList={props.confList} setConf={props.setConf} />
          </div>
          <div className="Body-Right">
            <div className="Outer-Slide">
              <div className="slide-container">
                <Slide {...properties}>
                  <div className="each-slide">
                    <img src={slideImages[0]} />
                  </div>
                  <div className="each-slide">
                    <img src={slideImages[1]} />
                  </div>
                  <div className="each-slide">
                    <img src={slideImages[2]} />
                  </div>
                </Slide>
              </div>
            </div>
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
