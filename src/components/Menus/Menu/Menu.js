import React from 'react'
import './Menu.css'
import { Link } from 'react-router-dom'
import c from './images/c.png'
import cof from "./images/cof.png"
import mej from "./images/mej.png"

export default function Menu() {
    return (
        <div className='menu-body'>
            <div className="wrapper">
                <div className="first__menu">
                    <div className="hot__menu">
                        <p>Горячие напитки</p>
                    </div>
                    <div className="bor news">
                        <p className="nov">Новинки</p>
                        <p className="news__kinds">Капучино миндаль/кокос/соя <br />Латте миндаль/кокос/соя <br />Протеин шоколад/клубника</p>
                        <p className="news__price">170/190 <br />170/190 <br />170</p>
                    </div>
                    <div className="bor classic">
                        <p className="cls">Классика</p>
                        <p className="classic__kinds">Эспрессо <br />Американо <br />Капучино <br />Латте <br />Флет уойт <br />Мокко <br />Горячий шоколад <br />Какао</p>
                        <p className="classic__price">80/100<br />100/120<br />120/140<br />120/140<br />140/180<br />130/170<br />120/140<br />100/120</p>
                    </div>
                    <div className="div">
                        <div className="bor tea">
                            <p className="chai">Чаи</p>
                            <p className="tea__kinds">Чай с имбирем, лимоном<br />Облепиховый<br />Лесные ягоды<br />Молoчный улун<br />Каркаде<br />Жасмин<br />Черный/зелены<br /></p>
                            <p className="tea__price">90<br />99<br />99<br />90<br />90<br />90<br />50</p>
                        </div>
                        <div className="bor author">
                            <p className="nap">Авторские напитки</p>
                            <p className="author__kinds">Латте Орео<br />Латте Баунти<br />Латте сол. карамель<br />Капучино Сникерс<br />Капучино лесной орех<br />Капучино Тирамису<br />Раф Ванильный<br />Раф цитрусовый<br />Раф халва</p>
                            <p className="author__price">160<br />160<br />160<br />160<br />160<br />160<br />180<br />180<br />180</p>
                        </div>
                    </div>
                </div>
                <img className="cof" src={c} />
                <img className="cof2" src={cof} />
                <div className="second__menu">
                    <div className="summer__menu">
                        <p>Лeтнее меню</p>
                    </div>
                    <div className="summer__box1">
                        <div className="bor box cold__coffee">
                            <p className="title">Холодный кофе 500ml</p>
                            <p className="v1">Айс Американо<br />Айс Капучино<br />Айс Латте<br />Айс Раф<br />Фраппучино<br />Глясе</p>
                            <p className="price vp1">119<br />139<br />139<br />199<br />169<br />159</p>
                        </div>
                        <div className="bor box milk__shake">
                            <p className="title">Milk shake 500ml</p>
                            <p className="v2">Смородина<br />Банановый<br />Клубничный<br />Шоколадный<br />Баунти</p>
                            <p className="price vp2">159<br />159<br />159<br />159<br />159</p>
                        </div>
                    </div>
                    <div className="summer__box2">
                        <div className="bor box limonade">
                            <p className="title">Лимонады 500ml</p>
                            <p className="v1">Тропический<br />Ягодный<br />Цитрусовый<br />Классический<br />Мохито<br />Айсти</p>
                            <p className="price vp1">119<br />129<br />129<br />99<br />99<br />99</p>
                        </div>
                        <div className="bor box smuzi">
                            <p className="title">Смузи 500ml</p>
                            <p className="v2">Яблоко<br />Шпинат<br />Банан<br />Ягодная прохлада<br />Банан клубника</p>
                            <p className="price vp2">169 169 169 169 169</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
