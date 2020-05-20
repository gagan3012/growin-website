import React from 'react';
import './App.css';
import Heading from './Heading'
import SearchBar from './SearchBar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LowerBar from "./LowerBar";
import About from "./Pages/About";


function App() {
  return (
    <Router>
        <div className="App">
      {/*<Heading /><SearchBar />*/}
      <Switch>
        <About/>
      </Switch>
            <LowerBar/>
        </div>
    </Router>

  );
}

export default App;
