import React from 'react'
import dealcart from '../assets/dealcart.svg'
import search from '../assets/search.svg'
import cart from '../assets/cart.svg'
import profile from '../assets/profile.svg'
import orders from '../assets/orders.svg'
import pepsi from '../assets/pepsi.webp'

const Home = () => {
  return (
    <>
    <nav className='flex justify-evenly mt-4'>
      <div className='ml-12'>

      <img src={dealcart} alt="" width={100} />
      </div>
      <div className='flex gap-3 ml-auto'>

      <img src={search} alt="" width={30} />
      <input type="text" className=' rounded-full w-96 h-10 border  outline-none border-blue-600 pl-4' placeholder='Search DealCart'  />
      </div>
      <div className='flex ml-96 mr-20'>
        <img src={cart} alt="" width={30} />
        <img src={profile} alt="" width={30} />
        <img src={orders} alt="" width={30} />
      </div>
    </nav>
    <div className='mt-12 w-[100%] flex justify-center'>
      <img src={pepsi} alt=""  className='w-[90%] h-[70%]'  />
    </div>

    
    </>
  )
}

export default Home