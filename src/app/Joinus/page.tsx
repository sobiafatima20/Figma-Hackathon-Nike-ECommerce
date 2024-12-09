"use client";

import React from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const JoinUs = () => {
  const [selectedGender, setSelectedGender] = useState("");
  return (
    <>
      <section className="flex justify-center items-center h-[833px] bg-[#FFFFFF]">
        <div className="w-[90%] max-w-[400px] p-6 ">
          {/* Logo Section */}
          <div className="flex justify-center mb-6">
            <Image
              src="/images/Logo.svg"
              alt="Nike Logo"
              width={58.85}
              height={20.54}
            />
          </div>

          {/* Title Section */}
          <div className="text-center mb-4">
            <h1 className="text-lg font-bold text-[#111111]">
              BECOME A NIKE MEMBER
            </h1>
            <p className="text-sm text-[#8D8D8D] mt-2 leading-5">
              Create your Nike Member profile and get first access to the very
              best of Nike products, inspiration, and community.
            </p>
          </div>

          {/* Form Section */}
          <form className="space-y-4">
            {/* Email Address */}
            <input
              type="email"
              name="email"
              placeholder="Email address"
              className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-black"
            />

            {/* Password */}
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-black"
            />

            {/* First Name */}
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-black"
            />

            {/* Last Name */}
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-black"
            />

            {/* Date of Birth */}
            <input
              type="dob"
              name="dob"
              placeholder="Date of Birth"
              className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-black"
            />
            <p className="text-xs text-[#8D8D8D]">
              Get a Nike Member Reward every year on your Birthday.
            </p>

            {/* Country Dropdown */}
            <select
              name="country"
              className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-black"
            >
              <option value="India">India</option>
              <option value="USA">United States</option>
              <option value="UK">United Kingdom</option>
              <option value="Canada">Canada</option>
            </select>
            {/* Gender Toggle Buttons */}

            <div className="flex justify-between space-x-4">
              <button
                type="button"
                className={`w-full py-2 border rounded-md text-sm font-medium ${
                  selectedGender === "Male"
                    ? "bg-black text-white border-black"
                    : "bg-white text-gray-700 border-gray-300"
                }`}
                onClick={() => setSelectedGender("Male")}
              >
                Male
              </button>
              <button
                type="button"
                className={`w-full py-2 border rounded-md text-sm font-medium ${
                  selectedGender === "Female"
                    ? "bg-black text-white border-black"
                    : "bg-white text-gray-700 border-gray-300"
                }`}
                onClick={() => setSelectedGender("Female")}
              >
                Female
              </button>
            </div>

            {/* Checkbox */}
            <label className="flex items-start space-x-2 text-sm text-gray-700">
              <input type="checkbox" className="h-4 w-4 mt-1" />
              <span>
                Sign up for emails to get updates from Nike on products, offers,
                and your Member benefits.
              </span>
            </label>
            {/* Terms Section */}
            <p className="mt-4 text-center text-xs text-gray-500">
              By creating an account, you agree to Nike&apos;s{" "}
              <Link href="#" className="text-black hover:underline">
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link href="#" className="text-black hover:underline">
                Terms of Use
              </Link>
              .
            </p>
            {/* Join Us Button */}
            <button
              type="submit"
              className="w-full py-2 bg-black text-white rounded-md shadow-md hover:bg-gray-800 transition duration-300 text-sm font-medium"
            >
              JOIN US
            </button>
          </form>

          {/* Already a Member Section */}
          <p className="mt-4 text-center text-sm text-gray-600">
            Already a Member?{" "}
            <Link
              href="./Signup"
              className="text-black font-semibold hover:underline"
            >
              Sign In.
            </Link>
          </p>
        </div>
      </section>
    </>
  );
};

export default JoinUs;
