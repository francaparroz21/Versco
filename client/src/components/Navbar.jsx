import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="text-white w-full shadow-md ">
      <div className="max-w-7xl mx-5 px-4 py-3 flex justify-between items-center">
        
        {/* Logo */}
        <img
          src={process.env.PUBLIC_URL + "/images/versco_logo.png"}
          alt="logo"
          className="h-24"
        />

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium">
          <li>
            <Link to="/" className="hover:text-[#8ae083] transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/shop" className="hover:text-[#8ae083] transition">
              Shop
            </Link>
          </li>
          <li>
            <Link to="/cart" className="hover:text-[#8ae083] transition">
              Cart
            </Link>
          </li>
          <li>
            <Link to="/login" className="hover:text-[#8ae083] transition">
              Login
            </Link>
          </li>
        </ul>

        {/* Hamburger Icon */}
        <div
          className="md:hidden cursor-pointer transition-transform duration-300"
          onClick={toggleMenu}
        >
          {isOpen ? (
            <IoClose size={30} className="text-black transition duration-300" />
          ) : (
            <RxHamburgerMenu size={28} className="text-black transition duration-300" />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-60 py-6" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 font-medium">
          <li>
            <Link
              to="/"
              onClick={closeMenu}
              className="hover:text-[#8ae083] transition"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/shop"
              onClick={closeMenu}
              className="hover:text-[#8ae083] transition"
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              onClick={closeMenu}
              className="hover:text-[#8ae083] transition"
            >
              Cart
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              onClick={closeMenu}
              className="hover:text-[#8ae083] transition"
            >
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
