import React from 'react'
import './main.css'
// import NavBar from '../NavBar/NavBar';
// import { Outlet } from 'react-router-dom';
function Main() {
    
  return (
    <div className="main-block">
        <div className="container"> 
         {/* <NavBar></NavBar>
         <Outlet /> */}
        <div className="center-block">
            <h2>Онлайн- и офлайн</h2>
            <h1>ОБУЧЕНИЕ</h1>
            <h2>
                теории и практики с инстуктором <br />
                со стажем более 30 лет
            </h2>
            <button className="call-btn">Связаться с нами</button>
        </div>
        </div>
    </div>
  );
}

export default Main;