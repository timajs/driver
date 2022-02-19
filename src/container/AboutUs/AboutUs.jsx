import React from 'react'
import GeneralNavBar from '../../components/GeneralNavBar/GeneralNavBar'
import AboutBlock from './AboutUsBlock/AboutBlock';

const AboutUs = () => {
  return (
    <>
    <div className='general-img'>
      <div  className='general-nav-background'>
      <GeneralNavBar/>
      </div>
    </div>
    <div className='center-box'>
      <AboutBlock/>
    </div>
    </>
  );
}

export default AboutUs;