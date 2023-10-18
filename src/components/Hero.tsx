import React from "react";

import Image from "next/image";
export default function Hero() {
  return (
    <main id="home">
      <div className="main-hero">
        <div className="inner-hero">
          <div className="fhero-div">
            <h1 className="h1font">
              ...Your one stop shop for{" "}
              <span className="text-[#ACE5FF]">
                digital identity, verification
              </span>{" "}
              & <span className="text-[#ACE5FF]">cutting edge technology </span>{" "}
              solutions
            </h1>
            <button className="btn">
              Book a Session{" "}
              <Image src={"/btn.png"} alt="btn" width={24} height={24}></Image>
            </button>
          </div>
          <div className="mix-blend-lighten">
            <img
              className="animate-pulse"
              src="/hand.png"
              alt="this is a hand picture"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
