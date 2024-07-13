import React from "react";
import { MdFlight } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { FaAngleRight } from "react-icons/fa";
import happy from './229015979-happy-traveler-woman-holding-turkish-flag-enjoying-colorful-hot-air-balloon-flying-on-blue-sky-in.jpg'
import pica from './download (1).jpeg'
import picb from './download.jpeg'
import picc from './images (1).jpeg'
import picd from './images.jpeg'
import pice from './istockphoto-1363398400-612x612.webp'

function Footer() {
  return (
    <div className="bg-[#003600] border-b-[1px] border-b-gray-600 text-white flex flex-col gap-6 md:gap-1 md:flex-row justify-between px-[20px] md:px-[60px] py-[40px] md:py-[100px]">
     <div className=" flex flex-col gap-5">
     <a href="#"><div className=' w-fit flex text-[25px] sm:text-4xl font-extrabold text-white '><MdFlight className='rotate-12 text-[#03ff2d] mt-[5px] sm:mt-0 '/> RouteX</div></a>
        <p className="w-full md:w-[260px]">Corporate business typically refers to large-scale mansola it enterprises or organizat</p>
        <div className="flex w-fit gap-4"><FaFacebookF/> <FaInstagram /> <FaPinterestP /> <FaLinkedin /></div>
     </div>
     <div className=" flex flex-col gap-2 md:gap-5">
        <h1 className="text-[22px] font-medium">Service Menu</h1>
        <div className="flex  cursor-pointer hover:text-gray-400"> <span className="mt-[3px] text-[#03ff2d]"><TiTick /></span>Mistakes to Avoid</div>
        <div className="flex  cursor-pointer hover:text-gray-400"> <span className="mt-[3px] text-[#03ff2d]"><TiTick /></span>Your Startup</div>
        <div className="flex  cursor-pointer hover:text-gray-400"> <span className="mt-[3px] text-[#03ff2d]"><TiTick /></span> Knew About fonts</div>
        <div className="flex  cursor-pointer hover:text-gray-400"> <span className="mt-[3px] text-[#03ff2d]"><TiTick /></span> Knew About Fonts</div>
     </div>
     <div className=" flex flex-col gap-2 md:gap-5">
     <h1 className="text-[22px] font-medium">Useful Link</h1>
        <div className="flex cursor-pointer hover:text-gray-400"> <span className="mt-[3px] text-[#03ff2d]"><FaAngleRight /></span>Latest News</div>
        <div className="flex  cursor-pointer hover:text-gray-400"> <span className="mt-[3px] text-[#03ff2d]"><FaAngleRight /></span>Careers</div>
        <div className="flex  cursor-pointer hover:text-gray-400"> <span className="mt-[3px] text-[#03ff2d]"><FaAngleRight /></span> General Inquiries</div>
        <div className="flex  cursor-pointer hover:text-gray-400"> <span className="mt-[3px] text-[#03ff2d]"><FaAngleRight /></span> Case Studies</div>
     </div>
     <div>
        <h1 className="text-[22px] font-medium">Gallery</h1>
        <div className="flex flex-col gap-2 mt-[30px]">
            <div className="flex gap-2"><div><img className=" rounded-[10px] w-[100px] sm:w-[120px] h-[60px] sm:h-[100px]" src={happy} alt="" /></div>
            <div ><img className=" rounded-[10px] w-[100px] sm:w-[120px] h-[60px] sm:h-[100px]" src={pica} alt="" /></div>
            <div><img  className=" rounded-[10px] w-[100px] sm:w-[120px] h-[60px] sm:h-[100px]" src={picb} alt="" /></div></div>
            <div className="flex gap-2"><div><img  className=" rounded-[10px] w-[100px] sm:w-[120px] h-[60px] sm:h-[100px]" src={picc} alt="" /></div>
            <div ><img className=" rounded-[10px] w-[100px] sm:w-[120px] h-[60px] sm:h-[100px]" src={picd} alt="" /></div>
            <div ><img className="rounded-[10px] w-[100px] sm:w-[120px] h-[60px] sm:h-[100px]" src={pice} alt="" /></div></div>
        </div>
     </div>
    </div>
  );
}

export default Footer;
