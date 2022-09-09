import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaTwitter, FaGithub, FaDiscord } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="w-full  flex px-8 md:px-28 items-center bg-[#021017] text-white font-sifonn ">
      <div className="w-full py-8  md:py-4  flex flex-col md:flex-row justify-between items-center z-50 border-gray-600   border-t-[0.5px] ">
        <div className="mb-4">
          <Image src={"/footer.svg"} height={40} width={120} />
        </div>
        <nav className="mb-6 md:mb-0 w-full md:w-80 md:ml-24 font-bold flex flex-col md:flex-row items-center justify-between text-xs">
          <Link href={"/"}>
            <a className="uppercase mb-2 md:mb-0 anchor anchor-mbl">about</a>
          </Link>
          <Link href={"/"}>
            <a className="uppercase mb-2 md:mb-0 anchor anchor-mbl">
              community
            </a>
          </Link>
          <Link href={"/"}>
            <a className="uppercase  anchor anchor-mbl">documentation</a>
          </Link>
        </nav>
        <div className="flex">
          <FaFacebook className="mr-2 text-[#0057FF] text-xl md:text-base" />
          <FaGithub className="mr-2 text-xl md:text-base" />
          <FaTwitter className="mr-2 text-[#00C2FF] text-xl md:text-base" />
          <FaDiscord className="text-[#741EFF] text-xl md:text-base" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
