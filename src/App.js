import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Contact from './pages/contact/Contact';
import Header from './components/header/Header';
import OnlainTest from './pages/onlainTest/OnlainTest';
import PersonalArea from './pages/persolaArea/PersonalArea';
import MyDate from './pages/myDate/MyDate';
import Main from './pages/main/Main';
import AboutUs from './pages/aboutUs/AboutUs';


function App() {
 
  return (
    <div className="App">
      <Router>
      <Header/>
      <div>
        <Switch>
        <Route path="/date">
            <MyDate/>
          </Route>
        <Route path="/personal">
            <PersonalArea/>
          </Route>
        <Route path="/test">
            <OnlainTest/>
          </Route>
          <Route path="/about">
            <AboutUs/>
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
          <Route exact path="/">
            <Main/>
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
