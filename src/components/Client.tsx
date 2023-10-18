"use client";
import React from "react";
import { useState } from "react";
import { clientData } from "@/statics/statics";
import Clientcards from "./Clientcards";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

export default function Client() {
  const controls = useAnimation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      controls.start({ x: -350 * (currentIndex - 1) });
    }
  };
  const handleNextClick = () => {
    if (currentIndex < clientData.length - 1) {
      setCurrentIndex(currentIndex + 1);
      controls.start({ x: -350 * (currentIndex + 1) });
    }
  };
  return (
    <main>
      <div className="main-client">
        <div className="inner-client">
          <h1 className="clh1">Each and every client is important.</h1>
          <p className="text-2xl font-semibold text-[#717074]">
            Our Success Stories
          </p>
          <div className="main-clcard">
            <motion.div
              animate={controls}
              drag="x"
              dragConstraints={{ right: 0, left: -1060 }}
              className="inner-clcard"
            >
              {clientData.map((d, index) => (
                <Clientcards
                  key={index}
                  h1={d.h1}
                  p={d.p}
                  smallh1={d.smallh1}
                  smallp1={d.smallp1}
                  smallp2={d.smallp2}
                />
              ))}
            </motion.div>
          </div>
          {/* button section */}

          <div className="flex items-center gap-5 justify-between">
            <Image
              onClick={handlePrevClick}
              className="cursor-pointer"
              src={"/leftarrow.png"}
              alt="arrow"
              width={20}
              height={20}
            ></Image>
            <Image src={"/dot.png"} alt="dot" width={7} height={7}></Image>
            <Image src={"/dot.png"} alt="dot" width={7} height={7}></Image>
            <Image src={"/dot.png"} alt="dot" width={7} height={7}></Image>
            <Image
              onClick={handleNextClick}
              className="cursor-pointer"
              src={"/rightarrow.png"}
              alt="arrow"
              width={20}
              height={20}
            ></Image>
          </div>
        </div>
      </div>
    </main>
  );
}
