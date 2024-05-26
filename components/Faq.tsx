/* eslint-disable jsx-a11y/alt-text */
"use client"

import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import Image from "next/image";



const items=[
   {
     question:"Ut enim ad minima veniam, quis nostrum exercitationem ullam?",
    answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet."
   },

   {
     question:"Ut enim ad minima veniam, quis nostrum exercitationem ullam?",
    answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet."
   },

   {
     question:"Ut enim ad minima veniam, quis nostrum exercitationem ullam?",
    answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet."
   },

   {
     question:"Ut enim ad minima veniam, quis nostrum exercitationem ullam?",
    answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet."
   },
]

function Faq() {
  return (
    <div className="flex flex-col w-full py-[48px] lg:py-[60px] lg:flex-row gap-x-6">
      <div className="lg:w-1/3 lg:py-[20px] lg:pr-[16px]">
        <h3 className="text-[#EB2891] text-[14px] font-medium lg:text-base">
          Frequently Asked Questions
        </h3>

        <h1 className="text-[#172026] py-4 text-2xl font-medium lg:text-[42px] lg:leading-[58px]">
          Let’s clarify some of your questions
        </h1>

        <p className="text-[#36485C] pb-[24px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore{" "}
        </p>
      </div>

      <div className="lg:w-2/3">
        <Accordion.Root className="flex flex-col gap-y-4" type="single" defaultValue="items-1" collapsible>
            {items.map((item,index)=>(
                <div key={index}>
                    <Accordion.Item value={`item-${index+1}`}
                    className="bg-[#E3F1FF] p-[16px] rounded-[8px]"
                    >
                        <Accordion.Header>
                            <Accordion.Trigger className="flex w-full justify-between items-center">
                                <p className="text-left font-medium text-[#172026]">{item.question}</p>
                                <span>
                                    <Image src="/plus.png" alt={"logo"} width={20} height={10}></Image>
                                </span>
                            </Accordion.Trigger>
                        </Accordion.Header>
                        <Accordion.Content>
                            <p className="pt-2 text-[#36485C]">{item.answer}</p>
                        </Accordion.Content>
                    </Accordion.Item>
                </div>
            ))}
        </Accordion.Root>
      </div>
    </div>
  );
}

export default Faq;
