import React from 'react'
import GeneralNavBar from '../../../components/GeneralNavBar/GeneralNavBar'
import PoleznoeInfo from '../PoleznoeInfo/PoleznoeInfo'

const PoleznoeSection = () => {
  return (
    <>
    <div className='general-img'>
      <div  className='general-nav-background'>
      <GeneralNavBar/>
      </div>
    </div>
    <div className='center-box'>
      <PoleznoeInfo/>
    </div>
    </>
  )
}

export default PoleznoeSection