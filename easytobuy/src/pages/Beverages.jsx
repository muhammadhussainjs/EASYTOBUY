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
import { useNavigate } from 'react-router-dom';
import Singlebeverages from './Singlebeverages';

const Beverages = () => {
    const navigate = useNavigate()
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

    const [cart, setCart] = useState([
       
        { image: pepsi345ml,
            price: 'RS.700',
            varient: 'Pepsi 345ml (1X12)'
            

         },
        { image: sevenup345ml,
            price: 'RS.700',
            varient: 'Sevenup 345ml (1X12)'
         },
        { image: dew300ml ,
            price: 'RS.700',
            varient: 'Dew 300ml (1X12)'
         },
        { image: mirinda345ml,
            price: 'RS.700',
            varient: 'Mirinda 345ml (1X12)'
         },
        { image: sting300ml,
            price: 'RS.800',
            varient: 'Sting 300ml (1X12)'
         },
        { image: pepsi500ml,
            price: 'RS.1100',
            varient: 'Pepsi 500 ml (1x12)'
         },
        { image: sevenup500ml,
            price: 'RS.1100',
            varient: '7up 500 ml (1x12)'
         },
        { image: dew500ml,
            price: 'RS.1100',
            varient: 'Dew 500 ml (1x12)'

         },
        { image: mirinda500ml,
            price: 'RS.1100',
            varient: 'Mirinda 500 ml (1x12)'
         },
        { image: sting500ml,
            price: 'RS.1100',
            varient: 'Sting 500 ml (1x12)'
         },
        { image: pepsilitre ,
            price: 'RS.850',
            varient: 'Pepsi Litre (1x6)'
         },
        { image: sevenuplitre,
            price: 'RS.850',
            varient: '7up Litre (1x6)'
         },
        { image: mirindalitre ,
            price: 'RS.850',
            varient: 'Mirinda Litre (1x6)'
        },
        { image: pepsijumbo,
            price: 'RS.970',
            varient: 'Pepsi Jumbo (1x4)'
         },
        { image: sevenupjumbo,
             price: 'RS.970',
            varient: '7up Jumbo (1x4)'
         },
        { image: dewjumbo,
            price: 'RS.970',
            varient: 'Dew Jumbo (1x4)'
         },
        { image: mirindajumbo,
            price: 'RS.970',
            varient: 'Mirinda Jumbo (1x4)'
         },
        { image: pepsi1500ml,
            price: 'RS.1150',
            varient: 'Pepsi 1500 ml (1x6)'
         },
        { image: sevenup1500ml,
             price: 'RS.1150',
            varient: '7up 1500 ml (1x6)'
         },
        { image: dew1500ml,
             price: 'RS.1150',
            varient: 'Dew 1500 ml (1x6)'
         },
        { image: mirinda1500ml,
             price: 'RS.1150',
            varient: 'Mirinda 1500 ml (1x6)'
         },
        { image: slicelitre,
             price: 'RS.1100',
            varient: 'Slice Litre (1x6)'
         },
        { image: slice355ml,
             price: 'RS.750',
            varient: 'Slice 355ml (1x12)'
         },
        { image: slice200ml,
             price: 'RS.1100',
            varient: 'Slice 200ml (1x24)'
         },
      ]);
      






    const totalItems = text.length;

    // Function to move forward
    const textplus = () => {
        setState((prevState) => (prevState + 1) % totalItems);
    };

    // Function to move backward
    const textminus = () => {
        setState((prevState) => (prevState - 1 + totalItems) % totalItems);

    };

    function gotoNextpage(item){
        console.log(item);
        navigate('/Singlebeverages' , {state: {item}})
        
        

    }

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


                  <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mt-6  gap-10 w-[100%]'>
                    {
                        cart.map((item , index) => (
                             <div className='flex flex-col items-start ml-auto mr-auto mt-4 cursor-pointer mb-20 ' onClick={()=>gotoNextpage(item)}> <img src={item.image} alt=""  className='rounded-2xl' />
                             <p className='text-red-500 text-xl font-semibold'>{item.price}</p>
                             <p className='text-xl font-semibold'>{item.varient}</p>
                            </div>
                        ))
                    }
                  </div>
      
        </>
    );
};

export default Beverages;
