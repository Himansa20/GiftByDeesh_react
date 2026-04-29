import React from "react";
import logo from "../assets/logo/logo.jpg";

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-black/5 pt-16 pb-8">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-24 mb-16">
          {/* About Column */}
          <div>
            <h3 className="text-[#D6737B] font-sans font-bold text-2xl mb-6">
              GiftByDeesh
            </h3>
            <p className="text-[#7D7D7D] font-sans text-base leading-relaxed max-w-sm mb-6">
              GiftByDeesh creates thoughtfully curated and customizable gift
              boxes to make every special moment unforgettable. Crafted with
              love, delivered with care.
            </p>
            <img
              src={logo}
              alt="GiftByDeesh Logo"
              className="h-25 w-auto object-contain mix-blend-multiply"
            />
          </div>

          {/* Contact & Info Column */}
          <div>
            <h4 className="text-[#525252] font-sans font-semibold text-lg mb-6">
              Contact & Info
            </h4>
            <div className="space-y-4">
              <p className="text-[#7D7D7D] font-sans">
                <span className="font-medium text-[#525252]">Phone: </span>
                +94 00 000 0000
              </p>
              <p className="text-[#7D7D7D] font-sans">
                <span className="font-medium text-[#525252]">Email: </span>
                hello@giftbydeesh.com
              </p>
              <div className="flex flex-col gap-2 mt-4">
                {[
                  "Terms & Conditions",
                  "Shipping",
                  "Returns & Cancellations",
                  "Privacy Policy",
                ].map((item, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-[#7D7D7D] font-sans hover:text-[#D6737B] transition-colors duration-300 w-fit"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Follow Us Column */}
          <div>
            <h4 className="text-[#525252] font-sans font-semibold text-lg mb-6">
              Follow Us
            </h4>
            <div className="flex gap-4">
              {/* Instagram */}
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-[#D6737B] flex items-center justify-center text-[#D6737B] hover:bg-[#D6737B] hover:text-white transition-all duration-300 group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-[#D6737B] flex items-center justify-center text-[#D6737B] hover:bg-[#D6737B] hover:text-white transition-all duration-300 group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>

              {/* TikTok (Custom Path roughly approximating TikTok logo as it's not standard in basic icon sets sometimes, but here's a path) */}
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-[#D6737B] flex items-center justify-center text-[#D6737B] hover:bg-[#D6737B] hover:text-white transition-all duration-300 group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-black/5 pt-8 text-center">
          <p className="text-[#7D7D7D] font-sans text-sm">
            &copy; 2025 GiftByDeesh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
