import React from 'react'
import './ExamPass.css'

const ExamPage = () => {
  return (
    <div className='test-box container'>
         <h1 className='main-text'>Для прохождения экзамена  
Вам необходимо выбрать один билет. 
На прохождение экзамена у Вас 25 минут!</h1>
         <div className='test-blocks'>
             <div className='test-circle'>
                <div className='circle-one'>
                    <div className='test-number'>
                        №1
                    </div>
                    <div className='test-number'>
                        №2
                    </div>
                    <div className='test-number'>
                        №3
                    </div>
                    <div className='test-number'>
                        №4
                    </div>
                    <div className='test-number'>
                        №5
                    </div>
                    <div className='test-number'>
                        №6
                    </div>
                    <div className='test-number'>
                        №7
                    </div>
                    <div className='test-number'>
                        №8
                    </div>
                    <div className='test-number'>
                        №9
                    </div>
                    <div className='test-number'>
                        №10
                    </div>
                    <div className='test-number'>
                        №11
                    </div>
                    <div className='test-number'>
                        №12
                    </div>
                    <div className='test-number'>
                        №13
                    </div>
                </div> 
                <div className='circle-two'>
                    <div className='test-number'>
                        №14
                    </div> 
                    <div className='test-number'>
                        №15
                    </div> 
                    <div className='test-number'>
                        №16
                    </div>  
                    <div className='test-number'>
                        №17
                    </div>  
                    <div className='test-number'>
                        №18
                    </div>  
                    <div className='test-number'>
                        №19
                    </div>  
                    <div className='test-number'>
                        №20
                    </div>  
                    <div className='test-number'>
                        №21
                    </div>  
                    <div className='test-number'>
                        №22
                    </div>  
                    <div className='test-number'>
                        №23
                    </div>  
                    <div className='test-number'>
                        №24
                    </div>  
                    <div className='test-number'>
                        №25
                    </div>    
                </div>
                
             </div>
             <div className='test-center'>
                <div>
                    <h1 className='test-text'>Вопрос №1:</h1>
                    <div className='test-image'/>
                    <div className='question-block'>
                        <p className='question-text'>Разрешен ли обгон на подъеме?</p>
                    </div>
                    <div className='answer-block'>
                    <form>
                        <div className="radio">
                            <div class="radio-item">
                                <input type="radio" id="ritema" name="ritem" value="ropt1" className='inpt'/>
                                <label for="ritema">1. Запрещен</label>
                            </div>

                            <div class="radio-item">
                                <input type="radio" id="ritemb" name="ritem" value="ropt2"/>
                                <label for="ritemb">2. Разрешен</label>
                            </div>
                            <div class="radio-item">
                                <input type="radio" id="ritemd" name="ritem" value="ropt3"/>
                                <label for="ritemd">3. Запрещен только в конце подъема</label>
                            </div>
                        </div>
                    </form>
                    </div>
                </div>
             </div>
             <div className='test-time'>
                <div>
                    <p className='test-time-text'>Время прохождения</p>
                    <img src={require('../../../components/image/timer.png')} className='timer-img' />
                    <p className='test-time-text'>Колличество баллов</p>
                    <button className='result-test'>90</button>
                </div>
             </div>
         </div>
    </div>
  )
}

export default ExamPage