import React from 'react'
import PageHeader from '../../../components/PageHeader/PageHeader'
import css from './GeneralEdu.module.css'

const GeneralEdu = () => {
  return (
    <div>
      <PageHeader />
      <div className={css.base}>
        <p className={css.title}>Общая база знаний для студентов</p>
        <div className={css.desk}>
          <img className={css.autopark} src="/images/edu-car.svg" alt="" />
          <div className={css.texts}>
            <p className={css.newPlan}>НОВЫЙ УЧЕБНЫЙ АВТОПАРК</p>
            <p className={css.text}>Мы предусмотрели разные форматы обучения, чтобы можно было учить <br /> правила там, где удобно: дома на компьютере или в любой точке мира с <br /> телефона в нашем удобном приложении. Если разонравилось ездить в класс, <br /> то можно легко перейти на онлайн-формат.</p>
            <p className={css.secondText}>Если тебе не хватило практики, ты всегда можешь продлить обучение! На <br /> индивидуальных занятиях с инструктором можно забронировать удобное тебе <br /> время, выбирать площадку и отрабатывать нужные тебе навыки.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GeneralEdu