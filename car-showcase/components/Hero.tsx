"use client";
import Image from "next/image";
import CustomButton from "./CustomButton";

function Hero() {
  const handleScroll = () => {
    const section = document.getElementById("cars");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative z-0 max-w-[1440px] mx-auto flex flex-col xl:flex-row items-center justify-between gap-10 px-6 sm:px-16 py-14">
      {/* Left Text Section */}
      <div className="flex-1 text-left">
        <h1 className="2xl:text-[72px] sm:text-[64px] text-[50px] font-extrabold leading-tight text-gray-900">
          Find, book or rent a car <br className="hidden sm:block" /> quickly
          and easily
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 font-light mt-6 max-w-xl">
          Streamline your car rental experience with our effortless booking
          process.
        </p>

        <div className="mt-10">
          <CustomButton title="Explore Cars" handleClick={handleScroll} />
        </div>
      </div>

      {/* Right Image Section */}
      <div className="relative flex-1 w-full xl:h-[600px] h-[400px] flex justify-center items-center">
        {/* Background Image Layer */}
        <div
          className="absolute inset-0 -z-10 rounded-3xl overflow-hidden shadow-lg"
          style={{
            backgroundImage: "url('/hero-bg.png')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            opacity: 0.15,
            borderRadius: "1.5rem",
          }}
        />

        {/* Foreground Hero Image */}
        <Image
          src="/hero.png"
          alt="hero"
          fill
          className="object-contain z-10"
          priority
        />
      </div>
    </div>
  );
}

export default Hero;
