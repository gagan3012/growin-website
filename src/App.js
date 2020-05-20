import React from 'react';
import './App.css';
import Heading from './Heading'
import SearchBar from './SearchBar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LowerBar from "./LowerBar";
import About from "./Pages/About";
import Home from "./Pages/Home";


function App() {
  return (
    <Router>
        <div className="App">
      {/*<Heading /><SearchBar />*/}
      <Switch>

          <Route path="/home"><Heading /><SearchBar /></Route>
          <Route path="/test-home"><Home/></Route>
          <Route path="/"><About/></Route>
      </Switch>
            <LowerBar/>
        </div>
    </Router>

  );
}

export default App;
