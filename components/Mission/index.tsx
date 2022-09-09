import Image from "next/image";
import React from "react";

const Mission = () => {
  return (
    <div className="p-0 w-full h-auto main_4 bg-cover px-8 md:px-28 py-16 bg-no-repeat font-sifonn">
      <h3 className="uppercase text-lightyellow-light mb-6 leading-6 tracking-[0.5rem] text-sm">
        Mission
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-40 leading-7  ">
        <div className="text-5xl md:text-6xl">
          Bringing <br /> DAOs access <br /> to credit
        </div>
        <div>
          <p className="mb-8 text-[#FFFFFF] opacity-70">
            Want to learn more about what we do? Stay up to date on our mission
            and progress through our blog.
          </p>
          <button className=" text-sm pt-4 pb-3 pr-12 pl-8 uppercase border-2 border-transparent bg-transparent text-lightyellow-light border-[#FFC83A] hover:bg-[#FFC83A] hover:text-black transition-all duration-300 rounded-br-3xl">
            READ blog
          </button>
        </div>
      </div>
      <div className="mt-36 md:mt-56 py-10 opacity-70 leading-8 text-center rounded-tl-3xl px-12 md:px-16 border border-white">
        Credit is a powerful tool. It can supercharge growth and provide
        financial well-being. DAOs have the potential to change the world and
        Arbor is providing them the financial tooling to do just that.
      </div>
    </div>
  );
};

export default Mission;
