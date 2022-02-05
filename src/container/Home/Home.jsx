import React from 'react';
import NavBar from './NavBar/NavBar';
import Main from './Main-page/main';
import Footer from './footer-page/footer';
import './Home.css'
const Home = () => {
  return (
    <>
  <div className="main-img">
    <NavBar/>
    <Main/>
  </div>
  <Footer/>
  </>
  );
};

export default Home;
