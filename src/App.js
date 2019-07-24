import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import NavBar from './NavBar/navbar';
import TitleBar from './TitleBar/titlebar';
import MiddleSection from './MiddleSection/MiddleSection';
import Conferences from './Conferences/Conferences';
function App() {
  return (
    <div className="App">
      <TitleBar />
      <Router>
        <div>
          <NavBar />
          <MiddleSection />
          <div className="Main-Section">
            <Route path="/" exact component={Conferences} />
            {/* <div>Test 222</div>
            <Route path="/About/" component={Test2} />
            <Route path="/Locations/" component={Test} />
            <Route path="/Contactus/" component={Test} />
            <Route path="/Presentations/" component={Test} />
            <Route path="/Register/" component={Test} /> */}
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
