import React from 'react'
import "./Share.css"
import share from  "./img/share.png"
import insta from "./img/instagram.png"
import telega from "./img/telegram.png"
import wat from "./img/watsapp.png"

export default function Share() {
    return (
        <div>
            <div className="wrapper_full">
            <div className="bg"></div>
            <input type="checkbox" id="checkbox" className="checkbox"/>
            <label for="checkbox" className="share__btn"><img className="share" src={share}/></label>
                <div className="wave"></div>
                <div className="share__item1"><a href="https://www.instagram.com/feliz.coffee/"><img className="item__img" src={insta}/></a></div>
                <div className="share__item2"><a href=""><img className="item__img" src={telega}/></a></div>
                <div className="share__item3"><a href=""><img className="item__img" src={wat}/></a></div>
            </div>
        </div>
    )
}
