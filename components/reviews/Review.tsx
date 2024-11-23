import React from "react";
import Image from "next/image";
import Reviews from "@/public/Reviews.jpg";
import ReviesList from "./ReviesList";

function Header() {
  return (
    <section>
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12 md:col-span-12">
            <h1 className="text-[6rem] md:text-[10rem] text-[#EBE9E3] leading-[75%] font-bold uppercase ml-[20px] pt-[100px]">
              Reviews
            </h1>
          </div>
          <div className="col-span-12 md:col-span-7 pt-[30px]">
            <Image src={Reviews} width={700} height={700} alt="Reviews" />
          </div>
          <div className="col-span-12 md:col-span-5 ml-[10%] pt-[30px]">
            <p className="text-[1.5rem] md:text-[1.3rem] leading-[160%] ml-[0] md:ml-[20px] font-medium max-w-[68rem] text-[#747474] w-max-[38rem]">
              All quotes down below were found in <br />
              the wild. Click on any to see the <br />
              original source.
            </p>
            <p className="text-[1.5rem] md:text-[1.3rem] leading-[160%] ml-[0] md:ml-[20px] font-bold max-w-[68rem] text-[#EBE9E3] w-max-[38rem] pt-[50px]">
              Read more reviews
            </p>
          </div>
          <div className="col-span-12 md:col-span-12 pt-[100px]">
            <ReviesList />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
