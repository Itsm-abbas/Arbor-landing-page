import Image from "next/image";
import React from "react";

const Features = () => {
  return (
    <div className="p-0 w-full h-auto main_3 bg-cover px-8 md:px-28 py-6 bg-no-repeat font-sifonn">
      <h3 className="uppercase text-lightblue-light mb-6 leading-6 tracking-[0.5rem] text-sm">
        Features
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-28 leading-7  ">
        <div className="text-5xl md:text-6xl">
          Tailor-made <br />
          for DAOs.
        </div>
        <div>
          <p className="mb-8 text-[#FFFFFF] opacity-70">
            We’ve used financial engineering to create features tailor-made for
            DAOs.
          </p>
          <button className=" text-sm pt-4 pb-3 pr-12 pl-8 uppercase border-2 border-transparent bg-transparent text-lightblue-light border-[#00B2FF] hover:bg-[#00B2FF] hover:text-black transition-all duration-300 rounded-br-3xl">
            READ DOCUMENTATION
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1  md:grid-cols-3 md:grid-rows-2 gap-4 mt-28 md:mt-40">
        {/* Box 1 */}
        <div className="p-8 border border-gray-600 rounded-tl-3xl backdrop-blur-sm shadow-lg">
          <Image src={"/main_2_icon_1.svg"} width={34} height={29} />
          <h2 className="text-2xl mt-2">Borrower-friendly</h2>
          <p className="opacity-70">
            No liquidations. <br /> 0 stress.
          </p>
        </div>
        {/* Box 2 */}

        <div className="p-8 border border-gray-600 backdrop-blur-sm shadow-lg">
          <Image src={"/main_2_icon_2.svg"} width={34} height={29} />
          <h2 className="text-2xl mt-2">Flexible</h2>
          <p className="opacity-70">
            All collateral types <br /> supported.
          </p>
        </div>
        {/* Box 3 */}

        <div className="p-8 border border-gray-600 rounded-tr-3xl backdrop-blur-sm shadow-lg">
          <Image src={"/main_2_icon_3.svg"} width={34} height={29} />
          <h2 className="text-2xl mt-2">Assured</h2>
          <p className="opacity-70">
            Guaranteed liquidity <br /> for borrowers.
          </p>
        </div>
        {/* Box 4 */}

        <div className="p-8 border border-gray-600 rounded-bl-3xl backdrop-blur-sm shadow-lg">
          <Image src={"/main_2_icon_4.svg"} width={34} height={29} />
          <h2 className="text-2xl mt-2">Customizable</h2>
          <p className="opacity-70">
            Tailored to fit your <br /> financing needs.
          </p>
        </div>
        {/* Box 5 */}

        <div className="p-8 border border-gray-600 ">
          <Image src={"/main_2_icon_5.svg"} width={34} height={29} />
          <h2 className="text-2xl mt-2">Predictable</h2>
          <p className="opacity-70">
            Fixed rates, fixed term <br /> length, fixed collateral.
          </p>
        </div>
        {/* Box 6 */}

        <div className="p-8 border border-gray-600 rounded-br-3xl backdrop-blur-sm shadow-lg">
          <Image src={"/main_2_icon_6.svg"} width={34} height={29} />
          <h2 className="text-2xl mt-2">Secure</h2>
          <p className="opacity-70">
            Audited oracle-less <br /> infrastructure.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
