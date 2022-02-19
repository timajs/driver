import React from 'react'
import GeneralNavBar from '../../components/GeneralNavBar/GeneralNavBar'
import EducationBlock from './EducationBlock/EducationBlock'

const Education = () => {
    
  return (
    <>
    <div className='general-img'>
      <div  className='general-nav-background'>
      <GeneralNavBar/>
      </div>
    </div>
    <div className='center-box'>
      <EducationBlock/>
    </div>
    </>
  );
}

export default Education;