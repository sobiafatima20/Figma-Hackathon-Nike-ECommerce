"use client";
import { useRef } from "react";
import Image from "next/image";

export default function Slider() {
  const sliderRef = useRef<HTMLDivElement>(null);

  // Shoe images
  const images = [
    "/images/shoe1.svg",
    "/images/shoe2.svg",
    "/images/shoe3.svg",
    "/images/shoe1.svg", // Repeated image for demonstration
  ];

  // Shoe details (dynamic text for each card)
  const shoeDetails = [
    {
      name: "Nike Air Max Pulse",
      category: "Women’s Shoes",
      price: "₹ 13,995",
    },
    { name: "Nike Air Max Plus", category: "Men’s Shoes", price: "₹ 13,995" },
    { name: "Nike Air Max 2021", category: "Men’s Shoes", price: "₹ 13,995" },
    { name: "Nike Air Max 270", category: "Women’s Shoes", price: "₹ 13,995" },
  ];

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -500,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: 500,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full max-w-[1440px] h-auto pt-[100px] px-6 md:px-[60px]">
      {/* Header Section */}
      <div className="flex items-center justify-between h-[52px]">
        <p className="font-[Helvetica Neue] font-[500] text-[22px] leading-[28px] text-[#111111]">
          Best of Air Max
        </p>

        <div className="flex items-center gap-4">
          <p className="font-[Helvetica Neue] font-[500] text-[15px] leading-[24px] text-[#111111]">
            Shop
          </p>
          <div
            className="w-[48px] h-[48px] flex items-center justify-center bg-[#F5F5F5] rounded-full cursor-pointer"
            onClick={scrollLeft}
          >
            <Image
              src={"/images/leftarrow.svg"}
              alt="Left Arrow"
              width={24}
              height={24}
            />
          </div>
          <div
            className="w-[48px] h-[48px] flex items-center justify-center bg-gray-200 rounded-full cursor-pointer"
            onClick={scrollRight}
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

      {/* Shoe Cards Section */}
      <div
        className="flex items-start gap-8 overflow-x-auto w-full h-auto pt-6 scrollbar-hide px-[16px] md:px-[32px]"
        ref={sliderRef}
      >
        {/* Dynamically Render Shoe Cards */}
        {images.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[300px] md:w-[441.36px] h-auto"
          >
            <div className="w-full h-[441.36px]">
              <Image
                src={image}
                alt={`Nike Shoe ${index + 1}`}
                width={441.36}
                height={441.36}
                className="object-contain"
              />
            </div>
            <div className="w-full h-[48px] bg-[#FFFFFF] p-2">
              <div className="w-full flex justify-between">
                <div>
                  <p className="font-[Helvetica Neue] font-[500] text-[15px] leading-[24px] text-[#111111]">
                    {shoeDetails[index].name}
                  </p>
                  <p className="font-[Helvetica Neue] font-[400] text-[15px] leading-[24px] text-[#757575]">
                    {shoeDetails[index].category}
                  </p>
                </div>
                <p className="font-[Helvetica Neue] font-[400] text-[15px] leading-[24px] text-[#111111]">
                  {shoeDetails[index].price}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
