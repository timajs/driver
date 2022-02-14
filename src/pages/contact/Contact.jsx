import React from 'react';
import css from './Contact.module.css';
import { YMaps, Map, Placemark  } from 'react-yandex-maps';

function Contacts (){

  const mapData = {
    center: [42.8774095, 74.5920424],
    zoom: 15,
  };
  
  const coordinates = [
    [42.8774095, 74.5920424]
  ];

    return(
        <div className={css.contact}>
          <div className={css.commant}>
            <YMaps>
              <div>
                <Map className={css.map} defaultState={mapData}>{coordinates.map(coordinate => <Placemark geometry={coordinate} />)}</Map>
              </div>
            </YMaps>
                <div className={css.right}>
                    <p className={css.title}>Контакты</p>
                    <div className={css.icons}>
                        <img src="/img/call.svg" alt="" />
                        <p className={css.text}>+7 (495) 181-18-20</p>
                    </div>
                    <div className={css.icons}>
                        <img src="/img/whatsapp.svg" alt="" />
                        <p className={css.text}>+7 (495) 181-18-20</p>
                    </div>
                    <div className={css.icons}>
                        <img src="/img/gmail.svg" alt="" />
                        <p className={css.text}>autoschoolKoleso@gmail.com</p>
                    </div>
                    <div className={css.icons}>
                        <img src="/img/geodata.svg" alt="" />
                        <p className={css.text}>Москва, ул. Проспект Андропова д.8</p>
                    </div>
                    <div className={css.icons}>
                        <img src="/img/plan.svg" alt="" />
                        <p className={css.text}>ВТ-СБ: с 11:00 до 19:00 <br /> ПН-ВС: выходной</p>
                    </div>
                </div>
            </div> 
            <div className={css.footer_boxs}>
                <div className={css.footer_box}>
                    <img src="/img/footerLogo.svg" alt="" />  
                    <p className={css.footer_title}>ИНСТРУКТОР <br /> по вождению</p>
                </div> 
                <p className={css.footer_text}>2022, Автошкола “ФОРСАЖ” Политика конфиденциальности</p> 
            </div>  
        </div>
    )
}

export default Contacts;