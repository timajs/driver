import React from "react";
import css from "./Win.module.css";

export default function Win(){
    return(
        <div>
            <h2 className={css.title}>Вопрос №1:</h2>
            <div className={css.box}>
                <div className={css.cont}>
                    <p className={css.text}>№1</p>
                    <p className={css.text}>№2</p>
                    <p className={css.text}>№3</p>
                    <p className={css.text}>№4</p>
                    <p className={css.text}>№5</p>
                    <p className={css.text}>№6</p>
                    <p className={css.text}>№7</p>
                    <p className={css.text}>№8</p>
                    <p className={css.text}>№10</p>
                    <p className={css.text}>№11</p>
                    <p className={css.text}>№12</p>
                    <p className={css.text}>№13</p>
                </div>
                <div>
                    <img className={css.img} src="/img/win.svg" alt="" />
                    <p className={css.tema}> Кто из водителей нарушает правила?</p>
                    <div className={css.boxs}>
                        <img src="/img/personal.png" alt="" />
                        <p className={css.box_text}>1. Только водитель легкового автомобиля</p>
                    </div>
                    <div className={css.boxs}>
                        <img src="/img/personalGreen.svg" alt="" />
                        <p className={css.box_text}>2. Только водитель трактора</p>
                    </div>
                    <p className={css.test}> Как правильно произвести экстренное торможение на скользкой дороге, если Ваш автомобиль не оборудован антиблокировочной тормозной системой</p>
                    <div className={css.boxs}>
                        <img src="/img/personal.png" alt="" />
                        <p className={css.box_text}>3.  Водители грузового автомобиля и трактора</p>
                    </div>
                </div>
                <div>
                    <p className={css.time}>Время прохождения</p>
                    <img className={css.image} src="/img/watch.svg" alt="" />
                    <p className={css.time}>Колличество баллов</p>
                    <p className={css.number}>90</p>
                </div>
            </div>
            <div className={css.container}>
                <img src="/img/podarok.svg" alt="" />
                <div>
                    <p className={css.podarok_text}>Вы допустили максимально разрешенное количество ошибок!</p>
                    <p className={css.podarok_text}>Поздравляем Вы прошли экзамен!</p>
                    <p className={css.podarok_text}>Ваш результат: 101 Время прохождения: 57 минут</p>
                </div>
                <img src="/img/podarok2.svg" alt="" />
            </div>
        </div>
    );
}