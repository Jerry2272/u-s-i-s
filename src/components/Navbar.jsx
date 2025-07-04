import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars } from 'react-icons/fa6';
import logo from "../assets/u-s-i-s-logo.png";

export const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const NavItems = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about" },
    { name: "Gallery", link: "/about" },
    { name: "Contact Us", link: "https://wa.me/+2349161729605" },
  ];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleNav = () => setNav(!nav);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-[#1A1A1A] shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center px-5 md:px-[100px] py-4 md:py-2">
        <div className="flex justify-between items-center w-full md:w-auto">
          <Link to="/">
            <img
              src={logo}
              alt="USIS Logo"
              className="w-[80px] md:w-[110px]"
            />
          </Link>
           <FaBars
                    
                    className="block md:hidden text-2xl text-white cursor-pointer"
                  />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {NavItems.map((item, i) => (
            <NavLink
              key={i}
              to={item.link}
              className={({ isActive }) =>
                `${isActive ? "text-[#F6F6F6]" : "text-[#F6F6F6]"} 
                 text-[16px] font-semibold transition-all 
                 hover:text-[#ffffffcc] duration-200 ${
                   item.name === "Contact With Me"
                     ? "border-[2px] border-[#F6F6F6] rounded px-5 py-1 hover:bg-white hover:text-[#1A1A1A]"
                     : ""
                 }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Mobile Nav - Slide In from Right */}
      <div
        className={`fixed top-0 right-0 h-[100vh] w-[75%] max-w-xs bg-[#1A1A1A] z-50 transform ${
          nav ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden flex flex-col p-4 `}
      >
        <button
          onClick={toggleNav}
          className="text-white text-2xl self-end mb-4"
        >
          ✕
        </button>
        {NavItems.map((item, i) => (
          <Link
            key={i}
            to={item.link}
            onClick={() => setNav(false)}
            className="text-lg font-semibold text-white py-3 border-b border-white"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </header>
  );
};
