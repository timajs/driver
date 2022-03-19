import React from "react";
import css from './Header.module.css';
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
                        <img className={css.log} src="/img/log.svg" alt="" />
                    </div>
                </Link>
                <BurgerMenu/>
                <div className={css.boxs}>
                    <Link to="/aboutUs">
                        <p className={css.text}>О нас</p>
                    </Link>
                    <p className={css.line}></p>
                    <Link to="/test">
                        <p className={css.text}>Онлайн тест</p>
                    </Link>
                    <p className={css.line}></p>
                    <Link to="/exam">
                    <p className={css.text}>Экзамен</p>
                    </Link>
                    <p className={css.line}></p>
                    <Link to="/education">
                    <p className={css.text}>База знаний</p>
                    </Link>
                    <p className={css.line}></p>
                    <Link to="/poleznoe">
                    <p className={css.text}>Полезное</p>
                    </Link>
                    <p className={css.line}></p>
                    <Link to="/news">
                    <p className={css.text}>Новости </p>
                    </Link>
                    <p className={css.line}></p>
                    <Link to="/contacts">
                        <p className={css.text}>Контакты</p>
                    </Link>
                    <button className={css.button}><img className={css.share} src="/img/share.svg" alt="" />Войти</button>
                </div>
            </div>
        </div>
   );
}