import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ProductDetail = () => {
  return (
    <>
      <section className="flex justify-center items-center h-auto pt-12 px-4">
        <div className="w-full max-w-screen-xl flex flex-col lg:flex-row gap-8">
          {/* Product Image Section */}
          <div className="w-full sm:w-[60%] md:w-[50%] lg:w-[50%] flex items-center justify-center">
            <Image
              src={"./images/shoe4.svg"}
              alt="Nike Air Force 1"
              width={553}
              height={553}
              className="object-contain"
            />
          </div>

          {/* Product Details Section */}
          <div className="w-full sm:w-[60%] md:w-[50%] lg:w-[50%] space-y-6 flex flex-col justify-between">
            {/* Product Title */}
            <h2 className="font-[Poppins] font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-[48px] text-[#111111]">
              Nike Air Force 1 <br />
              PLT.AF.ORM
            </h2>

            {/* Product Description */}
            <p className="font-[Poppins] font-normal text-sm sm:text-base md:text-lg lg:text-[15px] leading-[28px] text-[#111111]">
              Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its
              &quot;inside out&quot;-inspired construction, including unique layering and exposed foam accents,
              ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching
              on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials,
              and aged midsole aesthetic give this release an artisan finish.
            </p>

            {/* Product Price */}
            <p className="font-[Poppins] font-semibold text-lg sm:text-2xl md:text-3xl lg:text-[36px] text-[#111111]">
              ₹ 8 695.00
            </p>

            {/* Add to Cart Button */}
            <div className="mt-6">
              <Link href={"./Cart"}>
                <button className="flex items-center bg-[#111111] text-[#FFFFFF] px-6 py-3 rounded-[30px] shadow-md hover:bg-gray-300 transition">
                  <Image
                    src={"./images/buy.svg"}
                    alt="Add to Cart"
                    width={29}
                    height={29}
                    className="mr-2"
                  />
                  Add To Cart
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetail;
