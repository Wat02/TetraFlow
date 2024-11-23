import React from "react";

function Upgrade() {
  return (
    <section>
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12 md:col-span-12 pt-[100px]">
            <h1 className="text-[70px] md:text-[120px] leading-[90px] font-black uppercase">
              Upgrade
            </h1>
            <p className="text-[40px] leading-[44px] font-semibold pt-[40px]">
              If I join Core, can I later upgrade to Pro?
            </p>
            <p className="text-[#747474] text-[1.4rem] md:text-[1.7rem] pb-[10px] w-full leading-[150%] transition-all ease-out hover:text-[#EBE9E3] cursor-default pt-[20px] font-semi  bold">
              Yes! You can upgrade at anytime. Pleast note, if you are <br />
              currently on the Core payment plan, you will need to finish <br />
              the remainder of your payments in addition to the one-time <br />
              Pro upgrade fee. There are no payment options for upgrading.
            </p>
            <div className="pt-[20px]">
              <button className="h-[4rem] mt-[20px] md:mt-[10px]  bg-[#FF3266] text-[#000] pt-[1rem] pb-[1rem] pr-[1.5rem] pl-[1.5rem] rounded-[10px] pointer text-[1.3rem]  uppercase justify-start text-start w-full md:w-[20%]">
                Upgrade to pro{" "}
                <span className="text-[#000000] font-extrabold">$999</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Upgrade;
