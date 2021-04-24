import React from 'react'
import "./Footer.css"
import logo from "../img/logo.png"
import marker from "../img/marker.png"

export default function Footer() {
    return (
        <div className='footer'>
            <img src={logo} className='footer-logo' alt=''/>
            <div className='footer-call'>
                <h2>Свяжитесь с нами</h2>
                <input type='text' placeholder='напишите что-нибудь...' />
                <div className="adDress">
                    <img src={marker} alt='' />
                    <p>БЦ.Олимп Раззакова 32, 1 этаж</p>
                </div>
            </div>
            <div className="contacts">
                <p>Телефон для связи<br/>+996 999-85-08-05</p>
                <p>Instagram<br/><a href="https://www.instagram.com/feliz.coffee/">@feliz.coffee</a></p>
            </div>
        </div>
    )
}
