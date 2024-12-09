"use client";

import Image from "next/image";

const GearUp = () => {
  const scrollLeft = (id) => {
    const carousel = document.getElementById(id);
    carousel.scrollLeft -= 300; // Adjust scroll distance as needed
  };

  const scrollRight = (id) => {
    const carousel = document.getElementById(id);
    carousel.scrollLeft += 300; // Adjust scroll distance as needed
  };

  return (
    <div className="w-full max-w-screen-xl h-auto pt-8 px-6 md:px-10 lg:px-16 mx-auto">
      {/* Header Section */}
      <p className="text-[#111111] font-[Helvetica Neue] font-[500] text-[23px] leading-[28px] mb-4">
        Gear Up
      </p>

      {/* Men's and Women's Sections */}
      <div className="w-full flex flex-col md:flex-row justify-between items-start gap-8">
        {/* Men's Section */}
        <div className="w-full md:w-1/2 h-auto">
          {/* Men's Header */}
          <div className="flex items-center justify-between mb-4">
            <p className="font-[Helvetica Neue] font-[500] text-[18px] text-[#111111]">
              Shop Men&lsquo;s
            </p>
            <div className="flex items-center gap-2">
              {/* Left Arrow */}
              <div
                className="w-[48px] h-[48px] flex items-center justify-center bg-[#F5F5F5] rounded-full cursor-pointer"
                onClick={() => scrollLeft("mens-carousel")}
              >
                <Image
                  src={"/images/leftarrow.svg"}
                  alt="Left Arrow"
                  width={24}
                  height={24}
                />
              </div>
              {/* Right Arrow */}
              <div
                className="w-[48px] h-[48px] flex items-center justify-center bg-gray-200 rounded-full cursor-pointer"
                onClick={() => scrollRight("mens-carousel")}
              >
                <Image
                  src={"/images/rightarrow.svg"}
                  alt="Right Arrow"
                  width={24}
                  height={24}
                />
              </div>
            </div>
          </div>

          {/* Men's Product Slider */}
          <div
            id="mens-carousel"
            className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide"
          >
            {/* Product Cards */}
            <div className="min-w-[300px] flex flex-col items-start gap-2">
              <Image
                src={"/images/men1.svg"}
                alt="Mens Product 1"
                width={300}
                height={300}
                className="object-cover"
              />
              <p className="font-[Helvetica Neue] text-[14px] font-[500] text-[#111111]">
                Nike Dri-FIT ADV TechKnit Ultra
              </p>
              <p className="font-[Helvetica Neue] text-[14px] font-[400] text-[#757575]">
                Men&lsquo;s Short-Sleeve Running Top
              </p>
              <p className="font-[Helvetica Neue] text-[14px] font-[500] text-[#111111]">
                ₹ 3 895
              </p>
            </div>
            <div className="min-w-[300px] flex flex-col items-start gap-2">
              <Image
                src={"/images/men2.svg"}
                alt="Men's Product 2"
                width={300}
                height={300}
                className="object-cover"
              />
              <p className="font-[Helvetica Neue] text-[14px] font-[500] text-[#111111]">
                Nike Dri-FIT Challenger
              </p>
              <p className="font-[Helvetica Neue] text-[14px] font-[400] text-[#757575]">
                Men&lsquo;s 18cm (approx.) 2-in-1 Versatile Shorts
              </p>
              <p className="font-[Helvetica Neue] text-[14px] font-[500] text-[#111111]">
                ₹ 2 495
              </p>
            </div>
          </div>
        </div>

        {/* Women's Section */}
        <div className="w-full md:w-1/2 h-auto">
          {/* Women's Header */}
          <div className="flex items-center justify-between mb-4">
            <p className="font-[Helvetica Neue] font-[500] text-[18px] text-[#111111]">
              Shop Women&lsquo;s
            </p>
            <div className="flex items-center gap-2">
              {/* Left Arrow */}
              <div
                className="w-[48px] h-[48px] flex items-center justify-center bg-[#F5F5F5] rounded-full cursor-pointer"
                onClick={() => scrollLeft("womens-carousel")}
              >
                <Image
                  src={"/images/leftarrow.svg"}
                  alt="Left Arrow"
                  width={24}
                  height={24}
                />
              </div>
              {/* Right Arrow */}
              <div
                className="w-[48px] h-[48px] flex items-center justify-center bg-gray-200 rounded-full cursor-pointer"
                onClick={() => scrollRight("womens-carousel")}
              >
                <Image
                  src={"/images/rightarrow.svg"}
                  alt="Right Arrow"
                  width={24}
                  height={24}
                />
              </div>
            </div>
          </div>

          {/* Women's Product Slider */}
          <div
            id="womens-carousel"
            className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide"
          >
            {/* Product Cards */}
            <div className="min-w-[300px] flex flex-col items-start gap-2">
              <Image
                src={"/images/women1.svg"}
                alt="Women's Product 1"
                width={300}
                height={300}
                className="object-cover"
              />
              <p className="font-[Helvetica Neue] text-[14px] font-[500] text-[#111111]">
                Nike Dri-FIT ADV Run Division
              </p>
              <p className="font-[Helvetica Neue] text-[14px] font-[400] text-[#757575]">
                Women&lsquo;s Long-Sleeve Running Top
              </p>
              <p className="font-[Helvetica Neue] text-[14px] font-[500] text-[#111111]">
                ₹ 5 295
              </p>
            </div>
            <div className="min-w-[300px] flex flex-col items-start gap-2">
              <Image
                src={"/images/women2.svg"}
                alt="Women's Product 2"
                width={300}
                height={300}
                className="object-cover"
              />
              <p className="font-[Helvetica Neue] text-[14px] font-[500] text-[#111111]">
                Nike Fast 
              </p>
              <p className="font-[Helvetica Neue] text-[14px] font-[400] text-[#757575]">
                Women&apos;s Mid-Rise 7/8 Running Leggings with Pockets
              </p>
              <p className="font-[Helvetica Neue] text-[14px] font-[500] text-[#111111]">
                ₹ 3 795
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GearUp;
