import React from 'react'
import './footer.css'

function Footer() {
    
  return (
   <div className="footer">
       <div className="container footer-block">
           <div className="footer-logo">
                {/* <image src="vector.png" alt="" className="img"/> */}
                <h3 className="footer-name">Инструктор</h3>
                <p className="footer-text">по вождению</p>
                <p className="avto-text">2022, Автошкола “Форсаж”</p>
                <p className="avto-text">Политика конфиденциальности</p>
           </div>
           <div className="contacts-block">
                <h1 className="contact-text">Контакты</h1>
                <p>Москва, ул. Проспект Андропова д.8</p>
                <p>+7 (495) 181-18-20 <br /> autoschoolKoleso@gmail.com</p>
                <p>ВТ-СБ: с 11:00 до 19:00 <br /> ПН-ВС: выходной</p>
           </div>
           <div className="social-block">
                <p className="social-logo">Связаться с нами</p>
           </div>
       </div>
   </div>
  );
}

export default Footer;