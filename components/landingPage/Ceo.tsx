import React from "react";
import TestamonialText from "../TestamonialText";

function Ceo() {
  return (
    <section className="pt-[4rem] md:pt-[15rem]">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12">
            <h1 className="text-[6rem] md:text-[10rem] text-[#EBE9E3] leading-[90%] font-bold uppercase">
              Hey,
              <br />
              I'm Wat
            </h1>
          </div>
          <div className="col-span-12 md:col-span-6">
            <p className="text-[2rem] md:text-[2.5rem] leading-[110%] max-w-[90rem] font-semibold ml-[0] md:ml-[260px] pt-[40px]">
              I earned my BFA in <br /> Graphic Design from <br /> UGA in 2005
              and have <br />
              specialize in interface <br /> design ever since.
            </p>
          </div>
          <div className="col-span-12 md:col-span-6">
            <p className="text-[1.125rem] pt-[40px] leading-[160%] font-medium max-w-[50rem] text-[#747474] ml-[0] md:ml-[150px]">
              I've led projects around the world, served as <br /> an adjunct
              design professor, guest lectured at <br /> Harvard, and taught
              workshops at conferences <br /> all over the US. Now, I'm going to
              teach <br /> everything I know about the visual-side of <br />{" "}
              designing great looking interfaces.
            </p>
          </div>
          <div className="col-span-12 md:col-span-4 pt-[2rem] md:pt-[15rem]">
            <TestamonialText
              title="Tahlia Gia "
              text="I completed the TetraFlow Design course, which laid out all the fundamentals of design specifically for UI design, thanks to Wat. The comprehensive content provided a solid foundation, making complex concepts easy to understand."
              className="bg-[#00E499] text-[#000000] font-medium pt-[1px] pb-[1px] pr-[0.25rem] pl-[0.10rem]"
              text2=" This course has been an invaluable resource, boosting my confidence to continue seeking out more knowledge and challenging myself to improve."
              title2="Design - Canva"
            />
          </div>
          <div className="col-span-12 md:col-span-4 pt-[2rem] md:pt-[15rem]">
            <TestamonialText
              title="Nocodecolaros"
              text="24 weeks in the making but finally submitted my last assignment and completed the TetraFlow program."
              className="bg-[#FFD819] text-[#000000] font-medium pt-[1px] pb-[1px] pr-[0.25rem] pl-[0.10rem]"
              text2="So I'm happy to share that I've obtained a new certification: Certification of Interface Design from TetraFlow!"
              title2="product Designer"
            />
          </div>
          <div className="col-span-12 md:col-span-4 pt-[2rem] md:pt-[15rem]">
            <TestamonialText
              title="Ubaid Wani"
              text="Some time back, I completed the TetraFlow UI course by Wat, and it was truly fantastic! The course provided me with a wealth of design insights and principles for crafting polished interfaces."
              className="bg-[#FF7632] text-[#000000] font-medium pt-[1px] pb-[1px] pr-[0.25rem] pl-[0.10rem]"
              text2="Highly recommend it to anyone looking to enhance their UI design skills!"
              title2="UX designer"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Ceo;
