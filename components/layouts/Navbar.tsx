import { SignedIn, UserButton } from "@clerk/nextjs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Image from "next/image";
import SearchBar from "../SearchBar";

const Navbar = () => {
  return (
    <header className="w-screen h-20 flex item-center px-8">
      <div className="flex items-center gap-4">
        <Image src="/images/logo.png" width={120} height={100} alt="Logo" />
        <ul className="flex items-center gap-2 text-secondary cursor-pointer">
          <li className="hover:underline">All</li>
          <li className="hover:underline">Shirts</li>
          <li className="hover:underline">Jackets</li>
          <li className="hover:underline">Bags</li>
        </ul>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <SearchBar />
      </div>
      <div className="flex items-center">
        <div className="w-full rounded-lg border p-3 border-border bg-transparent">
          <AiOutlineShoppingCart className="text- text-lg hover:scale-105" />
        </div>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </header>
  );
};

export default Navbar;
