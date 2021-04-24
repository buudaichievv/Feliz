import React from 'react'
import banner from './images/Ellipse 14.png'
import banner_yellow from './images/invest-banner2.png'
import banner_blue from './images/banner_blue.png'
import banner_right from './images/b.png'
import second_banner from './images/second-banner.png'
import second_banner_left from './images/second_two_banner.png'
import second_banner_right_up from './images/second-banner-right-up.png'
import second_right from './images/second_rigt.png'
import Third_banner from './images/Third_banner.png'
import third_left from './images/three-menu_left.png'
import third_right_on from './images/treeback3.png'
import third_right2 from './images/three-right2.png'
import Invest_ban from './images/invest-ban.png'
import invest_ban_left from './images/invest_left.png'
import invest_ban_rigt from './images/invest_right_green.png'
import investban_center from './images/invest2.png'
import invest_right_blue from './images/invest_right_blue.png'
import investbanleft from './images/investbanleft.png'
import investpicture_left from './images/invest_right.png'
import './style.css'
import Share from '../Share'

// eslint-disable-next-line no-unused-vars
import Sova from '../Sova'
export default function Invest() {
    return (
        <div className='app'>

            <div className='first_banner' >
                <img src={banner} alt="" className='invest-banner_img' />;
                 <img src={banner_blue} alt="" className='banner_blue' />;
                 <img src={banner_yellow} alt="" className='banner_yellow' />
                <img src={banner_right} alt='' className='banner-right' />
            </div>
            <div className='banner-text'>
                <h1 className='frans'>Франшиза</h1>
                <h1 className='symbol'>&</h1>
                <h1 className='royal'>роялти</h1>
            </div>
            <div className='second_banner'>
                <img src={second_banner} className='second_name_img' alt='' />
                <h1 className='second_money'>150.000 ₽</h1>

                <img src={second_banner_left} alt='' className='second_banner_left' />
                <img src={second_banner_right_up} alt='' className='second_banner_right_up' />
                <img src={second_right} alt='' className='second_banner_right' />
            </div>
            <div className='second_banner_text'>
                <h1 className='cost_frans'>Стоимость франшизы:</h1>
                <p className='second_banner_text'>
                    • 1 регион (кроме Москвы; Питер)<br />
                 • Любое количество точек <br />
                 • Любое форматирование (кофе бар; повинция) <br />
                 • Онлайн консультация по вип вопросам</p>
            </div>
            <div className='thirt-banner'>
                <div>
                    <img src={Third_banner} alt='' className='third_banner_img' />
                    <img src={third_left} alt='' className='third_banner_left' />
                    <img src={third_right2} alt='' className='third_right2' />
                    <img src={third_right_on} alt='' className='third_right' />
                </div>
                <div>
                    <h1 className='royal_fix'>Роялти - Фикс up</h1>
                    <h1 className='month_money'>8000 руб.    в месяц</h1>
                    <p className='third_banner_text'>
                        • Сопровождение командой <br />
                    • Юридическая консультация <br />
                    • Доступ к База знаний</p>
                </div>
            </div>
            <Sova />
            <Share/>

            <div className='four_banner'>
                <div>
                    <img src={Invest_ban} alt='' className='invest_banner' />
                    <img src={investbanleft} alt='' className='invest_left' />
                    <img src={investban_center} alt='' className='invest_center' />
                    <img src={invest_ban_rigt} alt='' className='invs_ban_right' />
                    <img src={invest_right_blue} alt='' className='invest-right' />
                    <img src={investpicture_left} alt='' className='invespicture_right' />
                    <img src={invest_ban_left} alt='' className='investpicture_left' />
                </div>
                <div>
                    <h1 className='invest_text'>Инвестиции:</h1>
                    <p className='ostatok'>1. Островок /  3300$</p>
                    <p className='invest_pavilon'><p id='pavilon'>2. Павильон / 5400$</p></p>
                </div>
            </div>

        </div>

    )
}
