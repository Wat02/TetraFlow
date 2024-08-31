import React from "react";

function Access({ title, text }: { title: string; text: string }) {
  return (
    <section>
      <div className="mx-auto">
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12">
            <p className="leading-[220%] uppercase pb-[1rem] z-[100] text-[#959595] text-[1.7rem] font-bold  transition-all ease-out hover:text-[#FF7733] cursor-default">
              {title}
            </p>
            <p className=" leading-[160%] font-medium text-[#747474] text-[1.5rem] max-w-[90%] transition-all ease-out hover:text-[#EBE9E3] cursor-default">
              {text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Access;
