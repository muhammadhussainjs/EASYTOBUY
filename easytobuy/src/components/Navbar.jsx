import React from 'react'
import dealcart from '../assets/dealcart.svg'
import search from '../assets/search.svg'
import cart from '../assets/cart.svg'
import profile from '../assets/profile.svg'
import orders from '../assets/orders.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useState , useEffect } from 'react'

const Navbar = () => {

  const [searches , setSearches] = useState(false)
  const [searching , setSearching] = useState(true)
  const [width  , setWidth] = useState(window.innerWidth)
  function handleSearch(){
    console.log('handle is running');
    setSearches(!searches)
    setSearching(false)
    
    
  }
  function canceldiv(){
    console.log('cancel div');
    setSearches(!searches)
    
  
  }


  useEffect(() => {
    // Handle window resize
    const handleResize = () => {
      setWidth(window.innerWidth); // Update width state on resize
    };

    window.addEventListener('resize', handleResize);
    
    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);



  return (
    <nav className='flex justify-around  items-center  fixed w-full z-50 h-20 bg-[#f3f4ff]  '>
    <div className='ml-6'>

    <img src={dealcart} alt="" width={100} />
    </div>
    <div className='flex gap-3 ml-auto items-center'>

    
    <div>
     

    </div>
    <div className='flex gap-3 '>
        {searches ? (
          <div className='bg-white w-60 h-full fixed top-0 left-0 z-50 flex flex-col  gap-4 pt-2 rounded-b-2xl rounded-t-2xl rounded-l-none border border-gray-300 pb-2  text-2xl transition-all duration-1500 ease-in-out'>
          <div className='flex items-end justify-end mt-4      mr-8'>

           <p className=' cursor-pointer' onClick={canceldiv}>x</p>
          </div>
          <div className='w-full border border-gray-100 mt-4 mb-4'>

          </div>
           <img src={dealcart} alt="" width={120} className='mt-6 pl-6' />
           <div className='w-full border border-gray-100 mt-4 mb-4'>

          </div>
           <div className='mt-6 flex gap-6 flex-col justify-start pl-6'>

           <div className='flex  gap-6'>

<div className='flex  gap-4 items-center'>

<div  className='bg-slate-200 rounded-full w-10 h-10 items-center justify-center flex'>
<img src={orders} alt="" width={16} />
</div> 
<div>
<p className='text-sm font-bold'>Orders</p>
</div>
</div>
</div>



            
<div className='flex  gap-6'>

<div className='flex  gap-4 items-center'>

<div  className='bg-slate-200 rounded-full w-10 h-10 items-center justify-center flex'>
<img src={cart} alt="" width={16} />
</div> 
<div>
<p className='text-sm font-bold'>Cart</p>
</div>
</div>
</div>

<div className='flex  gap-6'>

<div className='flex  gap-4 items-center'>

<div  className='bg-slate-200 rounded-full w-10 h-10 items-center justify-center flex'>
<img src={profile} alt="" width={16} />
</div> 
<div>
<p className='text-sm font-bold'>Profile</p>
</div>
</div>
</div>
           </div>


          </div>
        ) : (
          <img 
            src={search} 
            alt="search icon" 
            onClick={handleSearch} 
            width={20}
            className='cursor-pointer' 
          />
        )}
      </div>

    <div className='flex items-center justify-start gap-4 rounded-full w-96 h-10 border  outline-orange-200 border-blue-600 pl-4 bg-white'>
    <FontAwesomeIcon icon={faMagnifyingGlass} className='text-gray-400' />
    <input type="text" className=' outline-none w-[80%]' placeholder='Search DealCart' />
    </div>
    </div>
{
  width  >= 800 && (

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
    )
  }

  </nav>
  
  )
}

export default Navbar