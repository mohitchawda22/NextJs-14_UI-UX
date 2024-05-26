import Image from 'next/image'
import React from 'react'


function Cta() {
    return (
      <div className='w-full rounded-[16px] bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 py-[56px] px-[32px] lg:my-[60px] lg:px-[324px] lg:py-[89px] '>
        <h1 className='text-center text-white text-[32px] font-medium lg:text-[50px] leading-[60px]'>Monitor your website like a pro</h1>
        <p className='text-white pt-6 text-center lg:pt-[48px] lg:text-[18px]
        '>Join over 800+ happy site owners boosting productivity and efficiency!</p>

        <div className='mt-[40px] flex flex-col w-full items-center lg:flex-row lg:mt-[56px] lg:justify-center gap-x-[40px]'>
            <button className='text-[#EB2891] py-[16px] px-[32px] bg-white rounded-[4] w-fit font-medium'>Try for free</button>

            <button className='text-center flex w-full justify-center gap-x-3 mt-[32px] text-white font-medium lg:w-fit lg:mt-0'>Contact Sales <span><Image src="/arrow3.png" alt="logo" width={20} height={20}></Image></span></button>
        </div>
      </div>  
    )
}

export default Cta
