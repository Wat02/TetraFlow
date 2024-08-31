import React from "react";
import RightText from "../RightText";
import Image from "next/image";
import ux from "@/public/ux.jpg";
import TestamonialText from "../TestamonialText";

function RightForMe() {
  return (
    <section className="pt-[5rem] md:pt-[10rem]">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12 md:col-span-12">
            <p className="text-[5rem] md:text-[8rem] leading-[90%] font-bold max-w-[68rem] text-[#ECE9E4] uppercase">
              Right <br />
              for me?
            </p>
            <p className="max-w-[805px] text-[1.5rem] md:text-[2.5rem] leading-[110%] font-semibold pt-[20px]">
              This course is right for anyone who wants to advance their craft
              of creating beautiful interfaces, whether you're just starting
              out, or want to take your skills to the next level.
            </p>
          </div>
          <div className="col-span-12 md:col-span-4">
            <RightText
              text="You’ve made a little progress, but are now ready to fast track your interface design skills. This will give you a roadmap to becoming a pro."
              title="Aspiring/Junior Designers"
              emoji="😃"
            />
          </div>
          <div className="col-span-12 md:col-span-4">
            <RightText
              text="You've learned the basics, but not how to directly apply everything to interfaces. This is the situation I found myself in 15+ years ago."
              title="Students or Recent Grads"
              emoji="🎨"
            />
          </div>
          <div className="col-span-12 md:col-span-4">
            <RightText
              text="You’re right at home making things work on the screen and now want to make designs as beautiful as your code. I got you, this is it!"
              title="Developerss"
              emoji="💻"
            />
          </div>
          <div className="col-span-12 md:col-span-4">
            <RightText
              text="You feel stuck and aren’t making much progress as you'd like. You’re ready to take things to the next level. Shift Nudge is your new secret weapon."
              title="Struggling Designers"
              emoji="😐"
            />
          </div>
          <div className="col-span-12 md:col-span-4">
            <RightText
              text="You live and breathe user flows, content maps, and wireframes, but now you want to sharpen your visual skills to conquer the world. This is for you!"
              title="UX Designers"
              emoji="📲"
            />
          </div>
          <div className="col-span-12 md:col-span-4">
            <RightText
              text="You’ve been itching to jump into the creative track, but might not have found the best place to start. This course will give you just what you need to make the transition."
              title="Project Managers"
              emoji="🗓"
            />
          </div>
          <div className="col-span-12 pt-[4rem] bg-no-repeat bg-contain pb-[6rem]">
            <div className="block ml-auto mr-auto w-full">
              <Image src={ux} height={1500} width={1500} alt="tean foto" />
            </div>
          </div>
          <div className="col-span-12 md:col-span-4 pt-[2rem] md:pt-[15rem]">
            <TestamonialText
              title="Paula zanini"
              text="  Feliz de compartir un nuevo logro! I've successfully completed an amazing UI design course 🚀 with TetraFlow. This course covers from the basics and continues diving deep into the intricacies of the UI design world."
              className="bg-[#00E499] text-[#000000] font-medium pt-[1px] pb-[1px] pr-[0.25rem] pl-[0.10rem]"
              text2=" It’s a great source of knowledge and an indispensable resource in my design journey. Kudos to Wat for thoughtfully crafting such enriching content and delivering it impeccably."
              title2="Design - director "
            />
          </div>
          <div className="col-span-12 md:col-span-4 pt-[2rem] md:pt-[15rem]">
            <TestamonialText
              title="Ali"
              text="I’m taking TetraFlow, which is supposed to be my expertise so my ego and I are having very interesting conversations."
              className="bg-[#FFD819] text-[#000000] font-medium pt-[1px] pb-[1px] pr-[0.25rem] pl-[0.10rem]"
              text2="It is so humbling to confirm I still and will always have so much to learn—I’m really learning a lot."
              title2="Software designer"
            />
          </div>
          <div className="col-span-12 md:col-span-4 pt-[2rem] md:pt-[15rem]">
            <TestamonialText
              title="Tyler  nisha"
              text="TetraFlow was huge for my UI skills and one of the best investments I made in my career. "
              className="bg-[#FF7632] text-[#000000] font-medium pt-[1px] pb-[1px] pr-[0.25rem] pl-[0.10rem]"
              text2="I remember using my first paycheck on it, it paid off so much."
              title2="Product designer"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default RightForMe;
