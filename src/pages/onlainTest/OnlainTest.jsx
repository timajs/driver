import React from "react";
import css from "./Onlain.module.css"

export default function OnlainTest(){
    return(
        <div className={css.container}>
            <h2 className={css.title}>Правила дорожного движения (пдд) онлайн тесты </h2>
            <div className={css.box}>
                <img className={css.img} src="/img/onlineTest.svg" alt="" />
                <div>
                    <p className={css.text}>Обращаем Ваше внимание на то, что данные тесты не являются точной копией экзамена­ционных билетов, которые могут Вам попасться при сдаче экзамена в ГИБДД, и служат исключительно для проверки знаний по вопросам ПДД перед сдачей экзамена.</p>
                    <div className={css.boxs}>
                       <p className={css.onlainText}>Начать тест </p>
                       <img className={css.image} src="/img/arrow.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}