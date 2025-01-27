import React from 'react';
import Image from 'next/image';
import { FiShoppingCart } from "react-icons/fi";

export default function FeaturedProducts() {
  // Product Images and Data
  const products = [
    {
      id: 1,
      image: '/Products/P1.png',
      name: 'Library Stool Chair',
      price: '$20',
      buttonStyle: 'bg-gray-200 text-black hover:bg-[#029FAE] hover:text-white', // Unique button style
      badge: { text: 'New', style: 'bg-orange-500 text-white' }, // Badge for first product
    },
    {
      id: 2,
      image: '/Products/P2.png',
      name: 'Ergonomic Office Chair',
      price: '$50',
      oldPrice: '$75', // Old price for second product
      buttonStyle: 'bg-gray-200 text-black hover:bg-[#029FAE] hover:text-white', // Default button style
      badge: { text: 'Sale', style: 'bg-green-500 text-white' }, // Badge for second product
    },
    {
      id: 3,
      image: '/Products/P3.png',
      name: 'Wooden Dining Chair',
      price: '$30',
      buttonStyle: 'bg-gray-200 text-black hover:bg-[#029FAE] hover:text-white', // Default button style
    },
    {
      id: 4,
      image: '/Products/P4.png',
      name: 'Classic Rocking Chair',
      price: '$70',
      buttonStyle: 'bg-gray-200 text-black hover:bg-[#029FAE] hover:text-white', // Default button style
    },
    {
      id: 5,
      image: '/Products/P5.png',
      name: 'Library Stool Chair',
      price: '$20',
      buttonStyle: 'bg-gray-200 text-black hover:bg-[#029FAE] hover:text-white', // Unique button style
      badge: { text: 'New', style: 'bg-orange-500 text-white' }, // Badge for first product
    },
    {
      id: 6,
      image: '/Products/P6.png',
      name: 'Ergonomic Office Chair',
      price: '$50',
      oldPrice: '$75', // Old price for second product
      buttonStyle: 'bg-gray-200 text-black hover:bg-[#029FAE] hover:text-white', // Default button style
      badge: { text: 'Sale', style: 'bg-green-500 text-white' }, // Badge for second product
    },
    {
      id: 7,
      image: '/Products/P7.png',
      name: 'Wooden Dining Chair',
      price: '$30',
      buttonStyle: 'bg-gray-200 text-black hover:bg-[#029FAE] hover:text-white', // Default button style
    },
    {
      id: 8,
      image: '/Products/P8.png',
      name: 'Classic Rocking Chair',
      price: '$70',
      buttonStyle: 'bg-gray-200 text-black hover:bg-[#029FAE] hover:text-white', // Default button style
    },
    {
      id: 9,
      image: '/Products/P1.png',
      name: 'Library Stool Chair',
      price: '$20',
      buttonStyle: 'bg-gray-200 text-black hover:bg-[#029FAE] hover:text-white', // Unique button style
      badge: { text: 'New', style: 'bg-orange-500 text-white' }, // Badge for first product
    },
    {
      id: 10,
      image: '/Products/P2.png',
      name: 'Ergonomic Office Chair',
      price: '$50',
      oldPrice: '$75', // Old price for second product
      buttonStyle: 'bg-gray-200 text-black hover:bg-[#029FAE] hover:text-white', // Default button style
      badge: { text: 'Sale', style: 'bg-green-500 text-white' }, // Badge for second product
    },
    {
      id: 11,
      image: '/Products/P9.png',
      name: 'Wooden Dining Chair',
      price: '$30',
      buttonStyle: 'bg-gray-200 text-black hover:bg-[#029FAE] hover:text-white', // Default button style
    },
    {
      id: 12,
      image: '/Products/P4.png',
      name: 'Classic Rocking Chair',
      price: '$70',
      buttonStyle: 'bg-gray-200 text-black hover:bg-[#029FAE] hover:text-white', // Default button style
    },
  ];

  return (
    <div>
    <div className="ml-28 mr-28 mt-20 mb-24">
      {/* Section Title */}
      <div>
        <h2 className="font-semibold text-[32px]">All Products</h2>
      </div>

      {/* Product List */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="relative border p-4 rounded shadow-lg">
            {/* Badge (Optional) */}
            {product.badge && (
              <span
                className={`absolute top-2 left-2 px-3 py-1 rounded-md text-sm font-semibold ${product.badge.style}`}
              >
                {product.badge.text}
              </span>
            )}

            {/* Product Image */}
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={300}
              className="rounded"
            />

            {/* Product Info */}
            <div className="flex items-center justify-between mt-4">
              {/* Left Section: Text */}
              <div>
                <p className="text-[18px] text-[#029FAE]">{product.name}</p>
                <div className="flex items-center gap-2">
                  <p className="text-[20px] font-semibold">{product.price}</p>
                  {product.oldPrice && (
                    <p className="text-[18px] text-gray-400 line-through">
                      {product.oldPrice}
                    </p>
                  )}
                </div>
              </div>

              {/* Right Section: Button */}
              <button
                className={`${product.buttonStyle} px-4 py-2 rounded-md flex items-center justify-center`}
              >
                <FiShoppingCart className="text-xl" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>



    {/* Newsletter Section & Instagram Section */}

    <div className="bg-gray-100 py-16 px-4 text-center">
      {/* Newsletter Section */}
      <h2 className="text-5xl font-semibold mb-4">Or Subscribe To The Newsletter</h2>
      <div className="flex justify-center items-center max-w-md mx-auto">
        <input
          type="email"
          placeholder="Email Address..."
          className="w-full px-4 py-2 mt-10 border-b-2 border-gray-400 bg-gray-100 focus:outline-none focus:border-black"
        />
        <button className="px-4 py-2 mt-11 ml-2 text-sm font-medium text-black border-b-2 border-gray-400 hover:border-black">SUBMIT</button>
      </div>

      {/* Instagram Section */}
      <h2 className="text-5xl font-semibold mt-16 mb-10">Follow Products And Discounts On Instagram</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 ml-28 mr-28">
        {[
          '/Products/P1.png',
          '/Products/P2.png',
          '/Products/P3.png',
          '/Products/P4.png',
          '/Products/P5.png',
          '/Products/P6.png',
        ].map((src, index) => (
          <div key={index} className="w-full h-40 bg-gray-200">
            <Image
              src={src}
              alt={`Product ${index + 1}`}
              className="object-cover w-full h-full rounded-lg"
              width={300}
              height={300}
            />
          </div>
        ))}
      </div>
    </div>

    </div>
  );
}

