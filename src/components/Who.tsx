import React from "react";
import { whoPara, whoCardData } from "@/statics/statics";
import Whocards from "./Whocards";

export default function Who() {
  return (
    <main id="about">
      <div className="main-who">
        <div className="upper-who">
          <h1 className="serviceh1">Who Are We</h1>
          <p className="text-[#7E8299] max-w-[1000px]">{whoPara[0]}</p>
          <button className="btn">Read More</button>
        </div>
        <div className="down-who">
          {whoCardData.map((data, index) => (
            <Whocards
              key={index}
              h1tag={data.h1tag}
              para0={data.para0}
              para1={data.para1}
              para2={data.para2}
              para3={data.para3}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
