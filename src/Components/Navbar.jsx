import React, { useEffect, useState } from 'react'
import { MdFlight } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { TfiMenu } from "react-icons/tfi";
import { TbMessage } from "react-icons/tb";
const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav=()=>{
        setNav(!nav)
    }
    useEffect(()=>{
        handleNav()
    },[])
  return (
  <div className='text-white flex justify-between items-center h-24 max-w-[1540px] mx-auto px-4 '>
    <a href="#"><div className=' w-fit flex text-[25px] sm:text-4xl font-extrabold text-green-900 '><MdFlight className='rotate-12 text-[#03ff2d] mt-[5px] sm:mt-0 '/> RouteX</div></a>
    <ul className='hidden md:flex text-[18px] text-green-900 font-semibold cursor-pointer '>
        <li className='p-4'>HOME</li>
        <li className='p-4'>ABOUT US</li>
        <li className='p-4'>STORY</li>
        <li className='p-4'>VISA</li>
        <li className='p-4'>BLOG</li>
        <li className='p-4'>PAGE</li>
        <li className='p-4'>CONTACT</li>
      
    </ul>
    <div className='text-black flex gap-[4px] sm:gap-2'><span><TbMessage className='text-[#03ff2d] opacity-0 xs:opacity-100 mt-[8px] sm:mt-[10px] text-[20px] sm:text-[30px]'/></span><div><div className='text-gray-500 cursor-pointer text-[10px] xs:text-[13px]'>Need help?</div><div className='font-extrabold text-gray-700 cursor-pointer text-[10px] xs:text-[15px]'>(333)245-430</div></div></div>
   
    <div onClick={handleNav} className='block md:hidden'>
        {!nav? <IoClose className='text-black'  size={30}/> : <TfiMenu className='text-black' size={20} />}
        
    </div>
    <div className={!nav ? 'fixed left-0 top-0 w-[60%] border-r border-r-gray-900  h-full bg-white ease-in-out duration-500 ' : 'fixed left-[-100%]  '}>
    <div className='w-fit  flex text-3xl font-extrabold text-green-900 m-4 text-[20px] '><MdFlight className='rotate-12 text-[#03ff2d] mt-[7px]'/> RouteX</div>
        <ul className=' uppercase p-7 mt-6 cursor-pointer text-black'>
        <li onClick={handleNav} className='p-4 border-b border-b-gray-700'>HOME</li>
        <li  onClick={handleNav} className='p-4 border-b border-b-gray-700'>ABOUT US</li>
        <li  onClick={handleNav} className='p-4 border-b border-b-gray-700'>STORY</li>
        <li  onClick={handleNav} className='p-4 border-b border-b-gray-700'>VISA</li>
        <li  onClick={handleNav} className='p-4 border-b border-b-gray-700'>BLOG</li>
        <li  onClick={handleNav} className='p-4 border-b border-b-gray-700'>PAGE</li>
        <li  onClick={handleNav} className='p-4 border-b border-b-gray-700'>CONTACT</li>
        </ul>
    </div>
  </div>
  )
}

export default Navbar