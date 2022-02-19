import React from 'react'
import GeneralNavBar from '../../../components/GeneralNavBar/GeneralNavBar'
import NewsInfo from '../NewsInfo/NewsInfo'

const NewsSection = () => {
  return (
    <>
    <div className='general-img'>
      <div  className='general-nav-background'>
      <GeneralNavBar/>
      </div>
    </div>
    <div className='center-box'>
      <NewsInfo/>
    </div>
    </>
  )
}

export default NewsSection