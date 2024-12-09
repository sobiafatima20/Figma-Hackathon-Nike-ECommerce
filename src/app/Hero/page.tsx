import React from "react";
import Image from "next/image";
import Slider from "./Slide";
import GearUp from "./GearUp";

const Hero = () => {
  return (
    <>
      <section>
        {/* Main Container */}
        <div className="flex w-full flex-col items-center">
          {/* Header Bar */}
          <div className="flex w-full max-w-[1440px] h-[58px] mt-[36px] bg-[#F5F5F5] shadow-md flex-col items-center justify-center px-4 space-y-2">
            {/* First Paragraph */}
            <p className="font-[Helvetica Neue] font-[500] text-[15px] leading-[16px] text-[#111111]">
              Hello Nike App
            </p>
            {/* Second Paragraph */}
            <div className="flex ml-4">
              <p className="font-[Helvetica Neue] font-[400] text-[11px] leading-[24px] text-[#111111]">
                Download the app to access everything Nike.{" "}
                <span className="underline font-[Helvetica Neue] font-[500] text-[11px] leading-[24px] text-[#111111]">
                  Get Your Great
                </span>
              </p>
            </div>
          </div>

          <div className="w-full h-auto flex flex-col items-center gap-8 px-4 md:px-8 lg:px-16">
            {/* Hero Image */}
            <div className="w-full h-auto">
              <Image
                src={"/images/hero.svg"}
                alt="Nike Air Max Pulse"
                width={1344}
                height={700}
                className="rounded-lg shadow-lg max-w-full object-cover"
              />
            </div>

            {/* Text Section */}
            <div className="w-full flex flex-col items-center text-center mt-4">
              <p className="font-medium text-sm text-[#111111]">First Look</p>
              <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl text-[#111111] mt-2">
                Nike Air Max Pulse
              </h1>
              <p className="text-[#111111] mt-4 max-w-2xl text-base md:text-lg">
                Extreme comfort. Hyper durable. Max volume. Introducing the Air
                Max Pulse—designed to push you past your limits and help you go
                to the max.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col md:flex-row gap-4 mt-6">
              <button className="bg-[#111111] text-[#FFFFFF]  px-6 py-2 rounded-[30px] shadow-md hover:bg-gray-300 transition">
                Notify Me
              </button>
              <button className="bg-[#111111] text-[#FFFFFF] px-6 py-2 rounded-[30px] shadow-md hover:bg-gray-300 transition">
                Shop Air Max
              </button>
            </div>
          </div>

          {/* Slidebar */}
          <Slider />

          {/* Features Section */}
          <div className="w-full max-w-[1344px] pt-[100px] px-[5%]">
            <p className="text-[#111111] font-[Helvetica Neue] font-[500] text-[23px] leading-[28px]">
              Featured
            </p>

            <div className="w-full pt-[52px]">
              <div className="w-full">
                <Image
                  src={"./images/feature.svg"}
                  alt=""
                  width={1344}
                  height={700}
                  layout="responsive"
                />
              </div>

              <div className="w-full flex flex-col items-center text-center mt-6">
                <h1 className="font-[Helvetica Neue] font-[500] text-[36px] md:text-[54px] leading-[44px] md:leading-[60px] text-[#111111]">
                  STEP INTO WHAT FEELS GOOD
                </h1>
                <p className="text-[#111111] font-[Helvetica Neue] font-[400] text-[14px] md:text-[15px] leading-[24px] mt-4">
                  Cause everyone should know the feeling of running in that
                  perfect pair.
                </p>
              </div>

              <div className="flex flex-col md:flex-row gap-4 mt-6 justify-center">
                <button className="bg-[#111111] text-[#FFFFFF] px-6 py-2 rounded-[30px] shadow-md hover:bg-gray-300 transition">
                  Find Your Shoe
                </button>
              </div>
            </div>
          </div>

          {/* Gear Up */}
          <GearUp />

          {/* Don't Miss Section */}
          <div className="w-full max-w-[1344px] pt-[100px] px-[5%]">
            <p className="text-[#111111] font-[Helvetica Neue] font-[500] text-[23px] leading-[28px]">
              Don&apos;t Miss
            </p>
            <div className="w-full pt-[52px]">
              <div className="w-full">
                <Image
                  src={"./images/dontmiss.svg"}
                  alt=""
                  width={1344}
                  height={700}
                  layout="responsive"
                />
              </div>

              {/* Text Section */}
              <div className="w-full flex flex-col items-center text-center mt-6">
                <h1 className="font-bold text-4xl md:text-5xl text-[#111111] mt-2">
                  FLIGHT ESSENTIALS
                </h1>
                <p className="text-[#111111] mt-4 max-w-2xl text-base md:text-lg">
                  Your built-to-last, all-week wears—but with style only Jordan
                  Brand can deliver.
                </p>
                <div className="flex flex-col md:flex-row gap-4 mt-6">
                  <button className="bg-[#111111] text-[#FFFFFF]  px-6 py-2 rounded-[30px] shadow-md hover:bg-gray-300 transition">
                    Shop
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* The Essentials Section */}
          <div className="w-full max-w-[1344px] mx-auto pt-24 px-5">
            <p className="text-[#111111] font-sans font-medium text-lg md:text-xl leading-[28px]">
              The Essentials
            </p>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
              {/* Men's Section */}
              <div className="relative w-full max-w-[440px] h-[540px] overflow-hidden rounded-lg mx-auto">
                <Image
                  src="/images/essential1.svg"
                  alt="Men's Essentials"
                  width={440}
                  height={540}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-[#FFFFFF] rounded-[30px] text-[#111111] px-4 py-1">
                  Men&apos;s
                </div>
              </div>

              {/* Women's Section */}
              <div className="relative w-full max-w-[440px] h-[540px] overflow-hidden rounded-lg mx-auto">
                <Image
                  src="/images/essential2.svg"
                  alt="Women's Essentials"
                  width={440}
                  height={540}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-[#FFFFFF] rounded-[30px] text-[#111111] px-4 py-1">
                  Women&apos;s
                </div>
              </div>

              {/* Kids' Section */}
              <div className="relative w-full max-w-[440px] h-[540px] overflow-hidden rounded-lg mx-auto">
                <Image
                  src="/images/essential3.svg"
                  alt="Kids' Essentials"
                  width={440}
                  height={540}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-[#FFFFFF] rounded-[30px] text-[#111111] px-4 py-1">
                  Kid&apos;s
                </div>
              </div>
            </div>
          </div>

          {/* Landing Page Footer Section */}
          <div className="max-w-[880px] px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6">
              {/* Icons Column */}
              <div className="mb-6">
                <h4 className="font-sans font-medium text-[15px] leading-[24px] text-[#111111] mb-4">
                  Icons
                </h4>
                <ul className="space-y-2">
                  <li className="text-[#757575] text-[15px] leading-[24px] font-sans">Air Force 1</li>
                  <li className="text-[#757575] text-[15px] leading-[24px] font-sans">Huarache</li>
                  <li className="text-[#757575] text-[15px] leading-[24px] font-sans">Air Max 90</li>
                  <li className="text-[#757575] text-[15px] leading-[24px] font-sans">Air Max 95</li>
                </ul>
              </div>

              {/* Shoes Column */}
              <div className="mb-6">
                <h4 className="font-sans font-medium text-[15px] leading-[24px] text-[#111111] mb-4">
                  Shoes
                </h4>
                <ul className="space-y-2">
                  <li className="text-[#757575] text-[15px] leading-[24px] font-sans">All Shoes</li>
                  <li className="text-[#757575] text-[15px] leading-[24px] font-sans">Custom Shoes</li>
                  <li className="text-[#757575] text-[15px] leading-[24px] font-sans">Jordan Shoes</li>
                  <li className="text-[#757575] text-[15px] leading-[24px] font-sans">Running Shoes</li>
                </ul>
              </div>

              {/* Clothing Column */}
              <div className="mb-6">
                <h4 className="font-sans font-medium text-[15px] leading-[24px] text-[#111111] mb-4">
                  Clothing
                </h4>
                <ul className="space-y-2">
                  <li className="text-[#757575] text-[15px] leading-[24px] font-sans">All Clothing</li>
                  <li className="text-[#757575] text-[15px] leading-[24px] font-sans">Modest Wear</li>
                  <li className="text-[#757575] text-[15px] leading-[24px] font-sans">Hoodies & Pullovers</li>
                  <li className="text-[#757575] text-[15px] leading-[24px] font-sans">Shirts & Tops</li>
                </ul>
              </div>

              {/* Kids' Column */}
              <div className="mb-6">
                <h4 className="font-sans font-medium text-[15px] leading-[24px] text-[#111111] mb-4">
                  Kids&apos;
                </h4>
                <ul className="space-y-2">
                  <li className="text-[#757575] text-[15px] leading-[24px] font-sans">Infant & Toddler Shoes</li>
                  <li className="text-[#757575] text-[15px] leading-[24px] font-sans">Kids&apos; Shoes</li>
                  <li className="text-[#757575] text-[15px] leading-[24px] font-sans">Kids&apos; Jordan Shoes</li>
                  <li className="text-[#757575] text-[15px] leading-[24px] font-sans">Kids&apos; Basketball Shoes</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
