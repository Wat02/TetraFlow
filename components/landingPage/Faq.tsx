"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import TestamonialText from "../TestamonialText";

function Faq() {
  return (
    <section className="pt-[5rem] md:pt-[15rem]">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-1">
          <h1 className="text-[6rem] md:text-[10rem] text-[#EBE9E3] leading-[80%] font-bold uppercase pb-[50px]">
            FAQs
          </h1>
          <div className="col-span-12">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What if I don't like it?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-[1.5rem] leading-[120%]">
                    The last thing I want is for you to be stuck with something
                    you don't like. You've got 30 days to try the whole course
                    and if it's not for you, get your money back. Easy!
                  </p>
                  <p className="pt-[20px] text-[1.5rem] leading-[120%]">
                    The last thing I want is for you to be stuck with something
                    you don't like. You've got 30 days to try the whole course
                    and if it's not for you, get your money back. Easy!
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  Is there a way I can talk to someone if I get stuck?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="pt-[20px] text-[1.5rem] leading-[120%]">
                    {" "}
                    As a Pro member, you'll have access to the exclusive Slack
                    channel where you can reach out for answers, feedback, and
                    support when you need it. There are always people willing to
                    help each other out in this vibrant community.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  What if I don't have a design background?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="pt-[20px] text-[1.5rem] leading-[120%]">
                    It will be more challenging if you have no design experience
                    at all, but the lessons are created in a way that any one
                    can benefit. Not a problem!
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  How is this different from other courses on the market?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="pt-[20px] text-[1.5rem] leading-[120%]">
                    {" "}
                    The main difference is I am the one teaching it. I've lived
                    and breathed everything I'm teaching for a very long time.
                    This is not a surface-level type of design tutorial, it's
                    in-depth and intensive.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="col-span-12 md:col-span-6 pt-[5rem] md:pt-[10rem] ml-[0] md:ml-[50px]">
            <p className="  leading-[100%] text-[2rem] font-bold">
              This will NOT work if...
            </p>
            <p className="text-[#747474] text-[1.3rem] pt-[20px] pb-[10px]  max-w-[30rem] leading-[160%] transition-all ease-out hover:text-[#EBE9E3] cursor-default">
              If you're not interested in learning interface design inside and
              out.
            </p>
            <p className="text-[#747474] text-[1.3rem] pt-[10px] pb-[10px]  max-w-[32rem] leading-[160%] transition-all ease-out hover:text-[#EBE9E3] cursor-default">
              You’re looking for a magic bullet without putting in the
              challenging work of understanding the principles to fully execute
              visually beautiful work from start to finish.
            </p>
            <p className="text-[#747474] text-[1.3rem] pt-[10px] pb-[10px]  max-w-[32rem] leading-[160%] transition-all ease-out hover:text-[#EBE9E3] cursor-default">
              You’ve never done any type of design and expect to be a top-level
              expert by the end of the course. This course will point you in the
              direction not take you to your absolute final destination.
            </p>
            <p className="text-[#747474] text-[1.3rem] pt-[10px] pb-[10px]  max-w-[32rem] leading-[160%] transition-all ease-out hover:text-[#EBE9E3] cursor-default">
              You’re simply looking for motivation or inspiration. You need to
              be after results and be willing to put in the hardwork.
            </p>
            <p className="text-[#747474] text-[1.3rem] pt-[10px] pb-[10px]  max-w-[32rem] leading-[160%] transition-all ease-out hover:text-[#EBE9E3] cursor-default">
              You'r unemployed and don't have enough savings to invest in the
              course. Please don't expect this to be a saving grace if you don’t
              already have the means to join.
            </p>
          </div>
          <div className="col-span-12 md:col-span-6 pt-[5rem] md:pt-[10rem] ml-[0] md:ml-[50px]">
            <p className="  leading-[100%] text-[2rem] font-bold">
              This will NOT work if...
            </p>
            <p className="text-[#747474] text-[1.3rem] pt-[20px] pb-[10px]  max-w-[32rem] leading-[160%] transition-all ease-out hover:text-[#EBE9E3] cursor-default">
              You’re ready to invest in yourself to learn a systematic process
              to make your interface designs look amazing.
            </p>
            <p className="text-[#747474] text-[1.3rem] pt-[10px] pb-[10px]  max-w-[32rem] leading-[160%] transition-all ease-out hover:text-[#EBE9E3] cursor-default">
              You’re patient, deliberate, and methodical. You’re committed to
              spending the time to build a successful skill set you can use in
              all of your new design projects.
            </p>
            <p className="text-[#747474] text-[1.3rem] pt-[10px] pb-[10px]  max-w-[32rem] leading-[160% transition-all ease-out hover:text-[#EBE9E3] cursor-default">
              You're ready to have a reliable framework and approach for your
              visual design process.
            </p>
            <p className="text-[#747474] text-[1.3rem] pt-[10px] pb-[10px]  max-w-[32rem] leading-[160%] transition-all ease-out hover:text-[#EBE9E3] cursor-default">
              You’re looking for a full system instead of an overwhelming amount
              of random tactics.
            </p>
            <p className="text-[#747474] text-[1.3rem] pt-[10px] pb-[10px]  max-w-[32rem] leading-[160%] transition-all ease-out hover:text-[#EBE9E3] cursor-default">
              You have access to a computer and have internet connection.
            </p>
            <p className="text-[#747474] text-[1.3rem] pt-[10px] pb-[10px]  max-w-[32rem] leading-[160%] transition-all ease-out hover:text-[#EBE9E3] cursor-default">
              You're ready to look behind the curtains at a solid methodical
              design process.
            </p>
          </div>
          <div className="col-span-12 md:col-span-4 pt-[5rem] md:pt-[20rem]">
            <TestamonialText
              title="Tanner Chrisitan"
              text="Want to level-up your visual design craft? I highly recommend checking out TetraFlow. No matter what industry you're in or what platforms you are designing for, the guiding principles and strategies provided by TetraFlow are applicable."
              className="bg-[#00E499] text-[#000000] font-medium pt-[1px] pb-[1px] pr-[0.25rem] pl-[0.10rem]"
              text2="They're timeless truisms for what makes the visual elements of a design work well."
              title2="Designer - netflix"
            />
          </div>
          <div className="col-span-12 md:col-span-4  pt-[5rem] md:pt-[20rem]">
            <TestamonialText
              title="Brad Frost"
              text="I've had the privilege of working with Wat on projects, and he's a very very very good designer. "
              className="bg-[#FED819] text-[#000000] font-medium pt-[1px] pb-[1px] pr-[0.25rem] pl-[0.10rem]"
              text2=" His course will undoubtedly help you become a better designer. Check it out!"
              title2="Developer of - atomic design"
            />
          </div>
          <div className="col-span-12 md:col-span-4 pt-[5rem] md:pt-[20rem]">
            <TestamonialText
              title="Shelby muter"
              text="Attending Wat workshop today and it’s easily one of the best workshops/classes I’ve been to in a long time. Maybe ever. "
              className="bg-[#FF7732] text-[#000000] font-medium pt-[1px] pb-[1px] pr-[0.25rem] pl-[0.10rem]"
              text2="Awesome to see someone’s real, working files!"
              title2="Senior ux designer"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faq;
