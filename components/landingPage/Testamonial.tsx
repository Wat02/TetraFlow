import React from "react";
import TestamonialText from "../TestamonialText";

function Testamonial() {
  return (
    <section className="pt-[0] md:pt-[20rem]">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12 md:col-span-4">
            <TestamonialText
              title="Noah Kevin"
              text="The amount of people at Figma enrolled in TetraFlow makes me so happy."
              className="bg-[#00E499] text-[#000000] font-medium pt-[1px] pb-[1px] pr-[0.25rem] pl-[0.10rem]"
              text2="Particularly the idea that people can develop and cultivate skills together rather than alone. Doing things in groups is motivating!"
              title2="vp of design - figma"
            />
            <div></div>
          </div>
          <div className="col-span-12 md:col-span-4">
            <TestamonialText
              title="Joel Hooks"
              text="I paid 10s of 1000s of $$ to learn design at a college and the knowledge they shared PALES /pales/ in comparison to what Wat has done with TetraFlow."
              className="bg-[#FED819] text-[#000000] font-medium pt-[1px] pb-[1px] pr-[0.25rem] pl-[0.10rem]"
              text2="TetraFlow is an unparalleled resource for learning design."
              title2="Ceo - EGGHEAD.IO"
            />
          </div>
          <div className="col-span-12 md:col-span-4">
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

export default Testamonial;
