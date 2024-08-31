import React from "react";
import works from "@/public/works.jpg";
import Image from "next/image";
import Access from "@/components/Access";
import TestamonialText from "../TestamonialText";

function HowWork() {
  return (
    <section className="pt-[5rem] md:pt-[20rem]">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12">
            <h1 className="text-[6rem] md:text-[10rem] text-[#EBE9E3] leading-[75%] font-bold uppercase">
              How it <br />
              works
            </h1>
          </div>
          <div className="col-span-12 pt-[4rem] bg-no-repeat bg-contain pb-[6rem]">
            <div className="block ml-auto mr-auto w-full">
              <Image src={works} width={1500} height={1500} alt="work" />
            </div>
          </div>
          <div className="col-span-12 md:col-span-6">
            <p className="text-[1.5rem] md:text-[2.8rem] leading-[110%] font-semibold max-w-[68rem] text-[#ECE9E4]">
              TetraFlow is the system I've developed over the last two decades,
              for clients big and small, across dozens of industries, and now
              thousands of paying customers have it too. It covers the entire
              design process for creating beautiful interfaces.
            </p>
          </div>
          <div className="col-span-12 md:col-span-6 ml-[0] md:ml-[40%] pt-[2rem] md:pt-[0]">
            <p className="text-[1.2rem] text-[#747474] leading-[160%] font-semibold  transition-all ease-out hover:text-[#EBE9E3] cursor-default">
              How to master typography, layout and <br /> color specifically for
              mobile and desktop <br /> interfaces.
            </p>
            <p className="text-[1.2rem] text-[#747474] leading-[160%] font-semibold pt-[2rem] pb-[2rem]  transition-all ease-out hover:text-[#EBE9E3] cursor-default">
              Start off slowly and choose topics you're <br /> interested in or
              go through every single <br /> lesson in detail. I've helped
              thousands of <br />
              people do both.
            </p>
            <p className="text-[1.2rem] text-[#747474] leading-[160%] font-semibold  transition-all ease-out hover:text-[#EBE9E3] cursor-default">
              How to approach your designs with a <br /> trusted system so you
              never have to get <br /> stuck again.
            </p>
          </div>
          <div className="col-span-12 md:col-span-4 pt-[5rem] md:pt-[10rem]">
            <Access
              title="1 - Access"
              text="Gain access to every lesson inside of Notion, all at once. No waiting around for content to slowly drip out."
            />
          </div>
          <div className="col-span-12 md:col-span-4 pt-[5rem] md:pt-[10rem]">
            <Access
              title="2 - Begin"
              text="Go through linearly from start to finish or find the most interesting topics relevant to you right now."
            />
          </div>
          <div className="col-span-12 md:col-span-4 pt-[5rem] md:pt-[10rem]">
            <Access
              title="3 - Absorb"
              text="Watch the videos, read the content, and do the homework. Watch previous design critiques in the vault."
            />
          </div>
          <div className="col-span-12 md:col-span-4 pt-[5rem] md:pt-[10rem]">
            <Access
              title=" 4- Share"
              text="Share your designs and ask for feedback from the Shift Nudge Slack community."
            />
          </div>
          <div className="col-span-12 md:col-span-4 pt-[5rem] md:pt-[10rem]">
            <Access
              title="5 - Pace"
              text="There's no time limit, or schedule to follow. Go through as fast or slow as you'd like."
            />
          </div>
          <div className="col-span-12 md:col-span-4 pt-[5rem] md:pt-[10rem]">
            <Access
              title="6 - repeat"
              text="You have unlimited access. Revisit topics anytime as you encounter new challenges."
            />
          </div>
          <div className="col-span-12 md:col-span-4 pt-[5rem] md:pt-[20rem]">
            <TestamonialText
              title="Josa Pimenta "
              text="Well, it is a pleasure to say that I made one of the best decisions in my life and now I am proud to say I have a UI Design certificate, issued by the one and only Wat."
              className="bg-[#00E499] text-[#000000] font-medium pt-[1px] pb-[1px] pr-[0.25rem] pl-[0.10rem]"
              text2=" TetraFlow has been an invaluable experience for my career development."
              title2="Designer"
            />
          </div>
          <div className="col-span-12 md:col-span-4  pt-[2rem] md:pt-[20rem]">
            <TestamonialText
              title="Cade Van"
              text="Making pasta and thinking about how foundational TetraFlow was during my first product design internship. "
              className="bg-[#FFD819] text-[#000000] font-medium pt-[1px] pb-[1px] pr-[0.25rem] pl-[0.10rem]"
              text2="It's like nothing out there ⚡️🎛️"
              title2="Software designer"
            />
          </div>
          <div className="col-span-12 md:col-span-4  pt-[2rem] md:pt-[20rem]">
            <TestamonialText
              title="Ubaid Wani"
              text="TetraFlow is an excellent resource for taking the designers on your team to the next level! "
              className="bg-[#FF7632] text-[#000000] font-medium pt-[1px] pb-[1px] pr-[0.25rem] pl-[0.10rem]"
              text2="TetraFlow is an excellent resource for taking the designers on your team to the next level! "
              title2="Design Founder"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowWork;
