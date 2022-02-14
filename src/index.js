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

ReactDOM.render(
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<Home />}></Route>
  <Route path="/test" element={<OnlineTest/>}></Route>
  <Route path="/exam" element={<Exam/>}></Route>
  <Route path="" element={<App />} >
    <Route path="/aboutUs" element={<AboutUs/>}></Route>
    <Route path="/education" element={<Education/>}></Route>
    <Route path="/poleznoe" element={<Poleznoe/>}></Route>
    <Route path="/news" element={<News/>}></Route>
    <Route path="/contacts" element={<Contacts/>}></Route>
    <Route path="*" element={<div>NOT FOUND</div>  } />
    </Route>
  </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
