"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header>
        {/* Top Header (Visible on Desktop Only) */}
        <div className="hidden sm:flex items-center justify-between w-full h-[28.8px] bg-[#F5F5F5] px-4 sm:px-10">
          <div className="flex items-center w-[19.2px] h-[19.2px]">
            <Image
              src="/images/Topheaderlogo.svg"
              alt="Top Header Logo"
              width={15.36}
              height={14.38}
            />
          </div>
          <div className="flex items-center gap-6 text-sm font-medium text-[#111111]">
            <div className="flex items-center gap-2">
              <p>
                <Link href={"./Product"}>Find a Store</Link>
              </p>
              <span>|</span>
            </div>
            <div className="flex items-center gap-2">
              <p>
                <Link href={"./Help"}>Help</Link>
              </p>
              <span>|</span>
            </div>
            <div className="flex items-center gap-2">
              <p>
                <Link href={"./Joinus"}>Join Us</Link>
              </p>
              <span>|</span>
              <p>
                <Link href={"./Signup"}>Sign In</Link>
              </p>
            </div>
          </div>
        </div>

        {/* Navbar */}
        <div className="flex items-center justify-between w-full h-[60px] bg-white px-4 sm:px-10">
          {/* Logo */}
          <div className="flex items-center">
            <Link href={"./Hero"}>
              <Image
                src="/images/Logo.svg"
                alt="Logo"
                width={58.85}
                height={20.54}
              />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-[#F5F5F5]"
            >
              ☰
            </button>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden sm:flex items-center space-x-8">
            <ul className="flex items-center space-x-6 text-sm font-medium text-[#111111]">
              <li>New & Featured</li>
              <li>Men</li>
              <li>Women</li>
              <li>Kids</li>
              <li>Sale</li>
              <li>SNKRS</li>
            </ul>
          </nav>

          {/* Search & Icons */}
          <div className="hidden sm:flex items-center gap-4">
            {/* Search Bar */}
            <div className="flex items-center bg-[#F5F5F5] rounded-full px-3 py-1">
              <Image
                src="/images/searchbar.svg"
                alt="Search"
                width={16.72}
                height={16.72}
              />
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent text-sm text-[#CCCCCC] focus:outline-none ml-2 w-20 sm:w-40"
              />
            </div>

            {/* Icons */}
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-9 h-9 bg-[#F5F5F5] rounded-full">
                <Image
                  src="/images/like.svg"
                  alt="Like"
                  width={19.5}
                  height={16.76}
                />
              </div>
              <div className="flex items-center justify-center w-9 h-9 bg-[#F5F5F5] rounded-full">
                <Link href={"./Cart"}>
                  <Image
                    src="/images/box.svg"
                    alt="Cart"
                    width={19.5}
                    height={16.76}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="sm:hidden bg-white py-4 px-6">
            {/* Top Header Content */}
            <div className="flex flex-col space-y-4 mb-6">
              <div className="flex items-center">
                <Image
                  src="/images/Topheaderlogo.svg"
                  alt="Top Header Logo"
                  width={15.36}
                  height={14.38}
                />
              </div>
              <div className="text-sm font-medium text-[#111111] space-y-2">
                <p>
                  <Link href={"./Product"}>Find a Store</Link>
                </p>
                <p>
                  <Link href={"./Help"}>Help</Link>
                </p>
                <p>
                  <Link href={"./Joinus"}>Join Us</Link>
                </p>
                <p>
                  <Link href={"./Signup"}>Sign In</Link>
                </p>
              </div>
            </div>

            {/* Navbar Links */}
            <ul className="space-y-4 text-sm font-medium text-[#111111]">
              <li>New & Featured</li>
              <li>Men</li>
              <li>Women</li>
              <li>Kids</li>
              <li>Sale</li>
              <li>SNKRS</li>
            </ul>

            {/* Search Bar */}
            <div className="mt-6">
              <div className="flex items-center bg-[#F5F5F5] rounded-full px-3 py-1">
                <Image
                  src="/images/searchbar.svg"
                  alt="Search"
                  width={16.72}
                  height={16.72}
                />
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-transparent text-sm text-[#CCCCCC] focus:outline-none ml-2 w-full"
                />
              </div>
            </div>

            {/* Icons */}
            <div className="flex items-center gap-4 mt-6">
              <div className="flex items-center justify-center w-9 h-9 bg-[#F5F5F5] rounded-full">
                <Image
                  src="/images/like.svg"
                  alt="Like"
                  width={19.5}
                  height={16.76}
                />
              </div>
              <div className="flex items-center justify-center w-9 h-9 bg-[#F5F5F5] rounded-full">
                <Link href={"./Cart"}>
                  <Image
                    src="/images/box.svg"
                    alt="Cart"
                    width={19.5}
                    height={16.76}
                  />
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
