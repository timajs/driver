import React from 'react';
import './ExamTicket.css'

const ExamTicket = () => {
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
              <button className='ticket-number'>№1</button>
              <button className='ticket-number'>№2</button>
              <button className='ticket-number'>№3</button>
              <button className='ticket-number'>№4</button>
              <button className='ticket-number'>№5</button>
              <button className='ticket-number'>№6</button>
              <button className='ticket-number'>№7</button>
              <button className='ticket-number'>№8</button>
              <button className='ticket-number'>№9</button>
              <button className='ticket-number'>№10</button>
              <button className='ticket-number'>№11</button>
              <button className='ticket-number'>№12</button>
              <button className='ticket-number'>№13</button>
              <button className='ticket-number'>№14</button>
              <button className='ticket-number'>№15</button>
              <button className='ticket-number'>№16</button>
              <button className='ticket-number'>№17</button>
              <button className='ticket-number'>№18</button>
              <button className='ticket-number'>№19</button>
              <button className='ticket-number'>№20</button>
              <button className='ticket-number'>№21</button>
              <button className='ticket-number'>№22</button>
              <button className='ticket-number'>№23</button>
              <button className='ticket-number'>№24</button>
              <button className='ticket-number'>№25</button>
          </div>
          </div>
  </div>
  );
};

export default ExamTicket;
