import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav className="w-full p-5 flex justify-between items-center">
      <div className="text-xl md:text-2xl font-bold text-black italic">
        AutoForm*
      </div>
      <div className="flex gap-2 md:gap-4 justify-center items-center font-semibold">
        <Link
          href="/login"
          className="px-2.5 text-sm text-[#777672] hover:text-black transition-all duration-100 ease-in cursor-pointer"
        >
          Log in
        </Link>
        <Link
          href="/signup"
          className="px-2.5 text-sm text-[#777672] hover:text-black transition-all duration-100 ease-in cursor-pointer"
        >
          Sign up
        </Link>
        <button className="hidden md:block px-2.5 text-sm text-white bg-[#0070d7] hover:bg-[#025db3] transition-all duration-100 ease-in cursor-pointer p-1 rounded-lg">
          Create form
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
