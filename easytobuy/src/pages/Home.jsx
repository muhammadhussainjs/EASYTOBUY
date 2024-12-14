import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import pepsi from '../assets/pepsi.webp'

import beauty from '../assets/beauty.webp'
import breads from '../assets/breads.webp'
import chakkiata from '../assets/chakkiata.webp'
import cocacola from '../assets/cocacola.webp'
import dalda from '../assets/dalda.webp'
import deals from '../assets/deals.webp'
import flashdeals from '../assets/flashdeals.webp'
import fruits from '../assets/fruits.webp'
import lays from '../assets/lays.webp'
import sunsilk from '../assets/sunsilk.webp'
import colgate from '../assets/colgate.webp'
import tomato from '../assets/tomato.webp'
import cocacoladiscount from '../assets/cocacoladiscount.webp'
import cosmetics from '../assets/cosmetics.webp'
import dresses from '../assets/dresses.webp'
import free from '../assets/free.webp'
import kidzchup from '../assets/kidzchup.webp'
import knorr from '../assets/knorr.webp'
import krone from '../assets/krone.webp'
import olpers from '../assets/olpers.webp'
import ordinary from '../assets/ordinary.webp'
import shoop from '../assets/shoop.webp'
import sensodyne from '../assets/sensodyne.webp'
import '../App.css'
import { useNavigate } from 'react-router-dom'






const Home = () => {

  const navigate = useNavigate()

const [state , setState] = useState(0)

  const image = [ cocacoladiscount , shoop , knorr , cosmetics , dresses , kidzchup , free , krone , olpers , ordinary , sensodyne , pepsi]

  useEffect(()=>{
    const interval = setInterval(()=>{
      setState((a)=> (a+1) % image.length)
    } , 3000)

    return () => clearInterval(interval);
  } , [image.length])
  
  

  
  return (  
  
    <>

<Navbar />



{/* image slider start */}


<div className=' w-[100%] flex justify-center'>
      <img src={image[state]} alt=""  className='w-[90%] h-[70%] mt-28'  />
    </div>









{/* image slider end */}







<p className='text-xl  font-semibold mt-4 pl-16'>
   Categories
</p>

<div className='w-[100%] mb-16 flex justify-center items-center'>


<div className='w-[95%] pl-2 pr-2   grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 mt-6 gap-4  responsivepadding'>
  <img src={flashdeals} alt="" className='w-52 h-52 rounded-2xl' />
  <img src={beauty} alt="" className='w-52 h-52 rounded-2xl' />
  <img src={fruits} alt="" className='w-52 h-52 rounded-2xl' />
  <img src={breads} alt="" className='w-52 h-52 rounded-2xl' />
  <img src={sunsilk} alt="" className='w-52 h-52 rounded-2xl' />
  <img src={lays} alt="" className='w-52 h-52 rounded-2xl' />
  <img src={dalda} alt="" className='w-52 h-52 rounded-2xl' />
  <img src={chakkiata} alt="" className='w-52 h-52 rounded-2xl' />
  <img src={cocacola} alt="" onClick={()=>{navigate('beverages')}} className=' cursor-pointer w-52 h-52 rounded-2xl' />
  <img src={tomato} alt="" className='w-52 h-52 rounded-2xl ' />
  <img src={deals} alt="" className='w-52 h-52 rounded-2xl' />
  <img src={colgate} alt="" className='w-52 h-52 rounded-2xl' />
</div>
</div>

{/* <div className='flex items-center justify-center  w-[100%] mb-12 '>

  <p className='  text-white W-28 p-2 bg-blue-700  rounded-full font-bold'>VIEW ALL</p>
</div> */}

    




    </>
  )
}

export default Home