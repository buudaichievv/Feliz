import React from 'react'
import Share from '../Share'
import Blog from './Feliz_Blog/blog'
import HeaderDown from './HeaderDown/HeaderDown'
import Sova from '../Sova'
export default function Main() {
    return (
        <div>
            <HeaderDown />
            <Sova/>
            <Share/>
            <Blog />
        </div>
    )
}