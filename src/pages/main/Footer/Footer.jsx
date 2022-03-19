import React from 'react'
import cls from './Footer.module.scss'

function Footer() {

    return (
        <div className={cls.footer}>
            <div className={cls.container}>
                <div className={cls.footerBlock}>
                    <div className={cls.footerLogo}>
                        <h3 className={cls.footerName}>Инструктор</h3>
                        <p className={cls.footerText}>по вождению</p>
                        <p className={cls.avtoText}>2022, Автошкола “ФOРСАЖ”</p>
                        <p className={cls.avtoText}>Политика конфиденциальности</p>
                    </div>
                    <div className={cls.contactsBlock}>
                        <h1 className={cls.contactText}>Контакты</h1>
                        <p>Москва, ул. Проспект Андропова д.8</p>
                        <p>+7 (495) 181-18-20 <br /> autoschoolKoleso@gmail.com</p>
                        <p>ВТ-СБ: с 11:00 до 19:00 <br /> ПН-ВС: выходной</p>
                    </div>
                    <div className={cls.socialBlock}>
                        <p className={cls.socialLogo}>Связаться с нами</p>
                        <a href="https://wa.me/0706033066" className={cls.whatsappIcon}>
                            <img src='/images/WhatsApp.svg' alt="" />
                        </a>
                        <a href="http://instagram.com/_u/ttemirlan_/" className={cls.instIcon}>
                            <img src='/images/Instagram.svg' alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;