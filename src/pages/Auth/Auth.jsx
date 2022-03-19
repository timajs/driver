import React from 'react';
import css from './Auth.module.scss';
import PageHeader from '../../components/PageHeader/PageHeader'

export default function Auth() {
    return (
        <>
            <PageHeader />
            <div className={css.auth}>
                <p className={css.title}>Авторизация</p>
                <div className={css.container}>
                    <div className={css.command__auth}>
                        <input className={css.inp} type="text" placeholder="Логин" />
                        <br />
                        <input className={css.inp} type="password" placeholder="Пароль" />
                        <br />
                        <button className={css.btn}>Cохранить пароль</button>
                        <br />
                        <button className={css.btn}>Авторизoваться</button>
                    </div>
                    <div className={css.information}>
                        <p>Если вы хотите зарегистрироваться, нужно связаться по следующим контактам:</p>
                        <div className={css.call}>
                            <img className={css.link__img} src="/images/whatsapp.svg" alt="" />
                            <a className={css.link} href="https://www.whatsapp.com/?lang=ru/" target="_blank">+996500706958</a>
                        </div>
                        <div className={css.call}>
                            <img className={css.link__img} src="/images/gmail.png" alt="" />
                            <a className={css.link} href="https://www.google.com/intl/ru/gmail/about/" target="_blank">autoschoolKoleso@gmail.com</a>
                        </div>
                        <div className={css.call}>
                            <img className={css.link__img} src="/images/telegram.png" alt="" />
                            <a className={css.link} href="https://apps.apple.com/ru/app/telegram/id686449807" target="_blank">+996500706958</a>
                        </div>
                        <br />
                    </div>
                </div>
            </div>
        </>
    )
}