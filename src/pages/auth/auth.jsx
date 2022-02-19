import React from 'react';
import css from './auth.module.css';

function Auth (){
    return(
        <div className={css.auth}>
            <p className={css.title}>Авторизация</p>
            <div className={css.command__auth}>
                <input className={css.inp} type="text" placeholder="Логин"/>
                <br />
                <input className={css.inp} type="password" placeholder="Пароль"/>
                <br />
                <button className={css.btn}>Cохранить пароль</button>
                <br />
                <button className={css.btn}>Авторизoваться</button>
            </div>
        </div>
    )
}

export default Auth;