import React from "react";
import Image from "next/image";
import Link from "next/link";

const Cart = () => {
  return (
    <section>
      <div className="w-full max-w-[1100px] mx-auto mt-10 flex flex-col lg:flex-row justify-between px-4">

        {/* Product Section */}
        <div className="w-full lg:w-[717.33px] flex flex-col">
          
          {/* Free Delivery Section */}
          <div className="w-full h-[62.89px] bg-[#F7F7F7] shadow-sm shadow-[#E5E5E5] p-4 rounded-md">
            <p className="font-sans font-[500] text-[13px] leading-[14px] tracking-[0.5px] text-[#111111]">
              Free Delivery
            </p>
            <div className="flex gap-4 mt-2">
              <p className="font-[Inter] font-[400] text-[11px] leading-[24px] text-[#111111]">
                Applies to orders of ₹14,000.00 or more.
              </p>
              <p className="font-[Inter] font-[400] text-[11px] leading-[24px] underline text-[#111111] cursor-pointer">
                View details
              </p>
            </div>
          </div>

          {/* Bag Title */}
          <p className="mt-[8px] font-[Inter] font-[500] text-[22px] leading-[33px] text-[#111111]">Bag</p>

          {/* Product Items */}
          <div className="w-full mt-[16px] shadow-inner shadow-[#E5E5E5] p-4 rounded-md">
            
            {/* First Product */}
            <div className="flex gap-[16px] mb-8">
              <div className="w-[150px] h-[150px] flex-shrink-0">
                <Image src="./images/men1.svg" alt="Nike Dri-FIT" width={150} height={150} className="rounded" />
              </div>
              <div className="flex flex-col justify-between">
                <h4 className="font-[Inter] font-[500] text-[15px] leading-[28px] text-[#111111]">
                  Nike Dri-FIT ADV TechKnit Ultra
                </h4>
                <p className="font-[Inter] font-[400] text-[15px] leading-[28px] text-[#757575]">
                  Men&apos;s Short-Sleeve Running Top
                </p>
                <p className="font-[Inter] font-[400] text-[15px] leading-[28px] text-[#757575]">
                  Ashen Slate/Cobalt Bliss
                </p>
                <div className="flex gap-8 mt-2">
                  <p className="font-[Inter] font-[400] text-[15px] leading-[28px] text-[#757575]">
                    Size: <span className="text-[#111111]">L</span>
                  </p>
                  <p className="font-[Inter] font-[400] text-[15px] leading-[28px] text-[#757575]">
                    Quantity: <span className="text-[#111111]">1</span>
                  </p>
                </div>
                <p className="font-[Inter] font-[400] text-[15px] leading-[28px] text-[#111111] mt-2">MRP: ₹ 3,895.00</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-[16px] justify-end mb-4">
              <div className="w-[24px] h-[24px]">
                <Image src="./images/likes.svg" alt="Like" width={24} height={24} />
              </div>
              <div className="w-[24px] h-[24px]">
                <Image src="./images/delete.svg" alt="Delete" width={24} height={24} />
              </div>
            </div>

            {/* Second Product */}
            <div className="flex gap-[16px] mb-8">
              <div className="w-[150px] h-[150px] flex-shrink-0">
                <Image src="./images/shoe3.svg" alt="Nike Dri-FIT" width={150} height={150} className="rounded" />
              </div>
              <div className="flex flex-col justify-between">
                <h4 className="font-[Inter] font-[500] text-[15px] leading-[28px] text-[#111111]">
                  Nike Air Max 97 SE
                </h4>
                <p className="font-[Inter] font-[400] text-[15px] leading-[28px] text-[#757575]">
                  Men&apos;s Shoes
                </p>
                <p className="font-[Inter] font-[400] text-[15px] leading-[28px] text-[#757575]">
                  Flat Pewter/Light Bone/Black/White
                </p>
                <div className="flex gap-8 mt-2">
                  <p className="font-[Inter] font-[400] text-[15px] leading-[28px] text-[#757575]">
                    Size: <span className="text-[#111111]">8</span>
                  </p>
                  <p className="font-[Inter] font-[400] text-[15px] leading-[28px] text-[#757575]">
                    Quantity: <span className="text-[#111111]">1</span>
                  </p>
                </div>
                <p className="font-[Inter] font-[400] text-[15px] leading-[28px] text-[#111111] mt-2">MRP: ₹ 16 995.00</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-[16px] justify-end mb-4">
              <div className="w-[24px] h-[24px]">
                <Image src="./images/likes.svg" alt="Like" width={24} height={24} />
              </div>
              <div className="w-[24px] h-[24px]">
                <Image src="./images/delete.svg" alt="Delete" width={24} height={24} />
              </div>
            </div>

          </div>
        </div>

        {/* Summary Section */}
        <div className="w-full lg:w-[350px] h-auto mb-8 lg:mb-0">
          <h4 className="font-[Inter] font-[500] text-[21px] leading-[33px] text-[#111111]">Summary</h4>

          {/* Subtotal Section */}
          <div className="w-full lg:w-[334.67px] h-[28px] mt-4 flex justify-between">
            <p className="font-[Inter] font-[400] text-[15px] leading-[28px] text-[#111111]">Subtotal</p>
            <p className="font-[Inter] font-[400] text-[14px] leading-[28px] text-[#111111]">₹ 20 890.00</p>
          </div>

          {/* Estimated Delivery Section */}
          <div className="w-full lg:w-[334.67px] h-[28px] mt-4 flex justify-between">
            <p className="font-[Inter] font-[400] text-[15px] leading-[28px] text-[#111111]">Estimated Delivery & Handling</p>
            <p className="font-[Inter] font-[400] text-[14px] leading-[28px] text-[#111111]">Free</p>
          </div>

          {/* Total Section */}
          <div className="w-full lg:w-[334.67px] h-[62px] mt-4 flex justify-between border border-[#E5E5E5] p-2">
            <p className="font-[Inter] font-[400] text-[15px] leading-[28px] text-[#111111]">Total</p>
            <p className="font-[Inter] font-[400] text-[14px] leading-[28px] text-[#111111]">₹ 20 890.00</p>
          </div>

          {/* Checkout Button */}
          <div className="mt-6 flex justify-center">
            <Link href={"./Checkout"}>
            <button className="bg-[#111111] text-[#FFFFFF] px-6 py-2 rounded-[30px] shadow-md hover:bg-gray-300 transition">
              Member Checkout
            </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
