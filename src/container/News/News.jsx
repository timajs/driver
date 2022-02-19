import React from 'react'
import GeneralNavBar from '../../components/GeneralNavBar/GeneralNavBar'
import NewsBlock from './NewsBlock/NewsBlock'

const News = () =>{
    
  return (
    <>
    <div className='general-img'>
      <div  className='general-nav-background'>
      <GeneralNavBar/>
      </div>
    </div>
    <div>
      <NewsBlock/>
    </div>
    </>
  );
}

export default News;