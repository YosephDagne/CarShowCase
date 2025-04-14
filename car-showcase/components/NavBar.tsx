import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center px-6 sm:px-16 py-4">
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

        {/* Placeholder for future nav items */}
        <div className="hidden sm:flex gap-6">
          {/* Add nav links or buttons here if needed */}
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
