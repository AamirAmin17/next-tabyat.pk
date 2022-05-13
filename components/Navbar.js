import React from "react";
import Image from "next/image";
import tabyatLogo from "../assets/images/tabiyat_white_logo2.svg";
import NavbarStyles from "./Navbar.module.scss";
import { getDecryptLocalStorage } from "../localStorageWrapper";

function Navbar() {
  const [scroll, setScroll] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 5) setScroll(true);
      if (window.scrollY < 5) setScroll(false);
    });
  }, []);

  return (
    <div style={{ minHeight: "200vh" }} className="mainClass">
      <nav className="min-h-[64px] bg-primary fixed w-full">
        <div className="flex items-center min-h-[64px] pl-5 z-10">
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
              className={`bg-primaryButton p-3 rounded-md px-8 ${
                scroll ? "hidden" : "block"
              }`}
              type="button"
              onClick={() => getDecryptLocalStorage("hello")}
            >
              Get started now
            </button>
            <button
              className={`font-medium mr-12 ${scroll ? "block" : "hidden"}`}
              type="button"
            >
              Login | Signup
            </button>
          </div>
        </div>

        <div
          className={`bg-primary ${
            NavbarStyles.scrollDiv
          } transition-all absolute w-full ${
            scroll ? "transform -translate-y-[55px] -z-10" : "z-0"
          }`}
          data-testid="scrollDiv"
        >
          <div className="ml-[200px] flex gap-6 text-secondaryWhite mt-auto h-full">
            <button type="button">Medicines</button>
            <button type="button">Wellness</button>
            <div
              className={`flex w-full justify-end text-secondaryWhite mr-16 ${
                scroll ? "hidden" : "block"
              }`}
            >
              <button className="font-medium" type="button">
                Login | Signup
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
