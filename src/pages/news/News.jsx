import React from 'react'
import PageHeader from '../../components/PageHeader/PageHeader'
import css from './news.module.scss';
import { dataNews } from '../../database/database'
import { useState , useEffect } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom';
import cors from 'cors';

const News = () => {
    const [itemId, setItemId] = useState('');
    const [news, setNews] = useState([])
        // const server = express();
        // server.use(cors());
    // console.log(itemId)
    // useEffect(() => {
    //     axios.get('http://188.166.86.75/api/news/', {
    //         }).then(resp => {
    //         console.log(resp)
    //         setNews(resp.data)
    //     })
    //   })

        // fetch('https://restcountries.com/v3.1/all', {
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json',
        //         'Access-Control-Allow-Origin': '*'
        //       },
        //     method: 'GET',
        //     mode: 'no-cors'
        // }).then(res => {
        //     console.log(res)
        // })
    const fetchData = () => {
        return fetch("http://188.166.86.75/test/q/Django/")
              .then((response) => response.json())
              .then((data) => console.log(data));}

              useEffect(() => {
                fetchData();
                }, []);
    
    // async function getUser() {
    //     try {
    //       const response = await fetch('http://188.166.86.75/api/news/', {
    //         method: 'GET',
    //         // mode: 'no-cors',
    //         headers: {
    //           accept: 'application/json',
    //         },
            
    //       });
      
    //       if (!response.ok) {
    //         throw new Error(`Error! status: ${response.status}`);
    //       }
      
    //       const result = await response.json();
    //       return console.log(result);
    //     } catch (err) {
    //       console.log(err);
    //     }
    //   }
      
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