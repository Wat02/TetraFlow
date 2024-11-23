import React from "react";

function Refunds() {
  return (
    <section>
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12 md:col-span-12 pt-[100px]">
            <h3 className="text-[#ECE9E4] leading-[90%] font-black uppercase text-[5rem] md:text-[7.5rem]">
              Refund <br />
              Policy
            </h3>
            <p className="text-[25px] leading-[36px] font-semibold pt-[50px]">
              I'm not happy if you're not. If you purchase the course, do the{" "}
              <br />
              work, and feel you are not getting the results you can get a{" "}
              <br />
              full refund. I'm serious about this.
            </p>
          </div>
          <div className="col-span-12 md:col-span-6 pt-[50px]">
            <p className="text-[28px] leading-[28px] font-bold">
              What's the catch?
            </p>
            <p className="text-[20px] leading-[29px] font-medium text-[#747474] pt-[20px]">
              No catch. From the time of purchase, you have 30-days to try the{" "}
              <br />
              full course. At any point during that time you are eligible for a
              full refund. <br />I will ask you the reason why it's not working
              for you, but <br />
              regardless you are fully protected by this 30-day guarantee.
            </p>
          </div>
          <div className="col-span-12 md:col-span-6 pt-[50px]">
            <p className="text-[28px] leading-[28px] font-bold">
              What about team plan refunds?
            </p>
            <p className="text-[20px] leading-[29px] font-medium text-[#747474] pt-[20px]">
              There are no team refunds. If you're unsure about a team plan, I{" "}
              <br />
              would suggest an individual plan first or{" "}
              <span className="text-[#04A9FF] underline underline-offset-8 font-bold">
                book a live demo
              </span>{" "}
              to see <br />
              if it's a good fit for you team.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Refunds;
