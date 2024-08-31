import React from "react";
import Image from "next/image";
import arrow from "@/public/arrow.svg";

function Cor({
  title,
  text,
  className,
}: {
  title: string;
  text: string;
  className: string;
}) {
  return (
    <section>
      <div className="mx-auto">
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12">
            <div className={className}></div>
            <div className="ml-[30px]">
              <h4 className="text-[3rem] leading-[75%] font-bold text-[#EBE9E3] pt-[15px] pb-[5px]">
                {title}
              </h4>
              <p className="text-[#747474] text-[1.3rem]  transition-all ease-out hover:text-[#EBE9E3] cursor-default">
                {text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cor;
