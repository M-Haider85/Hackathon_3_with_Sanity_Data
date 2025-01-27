import React from 'react'
import Link from 'next/link';
import { IoMdCheckmark } from "react-icons/io";
import { AiOutlineExclamationCircle } from "react-icons/ai";

export default function NavTop() {
  return (
    <div className="border-b border-gray-200 hidden sm:block">
    <div className="container py-1 bg-[#272343] h-[6vh] pt-2">
      <div className="w-[85%] flex items-center justify-between mx-auto">

        <div className='flex items-center mb-[1rem] space-x-3'>
        <IoMdCheckmark className=' text-gray-400' />
        <p className='text-[17px] text-gray-400'>Free Shipping On All Orders Over $50</p>
        </div>


        <div className='flex items-center mb-[1rem] space-x-5'>
        <select 
            className="text-gray-400 bg-[#272343] text-[14px] w-[50px]"
            name="language"
            id="language"
            >
                <option value='English'>Eng</option>
                <option value='French'>French</option>
            </select>
            <Link href='/FAQsPage/'>
            <p className='text-[14px] text-gray-400'>Faqs</p>
            </Link>
            
            <div className='flex items-center space-x-3'>
        <AiOutlineExclamationCircle className=' text-gray-400' />
        <Link href='/ContactUs/'>
        <p className='text-[14px] text-gray-400'>Need Help</p>
        </Link>
        </div>
            
        </div>


    </div>
    </div>
    </div>
  )
}



// import React from 'react';
// import { IoMdCheckmark } from "react-icons/io";
// import { AiOutlineExclamationCircle } from "react-icons/ai";

// export default function NavTop() {
//   return (
//     <div className="border-b border-gray-200 bg-[#272343] py-1 h-auto">
//       <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
//         <div className="flex items-center space-x-3">
//           <IoMdCheckmark className="text-gray-400" />
//           <p className="text-[15px] sm:text-[17px] text-gray-400">Free Shipping On All Orders Over $50</p>
//         </div>
//         <div className="flex items-center space-x-5">
//           <select
//             className="text-gray-400 bg-[#272343] text-[14px] w-[60px] sm:w-[50px]"
//             name="language"
//             id="language"
//           >
//             <option value="English">Eng</option>
//             <option value="French">French</option>
//           </select>
//           <p className="text-[14px] text-gray-400">Faqs</p>
//           <div className="flex items-center space-x-3">
//             <AiOutlineExclamationCircle className="text-gray-400" />
//             <p className="text-[14px] text-gray-400">Need Help</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
