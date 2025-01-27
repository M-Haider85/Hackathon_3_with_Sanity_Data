import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";
import { LuTrophy } from "react-icons/lu";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { TfiHeadphoneAlt } from "react-icons/tfi";



const ContactForm = () => {
  return (
    <div className='ml-28 mr-28 mt-10'>
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Get In Touch With Us</h1>
      <p className='text-center text-[18px] text-gray-400 mt-6'>For More Information About Our Product & Service.
             Please Feel Free To Drop Us</p>
         <p className='text-center text-[18px] text-gray-400 mb-12'>An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
         </p>
      <div className="flex flex-col md:flex-row max-w-6xl w-full">
        {/* Left Section */}
        <div className="md:w-1/2 p-8">
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <FaLocationDot className='text-2xl mr-4 text-red-600'/>
              <h2 className="font-bold text-2xl">Address</h2>
            </div>
            <p>236 5th SE Avenue, New York NY10000, United States</p>
          </div>
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <FaPhone className='text-2xl mr-4 text-blue-500'/>
              <h2 className="font-bold text-2xl">Phone</h2>
            </div>
            <p>Mobile: +(84) 546-6789</p>
            <p>Hotline: +(84) 456-6789</p>
          </div>
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <FaClock className='text-2xl mr-4 text-amber-600'/>
              <h2 className="font-bold text-2xl">Working Time</h2>
            </div>
            <p>Monday-Friday: 9:00 - 22:00</p>
            <p>Saturday-Sunday: 9:00 - 21:00</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 p-8">
          <form className="space-y-14">
            <div>
              <label htmlFor="name" className="block text-md font-semibold text-black">
                Your name
              </label>
              <textarea
              id="name"
              name="name"
              rows={3}
              required
              className="mt-6 px-4 py-2 block w-full border border-b rounded-md border-gray-300 shadow-md focus:border-blue-500 
              focus:ring-blue-500 sm:text-md"
              placeholder="Abc"></textarea>
            </div>

            <div>
              <label htmlFor="email" className="block text-md font-semibold text-black">
                Email address
              </label>
              <textarea
              id="email"
              name="email"
              rows={3}
              required
              className="mt-6 px-4 py-2 block w-full border border-b rounded-md border-gray-300 shadow-md focus:border-blue-500 
              focus:ring-blue-500 sm:text-md"
              placeholder="Abc@def.com"></textarea>
            </div>

            <div>
              <label htmlFor="subject" className="block text-md font-semibold text-black">
                Subject
              </label>
              <textarea 
                id="subject"
                name="subject"
                rows={3}
                className="mt-6 px-4 py-2 block w-full border border-b rounded-md border-gray-300 shadow-md focus:border-blue-500 
                focus:ring-blue-500 sm:text-md"
                placeholder="This is an optional"></textarea>
            </div>

            <div>
              <label htmlFor="message" className="block text-md font-semibold text-black">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="mt-6 px-4 py-2 block w-full border border-b rounded-md border-gray-300 shadow-md focus:border-blue-500 
                focus:ring-blue-500 sm:text-md"
                placeholder="Hi! I’d like to ask about"
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="w-[50%] bg-[#029fae] hover:bg-teal-700 text-white 
                border border-yellow-400 font-medium py-4 px-4 rounded-md"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    {/* Features Section */}


    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* High Quality */}
          <div className="flex flex-col items-center">
            <LuTrophy className="text-6xl text-gray-700 mb-4" />
            <h3 className="text-2xl font-semibold">High Quality</h3>
            <p className="text-gray-400 text-lg font-medium">crafted from top materials</p>
          </div>

          {/* Warranty Protection */}
          <div className="flex flex-col items-center">
            <IoShieldCheckmarkSharp className="text-6xl text-gray-700 mb-4" />
            <h3 className="text-2xl font-semibold">Warranty Protection</h3>
            <p className="text-gray-400 text-lg font-medium">Over 2 years</p>
          </div>

          {/* 24/7 Support */}
          <div className="flex flex-col items-center">
            <TfiHeadphoneAlt className="text-6xl text-gray-700 mb-4" />
            <h3 className="text-2xl font-semibold">24 / 7 Support</h3>
            <p className="text-gray-400 text-lg font-medium">Dedicated support</p>
          </div>
        </div>
      </div>
    </div>

    </div>
  );
};

export default ContactForm;

