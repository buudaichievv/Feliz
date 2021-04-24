
import React from 'react'
import './Map.css'
import leftback from './img/back.png'
import rightup from './img/Ellipse 15.png'
import righton from './img/Ellipse 16.png'
import instagram from './img/instagram.png'
import phone from './img/phone.png'
import Share from '../Share'
import Sova from '../Sova'
export default function Address() {
  return (
    <div className='address_feliz'>
      <div>
        <img src={leftback} className='leftback' />
      </div>
      <div>
        <h1 className='address-we-text'>Где мы находимся!</h1>
        <h1 className='state-text'>БЦ.Олимп  Раззакова 32 , 1 этаж</h1>
      </div>
      <div>
        <img src={rightup} className='rightup' />
        <img src={righton} className='righton' />
      </div>
      <div>
        <h1 className='work_time'>
          Время работы
        </h1>
        <p className='work-time-text'>ПН 07:30-21:00<br />
            ВТ 07:30-21:00<br />
            СР 07:30-21:00<br />
            ЧТ 07:30-21:00<br />
            ПН 07:30-21:00<br />
            СБ 07:30-21:00<br />
            ВС не рабочий день<br />
        </p>
      </div>
      <Share/>
      <Sova/>
      <div>
        <h1 className='phone_for'>Телефон для связи</h1>
        <a href='tel:+996 552-23-40-43'><img src={phone} className='phone-icon' /></a>

        <p className='phone_number'>+996 552-23-40-43</p>
      </div>
      <div>
        <a href='https://www.instagram.com/feliz.coffee/' className='instagram'><img src={instagram} className='instagram' /></a>
        <h1 className='instagram-text'>instagram</h1>
        <p className='ins-text'>@feliz.coffee</p>
      </div>
      <div className="mapouter"><div className="Map1"><iframe className="ifrm" id="gmap_canvas" src="https://maps.google.com/maps?q=%D0%A0%D0%B0%D0%B7%D0%B7%D0%B0%D0%BA%D0%BE%D0%B2%D0%B0%2032&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://embedgooglemap.net/maps/51"></a></div></div>
    </div>
  )
}
