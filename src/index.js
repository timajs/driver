import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import AboutUs from './container/AboutUs/AboutUs.jsx'
import OnlineTest from './container/OnlineTest/OnlineTest.jsx'
import Exam from './container/Exam/Exam.jsx'
import Education from './container/Education/Education.jsx'
import Poleznoe from './container/Poleznoe/Poleznoe.jsx'
import News from './container/News/News.jsx'
import Contacts from './container/Contacts/Contacts.jsx'
import Home from './container/Home/Home.jsx'
import TestPage from './container/OnlineTest/TestPage/TestPage.jsx'
import NewsSection from './container/News/NewsSection/NewsSection.jsx'
import PoleznoeSection from './container/Poleznoe/PoleznoeSection/PoleznoeSection.jsx'

ReactDOM.render(
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<Home />}></Route>
  <Route path="/test" element={<OnlineTest/>}></Route>
  <Route path="/test/testfor" element={<TestPage/>}></Route>
  <Route path="/exam" element={<Exam/>}></Route>
  <Route path="/contacts" element={<Contacts/>}></Route>
  <Route path="/news" element={<News/>}></Route>
  <Route path="/news/info-section" element={<NewsSection/>}></Route>
  <Route path="/poleznoe" element={<Poleznoe/>}></Route>
  <Route path="/poleznoe/poleznoe-section" element={<PoleznoeSection/>}></Route>
  <Route path="/aboutUs" element={<AboutUs/>}></Route>
  <Route path="/education" element={<Education/>}></Route>
  <Route path="" element={<App />} >
    <Route path="*" element={<div>NOT FOUND</div>  } />
    </Route>
  </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
