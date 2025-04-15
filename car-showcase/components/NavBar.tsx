import Link from "next/link";
import Image from "next/image";
import CustomButton from "./CustomButton";

const NavBar = () => {
  return (
    <header className="w-full z-20 bg-white/70 backdrop-blur-sm py-1.5">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center px-6 sm:px-16 py-2 relative">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="Car Hub Logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>

        {/* Sign In Button */}
        <CustomButton
          title="Sign In"
          btnType="button"
          containerStyles="text-blue-700 rounded-full bg-green-600 min-w-[130px] py-3 px-3 font-semibold hover:bg-gray-200 transition duration-300 ease-in-out px-3 hover:text-blue-700 border-[1px] border-black relative z-10"
        />
      </nav>
    </header>
  );
};

export default NavBar;
