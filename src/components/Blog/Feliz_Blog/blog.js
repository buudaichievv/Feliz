import React from 'react'
import './Blog.css'
import blogB from '../img/blogG.png'
import blogG from '../img/blogB.png'
import card from '../img/card.png'
import card1 from '../img/card1.png'
import card2 from '../img/card2.png'


export default function Blog() {
    return (
        <div>
            <section >
                <div className="cardBlog">
                        <img src={blogB} alt="" className="blockB" />
                        <img src={blogG} alt="" />
                        <h2>Блог</h2>
                </div>
                    <div className="card">
                        <div className="card-stock">
                            <h3>Новости!</h3>
                        </div>
                        <div className="cards">
                            <img src={card} alt=""/>
                            <img src={card1} alt=""/>
                            <img src={card2} alt=""/>
                        </div>
                        <div className="card-stock">
                            <h3>Акции!</h3>
                        </div>
                        <div className="cards">
                            <img src={card} alt=""/>
                            <img src={card1} alt=""/>
                            <img src={card2} alt=""/>
                        </div>
                        <div className="card-stock">
                            <h3>А вы знали?</h3>
                        </div>
                        <div className="cards">
                            <img src={card} alt=""/>
                            <img src={card1} alt=""/>
                            <img src={card2} alt=""/>
                        </div>
                    </div>
            </section>
    </div>
    )
}
