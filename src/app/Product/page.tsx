"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Product = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const products = [
    {
      id: 1,
      image: "/product/product1.svg",
      label: "Just In",
      name: "Nike Air Force 1 Mid '07",
      description: "Men's Shoes - 1 Colour",
      price: "MRP : ₹ 10 795.00",
      link: "./ProductDetail"
    },
    {
      id: 2,
      image: "/product/product2.svg",
      label: "Just In",
      name: "Nike Court Vision Low Next Nature",
      description: "Men's Shoes - 1 Colour",
      price: "MRP : ₹ 4 995.00",
      link: "./ProductDetail"
    },
    {
      id: 3,
      image: "/product/product3.svg",
      label: "Just In",
      name: "Nike Air Force 1 PLT.AF.ORM",
      description: "Women's Shoes - 1 Colour",
      price: "MRP : ₹ 8 695.00",
      link: "./ProductDetail"
    },
    {
      id: 4,
      image: "/product/product4.svg",
      label: "Promo Exclusion",
      name: "Air Jordan 1 Elevate Low",
      description: "Men's Shoes - 1 Colour",
      price: "MRP : ₹ 13 295.00",
      link: "./ProductDetail"
    },
    {
      id: 5,
      image: "/product/product5.svg",
      label: "Promo Exclusion",
      name: "Nike Air Force 1 React",
      description: "Men's Shoes - 1 Colour",
      price: "MRP : MRP : ₹ 11 895.00",
    },
    {
      id: 6,
      image: "/product/product6.svg",
      label: "Just In",
      name: "Nike Standard Issue",
      description: "Women's Basketball Jersey",
      price: "MRP : ₹ 2 895.00",
      link: "./ProductDetail"
    },
    {
      id: 7,
      image: "/product/product7.svg",
      label: "Promo Exclusion",
      name: "Nike Dunk Low Retro SE",
      description: "Men's Shoes - 1 Colour",
      price: "MRP : ₹ 9 695.00",
      link: "./ProductDetail"
    },
    {
      id: 8,
      image: "/product/product8.svg",
      label: "Sustainable Materials",
      name: "Nike Dri-FIT UV Hyverse",
      description: "Men's Short-Sleeve Graphic Fitness Top - 1 Colour",
      price: "MRP : ₹ 2 495.00",
      link: "./ProductDetail"
    },
    {
      id: 9,
      image: "/product/product9.svg",
      label: "Just In",
      name: "Nike Court Vision Low",
      description: "Men's Shoes - 1 Colour",
      price: "MRP : ₹ 5 695.00",
      link: "./ProductDetail"
    },
    {
      id: 10,
      image: "/product/product10.svg",
      label: "Just In",
      name: "Nike Dri-FIT Ready",
      description: "Men's Short-Sleeve Fitness Top - 3 Colour",
      price: "MRP : ₹ 2 495.00",
      link: "./ProductDetail"
    },
    {
      id: 11,
      image: "/product/product11.svg",
      label: "Just In",
      name: "Nike One Leak Protection: Period",
      description: "Women's Mid-Rise 18cm (approx.) Biker Shorts - 2 Colour",
      price: "MRP : ₹ 3 395.00",
      link: "./ProductDetail"
    },
    {
      id: 12,
      image: "/product/product12.svg",
      label: "Just In",
      name: "Nike Air Force 1 LV8 3",
      description: "Older Kids' Shoe - 1 Color",
      price: "MRP : ₹ 7 495.00",
      link: "./ProductDetail"
    },
    {
      id: 13,
      image: "/product/product13.svg",
      label: "Just In",
      name: "Nike Blazer Low Platform",
      description: "Women's Shoes - 1 Colour",
      price: "MRP : ₹ 8 195.00",
      link: "./ProductDetail"
    },
    {
      id: 14,
      image: "/product/product14.svg",
      label: "Just In",
      name: "Nike Air Force 1 '07",
      description: "Women's Shoe - 2 Colour",
      price: "MRP : ₹ 8 195.00",
      link: "./ProductDetail"
    },
    {
      id: 15,
      image: "/product/product15.svg",
      label: "Just In",
      name: "Nike Pro Dri-FIT",
      description: "Men's Tight-Fit Sleeveless Top - 1 Colour",
      price: "MRP : ₹ 1 495.00",
    },
    {
      id: 16,
      image: "/product/product16.svg",
      label: "Promo Exclusion",
      name: "Nike Dunk Low Retro",
      description: "Men's Shoes - 1 Colour",
      price: "MRP : ₹ 8 695.00",
    },
    {
      id: 17,
      image: "/product/product17.svg",
      label: "Just In",
      name: "Nike Air Max SC",
      description: "Women's Shoes - 2 Colour",
      price: "MRP : ₹ 5 995.00",
      link: "./ProductDetail"
    },
    {
      id: 18,
      image: "/product/product18.svg",
      label: "Just In",
      name: "Nike Dri-FIT UV Miler",
      description: "Men's Short-Sleeve Running Top - 1 Color",
      price: "MRP : ₹ 1 695.00",
      link: "./ProductDetail"
    },
    {
      id: 19,
      image: "/product/product19.svg",
      label: "Just In",
      name: "Nike Air Max SYSTM",
      description: "Older Kids' Shoes - 1 Colour",
      price: "MRP : ₹ 6 495.00",
      link: "./ProductDetail"
    },
    {
      id: 20,
      image: "/product/product20.svg",
      label: "Just In",
      name: "Nike Alate All U",
      description: "Women's Light-Support Lightly Lined U-Neck Printed Sports Bra - 1 Colour",
      price: "MRP : ₹ 2 195.00",
      link: "./ProductDetail"
    },
    {
      id: 21,
      image: "/product/product21.svg",
      label: "Just In",
      name: "Nike Court Legacy Lift",
      description: "Women's Shoes - 2 Colour",
      price: "MRP : ₹ 7 495.00",
      link: "./ProductDetail"
    },
    {
      id: 22,
      image: "/product/product22.svg",
      label: "Just In",
      name: "Women's Medium-support Padded Sports Bra Tank",
      description: "Men's Shoes - 2 Colour",
      price: "MRP : ₹ 3 095.00",
      link: "./ProductDetail"
    },
    {
      id: 23,
      image: "/product/product23.svg",
      label: "Just In",
      name: "Nike SB Zoom Janoski OG+",
      description: "Shoes - 1 Colour",
      price: "MRP : ₹ 8 595.00",
    },
    {
      id: 24,
      image: "/product/product24.svg",
      label: "Just In",
      name: "Nike Dri-FIT Run Division Rise 365",
      description: "Men's Running Tank - 2 Colors",
      price: "MRP : ₹ 3 495.00",
      link: "./ProductDetail"
    },{
      id: 25,
      image: "/product/product25.svg",
      label: "Just In",
      name: "Nike Dri-FIT Challenger",
      description: "Men's 18cm (approx.) 2-in-1 Versatile Shorts - 1 Colour",
      price: "MRP : ₹ 2 495.00",
      link: "./ProductDetail"
    },
    {
      id: 26,
      image: "/product/product26.svg",
      label: "Just In",
      name: "Jordan Series ES",
      description: "Men's Shoes - 2 Colour",
      price: "MRP : ₹ 7 495.00",
      link: "./ProductDetail"
    },
    {
      id: 27,
      image: "/product/product27.svg",
      label: "Just In",
      name: "Nike Outdoor Play",
      description: "Older Kids' Oversized Woven Jacket - 1 Colour",
      price: "MRP : ₹ 3 895.00",
    },
    {
      id: 28,
      image: "/product/product28.svg",
      label: "Just In",
      name: "Nike Sportswear Trend",
      description: "Older Kids' (Girls') High-waisted Woven Shorts - 2 Colour",
      price: "MRP : ₹ 2 495.00",
    },
    {
      id: 29,
      image: "/product/product29.svg",
      label: "Just In",
      name: "Nike Blazer Low '77 Jumbo",
      description: "Women's Shoes - 1 Colour",
      price: "MRP : ₹ 8 595.00",
      link: "./ProductDetail"
    },
    {
      id: 30,
      image: "/product/product30.svg",
      label: "Just In",
      name: "Nike SB Force 58",
      description: "Skate Shoe - 1 Colour",
      price: "MRP : ₹ 5 995.00",
      link: "./ProductDetail"
    },
  ];

  return (
    <section className="w-full px-4 md:px-8 py-8">
      <div className="flex flex-col md:flex-row">
        {/* Sidebar */}
        <aside
          className={`fixed md:static bg-white z-20 w-[300px] p-6 space-y-6 shadow-lg md:shadow-none transform md:translate-x-0 transition-transform duration-300 ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:w-[300px]`}
        >
          {/* Close Button (Mobile) */}
          <button
            className="block md:hidden mb-4 text-[#111111] font-sans font-medium text-[16px]"
            onClick={() => setIsSidebarOpen(false)}
          >
            Close Filters ✕
          </button>

          {/* Sidebar Content */}
          <h3 className="font-sans font-bold text-[18px] text-[#111111]">
            Categories
          </h3>
          <ul className="space-y-4">
            <li className="font-sans font-medium text-[16px] text-[#111111]">
              Shoes
            </li>
            <li className="font-sans font-medium text-[16px] text-[#111111]">
              Sports Bras
            </li>
            <li className="font-sans font-medium text-[16px] text-[#111111]">
              Tops & T-Shirts
            </li>
            <li className="font-sans font-medium text-[16px] text-[#111111]">
              Hoodies & Sweatshirts
            </li>
            <li className="font-sans font-medium text-[16px] text-[#111111]">
              Jackets
            </li>
          </ul>

          {/* Gender Filter */}
          <div>
            <h4 className="font-sans font-bold text-[16px] text-[#111111] mt-4 mb-2">
              Gender
            </h4>
            <div className="space-y-2">
              <label className="block">
                <input type="checkbox" className="mr-2" />
                Men
              </label>
              <label className="block">
                <input type="checkbox" className="mr-2" />
                Women
              </label>
              <label className="block">
                <input type="checkbox" className="mr-2" />
                Unisex
              </label>
            </div>
          </div>

          {/* Price Filter */}
          <div>
            <h4 className="font-sans font-bold text-[16px] text-[#111111] mt-4 mb-2">
              Shop By Price
            </h4>
            <div className="space-y-2">
              <label className="block">
                <input type="checkbox" className="mr-2" />
                Under ₹ 2,500.00
              </label>
              <label className="block">
                <input type="checkbox" className="mr-2" />
                ₹ 2,501.00 - ₹ 5,000.00
              </label>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 md:ml-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h3 className="font-sans font-bold text-[18px] text-[#111111]">
              New (500)
            </h3>
            <button
              className="md:hidden text-[#111111] font-sans font-medium text-[16px]"
              onClick={() => setIsSidebarOpen(true)}
            >
              Show Filters ☰
            </button>
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <p className="font-sans text-[16px] text-[#111111]">
                  Sort By
                </p>
                <Image
                  src={"/images/dropdown.svg"}
                  alt="Dropdown Icon"
                  width={14}
                  height={14}
                />
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Link href={"./ProductDetail"} key={product.id} passHref>
              <div
                key={product.id}
                className="border border-[#CCCCCC] p-4 rounded-lg hover:shadow-md transition-shadow duration-300"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={200}
                  height={200}
                  className="mb-4"
                />
                <p className="font-sans font-medium text-[14px] text-[#FF0000] mb-2">
                  {product.label}
                </p>
                <p className="font-sans font-bold text-[16px] text-[#111111]">
                  {product.name}
                </p>
                <p className="font-sans font-medium text-[14px] text-[#666666]">
                  {product.description}
                </p>
                <p className="font-sans font-bold text-[16px] text-[#111111] mt-2">
                  MRP: {product.price}
                </p>
              </div>
              </Link>
            ))}
          </div>
        </main>
      </div>
    </section>
  );
};

export default Product;
