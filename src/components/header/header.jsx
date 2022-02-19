import React from "react";
import css from './header.module.css';
import { Link } from "react-router-dom";
import BurgerMenu from "../burgerMenu/burgerMenu";

export default function Header() {
    return (
        <div className={css.container}>
            <img className={css.img} src="/img/car.svg" alt="" />
            <img className={css.bunner} src="/img/banner.svg" alt="" />
            <div className={css.burger}>
                <Link to="/">
                    <div className={css.box}>
                        <img className={css.logo} src="/img/logo.svg" alt="" />
                        <p className={css.title}>ИНСТРУКТОР <br /> по вождению</p>
                    </div>
                </Link>
                <BurgerMenu/>
                <div className={css.boxs}>
                    <Link to="/about"><p className={css.text}>О нас</p></Link>
                    <p className={css.line}></p>
                    <Link to="/onlinetest"><p className={css.text}>Онлайн тест</p></Link>
                    <p className={css.line}></p>
                    <Link to="/"><p className={css.text}>Экзамен</p></Link>
                    <p className={css.line}></p>
                    <Link to="/knowledgeBase"><p className={css.text}>База знаний</p></Link>
                    <p className={css.line}></p>
                    <Link to="/useful"><p className={css.text}>Полезное</p></Link>
                    <p className={css.line}></p>
                    <Link to="/news"><p className={css.text}>Новости </p></Link>
                    <p className={css.line}></p>
                    <Link to="/contacts"><p className={css.text}>Контакты</p></Link>
                    <button className={css.button}><img className={css.share} src="/img/share.svg" alt="" /> Авторизация</button>
                </div>
            </div>
        </div>
   );
}