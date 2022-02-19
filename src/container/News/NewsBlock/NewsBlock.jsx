import React from 'react'
import css from './news.module.css';
import {Link} from 'react-router-dom';

const NewsBlock = () => {

    return(
        <div className={css.news}>
            <p className={css.title}>Новостная лента нашей школы</p>
            <div className={css.cards}>
                <div className={css.card}>
                   <img className={css.images} src="/img/usefulOne.svg" alt="" />
                   <Link to="/news/info-section"><p className={css.text}>Сотрудники УОБДД по УВД области  предотвратили похищение девушки. Сотрудники УОБДД по УВД области предотвратили похищение девушки</p></Link>
                </div>
                <div className={css.card}>
                   <img className={css.images} src="/img/usefulTwo.svg" alt="" />
                   <Link to="/news/info-section"><p className={css.text}>Сотрудники УОБДД по УВД области  предотвратили похищение девушки. Сотрудники УОБДД по УВД области предотвратили похищение девушки</p></Link>
                </div>
                <div className={css.card}>
                   <img className={css.images} src="/img/usefulThree.svg" alt="" />
                   <Link to="/news/info-section"><p className={css.text}>Сотрудники УОБДД по УВД области  предотвратили похищение девушки. Сотрудники УОБДД по УВД области предотвратили похищение девушки</p></Link>
                </div>
            </div>
        </div>
    );
}

export default NewsBlock