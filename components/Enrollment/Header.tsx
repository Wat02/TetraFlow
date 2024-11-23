import React from "react";

function Header() {
  return (
    <section>
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12 md:col-span-12 pt-[80px]">
            <h3 className="text-[#ECE9E4] leading-[80%] font-black uppercase text-[6rem] md:text-[7.5rem]">
              Open & <br />
              Closed
            </h3>
            <p className="text-[2.5rem] leading-[110%] font-semibold pt-[50px]">
              A time-sensitive enrollment period makes a few <br />
              things possible that would otherwise be very <br />
              tricky to pull off.
            </p>
            <p className="text-[1.3rem] md:text-[1.3rem] leading-[160%] font-medium max-w-[68rem] text-[#747474] w-max-[38rem] pt-[50px]">
              For one, their are typically 6 (six) live critique zoom sessions
              scheduled <br />
              with each new enrollment where students can get their work
              reviewed <br />
              and ask questions a long the way.
            </p>
            <p className="text-[1.3rem] md:text-[1.3rem] leading-[160%] font-medium max-w-[68rem] text-[#747474] w-max-[38rem] pt-[30px]">
              Also, with every enrollment, things get refined, changed, and
              ultimately <br />
              improved. Whether it's schedules, additional content, or really
              anything. <br />
              Having a downtime when students aren't joining continuously makes{" "}
              <br />
              this possible.
            </p>
            <p className="text-[1.3rem] md:text-[1.3rem] leading-[160%] font-medium max-w-[68rem] text-[#747474] w-max-[38rem] pt-[30px]">
              In addition to that, the workload for customer support is
              extremely high <br />
              during enrollment periods. Most things are streamlined, but <br />
              prospective students have questions, problems with
              emails/payments, <br />
              and any number of other random things. I pride myself on being
              <br />
              lightning fast with my support and this is only possible when
              <br />
              enrollment is time-blocked.
            </p>
            <p className="text-[1.3rem] md:text-[1.3rem] leading-[160%] font-medium max-w-[68rem] text-[#747474] w-max-[38rem] pt-[30px]">
              Once enrollment closes, I can shift my focus to the enrolled
              students <br />
              and continuing to improve the processes, etc. on the overall
              student <br />
              experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
