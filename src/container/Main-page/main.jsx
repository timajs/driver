import React from 'react'
import './main.css'
// import Image from '../container/Image';
function Main() {
    
  return (
    <div className="main-block">
        <div className="container">
        <header className="header">
                <div className="logo-block">
                    {/* <image src="vector.png" alt="" className="img"/> */}
                    <h3 className="logo-name">In Driver</h3>
                    <p className="logo-text">Автошкола</p>
                </div>
                <nav className="navbar">
                    <ul>
                        <li className="nav-link">О нас</li>
                        <li className="nav-link">Он Лайн Тест</li>
                        <li className="nav-link">Экзамен</li>
                        <li className="nav-link">База знаний</li>
                        <li className="nav-link">Полезное</li>
                        <li className="nav-link">Новости</li>
                        <li>Контакты</li>
                    </ul>
                </nav>
                <div className="buttons-block">
                    <button className="avto-btn">Авторизация</button>
                    <button className="search-btn">Поиск</button>
                 </div>
        </header>
        <div className="center-block">
            <h2>Онлайн- и офлайн</h2>
            <h1>ОБУЧЕНИЕ</h1>
            <h2>по государственному стандарту </h2>
            <button className="call-btn">Связаться с нами</button>
        </div>
        </div>
    </div>
  );
}

export default Main;