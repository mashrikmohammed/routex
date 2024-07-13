import React from 'react'

function Bottom() {
  return (
    <div className=' bg-[#003600] text-gray-400 flex flex-col sm:flex-row py-[30px]  px-[20px] md:px-[60px] justify-between gap-5 md:gap-0'>
        <div>©RRDevs 2024|All Rights Reserved</div>
        <div className='flex flex-col xs:flex-row gap-4 text-[12px] sm:text-[18px]'>
            <h1 className='cursor-pointer hover:text-gray-500'>Terms & Condition</h1>
            <h1  className='cursor-pointer hover:text-gray-500'>Privacy Policy</h1>
            <h1  className='cursor-pointer hover:text-gray-500'>Contact Us</h1>
        </div>
    </div>
  )
}

export default Bottom