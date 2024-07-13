import React from "react";
import "./Common.css";
import about from "./about.png";
import { FaTelegramPlane } from "react-icons/fa";
import { IoIosCheckbox } from "react-icons/io";

function About() {
  return (
    <div className="flex items-center flex-col md:flex-row gap-5 md:gap-[100px] justify-between px-[20px] md:px-[150px] py-[40px] md:py-[100px] ">
      <div className="w-[50%]">
        <img src={about} alt="" />
      </div>
      <div className="w-full md:w-[50%] flex flex-col items-center justify-center ">
        <div className="flex   gap-[20px] flex-col">
          <h1 className="flex m-auto md:m-0 font-medium text-green-900 text-[16px] sm:text-[25px]">
            ABOUT US{" "}
            <span className="mt-[4px]  ml-[8px] text-[#03ff2d]">
              <FaTelegramPlane />
            </span>{" "}
          </h1>{" "}
          <h2 className="text-green-900 m-auto md:m-0 text-[30px] sm:text-[60px] text-center md:text-left font-bold">
            Unknown Wanderlust <br /> Your Journey into
          </h2>
          <p className="w-[90%] text-gray-600 flex-wrap m-auto md:m-0 text-justify md:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
            adipisci ab. Est unde, tempora quos corporiuibusdam delectus alias
            recusandae repellat fugiat adipisci perferendis. Odit quos veritatis
            quidem! Sequi!
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-5 sm:gap-[50px] mt-[40px]">
          <div>
            <h1 className="flex gap-1 text-[18px] sm:text-[24px] font-medium text-green-900">
              <span className="mt-[5px] text-[#03ff2d]">
                <IoIosCheckbox />
              </span>
              Safety Guides
            </h1>
            <p className="text-gray-600">
              Lorem ipsum dolor sit, amet conntore provident? sed expedita
              quaerat.
            </p>
          </div>
          <div>
            <h1 className="flex gap-1  text-[18px] sm:text-[24px] font-medium text-green-900 ">
              {" "}
              <span className="mt-[5px] text-[#03ff2d]">
                <IoIosCheckbox />
              </span>
              Passport Assistance
            </h1>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur ad, voluptates.
            </p>
          </div>
        </div>
        <button className="mt-[40px] bg-[#1bf40b] hover:bg-green-600 text-white first-line: md:font-medium text-[14px] md:text-[18px] rounded-full px-[7px] md:px-[15px] py-[5px] md:py-[10px]">
          Learn more ➔
        </button>
      </div>
    </div>
  );
}

export default About;
