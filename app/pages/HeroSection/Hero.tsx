"use client";

import Button from "@/app/components/Button";
import Image from "next/image";
import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  const handleType = (count: number) => {
    // access word count number
    console.log(count);
  };

  const handleDone = () => {
    console.log(`Done after 5 loops!`);
  };

  return (
    <section
      className=" max-container padding-container flex flex-col flexContainer 
  gap-20 py-10 pb-32 md:gap-28 lg:py-20 lg:flex-row"
    >
      <span
        className="max-container absolute top-64 left-44 h-[144px] w-[777px] bg-blue-400
      rounded-full shadow-lg blur-[7rem] -z-10"
      ></span>
      {/* <div className="flex gap-10"> */}
      {/* LEFT */}
      <div className="relative z-20 flex flex-l flex-col pt-16">
        <h3 className="bold-20">Hi, </h3>
        <h1 className="bold-48 lg:bold-64 relative">I'm Monir. </h1>
        <h2 className="bold-28 lg:bold-32 text-[1.8 rem] capitalize">
          A {""}
          <span className="text-[#f65d3e]">
            <Typewriter
              words={[
                "Youtuber",
                "content creator",
                "freelance video editor",
                "freelance thumbnail designer",
              ]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={40}
              delaySpeed={1000}
              onLoopDone={handleDone}
              onType={handleType}
            />
          </span>
        </h2>

        <p className="regular-16 max-w-[555px] my-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis,
          dolorum.
        </p>

        <div className="flexStart gap-1 pt-6">
          <Button
            type="button"
            title="Connect"
            // icon="/download.svg"
            icon="/connect.svg"
            variant="btn_orange_rounded"
          />
        </div>
      </div>

      {/* Right */}
      <div className="flex flex-l xl:flexEnd">
        <Image
          src="/bg.png"
          alt="bg"
          width={488}
          height={488}
          className="w-auto"
        />
      </div>

      {/* </div> */}
    </section>
  );
};

export default Hero;
