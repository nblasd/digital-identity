"use client";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("white");
  const [textColor, setTextColor] = useState("#014c98");

  useEffect(() => {
    const colorChanger = () => {
      if (window.scrollY >= 90) {
        setColor("#011044");
        setTextColor("white");
      } else {
        setColor("white");
        setTextColor("#014c98");
      }
    };
    window.addEventListener("scroll", colorChanger);
  });

  const clickHandler = () => {
    setNav(true);
  };

  return (
    <main>
      <div
        style={{ backgroundColor: `${color}`, color: `${textColor}` }}
        className="main-nav"
      >
        <div className="inner-nav">
          <div className="first-div">
            <h1 className="logo">LOGO</h1>

            <ul className="flex flex-row gap-10">
              <a href="/#home">
                <li className="nav-links">Home</li>
              </a>

              <a href="/#services">
                <li className="nav-links">Services</li>
              </a>

              <a href="/#about">
                <li className="nav-links">About Us</li>
              </a>
            </ul>
          </div>
          <div className="second-dev">
            <button className="nav-btn">Contact Us →</button>

            <div
              onClick={clickHandler}
              className="block sm:hidden text-[#014c98]"
            >
              <GiHamburgerMenu size={25} />
            </div>
          </div>
        </div>
      </div>

      {/* mobile menu  */}

      <div className={nav ? "nav-truthy" : "nav-falsy"}>
        <div className="mobileNav-inner">
          <div className="ml-5 flex w-[90%] items-center justify-between">
            <h1 className="logo">LOGO</h1>
            <div
              onClick={() => {
                setNav(!nav);
              }}
              className="text-[#014c98]"
            >
              <ImCross size={20} />
            </div>
          </div>

          <ul className="text-[#014c98] flex flex-col ml-5 mt-10 gap-10">
            <a
              onClick={() => {
                setNav(!nav);
              }}
              href="/#home"
            >
              <li>Home</li>
            </a>
            <a
              onClick={() => {
                setNav(!nav);
              }}
              href="/#services"
            >
              <li>Services</li>
            </a>
            <a
              onClick={() => {
                setNav(!nav);
              }}
              href="/#about"
            >
              <li>About Us</li>
            </a>
          </ul>

          <div className="text-[#014c98] ml-5 mt-20">
            <p>
              "Explore the world at your fingertips with our mobile-friendly
              navigation. Navigate seamlessly through our curated content,
              discover exciting new features, and stay connected wherever you
              go. Your journey awaits—tap, swipe, and explore!"
            </p>
          </div>
          <div>
            <hr className="w-[80%] ml-7 border mt-32 border-[#014c98]" />
          </div>
        </div>
      </div>
    </main>
  );
}
