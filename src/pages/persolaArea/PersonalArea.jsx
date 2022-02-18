import React from "react";
import css from "./PersonalArea.module.css";

export default function PersonalArea(){
    return(
        <div className={css.color}>
            <h2 className={css.title}>Личный Кабинет</h2>
            <div className={css.box}>
                <div>
                    <p className={css.text}>ФИО</p>
                    <p className={css.text}>Мои экзамены/ Результаты</p>
                    <p className={css.text}>Расписание уроков</p>
                    <p className={css.text}>Выход</p>
                </div>
                <div className={css.clock}>
                    <p className={css.personal}>Время прохождения</p>
                    <img className={css.image} src="/img/watch.svg" alt="" />
                    <p className={css.personal}>Колличество баллов</p>
                    <p className={css.number}>90</p>
                    <p className={css.personal} >Колличество ошибок</p>
                    <p className={css.number}>90</p>
                </div>
            </div>
            <h2 className={css.title}>Расписание</h2>
            <div className={css.week_box}>
                <p className={css.week_lesson}>Наименование урока</p>
                <p className={css.week_ls}>Пн</p>
                <p className={css.week}>Вт</p>
                <p className={css.week_ls}>Ср</p>
                <p className={css.week}>Чт</p>
                <p className={css.week_ls}>Пт</p>
                <p className={css.week}>Сб</p>
                <p className={css.week_ls}>Вс</p>
            </div>
            <div className={css.week_box}>
                <p className={css.week_lessons}>Вождение- практика</p>
                <p className={css.weeks_ls}></p>
                <p className={css.weeks}>8.30-11.20</p>
                <p className={css.weeks_ls}>8.30-11.20</p>
                <p className={css.weeks}></p>
                <p className={css.weeks_ls}>8.30-11.20</p>
                <p className={css.weeks}></p>
                <p className={css.weeks_ls}>8.30-11.20</p>
            </div>
            <div className={css.week_box}>
                <p className={css.week_lessons}>Вождение- практика</p>
                <p className={css.weeks_ls}>8.30-11.20</p>
                <p className={css.weeks}>8.30-11.20</p>
                <p className={css.weeks_ls}></p>
                <p className={css.weeks}>8.30-11.20</p>
                <p className={css.weeks_ls}>0</p>
                <p className={css.weeks}>8.30-11.20</p>
                <p className={css.weeks_ls}></p>
            </div>
            <div className={css.week_box}>
                <p className={css.week_lessons}>Вождение- практика</p>
                <p className={css.weeks_ls}>8.30-11.20</p>
                <p className={css.weeks}>8.30-11.20</p>
                <p className={css.weeks_ls}></p>
                <p className={css.weeks}>8.30-11.20</p>
                <p className={css.weeks_ls}>0</p>
                <p className={css.weeks}>8.30-11.20</p>
                <p className={css.weeks_ls}></p>
            </div>
        </div>
    );
}