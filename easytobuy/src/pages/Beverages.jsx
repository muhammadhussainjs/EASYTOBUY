import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import pepsigala from '../assets/pepsigala.webp'
import pepsi345ml from '../assets/pepsi345ml.webp'
import sevenup345ml from '../assets/sevenup345ml.webp'
import dew300ml from '../assets/dew300ml.webp'
import mirinda345ml from '../assets/mirinda345ml.webp'
import sting300ml from '../assets/sting300ml.webp'
import pepsi500ml from '../assets/pepsi500ml.webp'
import sevenup500ml from '../assets/sevenup500ml.webp'
import dew500ml from '../assets/dew500ml.webp'
import mirinda500ml from '../assets/mirinda500ml.webp'
import sting500ml from '../assets/sting500ml.webp'
import pepsilitre from '../assets/pepsilitre.webp'
import sevenuplitre from '../assets/sevenuplitre.webp'
import mirindalitre from '../assets/mirindalitre.webp'
import pepsijumbo from '../assets/pepsijumbo.webp'
import sevenupjumbo from '../assets/sevenupjumbo.webp'
import dewjumbo from '../assets/dewjumbo.webp'
import mirindajumbo from '../assets/mirindajumbo.webp'
import pepsi1500ml from '../assets/pepsi1500ml.webp'
import sevenup1500ml from '../assets/sevenup1500ml.webp'
import dew1500ml from '../assets/dew1500ml.webp'
import mirinda1500ml from '../assets/mirinda1500.webp'
import slicelitre from '../assets/slicelitre.webp'
import slice355ml from '../assets/slice355ml.webp'
import slice200ml from '../assets/slice200ml.webp'
import '../App.css'

