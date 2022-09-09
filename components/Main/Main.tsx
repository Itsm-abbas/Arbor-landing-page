import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { GiSplitCross } from "react-icons/gi";
const Main = () => {
  const [istoggle, setIstoggle] = useState(false);

  return (
    <div className="p-0 w-full h-[80vh]  md:h-[120vh] bg-[url('/main_img.png')] bg-cover bg-no-repeat font-sifonn">
      <div className="py-6 px-8 flex justify-between items-center  ">
        <div>
          <Image
            src={"/icon.svg"}
            height={42}
            width={38}
            className="transform hover:-rotate-180 transition-all duration-200"
          />
        </div>
        {/* For desktop */}
        <nav className="hidden w-80 ml-24 font-bold  md:flex items-center justify-between text-xs">
          <Link href={"/"}>
            <a className="uppercase anchor">about</a>
          </Link>
          <Link href={"/"}>
            <a className="uppercase anchor">community</a>
          </Link>
          <Link href={"/"}>
            <a className="uppercase anchor">documentation</a>
          </Link>
        </nav>
        <div className="hidden md:flex">
          <button className="pt-4 pb-3 pr-12 pl-8 uppercase border-2 border-[#1F5B61] rounded-br-3xl hover:bg-[#1F5B61] hover:text-white transition-all duration-300">
            get access
          </button>
        </div>
        {/* For mobile screen */}
        <nav
          className={`${
            istoggle ? "left-0" : "-left-96"
          } fixed z-20 top-0  bottom-0 w-80 bg-[#113235] font-bold  md:hidden flex flex-col items-center  py-20 text-white text-lg transition-all duration-500`}
        >
          <a className="uppercase mb-3 anchor anchor-mbl" href="">
            about
          </a>
          <a className="uppercase mb-3 anchor anchor-mbl" href="">
            community
          </a>
          <a className="uppercase mb-3 anchor anchor-mbl" href="">
            documentation
          </a>
          <div className="mt-10">
            <button className="pt-4 pb-3 pr-12 pl-8 uppercase border-2 rounded-br-3xl">
              get access
            </button>
          </div>
        </nav>
        {/* Toggling button */}
        <div className=" md:hidden ">
          {!istoggle ? (
            <button
              className="transition-all duration-500"
              onClick={() => setIstoggle(!istoggle)}
            >
              <Image src={"/coolicon.svg"} width={39} height={26} />
            </button>
          ) : (
            <button
              className="text-3xl transition-all duration-500"
              onClick={() => setIstoggle(!istoggle)}
            >
              <GiSplitCross />
            </button>
          )}
        </div>
      </div>
      <div className="flex-grow flex flex-col  justify-center items-center text-center">
        <div className="w-full md:w-1/2">
          <div className="text-4xl leading-10 md:text-6xl text-[#1F5B61] md:leading-[70px] mt-10 mb-6">
            Borrow With No <br /> Liquidations Against <br />
            <span className="text-[#52C48D]">$ROOK</span>
          </div>
          <div className="px-12 md:px-20">
            Arbor enables creditworthy DAOs to obtain fixed-rate financing using
            their project tokens as collateral.
          </div>
          {/* Buttons */}
          <div className="mt-8 ">
            <button className="text-white text-sm pt-4 pb-3 pr-8 md:pr-12 pl-8 uppercase mr-4 border-2 border-transparent bg-[#1F5B61] rounded-tl-3xl">
              GET ACCESS
            </button>
            <button className="text-black text-sm pt-4 pb-3 pr-8 md:pr-12 pl-8 uppercase border-2 border-transparent bg-[#52C48D] rounded-br-3xl">
              LEARN MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
