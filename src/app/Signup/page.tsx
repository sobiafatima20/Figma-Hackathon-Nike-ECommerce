import React from "react";
import Image from "next/image";
import Link from "next/link";


const Signup = () => {
  return (
    <>
    <section className="flex justify-center items-center h-screen bg-[#FFFFFF]">
      <div className="w-[90%] max-w-[380px] p-6">
        {/* Logo Section */}
        <div className="flex justify-center mb-6">
          <Image src="/images/Logo.svg" alt="Logo" width={58.85} height={20.54} />
        </div>

        {/* Title Section */}
        <p className="text-center text-[#111111] font-bold text-lg leading-6">
          YOUR ACCOUNT FOR EVERYTHING NIKE
        </p>

        {/* Form Section */}
        <form className="mt-6 space-y-4">
          {/* Email Input */}
          <div className="relative">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email address"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-sm text-gray-700"
            />
          </div>

          {/* Password Input */}
          <div className="relative">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-sm text-gray-700"
            />
          </div>

          {/* Keep me signed in + Forgot Password */}
          <div className="flex justify-between items-center text-sm text-gray-600">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="h-4 w-4 text-black border-gray-300 rounded" />
              <span>Keep me signed in</span>
            </label>
            <Link href="#" className="text-black hover:underline">
              Forgot your password?
            </Link>
          </div>

          {/* Sign-In Button */}
          <button
            type="submit"
            className="w-full py-2 bg-[#111111] text-[#FFFFFF] rounded-md shadow-md hover:bg-[#8D8D8D]] transition duration-300 text-sm font-medium"
          >
            SIGN IN
          </button>
        </form>

        {/* Terms Section */}
        <p className="mt-4 text-center text-xs text-[#8D8D8D]">
          By logging in, you agree to Nike&apos;s{" "}
          <a href="#" className="text-black hover:underline">
            Privacy Policy
          </a>{" "}
          and{" "}
          <Link href="#" className="text-black hover:underline">
            Terms of Use
          </Link>
          .
        </p>

        {/* Join Us Section */}
        <p className="mt-4 text-center text-sm text-[#8D8D8D]">
          Not a Member?{" "}
          <Link href="./Joinus" className="text-black font-semibold hover:underline">
            Join Us.
          </Link>
        </p>
      </div>
    </section>
    </>
  );
};

export default Signup;
