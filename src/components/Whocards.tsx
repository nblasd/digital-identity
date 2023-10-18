import React from "react";
import Image from "next/image";

interface cardTypess {
  h1tag: string;
  para0: string;
  para1: string;
  para2: string;
  para3: string;
}

const Whocards: React.FC<cardTypess> = (props) => {
  return (
    <div className="down-inner">
      <h1 className="whoh1">{props.h1tag}</h1>
      <div className="w-[80%] flex gap-3 flex-col justify-center">
        <div className="flex items-center justify-between">
          <p className="cursor-pointer">{props.para0}</p>
          <Image
            src={"/tickicon.png"}
            alt="this is icon"
            width={20}
            height={20}
          />
        </div>
        <div className="flex items-center justify-between">
          <p className="cursor-pointer">{props.para1}</p>
          <Image
            src={"/tickicon.png"}
            alt="this is icon"
            width={20}
            height={20}
          />
        </div>
        <div className="flex items-center justify-between">
          <p className="cursor-pointer">{props.para2}</p>
          <Image
            src={"/tickicon.png"}
            alt="this is icon"
            width={20}
            height={20}
          />
        </div>
        <div className="flex items-center justify-between">
          <p className="cursor-pointer">{props.para3}</p>
          <Image
            src={"/tickicon.png"}
            alt="this is icon"
            width={20}
            height={20}
          />
        </div>
      </div>
    </div>
  );
};

export default Whocards;
