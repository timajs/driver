import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Contacts from './pages/contacts/contact';
import Header from './components/header/header';
import KnowledgeBase from './pages/knowledgeBase/knowledgeBase';
import Useful from './pages/useful/useful';
import OnlineTest from './pages/onlineTest/onlineTest';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <div>
          <Switch>
            <Route path="/contacts">
              <Contacts/>
            </Route>
            <Route path="/knowledgeBase">
              <KnowledgeBase/>
            </Route>
            <Route path="/useful">
              <Useful/>
            </Route>
            <Route path="/onlinetest">
              <OnlineTest/>
            </Route>
          </Switch>
        </div>
      </Router>

    </div>
  );
}

export default App;
