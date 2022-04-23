import React from 'react'
import { contact } from '../../../database/database'
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
                    {contact.map(item => (
                    <div className={cls.contactsBlock}>
                        <h1 className={cls.contactText}>Контакты</h1>
                        <p>{item.street}</p>
                        <p>{item.number}<br />{item.gmail}</p>
                        <p>{item.workschedule}</p>
                    </div>
                     ))}
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