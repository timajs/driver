import React from 'react'
import GeneralNavBar from '../../components/GeneralNavBar/GeneralNavBar'
import PoleznoeBlock from './PoleznoeBlock/PoleznoeBlock'

const Poleznoe = () => {
    
  return (
    <>
    <div className='general-img'>
      <div  className='general-nav-background'>
      <GeneralNavBar/>
      </div>
    </div>
    <div>
      <PoleznoeBlock/>
    </div>
    </>
  );
}

export default Poleznoe;