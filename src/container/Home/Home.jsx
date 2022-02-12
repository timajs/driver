import React from 'react';
import MainNavBar from './MainNavBar/MainNavBar';
import Main from './Main-page/main';
import Footer from './footer-page/footer';
import './Home.css'
const Home = () => {
  return (
    <>
  <div className="main-img">
    <div className='main-background'>
    <MainNavBar/>
    <Main/>
    </div>
  </div>
  <Footer/>
  </>
  );
};

export default Home;
