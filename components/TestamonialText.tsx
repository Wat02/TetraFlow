import React from "react";

function TestamonialText({
  title,
  title2,
  text,
  text2,
  className,
}: {
  title: string;
  text: string;
  className: string;
  text2: string;
  title2: string;
}) {
  return (
    <section>
      <div className="mx-auto">
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12">
            <p className="text-[1.7rem] leading-[120%] font-normal z-[2] text-[#747474] max-w-[90%] transition-all ease-out hover:text-[#EBE9E3] cursor-default">
              {text}
              <span className={className}>{text2}</span>
            </p>
            <div className="pt-[50px]">
              <p className="leading-[100%] pb-[0.125rem] text-white text-[20px] uppercase">
                {title}
              </p>
              <p className="text-[#747474] eading-[100%] text-[20px] uppercase">
                {title2}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestamonialText;
