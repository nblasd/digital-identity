import React from "react";
import Cards from "./Cards";
import { cards } from "@/statics/statics";

export default function Services() {
  return (
    <main id="services">
      <div className="main-service">
        <div className="inner-service">
          <h1 className=" serviceh1 ">Services we offer</h1>
          <p className="text-white mt-2 ">
            Our solutions are all about simplification and optimisation.
          </p>
          <button className="btn mt-10">See Product Overview</button>
          <div className="cards">
            {cards.map((d, index) => (
              <Cards key={index} title={d.h} para={d.p} />
            ))}
          </div>
          ;
        </div>
      </div>
    </main>
  );
}
