"use client";

import Image from "next/image";

import { CustomButton } from "@/components";

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className=" flex xl:flex-row flex-col gap-5 relative z-0 max-w-[1440px] mx-auto">
      <div className="flex-1 pt-36 px-20">
        <h1 className="xl:text-[42px] sm:text-[64px] text-[30px] font-extrabold">
          Find, book, rent a car—quick and super easy!
        </h1>

        <p className="text-[20px] text-black-100 font-light mt-5">
          Streamline your car rental experience with our effortless booking
          process.
        </p>

        <CustomButton
          title="Explore Cars"
          containerStyles="bg-blue-400 text-white rounded-full mt-10 hover:bg-white border-[1px] hover:text-black border-black"
          handleClick={handleScroll}
        />
      </div>
      <div className=" xl:flex-[1.5] flex justify-end items-end w-full xl:h-screen">
        <div className="relative xl:w-[80%] w-[70%] xl:h-[500px] h-[320px] z-0 animate-slide-in">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>

        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
