import React from "react";
import { MdOutlineChevronRight } from "react-icons/md";
import { LuChevronRight } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import inta from "../assets/img/instaRebrush.svg";
import fb from "../assets/img/fbRebrush.svg";
import whatsapp from "../assets/img/whatsappRebrush.svg";
import twitter from "../assets/img/twitter_rebrush.svg";
import threads from "../assets/img/threadsRebrush.svg";
import tiktok from "../assets/img/tiktokRebrush.svg";
import youtube from "../assets/img/RebrushYoutube.svg";
import telegram from "../assets/img/telegramRebrush.svg";

const FooterLinks = () => {
  return (
    <div className="bg-[#00193F] h-[300px] grid grid-cols-3 gap-x-[60px] text-white py-[37px] px-[35px] ">
      <div>
        <div className="font-bold text-[15px] mb-[17px]">QUICK LINKS</div>
        <div className="text-[10px] flex flex-col gap-[3px]">
          <button className="flex items-center group">
            <LuChevronRight className="mr-[3px] group-hover:text-[#0EB1EE]" />
            <span className="group-hover:text-[#0EB1EE] group-hover:font-bold">
              Most valuable players in the world
            </span>
          </button>

          <button className="flex items-center group">
            <LuChevronRight className="mr-[3px] group-hover:text-[#0EB1EE]" />
            <span className="group-hover:text-[#0EB1EE] group-hover:font-bold">
              Latest transfers
            </span>
          </button>

          <button className="flex items-center group">
            <LuChevronRight className="mr-[3px] group-hover:text-[#0EB1EE]" />
            <span className="group-hover:text-[#0EB1EE] group-hover:font-bold">
              Latest rumours
            </span>
          </button>

          <button className="flex items-center group">
            <LuChevronRight className="mr-[3px] group-hover:text-[#0EB1EE]" />
            <span className="group-hover:text-[#0EB1EE] group-hover:font-bold">
              Latest market value updates
            </span>
          </button>

          <button className="flex items-center group">
            <LuChevronRight className="mr-[3px] group-hover:text-[#0EB1EE]" />
            <span className="group-hover:text-[#0EB1EE] group-hover:font-bold">
              FIFA World Ranking
            </span>
          </button>

          <button className="flex items-center group">
            <LuChevronRight className="mr-[3px] group-hover:text-[#0EB1EE]" />
            <span className="group-hover:text-[#0EB1EE] group-hover:font-bold">
              Betting
            </span>
          </button>
        </div>
      </div>

      <div>
        {" "}
        <div className="font-bold text-[15px] mb-[17px]">BE INVOLVED</div>
        <div className="text-[10px] flex flex-col gap-[3px]">
          <button className="flex items-center group">
            <LuChevronRight className="mr-[3px] group-hover:text-[#0EB1EE]" />
            <span className="group-hover:text-[#0EB1EE] group-hover:font-bold">
              Mods & Data Scouts
            </span>
          </button>
          <button className="flex items-center group">
            <LuChevronRight className="mr-[3px] group-hover:text-[#0EB1EE]" />
            <span className="group-hover:text-[#0EB1EE] group-hover:font-bold">
              Apply as Mod or Datascout
            </span>
          </button>
          <button className="flex items-center group">
            <LuChevronRight className="mr-[3px] group-hover:text-[#0EB1EE]" />
            <span className="group-hover:text-[#0EB1EE] group-hover:font-bold">
              11 commandments
            </span>
          </button>
          <button className="flex items-center group">
            <LuChevronRight className="mr-[3px] group-hover:text-[#0EB1EE]" />
            <span className="group-hover:text-[#0EB1EE] group-hover:font-bold">
              Found a mistake?
            </span>
          </button>
        </div>
      </div>
      <div>
        <div className="font-bold text-[15px] mb-[17px]">SOCIAL MEDIA</div>
        <div className="grid grid-cols-5">
          <div className="h-[40px]">
            <img className="h-[25px] w-[20px]" src={inta} alt="" />
          </div>
          <div className="h-[40px]">
            <img className="h-[25px] w-[20px]" src={fb} alt="" />
          </div>
          <div className="h-[40px]">
            <img className="h-[25px] w-[20px]" src={whatsapp} alt="" />
          </div>
          <div className="h-[40px]">
            <img className="h-[25px] w-[20px]" src={twitter} alt="" />
          </div>
          <div className="h-[40px]">
            <img className="h-[25px] w-[20px]" src={threads} alt="" />
          </div>
          <div className="h-[40px]">
            <img className="h-[25px] w-[20px]" src={tiktok} alt="" />
          </div>
          <div className="h-[40px]">
            <img className="h-[25px] w-[20px]" src={youtube} alt="" />
          </div>
          <div className="h-[40px]">
            <img className="h-[25px] w-[20px]" src={telegram} alt="" />
          </div>
        </div>
      </div>

      <hr className="bg-[hsl(196,89%,15%)] h-[0.08px] border-0 mt-3.5" />
      <hr className="bg-[hsl(196,89%,15%)] h-[0.08px] border-0 mt-3.5" />
      <div></div>
      <div>
        <div className="font-bold text-[15px] mb-[17px]">CAREER</div>
        <button className="flex items-center group text-[10px]">
          <LuChevronRight className="mr-[3px] group-hover:text-[#0EB1EE]" />
          <span className="group-hover:text-[#0EB1EE] group-hover:font-bold">
            Contact
          </span>
        </button>
      </div>
      <div>
        {" "}
        <div className="font-bold text-[15px] mb-[17px]">ABOUT US</div>
        <button className="flex items-center group text-[10px]">
          <LuChevronRight className="mr-[3px] group-hover:text-[#0EB1EE]" />
          <span className="group-hover:text-[#0EB1EE] group-hover:font-bold">
            TM-Team
          </span>
        </button>
        <button className="flex items-center group text-[10px]">
          <LuChevronRight className="mr-[3px] group-hover:text-[#0EB1EE]" />
          <span className="group-hover:text-[#0EB1EE] group-hover:font-bold">
            FAQ
          </span>
        </button>
      </div>
    </div>
  );
};

export default FooterLinks;
