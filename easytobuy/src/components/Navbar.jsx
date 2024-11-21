import React from 'react'
import dealcart from '../assets/dealcart.svg'
import search from '../assets/search.svg'
import cart from '../assets/cart.svg'
import profile from '../assets/profile.svg'
import orders from '../assets/orders.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className='flex justify-around mt-4'>
    <div className='ml-6'>

    <img src={dealcart} alt="" width={100} />
    </div>
    <div className='flex gap-3 ml-auto items-center'>

    <img src={search} alt="" width={20} />
    <div className='flex items-center justify-start gap-4 rounded-full w-96 h-10 border  outline-orange-200 border-blue-600 pl-4 bg-white'>
    <FontAwesomeIcon icon={faMagnifyingGlass} className='text-gray-400' />
    <input type="text" className=' outline-none w-[80%]' placeholder='Search DealCart' />
    </div>
    </div>

    <div className='flex ml-96 mr-12 gap-6'>

      <div className='flex flex-col items-center'>

      <div  className='bg-slate-200 rounded-full w-10 h-10 items-center justify-center flex'>
      <img src={orders} alt="" width={16} />
      </div> 
      <div>
      <p className='text-sm'>Orders</p>
      </div>
      </div>


      

      <div className='flex flex-col items-center'>

      <div  className='bg-slate-200 rounded-full w-10 h-10 items-center justify-center flex'>
      <img src={cart} alt="" width={16} />
      </div> 
      <div>
      <p className='text-sm'>Cart</p>
      </div>
      </div>

      <div className='flex flex-col items-center'>

      <div  className='bg-slate-200 rounded-full w-10 h-10 items-center justify-center flex'>
      <img src={profile} alt="" width={16} />
      </div> 
      <div>
      <p className='text-sm'>Profile</p>
      </div>
      </div>
    </div>

  </nav>
  
  )
}

export default Navbar