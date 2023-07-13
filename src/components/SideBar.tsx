import NavBar from "./NavBar";
import { useEffect, useState } from "react";

interface SideBar {
  onClick: (e?: React.MouseEvent) => void;
  isActive: boolean;
}

function SideBar({ onClick, isActive }: SideBar) {
  const [currentOpacity, setcurrentOpacity] = useState(0);
  const [currentSide, setcurrentSide] = useState("-left-full");

  const toggleShowElement = () => {
    currentOpacity == 0 ? setcurrentOpacity(100) : setcurrentOpacity(0);
    currentSide == "-left-full"
      ? setcurrentSide("left-0")
      : setcurrentSide("-left-full");
  };

  const clickOut = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClick();
    }
  };

  useEffect(() => {
    toggleShowElement();
  }, [isActive]);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className={`fixed left-0 top-0 z-[50]`}>
      <div
        onClick={clickOut}
        className="absolute left-0 top-0 h-[100vh] w-[100vw] bg-[#000]/90 "
      ></div>
      <section
        className={`absolute h-[100vh] w-[310px] bg-[#191B1E] p-4 ${currentSide} z-50 transition-all duration-500 min-[480px]:w-[380px] min-[480px]:p-12 opacity-${currentOpacity} } `}
      >
        <div className=" mb-24 flex items-center justify-between">
          <h2 className=" font-['Bruno_Ace_SC'] text-xl uppercase">
            Richard Melo
          </h2>
          <button
            onClick={onClick}
            className="relative  flex items-center justify-center rounded-full bg-[#202327] p-6 hover:bg-[#2c3035] "
          >
            <div className="absolute  h-[2px] w-5 rotate-45 bg-primary-400"></div>
            <div className="absolute  h-[2px] w-5 -rotate-45 bg-primary-400"></div>
          </button>
        </div>
        <NavBar isSide onClick={onClick} />
      </section>
    </div>
  );
}

export default SideBar;
