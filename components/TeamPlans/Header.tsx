import React from "react";

function Header() {
  return (
    <section>
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12 pt-[50px]">
            <h1 className="text-[5rem] md:text-[10rem] ml-[0] md:ml-[60px]  indent-[1rem]  leading-[90%] tracking-wider uppercase font-bold text-[#b0b0b0]">
              Shift <span>Nudge</span>{" "}
            </h1>

            <h1 className="text-[4rem] md:text-[11rem] ml-[0] md:ml-[60px]  indent-[1rem]  leading-[90%] tracking-wider uppercase font-bold text-[#EBE9E3]">
              Team
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
