/* eslint-disable react/jsx-key */
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const navLinks=[
    {name:"Features"},
    {name:"Pricing"},
    {name:"Enterprise"},
    {name:"Careers"},
];

function Navbar() {
    return (
        <nav className='flex w-full items-center justify-between px-[20px] py-[16px] lg:container lg:mx-auto lg:p-5 dark:bg-white'>
            <div className='flex item-center'>
                <Image src="/logo.png" alt={'logo'} width={40} height={40}></Image>

                <div className='hidden lg:flex pl-[74px] gap-x-10'>
                    {navLinks.map((item,index)=>(
                        <Link href={''}><p className='text-[#36485C] font-medium pt-2' key={index}>{item.name}</p></Link>
                    ))}
                </div>
            </div>

            <div className='flex gap-x-5'>
                <p className='hidden lg:block font-medium text-[#36485C] pr-10 pt-2 items-center'>Open an Account</p>
                <div className='flex items-center gap-x-2'>
                <Image src="/user.png" alt='userlogo' width={40} height={40}></Image>
                <Link href={''}><span className='hidden font-medium text-[#36485C] lg:block '>Sign in</span></Link>
                </div>
                <Link href={''}><Image src="/menu.svg" alt='logo' width={40} height={40} className='lg:hidden'></Image></Link>
            </div>
        </nav>
    )
}

export default Navbar
