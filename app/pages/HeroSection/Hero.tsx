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
        className="max-container absolute top-64 left-44 h-[144px] w-[150px] md:w-[300px] lg:w-[777px] bg-blue-400
      rounded-full shadow-lg blur-[7rem] -z-10"
      ></span>

      {/* LEFT */}
      <div className="relative z-20 flex flex-l flex-col pt-16 mr-12 ">
        <h3 className="bold-20">Hi, </h3>
        <h1 className="bold-48 lg:bold-64 relative">I'm Monir. </h1>
        <h2 className="bold-28 lg:bold-32 text-[1.8 rem] capitalize">
          A {""}
          <span className="text-[#f65d3e]">
            <Typewriter
              words={["content creator", "video editor", "thumbnail designer"]}
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
          I’ve been making videos since 2019. I use Adobe Premiere Pro for video
          editing, Adobe After Effects for motion graphics & adobe Photoshop for
          thumbnail design.
        </p>

        <div className="flexStart gap-1 pt-6">
          <Button
            type="button"
            title="Connect"
            icon="/connect.svg"
            variant="btn_orange_rounded"
          />
        </div>
      </div>

      {/* Right */}
      <div className="w-full lg:w-1/2 mt-10">
        <h1 className="bold-32 mb-5 flex justify-center">RECENT VIDEOS</h1>
        <div className="grid grid-cols-2 gap-4">
          {/* First Video */}
          <div className="relative" style={{ paddingBottom: "56.25%" }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/AAatVHrLr9Y?si=zqy6ibbzRoXFgJHC"
              title="YouTube Video 1"
              allowFullScreen
            ></iframe>
          </div>

          {/* Second Video */}
          <div className="relative" style={{ paddingBottom: "56.25%" }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/0BKXnmHEFpA?si=0kyUwKyn5xM8DaM4"
              title="YouTube Video 2"
              allowFullScreen
            ></iframe>
          </div>
          {/* Third Video */}
          <div className="relative" style={{ paddingBottom: "56.25%" }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/9ih5wkfeYBg?si=q3dvTPIBIfO65_4g"
              title="YouTube Video 1"
              allowFullScreen
            ></iframe>
          </div>

          {/* Forth Video */}
          <div className="relative" style={{ paddingBottom: "56.25%" }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/EVF-ygnF1zA?si=EtOdip4TEA4Cs02g"
              title="YouTube Video 2"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
