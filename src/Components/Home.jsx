import React from "react";
import "./Common.css";

function Home() {
  return (
    <div className="img bg-no-repeat h-[50vh] sm:h-[90vh] flex  bg-cover  bg-center ">
      <div className="text-center  flex flex-col gap-2 md:gap-[50px] m-auto justify-center items-center">
        <h1 className="m-auto leading-[35px] sm:leading-[60px] md:leading-[90px] text-white font-extrabold  text-[35px] sm:text-[50px] md:text-[80px]">
          Journey with Confidence <br />{" "}
          <span className="text-[#03ff2d]">Migrate</span> with Us
        </h1>
        <p className="text-[15px] px-[20px] md:px-[150px] sm:text-[18px] text-white text-justify sm:text-center font-normal leading-[22px] sm:leading-[30px]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate a
          officiis nisi fugiat? Sed dipisicing elit. Voluptate a officiis nisi
          fugctetur adipisicing elit. Voluptate dipisicing elit. Voluptate a
          officiis nisi fug a officiis nisi fugiat? Sed q quidem eos at exerc
          iste!
        </p>
        <button className="bg-[#1bf40b]  hover:bg-green-600 text-white first-line: md:font-medium text-[14px] md:text-[18px] rounded-full px-[7px] md:px-[15px] py-[5px] md:py-[10px]">
          Learn more ➔
        </button>
      </div>
    </div>
  );
}

export default Home;
