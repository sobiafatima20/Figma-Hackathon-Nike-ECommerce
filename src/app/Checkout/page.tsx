import React from "react";
import Image from "next/image";

const Checkout = () => {
  return (
    <section className="px-4 md:px-8 lg:px-16 py-8">
      <div className="max-w-screen-lg mx-auto flex flex-wrap justify-between">
        {/* Header Right Side */}
        <div className="w-full lg:w-[440px] pt-[70px]">
          <div className="w-full gap-[4px]">
            <h4 className="font-[Inter] font-[500] text-[#111111] text-[21px] leading-[24px]">
              How would you like to get your order?
            </h4>
            <div className="mt-6">
              <div className="w-full mb-6">
                <p className="font-[Inter] font-[400] text-[15px] leading-[24px] text-[#757575]">
                  Customs regulation for India require a copy of the
                  recipient&apos;s KYC. The address on the KYC needs to match
                  the shipping address. Our courier will contact you via
                  SMS/email to obtain a copy of your KYC. The KYC will be stored
                  securely and used solely for the purpose of clearing customs
                  (including sharing it with customs officials) for all orders
                  and returns. If your KYC does not match your shipping address,
                  please click the link for more information.
                  <span className="underline">Learn More</span>
                </p>
              </div>
              <div className="w-full h-[82px] rounded-[12px] border-[2px] border-[#111111] flex items-center p-4">
                <div className="flex items-center justify-center w-9 h-9 bg-[#F5F5F5] rounded-full">
                  <Image
                    src="/images/deliver.svg"
                    alt="Deliver"
                    width={21.85}
                    height={19.02}
                  />
                </div>
                <p className="font-[Inter] font-[500] text-[15px] leading-[24px] pl-[20px] text-[#111111]">
                  Deliver It
                </p>
              </div>
            </div>
          </div>

          {/* form */}
          <div className="w-full max-w-[440px] mx-auto p-[20px]">
            {/* Form Heading */}
            <h3 className="text-[21px] font-[500] text-[#111111] mb-[28px]">
              Enter your name and address:
            </h3>

            {/* Form Inputs */}
            <div className="space-y-[40px]">
              {/* First Name */}
              <div className="bg-white shadow-sm shadow-[#CCCCCC] rounded-[4px] p-[16px]">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full text-[16px] text-[#000000] leading-[24px] font-[400] outline-none"
                />
              </div>

              {/* Last Name */}
              <div className="bg-white shadow-sm shadow-[#CCCCCC] rounded-[4px] p-[16px]">
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full text-[16px] text-[#000000] leading-[24px] font-[400] outline-none"
                />
              </div>

              {/* Address Line 1 */}
              <div className="space-y-[8px]">
                <div className="bg-white shadow-sm shadow-[#CCCCCC] rounded-[4px] p-[16px]">
                  <input
                    type="text"
                    placeholder="Address Line 1"
                    className="w-full text-[16px] text-[#000000] leading-[24px] font-[400] outline-none"
                  />
                </div>
                <p className="text-[11px] text-[#757575]">
                  We do not ship to P.O. boxes
                </p>
              </div>

              {/* Address Line 2 */}
              <div className="bg-white shadow-sm shadow-[#CCCCCC] rounded-[4px] p-[16px]">
                <input
                  type="text"
                  placeholder="Address Line 2"
                  className="w-full text-[16px] text-[#000000] leading-[24px] font-[400] outline-none"
                />
              </div>

              {/* Address Line 3 */}
              <div className="bg-white shadow-sm shadow-[#CCCCCC] rounded-[4px] p-[16px]">
                <input
                  type="text"
                  placeholder="Address Line 3"
                  className="w-full text-[16px] text-[#000000] leading-[24px] font-[400] outline-none"
                />
              </div>

              {/* Postal Code and Locality */}
              <div className="flex space-x-[12px] md:space-x-[8px]">
                <div className="bg-white shadow-sm shadow-[#CCCCCC] rounded-[4px] p-[16px] w-full sm:w-[211px]">
                  <input
                    type="text"
                    placeholder="Postal Code"
                    className="w-full text-[16px] text-[#000000] leading-[24px] font-[400] outline-none"
                  />
                </div>
                <div className="bg-white shadow-sm shadow-[#CCCCCC] rounded-[4px] p-[16px] w-full sm:w-[211px]">
                  <input
                    type="text"
                    placeholder="Locality"
                    className="w-full text-[16px] text-[#000000] leading-[24px] font-[400] outline-none"
                  />
                </div>
              </div>

              {/* State/Territory and Country */}
              <div className="flex space-x-[12px] md:space-x-[8px]">
                <div className="bg-white shadow-sm shadow-[#CCCCCC] rounded-[4px] p-[16px] flex items-center space-x-[8px] w-full sm:w-[211px]">
                  <input
                    type="text"
                    placeholder="State/Territory"
                    className="w-full text-[16px] text-[#8D8D8D] leading-[24px] font-[400] outline-none"
                  />
                  <Image
                    src="./images/dropdown.svg"
                    alt="Dropdown"
                    className="w-[12px] h-[6px]"
                    width={12}
                    height={6}
                  />
                </div>
                <div className="bg-white shadow-sm shadow-[#CCCCCC] rounded-[4px] p-[16px] flex items-center space-x-[8px] w-full sm:w-[211px]">
                  <input
                    type="text"
                    placeholder="India"
                    className="w-full text-[16px] text-[#000000] leading-[24px] font-[400] outline-none"
                  />
                  <div className="w-[8px] h-[8px] rounded-full bg-[#19AB20]"></div>
                </div>
              </div>
            </div>

            {/* Save and Preferred Address Options */}
            <div className="mt-[40px] space-y-[12px]">
              <div className="flex items-center space-x-[8px]">
                <div className="w-[18px] h-[18px] border border-[#CCCCCC] rounded"></div>
                <p className="text-[15px] text-[#111111]">
                  Save this address to my profile
                </p>
              </div>
              <div className="flex items-center space-x-[8px]">
                <div className="w-[18px] h-[18px] border border-[#CCCCCC] rounded bg-[#CCCCCC]"></div>
                <p className="text-[15px] text-[#111111]">
                  Make this my preferred address
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-[28px]">
              <h3 className="text-[21px] font-[500] text-[#111111] mb-[28px]">
                What&apos;s your contact information?
              </h3>
              <div className="space-y-[16px]">
                {/* Email */}
                <div className="space-y-[8px]">
                  <div className="bg-white shadow-sm shadow-[#CCCCCC] rounded-[4px] p-[16px]">
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full text-[16px] text-[#000000] leading-[24px] font-[400] outline-none"
                    />
                  </div>
                  <p className="text-[11px] text-[#757575]">
                    A confirmation email will be sent after checkout.
                  </p>
                </div>
                {/* Phone Number */}
                <div className="space-y-[8px]">
                  <div className="bg-white shadow-sm shadow-[#CCCCCC] rounded-[4px] p-[16px]">
                    <input
                      type="text"
                      placeholder="Phone Number"
                      className="w-full text-[16px] text-[#000000] leading-[24px] font-[400] outline-none"
                    />
                  </div>
                  <p className="text-[11px] text-[#757575]">
                    A carrier might contact you to confirm delivery.
                  </p>
                </div>
              </div>
            </div>

            {/* PAN Information */}
            <div className="space-y-[28px]">
              <h3 className="text-[21px] font-[500] text-[#111111] mb-[28px]">
                What&apos;s your PAN?
              </h3>
              <div className="space-y-[16px]">
                {/* PAN */}
                <div className="space-y-[8px]">
                  <div className="bg-white shadow-sm shadow-[#CCCCCC] rounded-[4px] p-[16px]">
                    <input
                      type="text"
                      placeholder="PAN"
                      className="w-full text-[16px] text-[#000000] leading-[24px] font-[400] outline-none"
                    />
                  </div>
                  <p className="text-[11px] text-[#757575]">
                    Enter your PAN to enable payment with UPI, Net Banking, or
                    local card methods.
                  </p>
                </div>
                {/* Save PAN */}
                <div className="flex items-center space-x-[8px]">
                  <div className="w-[18px] h-[18px] border border-[#CCCCCC] rounded"></div>
                  <p className="text-[15px] text-[#111111]">
                    Save PAN details to Nike Profile
                  </p>
                </div>
              </div>
            </div>

            {/* Consent Checkbox */}
            <div className="flex items-center">
              <div className="w-[18px] h-[18px] border border-[#CCCCCC] rounded"></div>
              <p className="text-[15px] text-[#111111] pl-[20px]">
                I have read and consent to eShopWorld processing my information
                in accordance with the Privacy Statement and Cookie Policy.
                eShopWorld is a trusted Nike partner.
              </p>
            </div>

            {/* Continue Button */}
            <div className="mt-[28px]">
              <button className="w-full bg-[#F5F5F5] text-[#111111] text-[16px] py-[12px] rounded-[30px] shadow-md hover:bg-gray-300 transition">
                Continue
              </button>
            </div>
          </div>

          {/* Delivery Section */}
          <div className="w-full max-w-[440px] mx-auto pt-[28px] space-y-[16px]">
            {/* Delivery */}
            <div className="bg-white shadow-sm shadow-[#CCCCCC] rounded-[4px] p-[16px]">
              <p className="text-[16px] text-[#000000] leading-[24px] font-[400]">
                Delivery
              </p>
            </div>

            {/* Shipping */}
            <div className="bg-white shadow-sm shadow-[#CCCCCC] rounded-[4px] p-[16px]">
              <p className="text-[16px] text-[#000000] leading-[24px] font-[400]">
                Shipping
              </p>
            </div>

            {/* Billing */}
            <div className="bg-white shadow-sm shadow-[#CCCCCC] rounded-[4px] p-[16px]">
              <p className="text-[16px] text-[#000000] leading-[24px] font-[400]">
                Billing
              </p>
            </div>

            {/* Payment */}
            <div className="bg-white shadow-sm shadow-[#CCCCCC] rounded-[4px] p-[16px]">
              <p className="text-[16px] text-[#000000] leading-[24px] font-[400]">
                Payment
              </p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[302px] bg-white p-4 shadow-md rounded-lg mx-auto">
          {/* Order Summary Header */}
          <p className="font-[Inter] font-[500] text-[21px] leading-[24px] text-[#111111] mb-4">
            Order Summary
          </p>

          {/* Subtotal Section */}
          <div className="w-full flex justify-between mb-4">
            <p className="font-[Inter] font-[400] text-[15px] leading-[28px] text-[#111111]">
              Subtotal
            </p>
            <p className="font-[Inter] font-[400] text-[14px] leading-[28px] text-[#111111]">
              ₹ 20 890.00
            </p>
          </div>

          {/* Delivery Section */}
          <div className="w-full flex justify-between mb-4">
            <p className="font-[Inter] font-[400] text-[15px] leading-[28px] text-[#111111]">
              Delivery/Shipping
            </p>
            <p className="font-[Inter] font-[400] text-[14px] leading-[28px] text-[#111111]">
              Free
            </p>
          </div>

          {/* Total Section */}
          <div className="w-full flex justify-between items-center border-t border-b border-[#E5E5E5] py-4 mb-4">
            <p className="font-[Inter] font-[500] text-[15px] leading-[28px] text-[#111111]">
              Total
            </p>
            <p className="font-[Inter] font-[500] text-[14px] leading-[28px] text-[#111111]">
              ₹ 20 890.00
            </p>
          </div>

          {/* Information Text */}
          <p className="font-[Inter] font-[400] text-[9px] leading-[14px] text-[#111111] mb-6">
            (The total reflects the price of your order, including all duties
            and taxes)
          </p>

          {/* Delivery Date */}
          <h3 className="font-[Inter] font-[700] text-[15px] leading-[24px] text-[#111111] mb-4">
            Arrives Mon, 27 Mar - Wed, 12 Apr
          </h3>

          {/* Products Section */}
          <div className="space-y-6">
            {/* Product 1 */}
            <div className="flex gap-4">
              <div className="w-[80px] h-[80px]">
                <Image
                  src={"/images/men1.svg"}
                  alt="Nike Dri-FIT Top"
                  width={80}
                  height={80}
                  className="rounded"
                />
              </div>
              <div className="flex-1">
                <p className="font-[Inter] font-[400] text-[13px] leading-[20px] text-[#111111]">
                  Nike Dri-FIT ADV TechKnit Ultra Men&lsquo;s Short-Sleeve
                  Running Top
                </p>
                <p className="font-[Inter] font-[400] text-[12px] leading-[18px] text-[#8D8D8D]">
                  Qty 1
                </p>
                <p className="font-[Inter] font-[400] text-[12px] leading-[18px] text-[#8D8D8D]">
                  Size L
                </p>
                <p className="font-[Inter] font-[400] text-[13px] leading-[20px] text-[#111111] mt-1">
                  ₹ 3 895.00
                </p>
              </div>
            </div>

            {/* Product 2 */}
            <div className="flex gap-4">
              <div className="w-[80px] h-[80px]">
                <Image
                  src={"/images/shoe3.svg"}
                  alt="Nike Air Max Shoes"
                  width={80}
                  height={80}
                  className="rounded"
                />
              </div>
              <div className="flex-1">
                <p className="font-[Inter] font-[400] text-[13px] leading-[20px] text-[#111111]">
                  Nike Air Max 97 SE Men&lsquo;s Shoes
                </p>
                <p className="font-[Inter] font-[400] text-[12px] leading-[18px] text-[#8D8D8D]">
                  Qty 1
                </p>
                <p className="font-[Inter] font-[400] text-[12px] leading-[18px] text-[#8D8D8D]">
                  Size UK 8
                </p>
                <p className="font-[Inter] font-[400] text-[13px] leading-[20px] text-[#111111] mt-1">
                  ₹ 16 995.00
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
