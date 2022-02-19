import React from "react";
import css from './aboutUs.module.css';

export default function AboutUs(){
    return(
        <div className={css.container}>
            <p className={css.title}>Раздел О Нас</p>
            <div className={css.boxs}>
                <div className={css.box}>
                    <img className={css.img} src="/img/aboutAs.svg" alt="" />
                    <p className={css.big_krug}></p>
                    <p className={css.krug}></p>
                </div>
                <div>
                    <p className={css.text}><span>История создания</span> Мы подготовили для вас комфортные условия для обучения и разработали несколько курсов с максимально выгодными ценами. Но самое главное — Вы можете научиться водить и получить права всего за 24 400 рублей.</p>
                    <p className={css.text}><span>Наша миссия</span> - В каждый наш тариф включены следующие опции: полный теоретический курс по ПДД, вождение с инструктором (преодоление препятствий на автодроме и езда по городу), ГСМ, топливо, сбор всей необходимой документации для ГИБДД, предоставление автомобилей на экзамен в ГИБДД и сопровождение ученика сотрудниками автошколы. Тарифы различаются только количеством практических занятий.</p>
                </div>
            </div>
            <p className={css.title}>Аргументы в нашу пользу</p>
            <p className={css.tema}>Мы не потребуем дополнительных плат</p>
            <div className={css.boxs_car}>
                <p className={css.box_about}></p>
                <div className={css.left}>
                    <div>
                        <p className={css.left_title}>Экономия времени</p>
                        <div className={css.left_box}>
                            <img className={css.left_img} src="/img/clock.svg" alt="" />
                            <p className={css.left_text}>Обучение длится <br /> 2,5 месяца категория B <br /> 3,5 месяца категория BC</p>
                        </div>
                    </div>
                    <div>
                        <p className={css.left_title}>Возможность выбрать <br /> инструктора</p>
                        <div className={css.left_boxs}>
                            <img className={css.left_img} src="/img/strela.svg" alt="" />
                            <p className={css.left_text}>Суммарный опыт <br /> работы более <br /> 10 лет</p>
                        </div>
                    </div>
                    <div>
                        <p className={css.left_title}>Выгодная цена за <br /> обучение</p>
                        <div className={css.left_box}>
                            <img className={css.left_img} src="/img/man.svg" alt="" />
                            <p className={css.left_text}>Обучение длится <br /> 2,5 месяца категория B <br /> 3,5 месяца категория BC</p>
                        </div>
                    </div>
                </div>
                <div className={css.center}>
                    <img className={css.rule} src="/img/rule.svg" alt="" />
                </div>
                <div className={css.right}>
                    <div>
                        <p className={css.left_title}>Комфортное расписание <br /> лекций</p>
                        <div className={css.left_box}>
                            <p className={css.left_text}>Мы подберем удобное <br /> для вас время</p>
                            <img className={css.left_img} src="/img/calendar.svg" alt="" />
                        </div>
                    </div>
                    <div>
                        <p className={css.left_title}>Занятие рядом с домом <br /> или работой </p>
                        <div className={css.right_box}>
                            <p className={css.left_text}>Наши площадки <br /> рассредоточены по всему <br /> городу- Вы будете тренироваться, где хотите</p>
                            <img className={css.left_img} src="/img/location.svg" alt="" />
                        </div>
                    </div>
                    <div>
                        <p className={css.left_title}>Множество вариантов <br /> обучения</p>
                        <div className={css.left_box}>
                            <p className={css.left_text}>Возможность заниматься <br /> как на специальной обучающей <br /> машине, так и на своем авто</p>
                            <img className={css.left_img} src="/img/raspisanie.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}