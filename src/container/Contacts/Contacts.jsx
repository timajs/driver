import React from 'react'
import GeneralNavBar from '../../components/GeneralNavBar/GeneralNavBar'
import ContactsBlock from './ContactBlock/ContactBlock'

const Contacts = () => {
  return (
    <>
    <div className='general-img'>
      <div  className='general-nav-background'>
      <GeneralNavBar/>
      </div>
    </div>
    <div>
        <ContactsBlock/>
    </div>
    </>
  )
}

export default Contacts