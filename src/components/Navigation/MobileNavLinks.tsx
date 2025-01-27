// import { IoClose } from "react-icons/io5";
// import Link from 'next/link'
// import React from 'react'

// interface Props{
//   nav: boolean;
//   closeNav: () => void;
// }

// export default function MobileNav({nav, closeNav}:Props) {
//   const navOpenStyle = nav ? "translate-x-0" : 'translate-x-[-100%]';

//   return (
//     <div className={`transform transition-all ${navOpenStyle} duration-500 fixed top-0 left-0 z-[200] h-[100vh]
//     right-0 bottom-0 bg-gray-200 bg-opacity-90`}>
//       <IoClose 
//       onClick={closeNav} 
//       className='w-[2rem] h-[2rem] absolute top-[2rem] text-white hover:text-[#029FAE] z-[202] right-[2rem]'/>
//       <ul className='relative z-[201] space-y-10 flex flex-col justify-center h-[100%] items-center'>
//             <li className='text-[25px] font-semibold cursor-pointer text-[#029FAE]'>
//                 <Link href='/'>Home</Link>
//             </li>
//             <li className='text-[25px] font-semibold cursor-pointer text-white hover:text-[#029FAE] transition-all duration-200'>
//                 <Link href='/'>Shop</Link>
//             </li>
//             <li className='text-[25px] font-semibold cursor-pointer text-white hover:text-[#029FAE] transition-all duration-200'>
//                 <Link href='/'>Products</Link>
//             </li>
//             <li className='text-[25px] font-semibold cursor-pointer text-white hover:text-[#029FAE] transition-all duration-200'>
//                 <Link href='/'>Pages</Link>
//             </li>
//             <li className='text-[25px] font-semibold cursor-pointer text-white hover:text-[#029FAE] transition-all duration-200'>
//                 <Link href='/'>About</Link>
//             </li>
//         </ul>
      
//       </div>
//   )
// }


import { IoClose } from "react-icons/io5";
import Link from 'next/link';
import React from 'react';

interface Props {
  nav: boolean;
  closeNav: () => void;
}

export default function MobileNav({ nav, closeNav }: Props) {
  return (
    <div
      className={`fixed top-0 left-0 z-[200] w-full h-full bg-gray-200 transition-transform duration-500 ${
        nav ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <IoClose
        onClick={closeNav}
        className="absolute top-4 right-4 w-8 h-8 text-black cursor-pointer"
      />
      <ul className="flex flex-col items-center justify-center h-full space-y-6">
        <li className="text-[20px] font-semibold text-[#029FAE]">
          <Link href="/" onClick={closeNav}>Home</Link>
        </li>
        <li className="text-[20px] font-semibold hover:text-[#029FAE]">
          <Link href="/" onClick={closeNav}>About</Link>
        </li>
        <li className="text-[20px] font-semibold hover:text-[#029FAE]">
          <Link href="/" onClick={closeNav}>Services</Link>
        </li>
        <li className="text-[20px] font-semibold hover:text-[#029FAE]">
          <Link href="/" onClick={closeNav}>Clients</Link>
        </li>
        <li className="text-[20px] font-semibold hover:text-[#029FAE]">
          <Link href="/" onClick={closeNav}>Blogs</Link>
        </li>
      </ul>
    </div>
  );
}

