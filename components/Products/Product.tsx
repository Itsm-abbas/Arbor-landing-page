import Image from "next/image";

const Product = () => {
  return (
    <div className="p-0 w-full h-auto main_2 bg-cover px-8 md:px-28 py-16 bg-no-repeat font-sifonn">
      <h3 className="uppercase text-lightgreen-light mb-6 leading-6 tracking-[0.5rem] text-sm">
        products
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-28 leading-7  ">
        <div className="text-5xl md:text-6xl">
          Bonds <br /> For DAOs
        </div>
        <div>
          <p className="mb-8 text-[#FFFFFF] opacity-70">
            Our products are built with DAOs in mind and created through
            collaboration with DeFi natives.
          </p>
          <button className=" text-sm pt-4 pb-3 pr-12 pl-8 uppercase border-2 border-transparent bg-transparent text-lightgreen-light border-[#52C48D] hover:bg-[#52C48D] hover:text-black transition-all duration-300 rounded-br-3xl">
            LEARN MORE
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-40 md:mt-60">
        <div className="flex p-10 border rounded-bl-3xl opacity-90 shadow-lg border-gray-600">
          <div className="mr-4">
            <Image src={"/icon_1.svg"} width={70} height={60} />
          </div>
          <div>
            <h2 className="text-3xl">Convertible</h2>
            <p className=" opacity-70">Convertible bonds built for DeFi.</p>
          </div>
        </div>
        <div className="flex p-10 border rounded-tr-3xl opacity-90 shadow-lg border-gray-600">
          <div className="mr-4">
            <Image src={"/icon_2.svg"} width={70} height={60} />
          </div>
          <div>
            <h2 className="text-3xl">Simple</h2>
            <p className=" opacity-70">Simple bonds built for DeFi.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
