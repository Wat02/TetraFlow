import React from "react";

function Hero() {
  return (
    <section>
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12 pt-[0.5rem]">
            <h1 className="text-[4rem] md:text-[11rem] ml-[0] md:ml-[60px]  indent-[1rem] md:indent-[3rem] leading-[90%] trancing-[-2] uppercase font-bold">
              Get good <br /> <span className="text-[#B7284B]">at</span>{" "}
              <span className="ml-[0] md:ml-[2rem]">design</span>
            </h1>

            <h1 className="text-[4rem] md:text-[11rem] ml-[0] md:ml-[60px]  indent-[1rem] md:indent-[3rem] leading-[90%] trancing-[-2] uppercase font-bold">
              Build your <br /> portfolio
            </h1>
            <h1 className="text-[4rem] md:text-[11rem] text-[#EBE9E3] indent-[1rem] md:indent-[1rem] leading-[90%] trancing-[-2] uppercase font-bold text-right pt-[20px]">
              Create with <br />
              <span className="mr-[0] md:mr-[7rem] text-[#747474]">
                {" "}
                confidence
              </span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
