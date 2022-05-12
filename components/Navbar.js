import React from "react";
import tabyatLogo from "../assets/images/tabiyat_white_logo2.svg";
import Image from "next/image";
import NavbarStyles from "./Navbar.module.scss";
import getFetchWithAxiosInterceptors from "../fetch/get/getFetchWithAxiosInterceptors";
const Navbar = () => {
  return (
    <div>
      <nav className="min-h-[64px] bg-primary">
        <div className="flex items-center min-h-[64px] pl-5">
          <Image src={tabyatLogo} height={70} width={380} />
          <div className="h-14 flex">
            <div className="bg-[#F0F0F0] rounded-md text-sm p-1 ml-7 min-w-[160px] rounded-r-none relative">
              Deliverying to <br />
              <span className="text-[16px] font-medium">Karachi, ...</span>
              <div className="absolute right-5 top-3 text-2xl">
                <b>&#8681;</b>
              </div>
            </div>
            <div className="h-full">
              <input
                type="search"
                className="h-full border-0 outline-none pl-4 rounded-r-lg min-w-[550px]"
                placeholder="Search for products or categories"
              />
            </div>
          </div>

          <div className="flex w-full justify-end mr-4 text-secondaryWhite">
            <button
              className="bg-primaryButton p-3 rounded-md px-8"
              onClick={() => getFetchWithAxiosInterceptors("/todos/2")}
            >
              Get started now
            </button>
          </div>
        </div>
        <div className={`bg-primary ${NavbarStyles.scrollDiv}`}>
          <div className="ml-[200px] flex gap-6 text-secondaryWhite mt-auto h-full">
            <button>Medicines</button>
            <button>Wellness</button>
            <div className="flex w-full justify-end mr-4 text-secondaryWhite mr-16">
              <button className="font-medium">Login | Signup</button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
