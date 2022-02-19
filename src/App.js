// import './App.css';
// import React from "react";
import MainNavBar from './container/Home/MainNavBar/MainNavBar';
import { Outlet } from 'react-router-dom';
import './App.css';
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
import CommonBase from './pages/commonBase/commonBase';
import Exam from './pages/exam/exam';

// import Contacts from './pages/contacts/contact';
// import Header from './components/header/header';
// import KnowledgeBase from './pages/knowledgeBase/knowledgeBase';
// import Useful from './pages/useful/useful';
// import OnlineTest from './pages/onlineTest/onlineTest';
// import News from './pages/news/news';
// import UsefulInfo from './pages/usefulInfo/usefulInfo';
// import NewsInfo from './pages/newsInfo/newsInfo';

function App() {
 
  return (
    <div className="App">
      {/* <Router>
      <Header/>
      <div>
        <Switch>
        <Route path="/exam">
            <Exam/>
          </Route>
        <Route path="/base">
            <CommonBase/>
          </Route>
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
    </Router> */}
      <MainNavBar/>
      <Outlet />
      {/* <Router>
        <Header/>
        <div>
          <Switch>
            <Route path="/contacts">
              <Contacts/>
            </Route>
            <Route path="/knowledgeBase">
              <KnowledgeBase/>
            </Route>
            <Route path="/onlinetest">
              <OnlineTest/>
            </Route>
            <Route path="/news">
              <News/>
            </Route>
            <Route path="/newsInfo">
              <NewsInfo/>
            </Route>
            <Route path="/useful">
              <Useful/>
            </Route>
            <Route path="/info">
              <UsefulInfo/>
            </Route>
          </Switch>
        </div>
      </Router> */}

    </div>
  );
}

export default App;
