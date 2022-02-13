import React from 'react';
import css from './useful.module.css';
import {Link} from 'react-router-dom';

function Useful(){
    return(
        <div className={css.useful}>
            <p className={css.title}>Полезное</p>
            <div className={css.cards}>
                <div>
                   <img className={css.card} src="/img/usefulOne.svg" alt="" />
                   <Link to="/info"><p className={css.text}>Сотрудники УОБДД по УВД области предотвратили похищение девушки</p></Link>
                </div>
                <div>
                   <img className={css.card} src="/img/usefulTwo.svg" alt="" />
                   <Link to="/info"><p className={css.text}>Представлены бесплатные онлайн <br /> тесты по правилам дорожного движения</p></Link>
                </div>
                <div>
                   <img className={css.card} src="/img/usefulThree.svg" alt="" />
                   <Link to="/info"><p className={css.text}>Сотрудники УОБДД по УВД области предотвратили похищение девушки</p></Link>
                </div>
            </div>
        </div>
    );
}
 
export default Useful;