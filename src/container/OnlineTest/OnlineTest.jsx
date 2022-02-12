import React from 'react'
import GeneralNavBar from '../../components/GeneralNavBar/GeneralNavBar'
import TestBlock from './TestBlock/TestBlock'
import'./OnlineTest.css'

const OnlineTest = () =>{
    
  return (
    <>
    <div className='general-img'>
      <div  className='general-nav-background'>
      <GeneralNavBar/>
      </div>
    </div>
    <div className='center-box'>
      <TestBlock/>
    </div>
    </>
  );
}

export default OnlineTest;