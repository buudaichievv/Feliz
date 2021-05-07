import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import Coffee1 from './img/Coffee1.jpeg'
import Coffee2 from './img/Coffee2.jpeg'
import Coffee3 from './img/Coffee3.jpeg'
import { Carousel } from 'react-bootstrap'
export default function Carusel() {
    return (

        <div className='contauner'>
            <div className="container">
            <Carousel fade className="carousel">
                <Carousel.Item className="carousel-item">
                    <img
                    className="d-block"
                    src={Coffee1}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item className="carousel-item">
                    <img
                    className="d-block"
                    src={Coffee2}
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item className="carousel-item">
                    <img
                    className="d-block"
                    src={Coffee3}
                    alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
            </div>
        </div>
    )
}
