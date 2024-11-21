import React from 'react'
import { useLocation  } from 'react-router-dom'
import { useState } from 'react'
import Navbar from '../components/Navbar'

const Singlebeverages = () => {
    const location = useLocation()
    const {item} = location.state || {}
    console.log(item);
    const [number , setNumber] = useState(1) 
    
    function Plus(){
      console.log('plus');
      setNumber((number) => number + 1)
      
      
    }

    function Minus(){
      
     setNumber((number) => (number > 1 ? number - 1: number))
    }
    



  return (
    <>
    <Navbar/>
    
    { 
        item ? (<div  className=' items-center mt-20 ml-20 mb-20'>
        <div className='flex gap-6'>
          <div className='rounded-md'>

          <img src={item.image} className='rounded-2xl brightness-80 contrast-normal' height={2500} width={500}
          />
        </div>
        <div>

        <p className='text-4xl font-bold'>{item.varient}</p>
        <p className='mt-16'>Market Price</p>

<div className='w-40 h-10  rounded-full flex justify-evenly  items-center border border-blue-500 bg-white mt-8'>
  <p className='w-6 h-6 mr-6 flex items-center justify-center font-bold text-white text-xl rounded-full bg-blue-500 cursor-pointer overflow-hidden' onClick={Minus}>-</p>
  <p>{number}</p>
  <p  className='w-6 h-6 ml-6  flex items-center justify-center font-bold text-white text-xl rounded-full bg-blue-500 cursor-pointer overflow-hidden' onClick={Plus}>+</p>

</div>
        <p className='mt-8'>Cash on Delivery</p>
        <p className='mt-8 text-blue-400 text-2xl'> Tafseel</p>
        <p className='mt-4 text-[#7b8cbb] text-xl'>{item.varient}</p>

        <div  className='flex flex-col justify-center items-start h-40'>

        <p className='pl-4'>Add To Cart</p>
        <p className='text-2xl bg-blue-500 rounded-full flex justify-center text-white w-44 h-10 font-bold  items-center '>{item.price}</p>
        </div>
        </div>
        </div></div>):(<div><p>no item available</p></div>)
    }

    </>

  )
}

export default Singlebeverages