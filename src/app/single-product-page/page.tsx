import React from 'react'
import Image from 'next/image'
import { FiShoppingCart } from 'react-icons/fi'
import Link from 'next/link';

export default function Hero() {
const products = [
{
id: 1,
name: 'Library Stool Chair',
price: '$99',
image: '/Products/P1.png',
},
{
id: 2,
name: 'Library Stool Chair',
price: '$99',
image: '/Products/P2.png',
},
{
id: 3,
name: 'Library Stool Chair',
price: '$99',
image: '/Products/P3.png',
},
{
id: 4,
name: 'Library Stool Chair',
price: '$99',
image: '/Products/P4.png',
},
{
id: 5,
name: 'Library Stool Chair',
price: '$99',
image: '/Products/P5.png',
},
];
return (
<div>
<div className='h-[70vh] lg:h-[88vh] md:h-[80vh] sm:h-[75vh] flex items-center flex-col justify-center'>
<div className='grid grid-cols-1 lg:grid-cols-5 items-center w-[80%] mx-auto'>
<div
className='col-span-3 hidden sm:block'>
<Image
src='/Products/P4.png'
alt='Hero'
width={600}
height={500}
/>
</div>
<div className='col-span-2'>
<div className="border-b border-gray-400">
<h1
className='text-[35px] md:text-[50px] lg:text-[70px] mb-[1rem] font-bold text-[#02073e]
leading-[2.4rem] md:leading-[4rem]'>Library Stool Chair</h1>
<button className='bg-[#029FAE] hover:bg-[#2376a9] text-2xl text-white rounded-3xl font-medium px-2 py-2 mt-4'>$20.00 USD</button>
<div
className='flex items-center space-x-4 md:space-x-6 mt-5'>
</div>
</div>
<p
className='md:text-[22px] text-[15px] mb-[2rem] text-gray-500 opacity-90 font-[400] my-5'>Lorem ipsum dolor sit amet,
consectetur adipiscing elit. Duis placerat tincidunt sem in dapibus elit exec.
Suspendisse in laoreet porttitor turpis.</p>
{/* <button className='bg-[#029FAE] text-2xl text-white rounded-lg font-medium px-2 py-2 mt-4'>Add To Cart</button> */}

<div>
<button className="bg-[#029FAE] hover:bg-[#2376a9] text-white text-xl px-8 py-4 font-medium rounded
flex items-center space-x-2 mr-24">
<FiShoppingCart className="text-2xl" /> {/* Cart Icon */}
<span>Add To Cart</span> {/* Text */}
</button>
</div>
</div>
</div>
</div>



<div className="bg-white py-16 px-4 mx-10 mt-10">
<div className="flex justify-between items-center mb-12">
<h2 className="text-3xl font-bold tracking-wider">FEATURED PRODUCTS</h2>
<Link href="/" className="text-md font-semibold text-gray-600 hover:underline">
View all
</Link>
</div>

<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
{products.map((product) => (
<div
key={product.id}
className="rounded-lg overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-shadow"
>
<div className="relative w-full h-48">
<Image
src={product.image}
alt={product.name}
layout="fill"
className="object-cover"
/>
</div>
<div className="p-4 text-center">
<h3 className="text-sm font-medium text-gray-800 mb-2">
{product.name}
</h3>
<p className="text-lg font-bold text-gray-900">
{product.price}
</p>
</div>
</div>
))}
</div>
</div>
</div>
)}