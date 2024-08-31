import React from "react";

function About() {
  return (
    <section id="overfive">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12 md:col-span-7">
            <p className="text-[1.5rem] md:text-[2.5rem] leading-[110%] ml-[0] md:ml-[20px] font-semibold max-w-[68rem] text-[#ECE9E4]">
              TetraFlow is the Step-By-Step <br />
              process to learn the visual skills of
              <br />
              interface design, even if you don't <br />
              have any Ux/Ui background expirince. <br /> Perfect for those
              wanting to enter or <br />
              advance in the field.
            </p>
          </div>
          <div className="col-span-12 md:col-span-5 pt-[20px] md:pt-[10px] ml-[0] md:ml-[20px] pb-[4rem]">
            <p className="text-[1.3rem] text-[#747474] leading-[160%] font-semibold transition-all ease-out hover:text-[#FE3366] cursor-default">
              ✔️ Typography
            </p>
            <p className="text-[1.3rem] text-[#747474] md:pt-[5px] leading-[160%] font-semibold transition-all ease-out hover:text-[#FE3366] cursor-default">
              ✔️ Layout Techniques
            </p>
            <p className="text-[1.3rem] text-[#747474]  md:pt-[5px] leading-[160%] font-semibold transition-all ease-out hover:text-[#FE3366] cursor-default">
              ✔️ Choosing Colors
            </p>
            <p className="text-[1.3rem] text-[#747474]  md:pt-[5px] leading-[160%] font-semibold transition-all ease-out hover:text-[#FE3366] cursor-default">
              ✔️ Design Direction
            </p>
            <p className="text-[1.3rem] text-[#747474]  md:pt-[5px] leading-[160%] font-semibold transition-all ease-out hover:text-[#FE3366] cursor-default">
              ✔️ Interface Elements
            </p>
            <p className="text-[1.3rem] text-[#747474]  md:pt-[5px] leading-[160%] font-semibold">
              ✔️ Real World Tactics
            </p>
          </div>
          <div className="col-span-12 md:col-span-6 pt-[0] md:pt-[4rem] ml-[0] md:ml-[50px] hidden md:block">
            <div className="flex flex-col md:flex-row gap-1">
              <div>
                <h2 className="text-[120px]  font-semibold leading-[100%] mr-[0] md:mr-[250px]  transition-all ease-out hover:text-[#787775] cursor-default">
                  80
                </h2>
                <p className="text-[20px] text-[#747474] ">lessons</p>
              </div>
              <div>
                <h2 className="text-[120px]  font-semibold leading-[100%]  transition-all ease-out hover:text-[#787775] cursor-default">
                  1000
                </h2>
                <p className="text-[20px] text-[#747474]">critique videos</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-1">
              {" "}
              <div className="pt-[2rem] md:pt-[4rem]">
                <h2 className="text-[120px]  font-semibold leading-[100%] mr-[0] md:mr-[250px]  transition-all ease-out hover:text-[#787775] cursor-default">
                  30
                </h2>
                <p className="text-[20px] text-[#747474]">hours of content</p>
              </div>
              <div className="pt-[2rem] md:pt-[4rem]">
                <h2 className="text-[120px]  font-semibold leading-[100%]  transition-all ease-out hover:text-[#787775] cursor-default">
                  3000
                </h2>
                <p className="text-[20px] text-[#747474] ">
                  slack community members
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
