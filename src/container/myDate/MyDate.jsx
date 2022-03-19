import React from "react";
import css from "./MyDate.module.css"

export default function MyDate(){
    return(
        <div className={css.box}>
            <p className={css.title}>Мои данные</p>
            <div className={css.container}>
                <p className={css.text}>Имя</p>
                <input className={css.inp} type="text" />
            </div>
            <div className={css.container}>
                <p className={css.text}>Фамилия</p>
                <input className={css.inp} type="text" />
            </div>
            <div className={css.container}>
             <p className={css.text}>Отчество</p>
                <input className={css.inp} type="text" />
            </div>
            <div className={css.container}>
                <p className={css.text}>Адрес</p>
                <input className={css.inp} type="text" />
            </div>
            <div className={css.container}>
                <p className={css.text}>Телефон</p>
                <input className={css.inp} type="text" />
            </div>
            <div className={css.container}>
                <p className={css.text}>Почта</p>
                <input className={css.inp} type="text" />
            </div>
            <button className={css.btn}>Сохранить</button>
        </div>
    );
}