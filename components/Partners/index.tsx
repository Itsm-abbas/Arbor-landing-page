import Image from "next/image";
import React from "react";

const Partners = () => {
  const movies = [
    {
      img: "/partner_1.svg",
      name: "Kain Smith",
      title: "Synthetix",
    },
    {
      img: "/partner_2.svg",
      name: "Lara Dutt",
      title: "Mapel",
    },
    {
      img: "/partner_3.svg",
      name: "Jay Patel",
      title: "Barnbridge",
    },
    {
      img: "/partner_4.svg",
      name: "Andrew Peark",
      title: "Tribe",
    },
  ];
  return (
    <div className="p-0 w-full h-auto flex flex-col items-center main_5 px-8 md:px-28 py-16 font-sifonn">
      <div className="w-full md:w-1/2 text-start md:text-center">
        <h3 className="uppercase text-lightgreen2-light mb-6 leading-6 tracking-[0.5rem] text-sm">
          Partners
        </h3>
        <div className="text-5xl md:text-6xl">We're in good company</div>
      </div>
      <div className="mt-28 md:mt-40  grid grid-cols-1 grid-rows-1">
        <div className="container flex  w-full overflow-x-scroll ">
          {movies.map((src) => (
            <div className="w-[280px] h-[220px] md:w-[350px] flex-shrink-0 rounded-xl p-8 border border-[#18AC00]  shadow-2xl backdrop-blur-md mr-4">
              <Image
                src={src.img}
                className="bg-lightgreen2-light  rounded-full "
                width={60}
                height={60}
              />
              <h2 className="text-3xl mt-2">{src.name}</h2>
              <h4>Synthetix</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
