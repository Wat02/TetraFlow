import React from "react";

function RightText({
  text,
  title,
  emoji,
}: {
  text: string;
  title: string;
  emoji: string;
}) {
  return (
    <section>
      <div className="mx-auto">
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12 pt-[5rem]">
            <p className="text-[3em]">{emoji}</p>
            <p className="text-[1.5rem] leading-[75%] font-bold pt-[20px] pb-[15px]">
              {title}
            </p>
            <p className="max-w-[19rem] text-[1.2rem] leading-[160%] font-medium text-[#747474]">
              {text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RightText;
