import React, { useRef } from 'react'
import { useLocation  } from 'react-router-dom'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import dealcart from '../assets/dealcart.svg'
import axios from 'axios'

const Singlebeverages = () => {
    const location = useLocation()
    const {item} = location.state || {}
    console.log(item);
    const [number , setNumber] = useState(1)
    const inputRef = useRef()

    const [popup , setPopup ] = useState(false)

    function Plus(){
      console.log('plus');
      setNumber((number) => number + 1)
      
      
    }

    function Minus(){
      
     setNumber((number) => (number > 1 ? number - 1: number))
    }
    function GoToLogin(){
      console.log('login')
      setPopup(!popup)
    }
    function closepopup(){
      setPopup(!popup)
    }
    function sendToOtp(){
      console.log('send to otp' , inputRef.current.value);
      const phonenumber = inputRef.current.value
      const response = axios.post('http://localhost:3000/' , phonenumber)
      console.log(response.data);
      

      
    }


  return (
   
    
    <>
  <Navbar />

  {/* Wrapper for Blurring Effect */}
  <div className={` w-full relative ${popup ? "blur" : ""}`}>
    {item ? (
      <div className="items-center   ml-20 mb-20">
        <div className="flex gap-6">
          <div className="rounded-md">
            <img
              src={item.image}
              className="rounded-2xl brightness-80 contrast-normal mt-28"
              height={2500}
              width={500}
            />
          </div>
          <div>
            <p className="text-4xl mt-28 font-bold">{item.varient}</p>
            <p className="mt-16">Market Price</p>
            <div className="w-40 h-10 rounded-full flex justify-evenly items-center border border-blue-500 bg-white mt-8">
              <p
                className="w-6 h-6 mr-6 flex items-center justify-center font-bold text-white text-xl rounded-full bg-blue-500 cursor-pointer overflow-hidden"
                onClick={Minus}
              >
                -
              </p>
              <p>{number}</p>
              <p
                className="w-6 h-6 ml-6 flex items-center justify-center font-bold text-white text-xl rounded-full bg-blue-500 cursor-pointer overflow-hidden"
                onClick={Plus}
              >
                +
              </p>
            </div>
            <p className="mt-8">Cash on Delivery</p>
            <p className="mt-8 text-blue-400 text-2xl">Tafseel</p>
            <p className="mt-4 text-[#7b8cbb] text-xl">{item.varient}</p>
            <div className="flex flex-col justify-center items-start h-40">
              <p className="pl-4">Add To Cart</p>
              <p
                className="text-2xl bg-blue-500 rounded-full flex justify-center text-white w-44 h-10 font-bold items-center cursor-pointer"
                onClick={GoToLogin}
              >
                {item.price}
              </p>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div>
        <p>no item available</p>
      </div>
    )}
  </div>


  {popup && (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="rounded-2xl shadow-lg flex justify-center items-center bg-white w-[40%] relative">
        <div>
          

          <p
            className="text-2xl mt-4 pr-4 justify-end  rounded-full flex items-center  cursor-pointer "
            onClick={closepopup}
            >
            x
          </p>
            
          <img
            src={dealcart}
            alt=""
            className="flex justify-center mt-4 mx-auto"
          />
          <p className="text-2xl font-semibold mt-2">
            Item kharidnay ke liye login kijiye
          </p>
          <p className="text-gray-500 mt-4">Phone Number</p>
          <input
            type="text"
            placeholder="03333333333"
            className="font-semibold border rounded-lg w-96 focus:outline-none text-gray-800 text-[1.1rem] border-yellow-400 p-2"
            ref={inputRef}
          />
          <br />
          <button className="mb-4 bg-blue-600 items-center p-2 w-96 rounded-2xl mt-6"
          onClick={sendToOtp}>
            Login Karien
          </button>
        </div>
      </div>
    </div>
  )}
</>


    

  )
}

export default Singlebeverages