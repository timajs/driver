import React from 'react'
import css from './newsInfo.module.css';
import {Link} from 'react-router-dom';

const NewsInfo = () => {
  return (
    <div className={css.news__info}>
            <p className={css.title}>Новостная лента нашей школы</p>
            <div className={css.container}>
                <div className={css.left}>
                    <img className={css.car__traffic} src="/img/usefulOne.svg" alt="" />
                    <p className={css.car__text}>Сотрудники УОБДД по УВД области предотвратили похищение девушки</p>
                </div>
                <div className={css.right}>
                    <p className={css.text}>Сотрудники УОБДД по УВД области <br /> предотвратили похищение девушки</p>
                    <p className={css.text}>Все наши автомобили и мотоциклы профессионально оборудованы под обучение. Практические занятия проводятся на автомобилях с коробкой-автомат или на механике не старше трех лет. После каждого ученика машину тщательно осматривают и обрабатывают.</p>
                    <p className={css.text}>Обучение навыкам вождения проходит на закрытых и открытых площадках нашей автошколы. Теперь тебе не надо ждать сезона, потому что крытые площадки позволяют обучаться вождению на мотоциклах и мопедах круглогодично.</p>
                </div>
            </div>
        </div>
  )
}

export default NewsInfo