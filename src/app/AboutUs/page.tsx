import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { FaRegCheckCircle } from "react-icons/fa";
import { ImCreditCard } from "react-icons/im";
import { PiPlantBold } from "react-icons/pi";

const categories = [
  {
    title: "Wing Chair",
    products: "$99.00",
    image: "/TopCategories/TC1.png",
  },
  {
    title: "Wooden Chair",
    products: "$99.00",
    image: "/TopCategories/TC2.png",
  },
  {
    title: "Desk Chair",
    products: "$99.00",
    image: "/TopCategories/TC3.png",
  },
];


export default function AboutUs() {
  return (
    <div className='ml-28 mr-28 mt-10'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6'>
            <img 
            src='/About/Text_Block.png/'
            alt='Text-Block'
            width={672}
            height={478}
            />
            <img 
            src='/About/Image_Block.png/'
            alt='Image-Block'
            width={590}
            height={478}
            />
        </div>

        <div className="container mx-auto py-16 mt-20">
      <h2 className="text-3xl text-[#272343] font-bold mb-12 text-center">What Makes Our Brand Different</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div className="bg-gray-100 text-gray-500 rounded-lg shadow-md p-6 text-center">
          <div className="flex items-center justify-center mb-4">
            <TbTruckDelivery 
            size={30}
            className='text-[#007580]' />
            {/* <img src="/next-day-delivery.svg" alt="Next Day Delivery" width={40} height={40} /> */}
          </div>
          <h3 className="text-xl font-semibold mb-2">Next Day as Standard</h3>
          <p>Order before 3pm and get your order the next day as standard.</p>
        </div>

        <div className="bg-gray-100 text-gray-500 rounded-lg shadow-md p-6 text-center">
          <div className="flex items-center justify-center mb-4">
          <FaRegCheckCircle 
            size={30}
            className='text-[#007580]' />
          </div>
          <h3 className="text-xl font-semibold mb-2">Made by True Artisans</h3>
          <p>Handmade crafted goods made with real passion and craftsmanship.</p>
        </div>

        <div className="bg-gray-100 text-gray-500 rounded-lg shadow-md p-6 text-center">
          <div className="flex items-center justify-center mb-4">
          <ImCreditCard 
            size={30}
            className='text-[#007580]' />
          </div>
          <h3 className="text-xl font-semibold mb-2">Unbeatable Prices</h3>
          <p>For our materials and quality you would not find better prices anywhere.</p>
        </div>

        <div className="bg-gray-100 text-gray-500 rounded-lg shadow-md p-6 text-center">
          <div className="flex items-center justify-center mb-4">
          <PiPlantBold 
            size={30}
            className='text-[#007580]' />
          </div>
          <h3 className="text-xl font-semibold mb-2">Recycled Packaging</h3>
          <p>We use 100% recycled to ensure our footprint is more manageable.</p>
        </div>
      </div>
    </div>


    <div className='mt-20'>
      <h2 className="text-3xl font-bold mb-8">Our Popular Products</h2>
      {/* <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-evenly gap-6'>
            <img 
            src='/Products/P7.png/'
            alt='opp1'
            width={300}
            height={300}
            />
             <img 
            src='/Products/P9.png/'
            alt='opp2'
            width={300}
            height={300}
            />
            <img 
            src='/Products/P5.png/'
            alt='opp3'
            width={300}
            height={200}
            />
        </div> */}
        

        <section className="px-6 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-md"
          >
            <img
              src={category.image}
              alt={category.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-4">
              <h3 className="text-lg text-amber-400 font-semibold">{category.title}</h3>
              <p className="text-md font-bold text-amber-200">{category.products}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
    </div>
    </div> 
  )
}