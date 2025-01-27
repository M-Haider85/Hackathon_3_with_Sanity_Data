import React from 'react'
import Image from 'next/image'

export default function Customers() {
    const C1 = '/C1.png'
    const C2 = '/C2.png'
    const C3 = '/C3.png'
    const C4 = '/C4.png'
    const C5 = '/C5.png'
    const C6 = '/C6.png'
    const C7 = '/C7.png'
    
  return (
    <div className='ml-28 mr-28 mt-10'>
        <div className='flex items-center justify-between'>
            <Image 
            src={C1}
            alt='/'
            width={100}
            height={100}
            />
            <Image 
            src={C2}
            alt='/'
            width={100}
            height={100}
            />
            <Image 
            src={C3}
            alt='/'
            width={100}
            height={100}
            />
            <Image 
            src={C4}
            alt='/'
            width={100}
            height={100}
            />
            <Image 
            src={C5}
            alt='/'
            width={100}
            height={100}
            />
            <Image 
            src={C6}
            alt='/'
            width={100}
            height={100}
            />
            <Image 
            src={C7}
            alt='/'
            width={100}
            height={100}
            />
        </div>
    </div>
  )
}
