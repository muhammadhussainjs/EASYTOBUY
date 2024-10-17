import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Home from '../pages/Home'
import Beverages from '../pages/Beverages'

const Routerconfig = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='beverages' element={<Beverages/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Routerconfig