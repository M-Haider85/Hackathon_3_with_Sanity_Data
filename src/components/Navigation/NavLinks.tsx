import React from 'react';
import Link from 'next/link';
import { IoMenu } from "react-icons/io5";

interface Props {
  openNav: () => void;
}

export default function NavLinks({openNav}:Props) {
  return (
    <div className="hidden lg:block">
      <div className="container h-[10vh] border border-b-2">
        {/* Flex container to separate links and contact info */}
        <div className="flex items-center justify-between h-full px-28 text-gray-500 text-[16px]">
          {/* Left Section: Navigation Links */}
          <div className="flex items-center gap-5">
            <Link href="/" className="navbar__link relative hover:text-[#029FAE]">
              Home
            </Link>
            <Link href="/single-product-page/" className="navbar__link relative hover:text-[#029FAE]">
              Shop
            </Link>
            <Link href="/ProductsPage/" className="navbar__link relative hover:text-[#029FAE]">
              Product
            </Link>
            <Link href="#" className="navbar__link relative hover:text-[#029FAE]">
              Pages
            </Link>
            <Link href="/AboutUs/" className="navbar__link relative hover:text-[#029FAE]">
              About
            </Link>
          </div>

          {/* Right Section: Contact Info */}
          <div className="text-right">
            <h1>Contact: <span className="text-black font-semibold">   (808) 555-0111</span></h1>
            <IoMenu onClick={openNav}
            className='w-[1.5rem] lg:hidden h-[1.5rem] text-slate-900 cursor-pointer'/>
          </div>
        </div>
      </div>
    </div>
  );
}




// import React from 'react';
// import Link from 'next/link';
// import { IoMenu } from "react-icons/io5";

// interface Props {
//   openNav: () => void;
// }

// export default function NavLinks({ openNav }: Props) {
//   return (
//     <div className="hidden lg:block">
//       <div className="container mx-auto px-4 border-b">
//         <div className="flex items-center justify-between h-[10vh] text-gray-500 text-[16px]">
//           <div className="flex items-center gap-5">
//             <Link href="#" className="relative text-[#029FAE]">Home</Link>
//             <Link href="#" className="relative hover:text-[#029FAE]">Shop</Link>
//             <Link href="#" className="relative hover:text-[#029FAE]">Product</Link>
//             <Link href="#" className="relative hover:text-[#029FAE]">Pages</Link>
//             <Link href="#" className="relative hover:text-[#029FAE]">About</Link>
//           </div>
//           <div className="flex items-center gap-4">
//             <span>Contact: <span className="text-black font-semibold">(808) 555-0111</span></span>
//             <IoMenu onClick={openNav} className="w-6 h-6 lg:hidden cursor-pointer" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
