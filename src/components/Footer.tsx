import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const Logo = "/Logo_Icon.png";

  return (
    <div className="mt-10">
      <footer className="bg-white border-t border-gray-200 py-10">
        <div className="container mx-auto px-6 md:px-10 lg:px-20">
          {/* Main Footer Sections */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {/* Logo and Description */}
            <div className="space-y-4">
              <div className="flex items-center">
                <img
                  src={Logo}
                  alt="Comforty logo"
                  width={35}
                  height={35}
                  className="mr-2"
                />
                <h2 className="text-2xl font-semibold text-gray-800">
                  Comforty
                </h2>
              </div>
              <p className="text-gray-600">
                Vivamus tristique odio sit amet velit semper, eu posuere turpis
                interdum. Cras egestas purus.
              </p>
              <div className="flex space-x-4 text-gray-600">
                <FaFacebookF
                  className="cursor-pointer hover:text-[#029FAE]"
                  aria-label="Facebook"
                />
                <FaTwitter
                  className="cursor-pointer hover:text-[#029FAE]"
                  aria-label="Twitter"
                />
                <FaInstagram
                  className="cursor-pointer hover:text-[#029FAE]"
                  aria-label="Instagram"
                />
                <FaPinterest
                  className="cursor-pointer hover:text-[#029FAE]"
                  aria-label="Pinterest"
                />
                <FaYoutube
                  className="cursor-pointer hover:text-[#029FAE]"
                  aria-label="YouTube"
                />
              </div>
            </div>

            {/* Categories */}
            <div className="grid grid-cols-3 ml-20">
              <div className="mx-auto">
                <h3 className="text-lg font-semibold text-gray-800">
                  Categories
                </h3>
                <ul className="space-y-2 text-gray-600">
                  {[
                    "Sofa",
                    "Armchair",
                    "Wing Chair",
                    "Desk Chair",
                    "Wooden Chair",
                    "Park Bench",
                  ].map((category, index) => (
                    <li
                      key={index}
                      className={`${
                        category === '' ? "text-[#029FAE] underline" : ""
                      } hover:text-[#029FAE] hover:underline`}
                    >
                      {category}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Support */}
              <div className="mx-auto ml-28">
                <h3 className="text-lg font-semibold text-gray-800">Support</h3>
                <ul className="space-y-2 text-gray-600">
                  {[
                    "Help & Support",
                    "Terms & Conditions",
                    "Privacy Policy",
                    "Claims",
                  ].map((support, index) => (
                    <li
                      key={index}
                      className="hover:text-[#029FAE] hover:underline"
                    >
                      {support}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mx-auto ml-60">
              <h3 className="text-lg font-semibold text-gray-800">
                Newsletter
              </h3>
              <div className="flex items-stretch">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-12 py-2 border border-gray-300 rounded-l-md focus:outline-none"
                  aria-label="Enter your email address"
                />
                <button
                  type="button"
                  className="px-4 py-2 bg-[#029FAE] hover:bg-[#027d87] text-white rounded-r-md"
                >
                  Subscribe
                </button>
              </div>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                tincidunt erat enim.
              </p>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="mt-10 text-gray-400 text-sm border-t pt-6 flex items-center justify-between">
            <p>
              @ 2021 - Blogy - Designed & Developed by{" "}
              <span className="text-[#029FAE]">Zakirsoft</span>
            </p>
            <img
              src="/Bank_Card.png"
              alt="Bank cards"
              width={200}
              height={200}
              className="ml-4"
            />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
