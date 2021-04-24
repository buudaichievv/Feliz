import React from 'react'
import './Video.css'

export default function Video() {
    return (
        <div className="blog">
            <div>
                <div className="blog1">FELIZ COFFEEZ </div>


                <div className="video">
                    <iframe src='https://www.youtube.com/embed/cbRfk5SlqAw'
                        frameborder='0'
                        className='video1'

                        allowfullscreen
                        title='video'
                        allow='autoplay'
                        allow='autoplay; encrypted-media'
                        allowFullScreen
                    />
                   
                </div>
                <div className="text">
                
                «Утро. Солнце. Чашка кофе.
                                    Хочешь, вместо молока,<br />
                                    По небес пройдя дороге,
                                    Я добавлю облака...<br />

                                    Я добавлю счастья ложку. 
                                    Хочешь, даже не одну.<br />
                                    Свои чувства на ладошке
                                    Вместе с кофе протяну.<br />

                                    Я добавлю горсть улыбок.
                                    И мечты твои из снов.<br />
                                    Музыку цветочных скрипок
                                    А ещё... свою любовь!»
                </div>
            </div>
        </div>
    )
}