'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { FiShoppingCart, FiCheckCircle } from 'react-icons/fi';
import Link from 'next/link';
import { useCart } from '../../../../contexts/CartContext'; // Ensure the path is correct

// Sample product data
const products = [
  {
    id: 1,
    name: 'Library Stool Chair',
    price: '$20',
    image: '/Products/P1.png',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis placerat tincidunt sem in dapibus elit exec. Suspendisse in laoreet porttitor turpis.',
  },
  {
    id: 2,
    name: 'Ergonomic Office Chair',
    price: '$50',
    image: '/Products/P2.png',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis placerat tincidunt sem in dapibus elit exec. Suspendisse in laoreet porttitor turpis.',
  },
  {
    id: 3,
    name: 'Wooden Dining Chair',
    price: '$30',
    image: '/Products/P3.png',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis placerat tincidunt sem in dapibus elit exec. Suspendisse in laoreet porttitor turpis.',
  },
  {
    id: 4,
    name: 'Classic Rocking Chair',
    price: '$70',
    image: '/Products/P4.png',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis placerat tincidunt sem in dapibus elit exec. Suspendisse in laoreet porttitor turpis.',
  },
  {
    id: 5,
    name: 'Library Stool Chair',
    price: '$25',
    image: '/Products/P5.png',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis placerat tincidunt sem in dapibus elit exec. Suspendisse in laoreet porttitor turpis.',
  },
  {
    id: 6,
    name: 'Ergonomic Office Chair',
    price: '$60',
    image: '/Products/P6.png',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis placerat tincidunt sem in dapibus elit exec. Suspendisse in laoreet porttitor turpis.',
  },
  {
    id: 7,
    name: 'Wooden Dining Chair',
    price: '$45',
    image: '/Products/P7.png',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis placerat tincidunt sem in dapibus elit exec. Suspendisse in laoreet porttitor turpis.',
  },
  {
    id: 8,
    name: 'Classic Rocking Chair',
    price: '$75',
    image: '/Products/P8.png',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis placerat tincidunt sem in dapibus elit exec. Suspendisse in laoreet porttitor turpis.',
  },
  {
    id: 9,
    name: 'Library Stool Chair',
    price: '$20',
    image: '/Products/P1.png',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis placerat tincidunt sem in dapibus elit exec. Suspendisse in laoreet porttitor turpis.',
  },
  {
    id: 10,
    name: 'Ergonomic Office Chair',
    price: '$50',
    image: '/Products/P2.png',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis placerat tincidunt sem in dapibus elit exec. Suspendisse in laoreet porttitor turpis.',
  },
];

// Define the type for route parameters
type Params = {
  productId: string; // productId is always a string from the URL
};

export default function SingleProductPage() {
  const { productId } = useParams() as Params; // Cast useParams() to the Params type
  const product = products.find((p) => p.id === Number(productId)); // Find the product by ID

  const { addToCart } = useCart(); // Access the addToCart function from CartContext
  const [notification, setNotification] = useState<string | null>(null); // Manage notification state

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    addToCart({ ...product, quantity: 1 }); // Add product with quantity 1
    setNotification(`${product.name} has been added to your cart!`);
    setTimeout(() => setNotification(null), 3000); // Clear notification after 3 seconds
  };

  return (
    <div className="ml-28 mr-28 mt-10">
      {/* Notification */}
      {notification && (
        <div className="fixed top-4 right-4 bg-green-300 text-green-800 px-4 py-2 rounded shadow-lg flex items-center">
          <FiCheckCircle className="mr-2" />
          {notification}
        </div>
      )}

      <div className="flex flex-col lg:flex-row items-center mt-10 gap-8">
        <Image src={product.image} alt={product.name} width={900} height={500} />
        <div className="ml-16">
          <h1
            className="text-[35px] md:text-[50px] lg:text-[70px] mb-[1rem] font-bold text-[#02073e] leading-[2.4rem] 
          md:leading-[4rem] -mt-40"
          >
            {product.name}
          </h1>
          <button
            className="bg-[#029FAE] text-xl text-white rounded-3xl font-medium 
          px-2 py-2 mt-4"
          >
            {product.price}.00 USD
          </button>
          <div className="border-t-2 border-gray-300 mt-8">
            <p className="text-[17px] font-[400] mb-[2rem] text-gray-500 mt-10">
              {product.description}
            </p>

            <button
              onClick={handleAddToCart}
              className="mt-4 bg-[#029FAE] hover:bg-blue-800 text-white text-xl px-8 py-4 rounded flex items-center"
            >
              <FiShoppingCart className="mr-2" />
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="bg-white py-16 px-4 mx-10 mt-10">
        <h2 className="text-3xl font-bold tracking-wider mb-6">Featured Products</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {products.map((p) => (
            <Link
              key={p.id}
              href={`/single-product-page/${p.id}`}
              className="rounded-lg overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="relative w-full h-48">
                <Image src={p.image} alt={p.name} layout="fill" className="object-cover" />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-sm font-medium text-gray-800 mb-2">{p.name}</h3>
                <p className="text-lg font-bold text-gray-900">{p.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
