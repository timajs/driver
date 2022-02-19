import React from 'react';
import './ExamTicket.css'
import { useNavigate } from "react-router-dom";

const ExamTicket = () => {
    let navigate = useNavigate();


    const handleRedirect = () => {
        navigate('./pass')
      }

  return (
  <div>
      <div className='exam-top-block'>
          <div className='rules-block'>
          <h1 className='exam-text'>Экзамен</h1>
          <p className='rules-text'>Для прохождения экзамена</p>
          <p className='rules-text'>Вам необходимо выбрать один билет.</p>
          <p className='rules-text'>На прохождение экзамена у Вас 25 минут</p>
          </div>
          <div className='exam-img'>
              <img src={require('../../../components/image/exam-img.png')} className='timer-img' />
          </div>
          </div>
          <div className='container-box'>
          <div className='ticket-box'>
              <button className='ticket-number' onClick={handleRedirect}>№1</button>
              <button className='ticket-number' onClick={handleRedirect}>№2</button>
              <button className='ticket-number' onClick={handleRedirect}>№3</button>
              <button className='ticket-number' onClick={handleRedirect}>№4</button>
              <button className='ticket-number' onClick={handleRedirect}>№5</button>
              <button className='ticket-number' onClick={handleRedirect}>№6</button>
              <button className='ticket-number' onClick={handleRedirect}>№7</button>
              <button className='ticket-number' onClick={handleRedirect}>№8</button>
              <button className='ticket-number' onClick={handleRedirect}>№9</button>
              <button className='ticket-number' onClick={handleRedirect}>№10</button>
              <button className='ticket-number' onClick={handleRedirect}>№11</button>
              <button className='ticket-number' onClick={handleRedirect}>№12</button>
              <button className='ticket-number' onClick={handleRedirect}>№13</button>
              <button className='ticket-number' onClick={handleRedirect}>№14</button>
              <button className='ticket-number' onClick={handleRedirect}>№15</button>
              <button className='ticket-number' onClick={handleRedirect}>№16</button>
              <button className='ticket-number' onClick={handleRedirect}>№17</button>
              <button className='ticket-number' onClick={handleRedirect}>№18</button>
              <button className='ticket-number' onClick={handleRedirect}>№19</button>
              <button className='ticket-number' onClick={handleRedirect}>№20</button>
              <button className='ticket-number' onClick={handleRedirect}>№21</button>
              <button className='ticket-number' onClick={handleRedirect}>№22</button>
              <button className='ticket-number' onClick={handleRedirect}>№23</button>
              <button className='ticket-number' onClick={handleRedirect}>№24</button>
              <button className='ticket-number' onClick={handleRedirect}>№25</button>
          </div>
          </div>
  </div>
  );
};

export default ExamTicket;
