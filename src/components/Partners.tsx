import React from "react";
import Image from "next/image";
import { partnersLogos as logos } from "@/statics/statics";
export default function Partners() {
  return (
    <main>
      <div className="main-p">
        <div className="inner-p">
          <h1 className="ph1">Our Partners</h1>
          <p className="pp">
            We bring together a team of 1st class world partners to provide our
            clients with top grade services in all aspects of our solutions
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-10">
            {logos.map((logo, index) => (
              <Image
                key={index}
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
              ></Image>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
