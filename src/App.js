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
function App() {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <div className="App">
      <Router>
        <TitleBar setMobileMenu={setMobileMenu} mobileMenu={mobileMenu} />

        <div>
          <NavBar />
          <MobileNav setMobileMenu={setMobileMenu} mobileMenu={mobileMenu} />
          <div>
            <Route path="/" exact component={MainPage} />
            <Route path="/Conferences/" exact component={Conferences} />
            <Route path="/About/" component={About} />
            <Route path="/Locations/" component={Locations} />
            {/* <div>Test 222</div>
            <Route path="/Contact/" component={Test} />
            <Route path="/Presentations/" component={Test} />
            <Route path="/Register/" component={Test} /> */}
          </div>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
