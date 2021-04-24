import React from 'react'
import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import './style.css'
import img1 from './img/img1.png'
export default function Carusel() {
    return (

        <div className='contauner'>

     
            <div className="container">
                <div id="myCarousel" class="carousel slide" data-ride="carousel" data-interval="2000">
                    {/* 
                        <!-- Indicators --> */}
                    <ul className="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                      
                    </ul>

                    {/* <!-- The slideshow --> */}
                    <div className="carousel-inner">
                        <div class="carousel-item active">
                            <img src="https://www.w3schools.com/bootstrap4/la.jpg" alt="Los Angeles" />
                        </div>
                        <div className="carousel-item">
                            <img src="https://www.w3schools.com/bootstrap4/chicago.jpg" alt="Chicago" />
                        </div>
                        <div class="carousel-item">
                            <img src="https://www.w3schools.com/bootstrap4/ny.jpg" alt="New York"/>
                        </div>
                    </div>

                    {/* <!-- Left and right controls --> */}
                    <a className="carousel-control-prev" href="#myCarousel" data-slide="prev">
                        <span class="carousel-control-prev-icon"></span>
                    </a>
                    <a class="carousel-control-next" href="#myCarousel" data-slide="next">
                        <span class="carousel-control-next-icon"></span>
                    </a>
                </div>

            </div>
        </div>
    )
}
