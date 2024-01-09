import React from "react";
import Link from "next/link";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header className="w-[900px] m-auto flex justify-between items-center py-5">
        <div>
          <Link className="text-[#53c60b] font-bold text-lg" href="/">
            JetFood
          </Link>
        </div>
        <div className="space-x-4 text-gray-500 font-bold">
          <Link href="/menu">Menu</Link>
          <Link href="/categories">Categories</Link>
        </div>
      </header>
      <main className="min-h-[1000px]">{children}</main>
      <footer className="bg-[#53c60b] text-center  py-2 px-0 mt-7">
        <span className="text-[#234a0b] font-bold">
          JetFood | Restaurant Project &copy;
        </span>
      </footer>
    </>
  );
};

export default Layout;
