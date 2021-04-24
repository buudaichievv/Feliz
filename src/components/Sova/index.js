import React, { useState, useEffect } from 'react'
import './style.css'
import owl from './cof.gif'
export default function App() {
    // меняй second чтобы менять интервал между появлениями фраз
    const second = 4;
    const sec = second * 2000;
    let [count, setcount] = useState(0)
    useEffect(() => {
        setTimeout(() => {
            const min = 1;
            const max = 4;
            let random = min + (Math.random() * (max - min));

            setcount(random)

        }, sec)

    }, [count])
    // 
    console.log((count).toFixed(0))
    let q = ((count).toFixed(0))
    if (count == 5) count = 0
    //  
    return (
        <div id="all">
            <div id="sg12" autoPlay>
                <img src={owl} alt='loading' />
            </div>
            {q == 1 ? (

                <div id="frazes">
                    <p>Кайфуй от души<br />
                        <i>Нитше Ф</i></p>
                    {/* Вместо 2 поставь свою фразу */}

                    <button id="exit" onClick={() => setcount(count = 5)}>  </button>

                </div>
            ) :
                q == 2 ? <div id="frazes" >
                    {/* Вместо 2 поставь свою фразу */}
                    <p>Каждый день имеет своё чудо.</p>
                    <button id="exit" onClick={() => setcount(count = 5)}>  </button>

                </div>
                    : q == 3 ? <div id="frazes">
                        {/* Вместо 2 поставь свою фразу */}
                        <p>Адаптива нет :)</p>
                        <button id="exit" onClick={() => setcount(count = 5)}> </button>

                    </div>
                        : q == 4 ? <div id="frazes">
                            {/* Вместо 2 поставь свою фразу */}
                            <p>Жизнь требует движений бёдрами.<br/>
                            <i>Аристотель</i></p>
                            <button id="exit" onClick={() => setcount(count = 5)}>  </button>

                        </div>
                            : ''
            }
        </div>
    )
}



