import React from 'react'
import './OnlineTest.css'
import { useState, useEffect } from 'react';
import { questions } from '../../../database/database'
import PageHeader from '../../../components/PageHeader/PageHeader'

const OnlineTest = () => {
    const [currenQuestion, setCurrenQuestion] = useState(0)
    const [showScore, setshowScore] = useState(false)
    const [score, setscore] = useState(0)

    const AnswerButtonClick = (e, correct) => {
        e.preventDefault()
        if (correct === true) {
            setscore(score + 1)
        }
        const nextQuestion = currenQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrenQuestion(nextQuestion)
        } else {
            setshowScore(true)
        }
    }
    return (
        <>
            <PageHeader />
            <div className='test-box'>
                <div className='container'>
                    <h1 className='first-text'>Онлайн Тест!</h1>
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
                            {showScore ? (
                                <>
                                    <div>
                                        <h1 className='test-text'>Вопрос №{currenQuestion + 1}/{questions.length}</h1>
                                        <div className='test-image' />
                                        <div className='question-block'>
                                            <p className='question-text'>{questions[currenQuestion].title}</p>
                                        </div>
                                        <div className='answer-block'>
                                            <form>
                                                <div className="radio">
                                                    {questions[currenQuestion].answers.map((answers) => (
                                                        <div class="radio-item">
                                                            <div className='aswr'>
                                                                <button className='bbttnnnn' onClick={(e) => AnswerButtonClick(e, answers.correct)}></button>
                                                                <p className='answer-titl'>{answers.titles}</p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div>
                                        <h1>Поздравляем Вы прошли онлайн тест!</h1>
                                        <br />
                                        <h1> Ваш результат:{score}</h1>
                                    </div>
                                </>
                            ) : (
                                <div>
                                    <h1 className='test-text'>Вопрос №{currenQuestion}/{questions.length}</h1>
                                    <div className='test-image' />
                                    <div className='question-block'>
                                        <p className='question-text'>{questions[currenQuestion].title}</p>
                                    </div>
                                    <div className='answer-block'>
                                        <form>
                                            <div className="radio">
                                                {questions[currenQuestion].answers.map((answers) => (
                                                    <div class="radio-item">
                                                        <div className='aswr'>
                                                            <button className='bbttnnnn' onClick={(e) => AnswerButtonClick(e, answers.correct)}></button>
                                                            <p className='answer-titl'>{answers.titles}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className='test-time'>
                            <div>
                                <p className='test-time-text'>Время прохождения</p>
                                <img src='/images/clock.svg' className='timer-img' />
                                <p className='test-time-text'>Колличество баллов</p>
                                <button className='result-test'>{score}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OnlineTest

{/* {questions.map(item => (
                            (item.answers.map(answerOption => (
                                <div class="radio-item">
                                <input type="radio" id="ritema" name="ritem" value="ropt1" className='inpt'/>
                                <label for="ritema">{answerOption.titles}</label>
                            </div>
                            )))))} */}

{/* <div class="radio-item">
                                   <input type="radio" id="ritem" name="ritem" value="ropt1"/>
                                   <label for="ritem">1. Запрешен</label>
                               </div>
                               <div class="radio-item">
                                   <input type="radio" id="ritemb" name="ritem" value="ropt2"/>
                                   <label for="ritemb">2. Разрешен</label>
                               </div>
                               <div class="radio-item">
                                   <input type="radio" id="ritemd" name="ritem" value="ropt3"/>
                                   <label for="ritemd">3. Запрещен только в конце подъема</label>
                               </div> */}