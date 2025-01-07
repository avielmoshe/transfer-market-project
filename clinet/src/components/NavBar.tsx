import { RiMenu3Fill } from "react-icons/ri";

const NavBar = () => {
  return (
    <div className="flex bg-[#00193f] h-[50px] text-white text-[10.2px] font-bold items-center justify-around">
      <div className="grid grid-cols-7 gap-[6px]">
        <div className="relative group w-auto flex items-center justify-center">
          <button className="group-hover:text-[rgb(92,166,255)] relative">
            <span className="inline-block">DISCOVER</span>
            <span className="absolute left-0 bottom-[-18px] h-[3.2px] w-0 bg-[rgb(92,166,255)] transition-all duration-300 group-hover:w-full"></span>
          </button>
        </div>
        <div className="relative group w-full h-full flex items-center justify-center">
          <button className="group-hover:text-[rgb(92,166,255)] relative">
            <span className="inline-block">TRANSFERS & RUMOURS</span>
            <span className="absolute left-0 bottom-[-11px] h-[3.2px] w-0 bg-[rgb(92,166,255)] transition-all duration-300 group-hover:w-full"></span>
          </button>
        </div>
        <div className="relative group w-full h-full flex items-center justify-center">
          <button className="group-hover:text-[rgb(92,166,255)] relative">
            <span className="inline-block">MARKET VALUES</span>
            <span className="absolute left-0 bottom-[-18px] h-[3.2px] w-0 bg-[rgb(92,166,255)] transition-all duration-300 group-hover:w-full"></span>
          </button>
        </div>
        <div className="relative group w-full h-full flex items-center justify-center">
          <button className="group-hover:text-[rgb(92,166,255)] relative">
            <span className="inline-block">COMPETITIONS</span>
            <span className="absolute left-0 bottom-[-18px] h-[3.2px] w-0 bg-[rgb(92,166,255)] transition-all duration-300 group-hover:w-full"></span>
          </button>
        </div>
        <div className="relative group w-full h-full flex items-center justify-center">
          <button className="group-hover:text-[rgb(92,166,255)] relative">
            <span className="inline-block">STATISTICS</span>
            <span className="absolute left-0 bottom-[-18px] h-[3.2px] w-0 bg-[rgb(92,166,255)] transition-all duration-300 group-hover:w-full"></span>
          </button>
        </div>
        <div className="relative group w-full h-full flex items-center justify-center">
          <button className="group-hover:text-[rgb(92,166,255)] relative">
            <span className="inline-block">COMMUNITY</span>
            <span className="absolute left-0 bottom-[-18px] h-[3.2px] w-0 bg-[rgb(92,166,255)] transition-all duration-300 group-hover:w-full"></span>
          </button>
        </div>
        <div className="relative group w-full h-full flex items-center justify-center">
          <button className="group-hover:text-[rgb(92,166,255)] relative">
            <span className="inline-block">GAMING</span>
            <span className="absolute left-0 bottom-[-18px] h-[3.2px] w-0 bg-[rgb(92,166,255)] transition-all duration-300 group-hover:w-full"></span>
          </button>
        </div>
      </div>
      <div className="p-[15px]">
        <button>
          <RiMenu3Fill className="text-white text-[25px] hover:text-[rgb(92,166,255)]" />
        </button>
      </div>
    </div>
  );
};

export default NavBar;
