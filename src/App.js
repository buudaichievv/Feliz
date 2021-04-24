import React from 'react'
import Main from './Main'
import { BrowserRouter } from 'react-router-dom'
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Main />
      </BrowserRouter>

    </div>
  )
}
