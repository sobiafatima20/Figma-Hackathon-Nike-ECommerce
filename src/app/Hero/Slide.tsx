"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { createClient } from "@sanity/client";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2021-08-31'
});

type Product = {
  _id: string;
  productName: string;
  category: string;
  price: number;
  inventory: number;
  colors: string[];
  status: string;
  imageUrl: string;
  description: string;
};

export default function Slider() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "product"] {
        _id,
        productName,
        category,
        price,
        inventory,
        colors,
        status,
        "imageUrl": image.asset->url,
        description
      }`;
      try {
        const result = await client.fetch(query);
        setProducts(result);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

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
        {products.map((product) => (
          <div
            key={product._id}
            className="flex-shrink-0 w-[300px] md:w-[441.36px] h-auto"
          >
            <div className="w-full h-[441.36px]">
              <Image
                src={product.imageUrl}
                alt={product.productName}
                width={441.36}
                height={441.36}
                className="object-contain"
              />
            </div>
            <div className="w-full h-[58px] bg-[#FFFFFF] p-2">
              <div className="w-full flex justify-between">
                <div>
                  <p className="font-[Helvetica Neue] font-[500] text-[15px] leading-[24px] text-[#111111]">
                    {product.productName}
                  </p>
                  <p className="font-[Helvetica Neue] font-[400] text-[15px] leading-[24px] text-[#757575]">
                    {product.category}
                  </p>
                </div>
                <p className="font-[Helvetica Neue] font-[400] text-[15px] leading-[24px] text-[#111111]">
                  ₹ {product.price.toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
