import Image from "next/image";
import React from "react";
const Contact = () => {
  return (
    <div className="bg-[#123336] p-0 w-full h-auto main_6 bg-cover px-8  md:px-28 py-28 bg-no-repeat font-sifonn relative">
      <img
        src={"/img_6.svg"}
        className="object-cover w-full h-40 xl:h-60 2xl:h-80 absolute -bottom-3 left-0 right-0 z-10"
      />
      <img
        src={"/img_7.svg"}
        className="w-[572px] h-[418px] md:w-[672px] md:h-[518px] 2xl:h-[850px] 2xl:w-[850px] bottom-1 absolute right-1 md:right-6"
      />
      <h3 className="uppercase text-[#52C48D] mb-6 leading-6 tracking-[0.5rem] text-sm">
        Contact US
      </h3>
      <div className="grid grid-cols-2 gap-40 leading-7 ">
        <div className="text-5xl md:text-6xl text-white">
          Feeling Interested?
        </div>
      </div>
      {/* Buttons */}
      <div className="mt-16 mb-96 md:mb-28 2xl:mb-56">
        <button className="text-white text-sm pt-4 pb-3 pr-6 md:pr-12 pl-8 uppercase mr-2 md:mr-4 border-2 border-transparent bg-[#1F5B61] rounded-tl-3xl mb-4">
          GET ACCESS
        </button>
        <button className="text-black text-sm pt-4 pb-3 pr-6 md:pr-12 pl-8 uppercase border-2 border-transparent bg-[#52C48D] rounded-br-3xl">
          LEARN MORE
        </button>
      </div>
    </div>
  );
};

export default Contact;
