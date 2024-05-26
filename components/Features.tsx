/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Features() {
  return (
    <div className="flex flex-col gap-y-[56px] py-[56px] lg:py-[120px] lg:gap-y-[80px]">
      <div className="flex flex-col gap-x-6 lg:flex-row-reverse">
        <Image
          src={"/feature1.svg"}
          alt="picture"
          width={500}
          height={500}
          className="hidden w-1/2 sm:block"
        />
        <div className="sm:w-1/2 lg:py-[56px] lg:pr-[56px]">
          <h3 className="font-medium text-[#0085FF] lg:text-[18px] ">
            Sales Monitoring
          </h3>
          <h1 className="text-[#172026] pt-[12px] text-2xl font-medium lg:text-[42px] lg:leading-[58px]">
            Simplify your sales monitoring
          </h1>
          <Image
            src="/feature1.svg"
            alt="logo"
            width={500}
            height={500}
            className="pt-[26px] sm:hidden"
          ></Image>
          <p className="text-[#36485C] py-[24px] lg:text-[18px]">
            Stay on top of things and revamp your work process with our
            game-changing feature. Get a bird's eye view with our customizable
            dashboard.{" "}
          </p>
          <ul className="flex flex-col gap-y-3 lg:text-[18px]">
            <li className="flex items-center gap-x-2 text-[#36485C]">
              <span>
                <Image
                  src="/check.png"
                  alt="logo"
                  width={20}
                  height={20}
                ></Image>
                Lorem ipsum dolor sit amet
              </span>
            </li>
            <li className="flex items-center gap-x-2 text-[#36485C]">
              <span>
                <Image
                  src="/check.png"
                  alt="logo"
                  width={20}
                  height={20}
                ></Image>
                Lorem ipsum dolor sit amet
              </span>
            </li>
            <li className="flex items-center gap-x-2 text-[#36485C]">
              <span>
                <Image
                  src="/check.png"
                  alt="logo"
                  width={20}
                  height={20}
                ></Image>
                Lorem ipsum dolor sit amet
              </span>
            </li>
          </ul>

          <p className="pt-[24px] flex items-center gap-x-2 font-medium text-[#0085FF] lg:text-[18px]">
            Learn More
            <Link href={""}>
              <span>
                <Image
                  src="/arrow.png"
                  alt="arrow"
                  width={30}
                  height={30}
                ></Image>
              </span>
            </Link>
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-x-6 lg:flex-row">
        <Image
          src={"/feature2.png"}
          alt="picture"
          width={500}
          height={500}
          className="hidden w-1/2 sm:block"
        />
        <div className="sm:w-1/2 lg:py-[56px] lg:pl-[56px]">
          <h3 className="font-medium text-[#00A424] lg:text-[18px] ">
          Customer Support
          </h3>
          <h1 className="text-[#172026] pt-[12px] text-2xl font-medium lg:text-[42px] lg:leading-[58px]">
          Get in touch with your customers
          </h1>
          <Image
            src="/feature2.png"
            alt="logo"
            width={500}
            height={500}
            className="pt-[26px] sm:hidden"
          ></Image>
          <p className="text-[#36485C] py-[24px] lg:text-[18px]">
          Stay on top of things and revamp your work process with our game-changing feature. Get a bird's eye view with our customizable dashboard. {" "}
          </p>
          <ul className="flex flex-col gap-y-3 lg:text-[18px]">
            <li className="flex items-center gap-x-2 text-[#36485C]">
              <span>
                <Image
                  src="/check.png"
                  alt="logo"
                  width={20}
                  height={20}
                ></Image>
                Lorem ipsum dolor sit amet
              </span>
            </li>
            <li className="flex items-center gap-x-2 text-[#36485C]">
              <span>
                <Image
                  src="/check.png"
                  alt="logo"
                  width={20}
                  height={20}
                ></Image>
                Lorem ipsum dolor sit amet
              </span>
            </li>
            <li className="flex items-center gap-x-2 text-[#36485C]">
              <span>
                <Image
                  src="/check.png"
                  alt="logo"
                  width={20}
                  height={20}
                ></Image>
                Lorem ipsum dolor sit amet
              </span>
            </li>
          </ul>

          <p className="pt-[24px] flex items-center gap-x-2 font-medium text-[#00A424] lg:text-[18px]">
            Learn More
            <Link href={""}>
              <span>
                <Image
                  src="/arrow1.png"
                  alt="arrow"
                  width={30}
                  height={30}
                ></Image>
              </span>
            </Link>
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-x-6 lg:flex-row-reverse">
        <Image
          src={"/feature3.png"}
          alt="picture"
          width={500}
          height={500}
          className="hidden w-1/2 sm:block"
        />
        <div className="sm:w-1/2 lg:py-[56px] lg:pr-[56px]">
          <h3 className="font-medium text-[#EB2891] lg:text-[18px] ">
          Growth Monitoring
          </h3>
          <h1 className="text-[#172026] pt-[12px] text-2xl font-medium lg:text-[42px] lg:leading-[58px]">
          Monitor your site’s new subscribers 
          </h1>
          <Image
            src="/feature3.png"
            alt="logo"
            width={500}
            height={500}
            className="pt-[26px] sm:hidden"
          ></Image>
          <p className="text-[#36485C] py-[24px] lg:text-[18px]">
            Stay on top of things and revamp your work process with our
            game-changing feature. Get a bird's eye view with our customizable
            dashboard.{" "}
          </p>
          
          <div className="flex w-full gap-x-[24px]">
            <div className="w-1/2 gap-y-3 flex flex-col">
                <h3 className="text-[20px] font-medium text-[#172026]">100+</h3>
                <p className="text-[#5F7896]">Lorem ipsum dolor sit</p>
            </div>
            <div className="w-1/2 flex flex-col gap-y-3">
                <h3 className="text-[20px] font-medium text-[#172026]">800+</h3>
                <p className="text-[#5F7896]">Conse adipiscing elit</p>
            </div>

          </div>

          <p className="pt-[24px] flex items-center gap-x-2 font-medium text-[#EB2891] lg:text-[18px]">
            Learn More
            <Link href={""}>
              <span>
                <Image
                  src="/arrow2.png"
                  alt="arrow"
                  width={30}
                  height={30}
                ></Image>
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features;
