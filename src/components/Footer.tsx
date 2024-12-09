import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col w-full bg-[#111111] px-4 sm:px-8 lg:px-16 py-8">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          {/* Column 1 */}
          <div className="flex flex-col space-y-4">
            <p className="uppercase text-white text-xs font-helvetica">Find A Store</p>
            <p className="uppercase text-white text-xs font-helvetica">Become A Member</p>
            <p className="uppercase text-white text-xs font-helvetica">Sign Up for Email</p>
            <p className="uppercase text-white text-xs font-helvetica">Send Us Feedback</p>
            <p className="uppercase text-white text-xs font-helvetica">Student Discounts</p>
          </div>
          {/* Column 2 */}
          <div className="flex flex-col space-y-4">
            <p className="uppercase text-white text-xs font-helvetica">Get Help</p>
            <p className="uppercase text-gray-400 text-xs font-helvetica">Order Status</p>
            <p className="uppercase text-gray-400 text-xs font-helvetica">Delivery</p>
            <p className="uppercase text-gray-400 text-xs font-helvetica">Returns</p>
            <p className="uppercase text-gray-400 text-xs font-helvetica">Payment Options</p>
            <p className="uppercase text-gray-400 text-xs font-helvetica">Contact Us On Nike.com Inquiries</p>
            <p className="uppercase text-gray-400 text-xs font-helvetica">Contact Us On All Other Inquiries</p>
          </div>
          {/* Column 3 */}
          <div className="flex flex-col space-y-4">
            <p className="uppercase text-white text-xs font-helvetica">About Nike</p>
            <p className="uppercase text-gray-400 text-xs font-helvetica">News</p>
            <p className="uppercase text-gray-400 text-xs font-helvetica">Careers</p>
            <p className="uppercase text-gray-400 text-xs font-helvetica">Investors</p>
            <p className="uppercase text-gray-400 text-xs font-helvetica">Sustainability</p>
          </div>
          {/* Social Icons */}
          <div className="flex items-center justify-center gap-6">
            <Image src="/images/twitter.svg" alt="Twitter" width={30} height={30} />
            <Image src="/images/facebook.svg" alt="Facebook" width={30} height={30} />
            <Image src="/images/youtube.svg" alt="YouTube" width={30} height={30} />
            <Image src="/images/instagram.svg" alt="Instagram" width={30} height={30} />
          </div>
        </div>
        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-8 border-t border-gray-700 pt-4">
          {/* Left Content */}
          <div className="flex items-center space-x-4">
            <Image src="/images/location.svg" alt="Location" width={14} height={14} />
            <p className="text-white text-xs font-helvetica">India</p>
            <p className="text-gray-400 text-xs font-helvetica">© 2023 Nike, Inc. All Rights Reserved</p>
          </div>
          {/* Right Links */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <p className="text-gray-400 text-xs font-helvetica cursor-pointer hover:text-white">Guides</p>
            <p className="text-gray-400 text-xs font-helvetica cursor-pointer hover:text-white">Terms of Sale</p>
            <p className="text-gray-400 text-xs font-helvetica cursor-pointer hover:text-white">Terms of Use</p>
            <p className="text-gray-400 text-xs font-helvetica cursor-pointer hover:text-white">Nike Privacy Policy</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
