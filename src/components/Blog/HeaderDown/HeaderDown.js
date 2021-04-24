import React from 'react'
import './HeaderDown.css'
import butterfly1 from '../img/butterfly1.png'
import ellipse14 from '../img/Ellipse14.png'
import ellipse16 from '../img/Ellipse16.png'
import stakan from '../../img/stakan.png'
export default function HeaderDown() {
    return (
        <div>
            <section class="headerDown">
                <div className="img_bottle">
                    <img src={butterfly1} alt="" className="butterfly" />
                    <img src={ellipse14} alt="" className="slime_blue" />
                    <img src={ellipse16} alt="" className="slime_broun" />
                    <div id = 'Model'><img src={stakan} alt="" className = 'stakan'/></div>
                    <span className="begin_coffee">Начни свой день с <br /> Feliz кофе!</span>
                    <span className="coffee_its">Кофе – это творческая зажигалка. <p> (Маргарет Тэтчер)</p></span>
                </div>
            </section>
        </div>
    )
}
