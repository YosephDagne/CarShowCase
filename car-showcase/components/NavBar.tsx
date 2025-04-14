import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:p-16 p-6 py-4">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="car hub logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>
      </nav>
    </header>
  );
};

export default NavBar;
