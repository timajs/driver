import React from 'react'
import GeneralNavBar from '../../../components/GeneralNavBar/GeneralNavBar'
import Auth from '../auth'
const AuthBlock = () => {
  return (
    <>
    <div className='general-img'>
      <div  className='general-nav-background'>
      <GeneralNavBar/>
      </div>
    </div>
    <div className='center-box'>
      <Auth/>
    </div>
    </>
  )
}

export default AuthBlock