const Beverages = () => {
    const [state, setState] = useState(0);
    const itemsToShow = 6; // Number of items visible at a time

    const text = [
        'Flash Deal', 
        'Under Rs.500', 
        'Phal aur Sabziyan', 
        'Breakfast Essentials', 
        'Sabun Shampoo', 
        'Snacks', 
        'Oil & Ghee', 
        'Anaaj', 
        'Beverages', 
        'Noodles & Sauces', 
        'Bachat Bundles', 
        'Personal Care', 
        'Special Deals', 
        'Masala', 
        'Baking & Deserts', 
        'Cleaning & Laundry', 
        'Household Supplies'
    ];

    const totalItems = text.length;

    // Function to move forward
    const textplus = () => {
        setState((prevState) => (prevState + 1) % totalItems);
    };

    // Function to move backward
    const textminus = () => {
        setState((prevState) => (prevState - 1 + totalItems) % totalItems);
    };

    return (
        <>
        

            <Navbar />
            <div className='w-[100%] flex items-center justify-center'>
            <div className="relative flex items-center mt-8 p-2 w-[90%]">
                {/* Previous Button */}
                <button 
              
              className="bg-blue-600 text-white p-2 rounded-full"
              onClick={textminus}
                >
                    &#10094; {/* Left arrow */}
                </button>

                {/* Visible items in a row */}
                <div className="overflow-hidden  items-center flex">
                    <div className="flex transition-transform duration-300" style={{ transform: `translateX(-${state * (100 / itemsToShow)}%)` }}>
                        {text.map((item, index) => (
                            <p 
                            key={index} 
                                className="text-xl  inline-block"
                                style={{ flex: `0 0 ${100 / itemsToShow}%` }} // Set each item width to divide the visible space
                            >
                                {item}
                            </p>
                        ))}
                    </div>
                </div>

                {/* Next Button */}
                <button 
                    className="bg-blue-600 text-white p-2  rounded-2xl mx-2"
                    onClick={textplus}
                    >
                    &#10095; {/* Right arrow */}
                </button>
            </div>
                  </div>

                  <div className='w-[100%] flex justify-center'>
                  <div className='w-[90%] mt-2'>
                    <img src={pepsigala} alt="" />
                  </div>
                  </div>
                  <p className='ml-20 mt-2 text-2xl font-bold'>Softdrinks</p>



                  <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-6  gap-10 w-[100%]'>
                    <div className='flex flex-col items-start ml-auto mr-auto mt-4 '>
                    <img src={pepsi345ml} alt="" className='rounded-2xl'  />
                    <p className='text-red-500 text-xl font-semibold'>Rs.700 </p>
                    <p className='text-xl font-semibold'>Pepsi 345 ml (1x12)</p>
                    </div>

                    <div className='flex flex-col items-start ml-auto mr-auto mt-4'>
                    <img src={mirinda345ml} alt="" className='rounded-2xl'  />
                    <p className='text-red-500 text-xl font-semibold'>Rs.700 </p>
                    <p className='text-xl font-semibold'>Pepsi 345 ml (1x12)</p>
                    </div>
                    <div className='flex flex-col items-start ml-auto mr-auto mt-4'>
                    <img src={sevenup345ml} alt=""  className='rounded-2xl'  />
                    <p className='text-red-500 text-xl font-semibold'>Rs.700 </p>
                    <p className='text-xl font-semibold'>Pepsi 345 ml (1x12)</p>
                    </div>
                    <div className='flex flex-col items-start ml-auto mr-auto mt-4'>
                    <img src={dew300ml} alt=""  className='rounded-2xl'  />
                    <p className='text-red-500 text-xl font-semibold'>Rs.700 </p>
                    <p className='text-xl font-semibold'>Pepsi 345 ml (1x12)</p>
                    </div>
                    <div className='flex flex-col items-start ml-auto mr-auto mt-4'>
                    <img src={sting300ml} alt=""  className='rounded-2xl'  />
                    <p className='text-red-500 text-xl font-semibold'>Rs.800 </p>
                    <p className='text-xl font-semibold'>Pepsi 345 ml (1x12)</p>
                    </div>
                    <div className='flex flex-col items-start ml-auto mr-auto mt-4'>
                    <img src={pepsi500ml} alt=""  className='rounded-2xl'  />
                    <p className='text-red-500 text-xl font-semibold'>Rs.1100 </p>
                    <p className='text-xl font-semibold'>Pepsi 500 ml (1x12)</p>
                    </div>
                    <div className='flex flex-col items-start ml-auto mr-auto mt-4'>
                    <img src={sevenup500ml} alt=""  className='rounded-2xl'  />
                    <p className='text-red-500 text-xl font-semibold'>Rs.1100 </p>
                    <p className='text-xl font-semibold'>7up 500 ml (1x12)</p>
                    </div>
                    <div className='flex flex-col items-start ml-auto mr-auto mt-4'>
                    <img src={dew500ml} alt=""  className='rounded-2xl'  />
                    <p className='text-red-500 text-xl font-semibold'>Rs.1100 </p>
                    <p className='text-xl font-semibold'>Dew 500 ml (1x12)</p>
                    </div>
                    <div className='flex flex-col items-start ml-auto mr-auto mt-4'>
                    <img src={mirinda500ml} alt=""  className='rounded-2xl'  />
                    <p className='text-red-500 text-xl font-semibold'>Rs.1100 </p>
                    <p className='text-xl font-semibold'>Mirinda 500ml (1x12)</p>
                    </div>
                    <div className='flex flex-col items-start ml-auto mr-auto mt-4'>
                    <img src={sting500ml} alt=""  className='rounded-2xl'  />
                    <p className='text-red-500 text-xl font-semibold'>Rs.1300 </p>
                    <p className='text-xl font-semibold'>Sting 500 ml (1x12)</p>
                    </div>
                    <div className='flex flex-col items-start ml-auto mr-auto mt-4'>
                    <img src={pepsilitre} alt=""  className='rounded-2xl'  />
                    <p className='text-red-500 text-xl font-semibold'>Rs.850 </p>
                    <p className='text-xl font-semibold'>Pepsi Litre (1x6)</p>
                    </div>
                    <div className='flex flex-col items-start ml-auto mr-auto mt-4'>
                    <img src={sevenuplitre} alt=""  className='rounded-2xl'  />
                    <p className='text-red-500 text-xl font-semibold'>Rs.850 </p>
                    <p className='text-xl font-semibold'>7up Litre (1x6)</p>
                    </div>
                    
                    <div className='flex flex-col items-start ml-auto mr-auto mt-4'>
                    <img src={mirindalitre} alt=""  className='rounded-2xl'  />
                    <p className='text-red-500 text-xl font-semibold'>Rs.850 </p>
                    <p className='text-xl font-semibold'>Mirinda Litre (1x6)</p>
                    </div>
                    <div className='flex flex-col items-start ml-auto mr-auto mt-4'>
                    <img src={pepsi1500ml} alt=""  className='rounded-2xl'/>
                    <p className='text-red-500 text-xl font-semibold'>Rs.1150 </p>
                    <p className='text-xl font-semibold'>Pepsi 1500 ml (1x6)</p>
                    </div>
                    <div className='flex flex-col items-start ml-auto mr-auto mt-4'>
                    <img src={sevenup1500ml} alt=""  className='rounded-2xl' />
                    <p className='text-red-500 text-xl font-semibold'>Rs.1150 </p>
                    <p className='text-xl font-semibold'>7up 1500 ml (1x6)</p>
                    </div>
                    <div className='flex flex-col items-start ml-auto mr-auto mt-4'>
                    <img src={dew1500ml} alt=""  className='rounded-2xl' />
                    <p className='text-red-500 text-xl font-semibold'>Rs.1150 </p>
                    <p className='text-xl font-semibold'>Dew 1500 ml (1x6)</p>
                    </div>
                    <div className='flex flex-col items-start ml-auto mr-auto mt-4'>
                    <img src={mirinda1500ml} alt=""  className='rounded-2xl' />
                    <p className='text-red-500 text-xl font-semibold'>Rs.1150 </p>
                    <p className='text-xl font-semibold'>Mirinda 1500 ml (1x6)</p>
                    </div>
                    <div className='flex flex-col items-start ml-auto mr-auto mt-4'>
                    <img src={pepsijumbo} alt=""  className='rounded-2xl' />
                    <p className='text-red-500 text-xl font-semibold'>Rs.970 </p>
                    <p className='text-xl font-semibold'>Pepsi Jumbo (1x4)</p>
                    </div>
                    <div className='flex flex-col items-start ml-auto mr-auto mt-4'>
                    <img src={sevenupjumbo} alt=""  className='rounded-2xl' />
                    <p className='text-red-500 text-xl font-semibold'>Rs.970 </p>
                    <p className='text-xl font-semibold'>7up Jumbo (1x4)</p>
                    </div>
                    <div className='flex flex-col items-start ml-auto mr-auto mt-4'>
                    <img src={dewjumbo} alt=""  className='rounded-2xl' />
                    <p className='text-red-500 text-xl font-semibold'>Rs.970 </p>
                    <p className='text-xl font-semibold'>Dew Jumbo (1x4)</p>
                    </div>
                    <div className='flex flex-col items-start ml-auto mr-auto mt-4'>
                    <img src={mirindajumbo} alt=""  className='rounded-2xl' />
                    <p className='text-red-500 text-xl font-semibold'>Rs.970 </p>
                    <p className='text-xl font-semibold'>Mirinda Jumbo (1x4)</p>
                    </div>
                    <div className='flex flex-col items-start ml-auto mr-auto mt-4'>
                    <img src={slice355ml} alt=""  className='rounded-2xl' />
                    <p className='text-red-500 text-xl font-semibold'>Rs.750 </p>
                    <p className='text-xl font-semibold'>Slice 355ml (1x12)</p>
                    </div>
                    <div className='flex flex-col items-start ml-auto mr-auto mt-4'>
                    <img src={slice200ml} alt=""  className='rounded-2xl' />
                    <p className='text-red-500 text-xl font-semibold'>Rs.1100 </p>
                    <p className='text-xl font-semibold'>Slice 200ml (1x24)</p>
                    </div>
                    <div className='flex flex-col items-start ml-auto mr-auto mt-4'>
                    <img src={slicelitre} alt=""  className='rounded-2xl' />
                    <p className='text-red-500 text-xl font-semibold'>Rs.1100 </p>
                    <p className='text-xl font-semibold'>Slice Litre (1x6)</p>
                    </div>
                   
                  </div>
      
        </>
    );
};

export default Beverages;
