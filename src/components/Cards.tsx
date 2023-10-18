import React from "react";
import Image from "next/image";

type postProps = {
  title: string;
  para: string;
};

const Cards: React.FC<postProps> = (props) => {
  return (
    <div className="bg-white hover:text-white hover:bg-[#0D91CB] hover:scale-105 duration-300 max-w-[300px] mt-10 rounded-lg flex items-center justify-center">
      <div className="w-[300px] h-[19rem]  my-5 py-[31.854px] px-[36.405px] flex gap-5 flex-col">
        <Image
          className="border border-white rounded-lg"
          src={"/service-icon.png"}
          alt="this is icon"
          width={63}
          height={63}
        ></Image>
        <h3 className="font-bold cursor-pointer">{props.title}</h3>
        <hr className="w-[30%]   border-2 border-[#D85012]" />
        <p className="cursor-pointer">{props.para}</p>
      </div>
    </div>
  );
};

export default Cards;
