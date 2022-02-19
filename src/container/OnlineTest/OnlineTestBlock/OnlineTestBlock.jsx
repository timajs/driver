import React from 'react'
import css from './onlineTest.module.css';
// import { Redirect } from "react-router-dom";
import TestBlock from '../TestBlock/TestBlock'
import { useNavigate } from "react-router-dom";

const OnlineTestBlock = () => {
  let navigate = useNavigate();

//   redirectHandler = () => {
//     return <Redirect to='/testfor' />
// }

// const history = useHistory();

//   const routeChange = () =>{ 
//     let path = `/testfor`; 
//     history.push(path);
//   }
const handleRedirect = () => {
  navigate('./testfor')
}


  return (
    <div className={css.onlinetest}>
            <p className={css.title}>Правила дорожного движения (пдд) <br /> онлайн тесты </p>
            <div className={css.test}>
                <img className={css.pdd} src="/img/pdd.svg" alt="" />
                <div>
                    <p className={css.text}>Обращаем Ваше внимание на то, что данные тесты не являются точной копией экзамена­ционных билетов, которые могут Вам попасться при сдаче экзамена в ГИБДД, и служат исключительно для проверки знаний по вопросам ПДД перед сдачей экзамена.</p>
                    <button className={css.btn} onClick={handleRedirect}>Начать тест  &rarr;</button>
                </div>
            </div>
        </div>
  )
}

export default OnlineTestBlock