"use client";
import Image from "next/image";
import CustomButton from "./CustomButton";

const Hero = () => {
  const handleScroll = () => {
    const section = document.getElementById("cars");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative z-0 w-full max-w-[1440px] mx-auto px-6 sm:px-16 py-20 flex flex-col xl:flex-row items-center justify-between gap-14">
      {/* Left Section: Text & Button */}
      <div className="flex-1 xl:pt-24 text-left space-y-6 sm:space-y-8 xl:space-y-10">
        <h1 className="text-[40px] sm:text-[60px] 2xl:text-[72px] font-extrabold leading-tight text-gray-900">
          Find, book or rent a car <br className="hidden sm:inline" />
          quickly and easily
        </h1>

        <p className="text-base sm:text-lg text-gray-600 max-w-xl">
          Streamline your car rental experience with our effortless booking
          process.
        </p>

        <CustomButton
          title="Explore Cars"
          handleClick={handleScroll}
          containerStyles="bg-blue-600 text-white rounded-full py-4 px-8 hover:bg-blue-700 transition duration-300 ease-in-out"
        />
      </div>

      {/* Right Section: Image */}
      <div className="relative flex-1 w-full h-[400px] xl:h-[600px] flex justify-center items-end overflow-hidden">
        {/* Background Shape/Image */}
        <div
          className="absolute inset-0 -z-10 rounded-full"
          style={{
            backgroundImage: "url('/hero-bg.png')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            transform: "scale(1.2) translateX(50%)",
            borderRadius: "1.5rem",
          }}
        />

        {/* Foreground Hero Image */}
        <Image
          src="/hero.png"
          alt="Car Rental Hero"
          fill
          priority
          className="object-contain z-10 translate-y-6 xl:translate-y-0 -translate-x-8 xl:translate-x-0"
        />
      </div>
    </section>
  );
};

export default Hero;
