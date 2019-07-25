import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./01_Static_Components/NavBar/navbar";
import TitleBar from "./01_Static_Components/TitleBar/titlebar";
import Conferences from "./Conferences/Conferences";
import About from "./About/About";
import Footer from "./01_Static_Components/Footer/Footer";
import Locations from "./Locations/Locations";
import MobileNav from "./01_Static_Components/MobileNav/MobileNav";
import MainPage from "./MainPage/MainPage";
import { conferenceList } from "./02_Data/ConferenceData";
import Contact from "./Contact/Contact";
import ConfPage from "./Conferences/ConfPage";
import Presentations from "./Presentations/Presentations";

function App() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [conference, setConference] = useState(null);
  let confList = [];
  let tempObj = {};
  let pastConfs = [];

  for (var key in conferenceList) {
    if (conferenceList.hasOwnProperty(key)) {
      // Map Through each Conference
      if (Date.parse(conferenceList[key].date) >= Date.now()) {
        tempObj = conferenceList[key]; // Assigns tempObj to upcoming conference
        confList = [...confList, tempObj]; // Adds tembObj to confList Array
        confList.sort(function(a, b) {
          return Date.parse(a.date) - Date.parse(b.date); // Sorts Confs
        });
      } else if (Date.parse(conferenceList[key].date) < Date.now()) {
        tempObj = conferenceList[key];
        pastConfs = [...pastConfs, tempObj]; // Adds tembObj to confList Array
        pastConfs.sort(function(a, b) {
          return Date.parse(b.date) - Date.parse(a.date); // Sorts Confs
        });
      }
    }
  }

  const setConf = conf => {
    setConference(conf);
    console.log("Called SetConf");
  };

  return (
    <div className="App">
      <Router>
        <TitleBar setMobileMenu={setMobileMenu} mobileMenu={mobileMenu} />

        <div>
          <NavBar />
          <MobileNav setMobileMenu={setMobileMenu} mobileMenu={mobileMenu} />
          <div>
            <Route
              exact
              path="/"
              render={props => <MainPage confList={confList} />}
            />
            <Route
              exact
              path="/Conferences/"
              render={props => (
                <Conferences
                  pastConfs={pastConfs}
                  confList={confList}
                  setConf={setConf}
                />
              )}
            />
            <Route
              path="/Conferences/:id/"
              component={ConfPage}
              conference={conference}
            />
            <Route path="/About/" component={About} />
            <Route path="/Locations/" component={Locations} />

            <Route path="/Contact/" component={Contact} />
            <Route path="/Presentations/" component={Presentations} />
            {/* 
            <Route path="/Register/" component={Test} /> */}
          </div>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
