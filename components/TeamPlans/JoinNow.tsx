import React from "react";
import Image from "next/image";
import Join from "@/public/JoinNow.jpg";
import TestamonialText from "../TestamonialText";

function JoinNow() {
  return (
    <section>
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12 md:col-span-7 pt-[50px]">
            <Image src={Join} width={800} height={800} alt="Join" />
          </div>
          <div className="col-span-12 md:col-span-5 pt-[50px] ml-[0] md:ml-[60px]">
            <button className="h-[4rem] mt-[20px] md:mt-[10px] w-[80%] bg-[#FF3266] text-[#000] pt-[1rem] pb-[1rem] pr-[1.5rem] pl-[1.5rem] rounded-[10px] pointer text-[1.3rem]  uppercase ml-[0px] md:ml-[10px] justify-start text-start">
              Join <span className="text-[#000000] font-extrabold">Now</span>
            </button>
            <div className="pt-[10px]">
              <button className="h-[4rem] mt-[20px] md:mt-[10px] w-[80%] bg-[#181818] text-[#EBE9E3] pt-[1rem] pb-[1rem] pr-[1.5rem] pl-[1.5rem] rounded-[10px] pointer text-[1.3rem]  uppercase ml-[0px] md:ml-[10px] justify-start text-start font-bold">
                Book A free demo
              </button>
            </div>
            <p className="text-[#747474] text-[1.3rem] pb-[10px] max-w-[32rem] leading-[130%] transition-all ease-out hover:text-[#EBE9E3] cursor-default pt-[20px] ml-[0] md:ml-[10px]">
              Take your design team’s skills to the <br />
              NEXT LEVEL from a problem solving <br />
              and a visual design perspective.
            </p>
            <p className="text-[#747474] text-[1.3rem] pb-[10px] max-w-[32rem] leading-[130%] transition-all ease-out hover:text-[#EBE9E3] cursor-default pt-[10px]  ml-[0] md:ml-[10px]">
              Making FASTER design decisions as <br />a team with a deeper
              understanding <br />
              of foundational principles.
            </p>
            <p className="text-[#747474] text-[1.3rem] pb-[10px] max-w-[32rem] leading-[130%] transition-all ease-out hover:text-[#EBE9E3] cursor-default pt-[10px]  ml-[0] md:ml-[10px]">
              Increase PRODUCTIVITY with clearly <br />
              articulated design decisions between <br />
              product teams and stakeholders.
            </p>
          </div>
          <div className="col-span-12 md:col-span-12 pt-[3rem]">
            <p className="leading-[110%] font-semibold max-w-[90%] text-[2rem] md:text-[2.5rem]">
              It costs more to hire new people than <br />
              it does to invest in your current team.
            </p>
          </div>
          <div className="col-span-12 md:col-span-4 pt-[5rem] md:pt-[10rem]">
            <TestamonialText
              title="Noah Kevin"
              text="The amount of people at Figma enrolled in TetraFlow makes me so happy."
              className="bg-[#00E499] text-[#000000] font-medium pt-[1px] pb-[1px] pr-[0.25rem] pl-[0.10rem]"
              text2="Particularly the idea that people can develop and cultivate skills together rather than alone. Doing things in groups is motivating!"
              title2="vp of design - figma"
            />
          </div>
          <div className="col-span-12 md:col-span-4 pt-[5rem] md:pt-[10rem]">
            <TestamonialText
              title="Joel Hooks"
              text="I paid 10s of 1000s of $$ to learn design at a college and the knowledge they shared PALES /pales/ in comparison to what Wat has done with TetraFlow."
              className="bg-[#FED819] text-[#000000] font-medium pt-[1px] pb-[1px] pr-[0.25rem] pl-[0.10rem]"
              text2="TetraFlow is an unparalleled resource for learning design."
              title2="Ceo - EGGHEAD.IO"
            />
          </div>
          <div className="col-span-12 md:col-span-4 pt-[5rem] md:pt-[10rem]">
            <TestamonialText
              title="Charli Marie"
              text="If you're one of the many people who has DMd me asking how they can learn UI design, check out TetraFlow by Wat!"
              className="bg-[#FF7732] text-[#000000] font-medium pt-[1px] pb-[1px] pr-[0.25rem] pl-[0.10rem]"
              text2="Happy to have something to recommend to people! Great work Wat 👏🏻"
              title2="Creative Director convertio"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default JoinNow;
