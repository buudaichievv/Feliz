import React from 'react'
import Chart_App from '../Chart/Chart_App'
import './style.css'
import './Contact_Form.css'
import Carusel from './Carusel'
import Contact from './Contact'
import Video from './Video'
import Share from '../Share'
import Sova from '../Sova'
export default function Mains() {
    return (
        <div className='ads'>
            <div className='carusel'>
                <Carusel />
            </div>
            <Video />
            <div className='chart_style'>
                <Chart_App />
            </div>
            <Sova/>
            <Share/>
            <div className='contact_main'>
                <Contact />
            </div>

        </div>

    )
}