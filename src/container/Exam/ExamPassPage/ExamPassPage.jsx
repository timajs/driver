import React from 'react'
import GeneralNavBar from '../../../components/GeneralNavBar/GeneralNavBar'
import ExamPass from '../ExamPass/ExamPass'

const ExamPassPage = () => {
  return (
    <>
    <div className='general-img'>
      <div  className='general-nav-background'>
      <GeneralNavBar/>
      </div>
    </div>
    <div className='center-box'>
      <ExamPass/>
    </div>
    </>
  )
}

export default ExamPassPage