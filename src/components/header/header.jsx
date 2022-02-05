import React from 'react';
import css from './header.module.css';
import {Link} from 'react-router-dom';

function Header(){
    return(
        <div className={css.header}>
            <Link to="/contacts">Контакты</Link>
            <Link to="/knowledgeBase">База знаний</Link>
            <Link to="/useful">Полезное</Link>
            <Link to="/onlinetest">Онлайн тест</Link>
        </div>
    );
}
 
export default Header;