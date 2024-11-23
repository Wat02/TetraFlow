import React from "react";

function Join() {
  return (
    <section className="pt-[5rem] md:pt-[15rem]">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-1">
          <div className="grid-cols-12 md:col-span-12">
            <h1 className="text-[6rem] md:text-[10rem] text-[#EBE9E3] leading-[80%] font-bold uppercase pb-[50px]">
              Join
            </h1>
          </div>
          <div className="col-span-12 md:col-span-4 pl-[20px] pt-[50px]">
            <h4 className="text-[3.0rem] text-left text-[#747474] font-bold leading-[75%]">
              Core
            </h4>
            <p className="max-w-[805px] text-[1.5rem] md:text-[18px] leading-[29px] font-medium pt-[20px]">
              {" "}
              <span className="ml-[10px] text-[#747474]">Lifetime Access</span>
            </p>
            <p className="max-w-[805px] text-[1.5rem] md:text-[18px] leading-[29px] font-medium pt-[5px]">
              {" "}
              Lifetime Access
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Join;
