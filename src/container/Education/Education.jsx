import React from 'react'
// import GeneralNavBar from '../../components/GeneralNavBar/GeneralNavBar'
import Header from '../../components/header/Header'
import EducationBlock from './EducationBlock/EducationBlock'

const Education = () => {
    
  return (
    <>
    <div className='general-img'>
      <div  className='general-nav-background'>
      <Header/>
      </div>
    </div>
    <div className='center-box'>
      <EducationBlock/>
    </div>
    </>
  );
}

export default Education;