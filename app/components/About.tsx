import React from "react";
import Button from "./Button";
import Image from "next/image";

const About = () => {
  return (
    <section className="max-container padding-container gap-20 py-10 pb-32 md:gap-28 lg:py-20 bg-[#f7f7f7f7]">
      <div className="text-center bold-18 uppercase tracking-[1rem] text-blue-500 pb-20">
        About
      </div>
      <div className="flex flex-col gap-20 md:gap-28 xl:flex-row">
        <div className="flex-1 flexCenter flex-col m-auto">
          <p className="mb-8">
            <span className="font-extrabold">Monirul Islam</span> , sit amet
            consectetur adipisicing elit. Minima deleniti suscipit velit, alias
            ipsa similique hic, explicabo nihil nesciunt repellendus quibusdam
            sequi veniam quaerat voluptates eum dolores, magni numquam voluptas!
          </p>
          <Button
            type="button"
            title="Read more"
            icon="/more.svg"
            variant="btn_orange_rounded"
          />
        </div>
        <div className="flex-1 flexCenter ">
          <Image
            src="/monir-img.png"
            alt="about"
            height={250}
            width={250}
            className="w-auto rounded-xl shadow-xl bg-slate-300"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
