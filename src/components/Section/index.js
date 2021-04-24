import React from 'react'
import './Section.css'
import png_1 from "../img/1.png"
import png_2 from "../img/2.png"
import png_3 from "../img/3.png"
import scale from "../img/scale_1200 1.png"

export default function Section() {
    return (
        <div>
            <div className="section">
                <div className="bg">
                    <img src={png_1} className='first_png' />
                    <img src={png_2} className="second_png" />
                    <img src={png_3} className="third_png" />
                </div>
                <div className="content">
                    <img src={scale} className="photo_scale" />
                    <div className="description">
                        <p>Вкус кофе зависит от сорта,<br />качества, условий<br /> выращивания и обработки<br /> кофейных зёрен. В<br /> промышленных масштабах<br /> выращивают 4 вида кофе: <br /> <span class="kinds">арабику, робусту, либерику и<br /> эксцельзу.</span> Самая вкусная и<br /> ароматная, а потому и<br /> наиболее дорогая –<br /><span class="arabic"> арабика.</span></p>
                    </div>
                    <div className="description2">
                        <p>Вкус кофе зависит от сорта,качества, условий выращивания и обработки кофейных зёрен.<br />  В промышленных масштабах выращивают<br /> 4 вида кофе: <br /> <span class="kinds">арабику, робусту, либерику и эксцельзу.<br /></span> Самая вкусная и ароматная, а потому и<br /> наиболее дорогая –<br /><span class="arabic"> арабика.</span></p>
                    </div>
                    <div className='div_beacuse'>
                        <p className="because">Поэтому наша кофейня использует исключительно сорт арабику, чтобы подарить Вам незабываемое наслаждение от FELIZ кофе!</p>
                        <p className="because2">Поэтому наша кофейня использует исключительно сорт арабику, чтобы подарить Вам незабываемое наслаждение<br /> от FELIZ кофе!</p>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}
