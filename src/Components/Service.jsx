import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import "./Common.css";
import { FaGlobeAmericas } from "react-icons/fa";
import { MdLibraryBooks } from "react-icons/md";
import { HiTicket } from "react-icons/hi2";

function Service() {
  return (
    <div className=" simg flex  flex-col px-[20px] md:px-[150px] py-[40px] md:py-[100px]">
      <div className="flex  flex-col ">
        <div className="flex m-auto md:m-0 font-medium text-green-900 text-[16px] sm:text-[25px]">
          OUR SERVICES{" "}
          <span className="mt-[4px]  ml-[8px] text-[#03ff2d]">
            <FaTelegramPlane />
          </span>
        </div>{" "}
        <div className="flex flex-col md:flex-row justify-between">
          <h1 className="text-green-900 m-auto md:m-0 text-[30px] sm:text-[60px] text-center md:text-left font-bold">
            Adventure Unleashed <br /> Discover Your Next
          </h1>
          <div className="flex flex-row gap-2 m-auto md:m-0 md:mt-[100px]  ">
            <div className="h-fit border-[4px] text-green-900 hover:bg-green-900 hover:text-white border-green-900 rounded-[50px] px-2 sm:px-4  cursor-pointer p-[10px] w-fit">
              ➔
            </div>
            <div className="rotate-180 mt-[1px] hover:bg-green-900 hover:text-white text-green-900 border-green-900 cursor-pointer px-2 sm:px-4 border-[4px] rounded-full p-[10px]  h-fit w-fit">
              ➔
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-[20px] md:gap-[40px] mt-[50px]">
        <div className="flex flex-col rounded-[10px] p-[20px] md:p-[60px] gap-5 md:gap-10 text-center bg-white items-center">
          <div className="text-[80px] text-[#03ff2d]">
            <FaGlobeAmericas />
          </div>
          <h1 className="text-green-900 font-medium text-[22px]">Food and Wine Tours</h1>
          <p className="text-[15px] text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            deleniti ea vitae magni itaque? Tenetur vero exercitationem sapiente
            possimus veniam totam earum sed quas numquam. Eius assumenda
            voluptatum quidem harum!
          </p>
        </div>
        <div className="flex flex-col rounded-[10px] p-[20px] md:p-[60px] gap-5 md:gap-10 text-center bg-white items-center">
          <div className="text-[80px] text-[#03ff2d]">
            <MdLibraryBooks />
          </div>
          <h1 className="text-green-900 font-medium text-[22px]">Travel Oppurtunities</h1>
          <p className="text-[15px] text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            quibusdam maxime accusamus minima mollitia beatae exercitationem
            quia aliquam excepturi. Fugiat sequi excepturi modi facilis quod
            voluptatibus debitis libero voluptate voluptatem.
          </p>
        </div>
        <div className="flex flex-col rounded-[10px] p-[20px] md:p-[60px] gap-5 md:gap-10 text-center bg-white items-center">
          <div className="text-[80px] text-[#03ff2d]"><HiTicket /></div>
          <h1 className="text-green-900 font-medium text-[22px]">Solo Travel Planning</h1>
          <p className="text-[15px] text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae rem sint temporibus accusantium, illo voluptas alias reiciendis! Atque veritatis fugiat animi cumque non! Porro nisi nesciunt ducimus reiciendis quidem vel!</p>
        </div>
      </div>
    </div>
  );
}

export default Service;
