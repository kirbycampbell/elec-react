import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import NavBar from './NavBar/navbar';
import TitleBar from './TitleBar/titlebar';
import Test from './test';
import Test2 from './test2';
function App() {
  return (
    <div className="App">
      <TitleBar />
      <Router>
        <div>
          <NavBar />
          <Route path="/" exact component={Test} />
          <Route path="/about/" component={Test2} />
          <Route path="/users/" component={Test} />
        </div>
      </Router>
    </div>
  );
}

export default App;
