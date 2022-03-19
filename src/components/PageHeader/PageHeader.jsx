import React from 'react';
import { Link } from "react-router-dom"
import { MenuItems } from "./MenuItem.js";
import DropDown from '../DropDown/DropDown'
import { useState } from 'react';
import css from './PageHeader.module.css'
import BurgerMenu from "../burgerMenu/burgerMenu";

function PageHeader() {
  const [dropdown, setDropdown] = useState(false)

  return (
    <header className={css.header_block}>
      <div className={css.container}>
        <div className={css.burger}>
          <div className={css.box}>
            <Link to="/">
              <div className={css.logo_block}>
                <h3 className={css.logo_name}>Инструктор</h3>
                <p className={css.logo_text}>по движению</p>
              </div>
            </Link>
            <BurgerMenu />
            <nav className={css.navbar}>
              <ul className={css.nav__menu}>
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
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default PageHeader;
