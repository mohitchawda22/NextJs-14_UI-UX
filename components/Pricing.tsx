import Image from "next/image";
import React from "react";

function Pricing() {
  return (
    <div className="py-[48px] lg:py-[60px] ">
      <h1 className="text-[#172026] text-center text-2xl font-medium lg:text-[42px]">
        Flexible plans for you
      </h1>
      <p
        className="text-[#36485C] text-center 
            pb-[40px] pt-[16px] lg:text-[18px]"
      >
        No hidden fees!
      </p>

      <div className="flex flex-col gap-y-6 gap-x-[24px] lg:flex-row">
        <div className="w-full rounded-[8px] bg-[#F5F4FF] p-6 flex flex-col lg:justify-between">
          <div>
            <h3 className="text-[#4328EB] font-medium text-[18px] lg:text-xl">
              Free Trial
            </h3>
            <p className="text-[#36485C] pt-[12px] lg:text-[18px]">
              Perfect for testing the waters
            </p>

            <h2 className="pt-4 text-2xl font-medium lg:text-[32px]">
              $0<span className="text-[#5F7896]">/mo</span>
            </h2>
            <ul className="flex flex-col gap-y-2 pt-4 text-[#36485C]">
              <li className="flex items-center gap-x-2">
                <span>
                  <Image
                    src="/check.png"
                    alt="logo"
                    width={20}
                    height={20}
                  ></Image>
                </span>
                Lorem ipsum dolor sit amet
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                  <Image
                    src="/check.png"
                    alt="logo"
                    width={20}
                    height={20}
                  ></Image>
                </span>
                Lorem ipsum dolor sit amet
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                  <Image
                    src="/check.png"
                    alt="logo"
                    width={20}
                    height={20}
                  ></Image>
                </span>
                Lorem ipsum dolor sit amet
              </li>
            </ul>
          </div>
          <button className="text-[#4328EB] mt-[16px] rounded-[4px] py-[14px] bg-white">
            Start Trial
          </button>
        </div>

        <div className="w-full rounded-[8px] bg-[#4328EB] p-6 flex flex-col lg:justify-between">
          <div>
            <h3 className="text-[#FFFFFF] font-medium text-[18px] lg:text-xl">
              Business
            </h3>
            <p className="text-[#F4F8FA] pt-[12px] lg:text-[18px]">
              Perfect for small businesses
            </p>

            <h2 className="pt-4 text-2xl font-medium lg:text-[32px] text-[#FFFFFF]">
              $500<span className="text-[#FFFFFF]">/mo</span>
            </h2>
            <ul className="flex flex-col gap-y-2 pt-4 text-[#FFFFFF]">
              <li className="flex items-center gap-x-2">
                <span>
                  <Image
                    src="/check1.png"
                    alt="logo"
                    width={20}
                    height={20}
                  ></Image>
                </span>
                Lorem ipsum dolor sit amet
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                  <Image
                    src="/check1.png"
                    alt="logo"
                    width={20}
                    height={20}
                  ></Image>
                </span>
                Lorem ipsum dolor sit amet
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                  <Image
                    src="/check1.png"
                    alt="logo"
                    width={20}
                    height={20}
                  ></Image>
                </span>
                Lorem ipsum dolor sit amet
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                  <Image
                    src="/check1.png"
                    alt="logo"
                    width={20}
                    height={20}
                  ></Image>
                </span>
                Lorem ipsum dolor sit amet
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                  <Image
                    src="/check1.png"
                    alt="logo"
                    width={20}
                    height={20}
                  ></Image>
                </span>
                Lorem ipsum dolor sit amet
              </li>
            </ul>
          </div>
          <button className="text-[#4328EB] mt-[16px] rounded-[4px] py-[14px] bg-white">
            Get Started
          </button>
        </div>

        <div className="w-full rounded-[8px] bg-[#F5F4FF] p-6 flex flex-col lg:justify-between">
          <div>
            <h3 className="text-[#4328EB] font-medium text-[18px] lg:text-xl">
              Enterprise
            </h3>
            <p className="text-[#36485C] pt-[12px] lg:text-[18px]">
              Perfect for big companies
            </p>

            <h2 className="pt-4 text-2xl font-medium lg:text-[32px]">Custom</h2>
            <ul className="flex flex-col gap-y-2 pt-4 text-[#36485C]">
              <li className="flex items-center gap-x-2">
                <span>
                  <Image
                    src="/check.png"
                    alt="logo"
                    width={20}
                    height={20}
                  ></Image>
                </span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem
                quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit.
              </li>
            </ul>
          </div>

          <button className="text-[#4328EB] mt-[16px] rounded-[4px] py-[14px] bg-white">
          Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
