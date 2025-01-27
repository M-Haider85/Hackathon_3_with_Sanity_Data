'use client';
import React from 'react';
import Image from 'next/image';
import { FiShoppingCart } from "react-icons/fi";
import Link from 'next/link';
import { useCart } from '../../../contexts/CartContext'; // Importing useCart hook

export default function NavMiddle() {
  const Logo = '/Logo_Icon.png';

  const { totalItems } = useCart(); // Accessing totalItems from CartContext

  return (
    <div className="bg-gray-200 h-[10vh] flex items-center justify-between px-4 mx-auto">
      {/* Left Section: Images and Heading */}
      <div className="flex items-center space-x-2 ml-24">
        <div>
          <Image
            src={Logo}
            alt="logo"
            width={35}
            height={35}
            className=""
          />
        </div>
        <h1 className="text-blue-950 font-medium text-[30px]">Comforty</h1>
      </div>

      {/* Right Section: Cart Button */}
      <div>
        <Link href={'/CartPage/'}>
          <button className="relative bg-white text-black px-4 py-2 rounded hover:bg-gray-400 flex items-center space-x-2 mr-24">
            <FiShoppingCart className="text-lg" />
            <span>Cart</span>
            {/* Badge for Total Items */}
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
        </Link>
      </div>
    </div>
  );
}
