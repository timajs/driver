import MainNavBar from './container/Home/MainNavBar/MainNavBar';
import { Outlet } from 'react-router-dom';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import Contacts from './pages/contacts/contact';
import Header from './components/header/header';
import KnowledgeBase from './pages/knowledgeBase/knowledgeBase';
// import Useful from './pages/useful/useful';
// import OnlineTest from './pages/onlineTest/onlineTest';
// import News from './pages/news/news';
// import UsefulInfo from './pages/usefulInfo/usefulInfo';
// import NewsInfo from './pages/newsInfo/newsInfo';

function App() {
  return (
    <div className="App">
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
