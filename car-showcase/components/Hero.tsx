"use client";
import Image from "next/image";
import CustomButton from "./CustomButton";

const Hero = () => {
  const handleScroll = () => {
    const section = document.getElementById("cars");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative z-0 w-full max-w-[1440px] mx-auto px-6 sm:px-16 py-20 flex flex-col-2 xl:flex-row items-center justify-between gap-14">
      {/* Left Section */}
      <div className="flex-1 xl:pt-24 text-left space-y-6 sm:space-y-8 xl:space-y-10">
        <h1 className="text-[40px] sm:text-[60px] 2xl:text-[72px] font-extrabold leading-tight text-gray-700">
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
          containerStyles="bg-blue-600 text-white rounded-full py-3 px-3 hover:bg-gray-200 transition duration-300 ease-in-out hover:text-black border-[1px] border-black"
        />
      </div>

      {/* Right Section */}
      <div className="relative flex-1 w-full flex justify-center items-end min-h-[300px] sm:min-h-[400px] xl:min-h-[500px]">
        {/* Background Shape */}
        <div
          className="absolute xl:top-[-200px] top-[-60px] xl:left-0 xl:w-screen xl:h-[700px] w-[150%] h-[120%] sm:w-full sm:h-full -z-10  xl:rounded-none"
          style={{
            backgroundImage: "url('/hero-bg.png')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            transform: "translateX(15%)",
            borderRadius: "20px"
          }}
        />

        {/* Hero Image */}
        <Image
          src="/hero.png"
          alt="Car Rental Hero"
          width={500}
          height={500}
          className="w-auto h-[250px] sm:h-[400px] xl:h-[500px] object-contain z-10 animate-slide-in"
          priority
        />
      </div>
    </section>
  );
};

export default Hero;
