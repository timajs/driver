import React from 'react'
import PageHeader from '../../components/PageHeader/PageHeader'
import css from './news.module.scss';
import { dataNews } from '../../database/database'
import { useState , useEffect } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom';

const News = () => {
    const [itemId, setItemId] = useState('');
    const [news, setNews] = useState([])
    console.log(itemId)
    useEffect(() => {
        // axios.get('http://68.183.2.130:8000/api/news', {
        //     mode: 'no-cors',
        //     }).then(resp => {
        //     console.log(resp)
        //     setNews(resp.data)
        // })

        fetch('http://68.183.2.130:8000/api/useful', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
              },
            method: 'GET',
            mode: 'no-cors'
        }).then(res => {
            console.log(res)
        })
    })
    
    return (
        <>
            <PageHeader />
            <div className={css.news}>
            <p className={css.title}>Новостная лента нашей школы</p>
            <div className={css.cards}>
            {dataNews.map(item => (
                <div className={css.card}>
                   <img className={css.images} src={item.image} alt="" />
                   <Link to="/news/newsInfo"><p className={css.text}>{item.newTitle}. {item.newTitle}</p></Link>
                </div>
                ))}
            </div>
        </div>
           
        </>
    )
}

export default News


{/* <div key={item.id} onClick={e => {
                            e.preventDefault()
                            setItemId(item.id)
                        }}>
                            <img className={cls.card} src={item.image} alt="" />
                            <p className={cls.text}>{item.newTitle}</p>
                        </div>       
              </div> */}