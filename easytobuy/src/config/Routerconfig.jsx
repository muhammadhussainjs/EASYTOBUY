import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Home from '../pages/Home'
import Beverages from '../pages/Beverages'
import Singlebeverages from '../pages/Singlebeverages'

const Routerconfig = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='beverages' element={<Beverages/>}/>
        <Route path='singlebeverages' element={<Singlebeverages/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Routerconfig