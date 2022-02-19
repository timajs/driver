import React from 'react'
import GeneralNavBar from '../../components/GeneralNavBar/GeneralNavBar'
import ExamTicket from './ExamTicket/ExamTicket';
import './Exam.css'

const Exam = () =>{
  return (
    <>
    <div className='general-img'>
      <div  className='general-nav-background'>
      <GeneralNavBar/>
      </div>
    </div>
    <div className='ticket-block'>
    <ExamTicket/>
    </div>
    </>
  );
}

export default Exam;