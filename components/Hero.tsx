/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <div className="pt-4 lg:pt-10 dark:bg-white">
      <div className="px-[20px] lg:px-[200px]">
        <h1 className="text-center font-medium text-[32px] leading-[40px] text-[#172026] lg:text-[60px] lg:leading-[72px]">
          Start monitoring your website like a pro
        </h1>
        <p className="text-center pt-[24px] text-[#36485C]lg:text-[18px] lg:leading-7">
          Get a bird's eye view with our customizable dashboard. Stay on top of
          things! Revamp your work process with our game-changing feature. Boost
          productivity and efficiency!
        </p>
      </div>

      <div className="flex w-full pt-8 px-8 justify-center gap-x-6">
        <button className="bg-[#4328EB] text-white w-1/2 py-4 px-8 rounded-md lg:w-fit">
          Try for free
        </button>
        <button className="item-center flex justify-center w-1/2 text-[#4328EB] gap-x-2 p-3 lg:w-fit">
          view pricing
          <span>
            <Image src="/arrow.png" alt="logo" width={20} height={20}></Image>
          </span>
        </button>
      </div>

      <div className="relative flex h-full w-full justify-center">
        <Image src="/gradient.svg" alt="gradient" width={500} height={500} className="min-h-[500px] w-full object-cover lg:h-auto"></Image>

        <div className="absolute bottom-5 flex w-full flex-col items-center">
            <Image src="/image.png" alt={"logo"} width={400} height={400} className="-ml-4 h-[350px]sm:-m-20 sm:h-[400px] lg:-mb-28 lg:h-auto xl:w-[70%]"></Image>

            <div className="flex w-full flex-col items-center lg:container lg:flex-row lg:justify-between lg:px-20">
                <p className="text-center text-[#ffffff]">Trusted by these companies</p>
            </div>
            <div className="grid grid-cols-3 items-center justify-center justify-items-center px-[20px] align-middle lg:grid-cols-5">
                <Image src={"/google.svg"} alt={"logo"} width={100} height={100}></Image>
                <Image src={"/slack.svg"} alt={"logo"} width={100} height={100}></Image>
                <Image src={"/trustpilot.svg"} alt={"logo"} width={120} height={100}></Image>
                <Image src={"/cnn.svg"} alt={"logo"} width={50} height={50}></Image>
                <Image src={"/clutch.svg"} alt={"logo"} width={100} height={100}></Image>

            </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
