"use client";

import React from "react";
import Image from "next/image";

const GetHelp = () => {
  return (
    <section className="w-full bg-white">
      {/* Header Section */}
      <div className="flex flex-col items-center py-6">
        <h1 className="text-[24px] font-bold text-[#111111] mb-4">GET HELP</h1>
        <div className="flex items-center w-full max-w-[600px] border border-[#CCCCCC] rounded-full px-4 py-2">
          <input
            type="text"
            placeholder="What can we help you with?"
            className="w-full text-sm text-[#CCCCCC] focus:outline-none placeholder-gray-400"
          />
          <Image
            src="/images/searchbar.svg" // Replace with your search icon path
            alt="Search Icon"
            width={16}
            height={16}
            className="cursor-pointer"
          />
        </div>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col lg:flex-row shadow-sm shadow-[#cccccc] items-start w-full px-6 gap-8">
  {/* Left Column: Payment Information */}
  <div className="flex-1 pr-6">
    {/* Payment Information Section */}
    <div>
      <h3 className="font-sans font-medium text-[28px] leading-[32px] text-[#111111] mb-6">
        WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?
      </h3>
      <p className="text-[15px] leading-[28px] text-[#111111] mb-4">
        We want to make buying your favourite Nike shoes and gear online fast and easy, and we accept the following payment options:
      </p>
      <ul className="list-disc pl-6 text-[15px] text-[#111111] mb-6">
        <li>Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro</li>
        <li>
          If you enter your PAN information at checkout, you&apos;ll be able to pay for your order with PayTM or a local credit or debit card.
        </li>
        <li>Apple Pay</li>
      </ul>
      <p className="text-[15px] leading-[28px] text-[#111111] mb-6">
        <span className="underline">Nike Members</span> can store multiple debit or credit cards in their profile for faster checkout. If you&apos;re not already a Member,{" "}
        <a href="./Joinus" className="underline">join us today</a>.
      </p>
      <div className="flex gap-4 mb-8">
        <button className="bg-[#111111] text-white px-6 py-2 rounded-full hover:bg-gray-700 transition">
          JOIN US
        </button>
        <button className="bg-[#111111] text-white px-6 py-2 rounded-full hover:bg-gray-700 transition">
          SHOP NIKE
        </button>
      </div>
    </div>

    {/* FAQs Section */}
    <div className="pt-6">
      <h4 className="font-medium text-[18px] text-[#111111] mb-4">FAQs</h4>
      <div className="space-y-4">
        <p className="text-[15px] text-[#111111]">
          <strong>Does my card need international purchases enabled?</strong>
          <br />
          Yes, we recommend asking your bank to enable international purchases on your card. You will be notified at checkout if international purchases need to be enabled.
        </p>
        <p className="text-[15px] text-[#111111]">
          <strong>Can I pay for my order with multiple methods?</strong>
          <br />
          No, payment for Nike orders can&apos;t be split between multiple payment methods.
        </p>
        <p className="text-[15px] text-[#111111]">
          <strong>What payment method is accepted for SNKRS orders?</strong>
          <br />
          You can use any accepted credit card to pay for your SNKRS order.
        </p>
        <p className="text-[15px] text-[#111111]">
          <strong>Why don&apos;t I see Apple Pay as an option?</strong>
          <br />
          To see Apple Pay as an option in the Nike App or on Nike.com, you&apos;ll need to use a compatible Apple device running the latest OS, be signed in to your iCloud account, and have a supported card in your Wallet. Additionally, you&apos;ll need to use Safari to use Apple Pay on Nike.com.
        </p>
      </div>
      <div className="flex items-center gap-4 mt-6">
        <p className="text-[15px]">Was this answer helpful?</p>
        <Image src="./images/thumb.svg" alt="Thumbs Up" width={30} height={30} />
        <Image className="-rotate-180" src="./images/thumb.svg" alt="Thumbs Down" width={30} height={30} />
      </div>
    </div>

    {/* Related Section */}
    <div className="mt-8">
      <h4 className="text-[16px] font-bold text-[#757575] mb-4">RELATED</h4>
      <ul className="list-none space-y-2">
        <li>
          <a href="./DeliveryOptions" className="text-[#111111] underline">
            WHAT ARE NIKE&apos;S DELIVERY OPTIONS?
          </a>
        </li>
        <li>
          <a href="./FreeDelivery" className="text-[#111111] underline">
            HOW DO I GET FREE DELIVERY ON NIKE ORDERS?
          </a>
        </li>
      </ul>
    </div>
  </div>



        {/* Right Column: Contact Us Section */}
        <div className="w-full lg:w-[313px] h-auto border-l border-gray-300 bg-white shadow-md p-6 space-y-8 text-center">
          <h4 className="text-[18px] font-sans font-medium">CONTACT US</h4>

          {/* Contact via Phone */}
          <div className="flex flex-col items-center">
            <Image
              src="./images/mobile.svg"
              alt="Mobile Icon"
              width={64}
              height={64}
            />
            <p className="font-sans font-medium text-[16px] mt-4">
              000 800 919 0566
            </p>
            <p className="font-sans font-normal text-[15px] leading-[22px]">
              Products & Orders: 24 hours a day, 7 days a week <br />
              Company Info & Enquiries: 07:30 - 16:30, Monday - Friday
            </p>
          </div>

          {/* Contact via Message */}
          <div className="flex flex-col items-center">
            <Image
              src="./images/message.svg"
              alt="Message Icon"
              width={64}
              height={64}
            />
            <p className="font-sans font-medium text-[15px] mt-4">
              24 hours a day
            </p>
            <p className="font-sans font-normal text-[15px] leading-[22px]">
              7 days a week
            </p>
          </div>

          {/* Response Time */}
          <div className="flex flex-col items-center">
            <Image
              src="./images/msm.svg"
              alt="Email Icon"
              width={64}
              height={64}
            />
            <p className="font-sans font-medium text-[15px] mt-4">
              We&apos;ll reply within
            </p>
            <p className="font-sans font-normal text-[15px] leading-[22px]">
              five business days
            </p>
          </div>

          {/* Store Locator */}
          <div className="flex flex-col items-center">
            <Image
              src="./images/loc.svg"
              alt="Location Icon"
              width={64}
              height={64}
            />
            <p className="font-sans font-medium text-[15px] mt-4">
              STORE LOCATOR
            </p>
            <p className="font-sans font-normal text-[15px] leading-[22px]">
              Find Nike retail stores near you
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetHelp;
