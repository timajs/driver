import React from 'react'
import cls from './pretest.module.scss';
import PageHeader from '../../../components/PageHeader/PageHeader'
import { Link } from "react-router-dom"


const Pretest = () => {
    return (
        <>
            <PageHeader />
            <div className={cls.onlinetest}>
                <p className={cls.title}>Правила дорожного движения (пдд) <br /> онлайн тесты </p>
                <div className={cls.test}>
                    <img className={cls.pdd} src="/images/pdd.svg" alt="" />
                    <div>
                        <p className={cls.text}>Обращаем Ваше внимание на то, что данные тесты не являются точной копией экзамена­ционных билетов, которые могут Вам попасться при сдаче экзамена в ГИБДД, и служат исключительно для проверки знаний по вопросам ПДД перед сдачей экзамена.</p>
                        <Link to="/PassTest">
                            <button className={cls.btn}>Начать тест  &rarr;</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Pretest