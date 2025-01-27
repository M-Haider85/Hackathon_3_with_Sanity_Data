'use client';
import React from 'react';
import Image from 'next/image';
import { FiShoppingCart } from "react-icons/fi";
import { useCart } from '../../contexts/CartContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import toastify styles
import Link from 'next/link';

export default function OurProducts() {
  const { addToCart } = useCart();

  const products = [
    {
      id: 1,
      image: '/Products/P1.png',
      name: 'Library Stool Chair',
      price: '$20',
      buttonStyle: 'bg-gray-200 text-black hover:bg-[#029FAE] hover:text-white',
      badge: { text: 'New', style: 'bg-orange-500 text-white' },
    },
    {
      id: 2,
      image: '/Products/P2.png',
      name: 'Ergonomic Office Chair',
      price: '$50',
      oldPrice: '$65',
      buttonStyle: 'bg-gray-200 text-black hover:bg-[#029FAE] hover:text-white',
      badge: { text: 'Sale', style: 'bg-green-500 text-white' },
    },
    {
      id: 3,
      image: '/Products/P3.png',
      name: 'Wooden Dining Chair',
      price: '$30',
      buttonStyle: 'bg-gray-200 text-black hover:bg-[#029FAE] hover:text-white',
    },
    {
      id: 4,
      image: '/Products/P4.png',
      name: 'Classic Rocking Chair',
      price: '$70',
      buttonStyle: 'bg-gray-200 text-black hover:bg-[#029FAE] hover:text-white',
    },
  ];

  const handleAddToCart = (product: { id: number; name: string; price: string; image: string }) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    });

    setTimeout(() => {
      toast.success('Your product has been added to the cart!');
    }, 100);
  };

  return (
    <div className="ml-28 mr-28 mt-10">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />

      <h2 className="font-semibold text-[32px]">Our Products</h2>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/single-product-page/${product.id}`} // Dynamic route
          >
            <div className="relative border p-4 rounded shadow-lg cursor-pointer">
              {product.badge && (
                <span
                  className={`absolute top-2 left-2 px-3 py-1 rounded-md text-sm font-semibold ${product.badge.style}`}
                >
                  {product.badge.text}
                </span>
              )}
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={300}
                className="rounded"
              />
              <div className="flex items-center justify-between mt-4">
                <div>
                  <p className="text-[18px] text-[#029FAE]">{product.name}</p>
                  {product.oldPrice ? (
                    <div className="flex items-center gap-2">
                      <p className="text-[20px] font-semibold">{product.price}</p>
                      <p className="text-[18px] text-gray-500 line-through">{product.oldPrice}</p>
                    </div>
                  ) : (
                    <p className="text-[20px] font-semibold">{product.price}</p>
                  )}
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent navigation to dynamic route
                    e.preventDefault(); // Prevent default Link behavior
                    handleAddToCart(product);
                  }}
                  className="bg-gray-200 text-black hover:bg-[#029FAE] hover:text-white px-4 py-2 rounded-md flex items-center justify-center"
                >
                  <FiShoppingCart className="text-xl" />
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
