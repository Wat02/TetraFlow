import React from "react";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import apple from "@/public/apple.svg";
import microsoft from "@/public/microsoft.svg";
import figma from "@/public/figma.svg";
import ea from "@/public/ea.svg";
import lyft from "@/public/lyft.svg";
import slack from "@/public/slack.svg";
import Team from "@/public/team.jpg";

function Contanct() {
  return (
    <section className="pt-[4rem]">
      <div className="container mx-auto ">
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12 md:col-span-6">
            <p className="text-[#747474] text-[19px] leading-[100%] uppercase pb-[20px]">
              <span className="text-[#EBE9E3] font-bold mr-[5px]">
                Trusted by thousands
              </span>{" "}
              of students from top companies
            </p>
          </div>
          <div className="col-span-6 hidden   md:block">
            <p className="text-[#FF3266] text-[19px] leading-[100%] uppercase text-right">
              Read the reviews <span className="text-[19px]">→</span>
            </p>
          </div>
          <div className="col-span-12 md:col-span-12 block md:flex">
            <Input
              placeholder="First Name"
              className="mr-[10px] mt-[10px] pt-[30px] pb-[30px]  text-[20px]"
            />
            <Input
              type="email"
              placeholder="Email"
              className=" mt-[10px]  pt-[30px] pb-[30px] text-[20px]"
            />
            <button className="h-[4rem] mt-[20px] md:mt-[10px] w-[80%] bg-[#FF3266] text-[#000] pt-[1rem] pb-[1rem] pr-[1.5rem] pl-[1.5rem] rounded-[60px] pointer text-[1.2rem] text-center  uppercase ml-[30px] md:ml-[10px] ">
              Be the{" "}
              <span className="text-[#000000] font-extrabold">
                {" "}
                first to know
              </span>
            </button>
          </div>
          <div className="col-span-12 flex flex-row items-center justify-center mb-10 w-full pt-[4rem] pb-[4rem] ">
            {/* <AnimatedTooltip items={people} /> */}
          </div>
          <div className="col-span-2">
            {" "}
            <Image src={apple} width={50} height={50} alt="apple logo" />
          </div>
          <div className="col-span-2">
            <Image src={microsoft} width={45} height={45} alt="apple logo" />
          </div>
          <div className="col-span-2">
            <Image src={ea} width={45} height={45} alt="apple logo" />
          </div>
          <div className="col-span-2">
            <Image src={figma} width={45} height={45} alt="apple logo" />
          </div>
          <div className="col-span-2">
            <Image src={lyft} width={45} height={45} alt="apple logo" />
          </div>
          <div className="col-span-2">
            <Image src={slack} width={45} height={45} alt="apple logo" />
          </div>
        </div>
        <div className="col-span-12 pt-[6rem] bg-no-repeat bg-contain pb-[6rem] ">
          <div className="block ml-auto mr-auto w-full">
            <Image
              src={Team}
              height={1500}
              width={1500}
              alt="tean foto"
              className="rounded-[20px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contanct;
