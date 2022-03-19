import React, { Component } from 'react'
import cls from './Poleznoe.module.scss';
import PageHeader from '../../components/PageHeader/PageHeader'
import { dataNews } from '../../database/database'
import { Link } from 'react-router-dom';
// import { format } from 'date-fns'


const Poleznoe = () => {
    return (
        <>
            <PageHeader />
            <div className={cls.useful}>
                <p className={cls.title}>Полезное</p>
                <div className={cls.cards} >
                    {dataNews.map(item => (
                        <div key={item.id} onClick={e => {
                            e.preventDefault()
                            setItemId(item.id)
                        }}>
                            <img className={cls.card} src={item.image} alt="" />
                            <Link to="/poleznoe/poleznoeInfo">
                                <p className={cls.text}>{item.newTitle}</p>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Poleznoe