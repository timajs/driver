import React from 'react';
import { Link } from "react-router-dom"
import { MenuItems } from "./MenuItem.js";
import './MainNavBar.css'

function MainNavBar() {
  return (
  <header className="header container">
  <div className="logo-block">
      <h3 className="logo-name">Инструктор</h3>
      <p className="logo-text">по движению</p>
  </div>
  <nav className="navbar">
      <ul className="nav-menu">
          {MenuItems.map((item, index) => {
            return (
              <li className="nav-link" key={index}>
                <Link  className="page-link" to={item.url}>{item.title}</Link>
              </li>
            );
          })}
      </ul>
  </nav>
  <div className="buttons-block">
      <button className="avto-btn">Авторизация</button>
      <button className="search-btn">Поиск</button>
   </div>
</header>
);
};

export default MainNavBar;
