import React from "react";
import css from './aboutAs.module.css';

export default function AboutAs(){
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
                <img className={css.image} src="/img/bigKrug.svg" alt="" />
                <div className={css.left}>
                    <div>
                        <p className={css.tema_car}>Экономия времени</p>
                        <div className={css.box_car}>
                            <img className={css.img_car} src="/img/clock.svg" alt="" />
                            <p className={css.text_car}>Обучение длится <br /> 2,5 месяца категория B <br /> 3,5 месяца категория BC</p>
                        </div>
                    </div>
                    <div>
                        <p className={css.tema_car}>Возможность выбрать <br /> инструктора</p>
                        <div className={css.box_cars}>
                            <img className={css.image_car} src="/img/Frame.svg" alt="" />
                            <p className={css.text_car}>Суммарный опыт <br /> работы более <br /> 10 лет</p>
                        </div>
                    </div>
                    <div>
                        <p className={css.tema_car}>Выгодная цена за <br /> обучение</p>
                        <div className={css.box_car}>
                            <img className={css.image_car} src="/img/man.svg" alt="" />
                            <p className={css.text_car}>Обучение с интсруктором, <br /> выпустившим более <br /> 7 тыс учеников </p>
                        </div>
                    </div>
                </div>
                <div className={css.center}>
                    <img className={css.rule} src="/img/rule.svg" alt="" />
                </div>
                <div className={css.right}>
                    <div>
                        <p className={css.tema_car}>Комфортное расписание лекций</p>
                        <div className={css.box_car}>
                            <p className={css.text_car}>Мы подберем удобное <br /> для вас время</p>
                            <img className={css.img_right} src="/img/calendar.svg" alt="" />
                        </div>
                    </div>
                    <div>
                        <p className={css.tema_car}>Занятие рядом с домом <br /> или работой </p>
                        <div className={css.boxs_cars}>
                            <p className={css.text_right}>Наши площадки рассредоточены по всему городу- Вы будете  тренироваться, где хотите</p>
                            <img className={css.img_car} src="/img/location.svg" alt="" />
                        </div>
                    </div>
                    <div>
                        <p className={css.tema_car}>Множество вариантов <br /> обучения</p>
                        <div className={css.box_car}>
                            <p className={css.text_right}>Возможность заниматься как на специальной обучающей машине, так и на своем автоя</p>
                            <img className={css.img_right} src="/img/raspisanie.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}