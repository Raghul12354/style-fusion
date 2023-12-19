import Image from "next/image";
import Link from "next/link";

import SearchIcon from "../icons/SearchIcon";
import HeartIcon from "../icons/HeartIcon";

const Navbar = () => {
  return (
    <header className="grid grid-cols-3 place-items-center items-center py-5 bg-white z-50">
      {/* logo */}
      <div className="relative w-full h-[40px]">
        <Link href="/">
          <Image
            src="/navbar/Frame 5.png"
            alt="Logo"
            fill={true}
            className="object-contain"
          />
        </Link>
      </div>
      {/*nav-links */}
      <nav className="flex capitalize gap-10">
        <Link className="text-lg font-medium" href="/">
          main
        </Link>
        <Link className="text-lg font-medium" href="/products">
          products
        </Link>
        <Link className="text-lg font-medium" href="/contacts">
          contact
        </Link>
      </nav>
      {/* icons and buttons */}
      <div className="flex items-center gap-5">
        <div className="grid grid-cols-3 gap-5">
          <SearchIcon />
          <HeartIcon />
          <HeartIcon />
        </div>
        <button className="bg-black text-white text-lg px-8 py-2 rounded-xl font-medium">
          Login
        </button>
      </div>
    </header>
  );
};

export default Navbar;
