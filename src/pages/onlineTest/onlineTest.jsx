import React from 'react';
import css from './onlineTest.module.css';

function OnlineTest(){
    return(
        <div className={css.onlinetest}>
            <p className={css.title}>Правила дорожного движения (пдд) <br /> онлайн тесты </p>
            <div className={css.test}>
                <img className={css.pdd} src="/img/pdd.svg" alt="" />
                <div>
                    <p className={css.text} align="left">Обращаем Ваше внимание на то, что данные тесты не являются точной копией экзамена­ционных билетов, которые могут Вам попасться при сдаче экзамена в ГИБДД, и служат исключительно для проверки знаний по вопросам ПДД перед сдачей экзамена.</p>
                    <button className={css.btn}>Начать тест  &rarr;</button>
                </div>
            </div>
        </div>
    );
}
 
export default OnlineTest;