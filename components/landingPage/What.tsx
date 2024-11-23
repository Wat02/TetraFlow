import React from "react";
import Image from "next/image";
import Cor from "../Cor";
import laptop from "@/public/laptop.jpg";
import TestamonialText from "../TestamonialText";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function What() {
  return (
    <section className="pt-[5rem] md:pt-[20rem]">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12">
            <h1 className="text-[6rem] md:text-[10rem] text-[#EBE9E3] leading-[75%] font-bold uppercase ml-[20px]">
              What's <br />
              Inside
            </h1>
            <p className="pb-[3rem] max-w-[46rem] text-[1.5rem] leading-[150%] text-[#747474] pt-[30px] font-bold ml-[20px]">
              This course is absolutely jam-packed with all the best <br />
              information for creating great visual design for interfaces. No{" "}
              <br />
              fluff, just practical content tailored specifically for
              interfaces.
            </p>
          </div>
          <div className="col-span-12 md:col-span-4 mr-[30px] pb-[2rem]">
            <Cor
              title="Start"
              text="10 Lessons  •  1h 17m"
              className="bg-[#00E599] rounded-[12px] w-full h-[240px] ml-[20px] "
            />
          </div>
          <div className="col-span-12 md:col-span-4 mr-[30px]">
            <Cor
              title="Typography"
              text="11 Lessons  •  4h 32m"
              className="bg-[#FFD819] rounded-[12px] w-full h-[240px] ml-[20px] "
            />
          </div>
          <div className="col-span-12 md:col-span-4 mr-[30px]">
            <Cor
              title="Layout"
              text="10 Lessons  •  4h 47m"
              className="bg-[#FF7733] rounded-[12px] w-full h-[240px] ml-[20px] "
            />
          </div>
          <div className="col-span-12 md:col-span-4 mr-[30px]  pt-[50px]">
            <Cor
              title="Color"
              text="10 Lessons  •  5h 52m"
              className="bg-[#FF3266] rounded-[12px] w-full h-[240px] ml-[20px] "
            />
          </div>
          <div className="col-span-12 md:col-span-4 mr-[30px]  pt-[50px]">
            <Cor
              title="Style"
              text="10 Lessons  •  1h 32m"
              className="bg-[#FF3277] rounded-[12px] w-full h-[240px] ml-[20px] "
            />
          </div>
          <div className="col-span-12 md:col-span-4 mr-[30px]  pt-[50px]">
            <Cor
              title="Imagenery"
              text="11 Lessons  •  3h 06m"
              className="bg-[#A54CFE] rounded-[12px] w-full h-[240px] ml-[20px] "
            />
          </div>
          <div className="col-span-12 md:col-span-4 mr-[30px]  pt-[50px]">
            <Cor
              title="Elements"
              text="11 Lessons  •  3h 14m"
              className="bg-[#04A9FF] rounded-[12px] w-full h-[240px] ml-[20px] "
            />
          </div>
          <div className="col-span-12 md:col-span-4 mr-[30px]  pt-[50px]">
            <Cor
              title="Style"
              text="10 Lessons  •  3h 25m"
              className="bg-[#B1BFFF] rounded-[12px] w-full h-[240px] ml-[20px] "
            />
          </div>
          <div className="col-span-12 md:col-span-4 mr-[30px]  pt-[50px]">
            <Cor
              title="Critiq Value"
              text="1000 reviews"
              className="bg-[#FC4391] rounded-[12px] w-full h-[240px] ml-[20px] "
            />
          </div>
          <div className="col-span-12  pt-[4rem] bg-no-repeat bg-contain pb-[6rem]">
            <div className="block ml-auto mr-auto w-full">
              <Image
                src={laptop}
                height={1500}
                width={1500}
                alt="team"
                className="rounded-[20px]"
              />
            </div>
          </div>
          <div className="col-span-12 md:col-span-4 pt-[2rem] md:pt-[15rem]">
            <TestamonialText
              title="Glayds Foo"
              text="  My company just sponsored me to enroll in TetraFlow to supercharge my visual / UX design skills to create accessible interfaces—and I love that one of the first projects he walks through is a complex cryptocurrency wallet UI. 🤩"
              className="bg-[#00E499] text-[#000000] font-medium pt-[1px] pb-[1px] pr-[0.25rem] pl-[0.10rem]"
              text2=" I’m 2 hours in and learning a TON!"
              title2="Product Design"
            />
          </div>
          <div className="col-span-12 md:col-span-4  pt-[2rem] md:pt-[15rem]">
            <TestamonialText
              title="Kamela Alcantara"
              text="It's official... I'm now a TetraFlow graduate in Interface Design 🎓🎉 TetraFlow has not only helped me hone my UI and visual design skills, but it's safe to say that I'm far more confident (and faster) in my craft than when I first started.."
              className="bg-[#FFD819] text-[#000000] font-medium pt-[1px] pb-[1px] pr-[0.25rem] pl-[0.10rem]"
              text2="Thank you Wat for the incredibly well-thought-out lesson structure and nuggets of wisdom."
              title2="Ux designer"
            />
          </div>
          <div className="col-span-12 md:col-span-4  pt-[2rem] md:pt-[15rem]">
            <TestamonialText
              title="Eric W odon"
              text="Unquestionably, this is still one of the best investments I've made in myself and career."
              className="bg-[#FF7632] text-[#000000] font-medium pt-[1px] pb-[1px] pr-[0.25rem] pl-[0.10rem]"
              text2="Top-notch quality, flexible structure and pacing, and deep insights into how a world-class interface designer thinks—novice or expert, you'll level up in TetraFlow."
              title2="Freelance designer"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default What;
