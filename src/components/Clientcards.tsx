import React from "react";
import Image from "next/image";

interface propTypes {
  h1: string;
  p: string;
  smallh1: string;
  smallp1: string;
  smallp2: string;
}
const Clientcards: React.FC<propTypes> = (props) => {
  return (
    <div className="each-card">
      <h1 className="eachh1">{props.h1}</h1>
      <p className="eachp">{props.p}</p>
      <div className="flex items-center justify-between w-[165px]">
        <Image
          src={"/profile.png"}
          alt="profile pic"
          width={50}
          height={50}
        ></Image>
        <div className="flex flex-col items-center justify-center">
          <h1 className="smallh1">{props.smallh1}</h1>
          <p className="smallp1">{props.smallp1}</p>
          <p className="smallp2">{props.smallp2}</p>
        </div>
      </div>
    </div>
  );
};

export default Clientcards;
