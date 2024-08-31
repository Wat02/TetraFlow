import React from "react";

function Footer() {
  return (
    <section className="pt-[0] md:pt-[20rem] text-center pb-[5rem]">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12 md:col-span-6 pt-[50px] md:pt-[0]">
            <p className="text-[2rem] leading-[75%] font-bold ">Elsewhere</p>
            <p className="pt-[15px] text-[1.3rem]">
              <span className="font-bold text-[1.5rem] ">Tetraflow</span> on X
            </p>
            <p className="pt-[15px] text-[1.3rem]">
              {" "}
              <span className="font-bold text-[1.5rem] ">Tetraflow</span> on
              Youtube
            </p>
            <p className="pt-[15px] text-[1.3rem]">
              {" "}
              <span className="font-bold text-[1.5rem] ">Tetraflow</span> on
              Instagram
            </p>
            <p className="pt-[15px] text-[1.3rem]">
              {" "}
              <span className="font-bold text-[1.5rem] ">Tetraflow</span> on
              Tiktok
            </p>
          </div>
          <div className="col-span-12 md:col-span-6  pt-[50px] md:pt-[0]">
            <p className="text-[2rem] leading-[75%] font-bold ">Links</p>
            <p className="text-[1.5rem] pt-[15px]">
              <span className="font-bold text-[1.5rem] ">Team</span> Plans
            </p>
            <p className="text-[1.5rem] ">
              <span className="font-bold text-[1.5rem] ">Team</span> Plans
            </p>
            <p className="text-[1.5rem] ">FAQs</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
