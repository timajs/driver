import { React } from 'react';
import { contact } from '../../database/database';
import css from './Contacts.module.scss';
import PageHeader from '../../components/PageHeader/PageHeader'
import { YMaps, Map, Placemark } from 'react-yandex-maps';


export default function Contacts() {
  const mapData = {
    center: [42.8774095, 74.5920424],
    zoom: 15,
  };

  const coordinates = [
    [42.8774095, 74.5920424]
  ];

  return (
    <>
      <PageHeader />
      <div className={css.contact}>
        <div className={css.commant}>
          <div className={css.maps}>
            <YMaps>
              <div>
                <Map className={css.map} defaultState={mapData}>{coordinates.map(coordinate => <Placemark geometry={coordinate} />)}</Map>
              </div>
            </YMaps>
          </div>
          <div className={css.right}>
            <p className={css.title}>Контакты</p>
            {contact.map(item => (
              <>
                <div className={css.icons} key={item.id}>
                  <img className={css.call} src="/images/call.svg" alt="" />
                  <p className={css.text}>{item.number}</p>
                </div>
                <div className={css.icons} key={item.id}>
                  <img className={css.whatsapp} src="/images/whatsapp.svg" alt="" />
                  <p className={css.text}>{item.number}</p>
                </div>
                <div className={css.icons} key={item.id}>
                  <img className={css.gmail} src="/images/gmail.svg" alt="" />
                  <p className={css.text}>{item.gmail}</p>
                </div>
                <div className={css.icons} key={item.id}>
                  <img className={css.geodata} src="/images/geodata.svg" alt="" />
                  <p className={css.text}>{item.street}</p>
                </div>
                <div className={css.icons} key={item.id}>
                  <img className={css.plan} src="/images/plan.svg" alt="" />
                  <p className={css.text__plan}>{item.workschedule}</p>
                </div>
              </>
            ))}
          </div>
        </div>

        <div className={css.bottom}>
          <div className={css.footer}>
            <img className={css.logo__img} src="/images/logofooter.svg" alt="" />
            <p className={css.name}>ИНСТРУКТОР по вождению</p>
          </div>
          <p className={css.footer__info}>2022, Автошкола “ФОРСАЖ” Политика конфиденциальности</p>
        </div>
      </div>
    </>
  )
}