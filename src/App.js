import React from 'react';
import {Routes,Route} from "react-router-dom";
import './App.css';
import Main from './pages/main/Main'
import News from './pages/news/News' 
import PreTest from './pages/test/PreTest/PreTest'
import OnlineTest from './pages/test/OnlineTest/OnlineTest';
import Exam from './pages/exam/Exam'
import Contacts from './pages/contacts/Contacts'
import Poleznoe from './pages/poleznoe/Poleznoe'
import Auth from './pages/Auth/Auth'
import EduBase from './pages/eduBase/EduBase'
import AboutUs from './pages/AboutUs/AboutUs'
import GeneralEdu from './pages/eduBase/EduBaseAll/GeneralEdu'
import PoleznoeInfo from './pages/poleznoe/PoleznoeInfo/PoleznoeInfo'
import NewsInfo from './pages/news/NewsInfo/NewsInfo'

function App() {
  return (
    <div>
      <Routes>
        <Route  path="/" element={<Main/>}></Route> 
        <Route path="/news" element={<News/>}></Route>
        <Route path="/news/newsInfo" element={<NewsInfo/>}></Route>
        <Route path="/test" element={<PreTest/>}></Route>
        <Route path="/PassTest" element={<OnlineTest/>}></Route>
        <Route path="/exam" element={<Exam/>}></Route>
        <Route path="/contacts" element={<Contacts/>}></Route>
        <Route path="/poleznoe" element={<Poleznoe/>}></Route>
        <Route path="/poleznoe/poleznoeInfo" element={<PoleznoeInfo/>}></Route>
        <Route path="/auth" element={<Auth/>}></Route>
        <Route path="/education" element={<EduBase/>}></Route>
        <Route path="/generalEducation" element={<GeneralEdu/>}></Route>
        <Route path="/aboutUs" element={<AboutUs/>}></Route>
      </Routes> 
    </div>
  );
}

export default App;
