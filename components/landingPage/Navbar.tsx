import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Hamburger from "@/public/hamburger.svg";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <section className="pt-[20px]">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-9">
            <Sheet>
              <SheetTrigger>
                <Image
                  src={Hamburger}
                  height={30}
                  width={30}
                  alt="hamburger menu"
                />
              </SheetTrigger>
              <SheetContent side="top">
                <SheetHeader>
                  <div className="container mx-auto">
                    <div className="grid grid-cols-12 gap-1">
                      <div className="col-span-4 pt-[4rem]">
                        <SheetTitle className="text-[#747474] text-[2rem] leading-[75%] font-bold  uppercase  pb-[2rem]">
                          Scroll To
                        </SheetTitle>
                        <SheetDescription className="text-[2.2rem] text-[#ECE9E4] font-medium  pb-[1rem]">
                          <p>Overview</p>
                        </SheetDescription>
                        <SheetDescription className="text-[2.2rem] text-[#ECE9E4] font-medium  pb-[1rem]">
                          Process
                        </SheetDescription>
                        <SheetDescription className="text-[2.2rem] text-[#ECE9E4] font-medium  pb-[1rem]">
                          Instructor
                        </SheetDescription>
                        <SheetDescription className="text-[2.2rem] text-[#ECE9E4] font-medium  pb-[1rem]">
                          Pricing
                        </SheetDescription>
                        <SheetDescription className="text-[2.2rem] text-[#ECE9E4] font-medium">
                          FAQs
                        </SheetDescription>
                      </div>
                      <div className="col-span-4  pt-[4rem]">
                        <SheetTitle className="text-[#747474] text-[2rem] leading-[75%] font-bold ml-[100px] md:ml-[0]  uppercase  pb-[2rem]">
                          Navigate to
                        </SheetTitle>
                        <SheetTitle className="text-[1.4rem] text-[#ECE9E4] font-medium leading-[4rem] ml-[100px] md:ml-[0] ">
                          Reviews
                        </SheetTitle>
                        <SheetTitle className="text-[1.4rem] text-[#ECE9E4] font-medium  leading-[4rem]  ml-[100px] md:ml-[0]">
                          Team Plans
                        </SheetTitle>
                        <SheetTitle className="text-[1.4rem] text-[#ECE9E4] font-medium leading-[4rem]  ml-[100px] md:ml-[0]">
                          Enrollment
                        </SheetTitle>
                        <SheetTitle className="text-[1.4rem] text-[#ECE9E4] font-medium  leading-[4rem]  ml-[100px] md:ml-[0]">
                          Upgrade
                        </SheetTitle>
                        <SheetTitle className="text-[1.4rem] text-[#ECE9E4] font-medium  leading-[4rem]  ml-[100px] md:ml-[0]">
                          Refunds
                        </SheetTitle>
                      </div>
                      <div className="col-span-4 pt-[4rem] hidden md:flex">
                        <SheetTitle className="text-[#747474] text-[2rem] leading-[75%] font-bold uppercase  pb-[2rem]">
                          Site Contrast Scores
                        </SheetTitle>
                      </div>
                    </div>
                  </div>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
          <div className="col-span-3 flex">
            <p className="text-[#ECE9E4] font-semibold transition-all ease-out hover:text-[#FE3366] pt-[8px] cursor-pointer">
              Team Plans
            </p>
            <div className="ml-[10px] md:ml-[10px] mr-[10px] hidden md:flex">
              <button className="font-bold bg-[#ECE9E4] text-center pt-[5px] pr-[10px] pl-[10px] pb-[5px] text-[18px] z-[500px] tracking-[-0.5px] rounded-[8px] text-[#0a0a0a] uppercase">
                Notify ME
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
