import React from 'react'
import "./Header.css"
import logo from "../img/logo.png"
import {Link} from 'react-router-dom'

export default function Header() {
    return (
        <div>
            <div className="header">
                    <div className="nav">
                    <Link  to="/menu">Меню</Link> 
                    <Link to="/blog">Блог</Link>
                    <Link to="/about">О нас</Link>
                    <Link to="/reviews">Отзывы</Link>
                    </div>    
                <div className="head"><a href='/'><img src={logo} className="logo" alt='' /></a></div>
                    <div className="nav2">
                    <Link to="/adress">Kонтакты</Link>
                    <Link to="/franchise">Франшиза</Link>
                    </div>
                <div class="navik">
                    <input type="checkbox" id="menu-toggle" />
                        <label for="menu-toggle"></label>
                            <ul id="menu">
                                <li><Link to="/menu">Меню</Link></li>
                                <li><Link to="/blog">Блог</Link></li>
                                <li><Link to="/about">О нас</Link></li>
                                <li><Link to="/reviews">Отзывы</Link></li>
                            </ul>
                 </div>
            </div>
        </div>
    )
}
