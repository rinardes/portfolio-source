import { useState } from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import scrollToElement from "../utils/scrollToElement";

function Header() {
  const [sideVisible, setsideVisible] = useState(false);

  const toogleSideVisibility = () => {
    setsideVisible(!sideVisible);
  };

  return (
    <header
      className={`fixed w-full bg-[#212428]/${
        sideVisible ? "100" : "85"
      } left-0 top-0 z-10 flex h-16 items-center justify-between px-4 text-[#c4cfde] shadow-lg backdrop-blur-sm sm:h-24 md:px-16`}
    >
      {sideVisible && (
        <SideBar onClick={toogleSideVisibility} isActive={sideVisible} />
      )}
      <a
        href="#home"
        onClick={scrollToElement}
        className=" font-['Bruno_Ace_SC'] text-xl uppercase"
      >
        Richard Melo
      </a>
      <div className="hidden xl:flex">
        <NavBar />
      </div>
      <button
        onClick={toogleSideVisibility}
        className="flex w-8 flex-col gap-y-1.5 hover:cursor-pointer xl:hidden"
      >
        <div className="h-[3px] w-full rounded-md bg-primary-400"></div>
        <div className="h-[3px] w-full rounded-md bg-primary-400"></div>
        <div className="h-[3px] w-full rounded-md bg-primary-400"></div>
      </button>
    </header>
  );
}

export default Header;
