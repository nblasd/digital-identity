import React from "react";
import Image from "next/image";
import { footerScoialIcons as icons } from "@/statics/statics";
export default function Footer() {
  return (
    <main>
      <div className="main-footer">
        <div className="inner-footer">
          {/* first col */}
          <div className="flex flex-col gap-10 items-center justify-center">
            <h1 className="footerh1">Get In Touch</h1>
            <button className="btn">
              Book a Session{" "}
              <Image src={"/btn.png"} alt="btn" width={24} height={24}></Image>
            </button>
            <div className="flex items-center gap-5 justify-between">
              {icons.map((i, index) => (
                <Image
                  key={index}
                  src={i.src}
                  alt={i.alt}
                  width={24}
                  height={24}
                ></Image>
              ))}
            </div>
          </div>
          {/* second col */}
          <div className="flex flex-col items-center gap-5 justify-between">
            <h1 className="footerh1">Company Info</h1>
            <p className="text-white text-sm">About Us</p>
            <p className="text-white text-sm">Carrier</p>
            <p className="text-white text-sm">We are hiring</p>
            <p className="text-white text-sm">Blog</p>
          </div>
          {/* tird col */}
          <div className="flex flex-col items-center gap-5 justify-between">
            <h1 className="footerh1">Resources</h1>
            <p className="text-white text-sm">IOS & Androids</p>
            <p className="text-white text-sm">Watch a Demo</p>
            <p className="text-white text-sm">Partners</p>
          </div>
        </div>
      </div>
    </main>
  );
}
