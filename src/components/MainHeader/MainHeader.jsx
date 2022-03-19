import React from 'react';
import { Link } from "react-router-dom"
import { MenuItems } from "./MenuItem.js";
import css from './MainHeader.module.css'
import DropDown from '../DropDown/DropDown'
import { useState } from 'react';


function MainHeader() {
  const [dropdown, setDropdown] = useState(false)

  return (
      <header className={css.container}>
        <div className={css.header}>
          <div className={css.logo_block}>
            <h3 className={css.logo_name}>Инструктор</h3>
            <p className={css.logo_text}>по движению</p>
          </div>
          <nav className={css.navbar}>
            <ul className={css.nav_menu}>
              {MenuItems.map((item, index) => {
                if (item.title === 'База знаний') {
                  return (
                    <li className={css.nav_links} key={index}
                      onMouseEnter={() => setDropdown(true)}
                      onMouseLeave={() => setDropdown(false)}>
                      <Link className={css.page_link} to={item.url}>{item.title}</Link>
                      <>
                        {dropdown && <DropDown />}
                      </>
                    </li>
                  );
                }
                return (
                  <li className={css.nav_links} key={index}>
                    <Link className={css.page_link} to={item.url}>{item.title}</Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className={css.buttons_block}>
            <Link to="/auth">
              <button className={css.avto_btn}>Войти</button>
            </Link>
            <button className={css.search_btn}>Поиск</button>
          </div>
        </div>
      </header>

  );
};

export default MainHeader;
