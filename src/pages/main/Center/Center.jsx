import React from 'react'
import { Link } from "react-router-dom"
import cls from './Center.module.scss'
function Center() {

  return (
    <div className={cls.mainBlock}>
      <div className={cls.container}>
        <div className={cls.centerBlock}>
          <h2>Онлайн- и офлайн</h2>
          <h1>ОБУЧЕНИЕ</h1>
          <h2>
            теории и практики с инстуктором <br />
            со стажем более 30 лет
          </h2>
          <Link to="/contacts">
            <button className={cls.callBtn}>Связаться с нами</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Center;