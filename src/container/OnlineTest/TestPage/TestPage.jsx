import React from 'react'
import GeneralNavBar from '../../../components/GeneralNavBar/GeneralNavBar'
import TestBlock from '../TestBlock/TestBlock'
const TestPage = () => {
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
  )
}

export default TestPage