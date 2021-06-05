import React from 'react'
import Main from './Main'
import { BrowserRouter } from 'react-router-dom'
export default function App(props) {
  return (
    <div>
      <BrowserRouter>
        <Main post={props.post}/>
      </BrowserRouter>

    </div>
  )
}
