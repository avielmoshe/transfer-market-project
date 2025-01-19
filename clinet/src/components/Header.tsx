import React, { useState, useEffect } from "react";
import logo from "../assets/img/Transfermarkt_logo.png";
import { BiSolidShieldPlus } from "react-icons/bi";
import { BsBookmarkStarFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { MdPersonSearch } from "react-icons/md";
import { GoSearch } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/providers/auth-provider";
import { CgProfile } from "react-icons/cg";

const Header = () => {
  const { user } = useAuth();

  const [searchTerm, setSearchTerm] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchTerm.trim()) {
      alert("Please enter a valid search term.");
      return;
    }
    navigate(`/SearchPage?query=${searchTerm}`);
    setSearchTerm("");
  };

  return (
    <div
      className={`bg-[rgb(233,233,233)] ${
        isScrolled ? "h-[55px] p-[5px]" : "h-[92px] p-[15px]"
      } lg:grid lg:grid-cols-[1fr_2fr_1fr] flex justify-between items-center transition-all duration-300 ease-in-out`}
    >
  <Link to="/">
    <img
      className={`${
        isScrolled ? "h-[35px] w-[90px]" : "h-[58px] w-[140px]"
      } flex items-center justify-center transition-all duration-300 ease-in-out 
      hidden md:block`}
      src={logo}
      alt="Logo"
    />
  </Link>
      <div className="h-[35px] lg:ml-[95px] gap-[5px] flex items-center justify-center md:ml-[0px]">
        <form
          className="flex bg-white p-[5px] rounded-[4px] w-[100%] h-[100%]"
          onSubmit={handleSubmit}
        >
          <input
            className={`text-[13px] font-bold ${
              isScrolled ? "lg:w-[370px] sm:w-[250px] ml-[1px]" : "lg:w-[320px] sm:w-[250px] ml-[4.5px]"
            } h-[100%] transition-all duration-300 ease-in-out`}
            placeholder="Enter your search term"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit">
            <GoSearch className="hover:text-[rgb(92,166,255)] text-[22px] p-[1px] mr-[5px]" />
          </button>
        </form>
        <button className="bg-white p-[5px] h-[35px] rounded-[4px] flex items-center justify-center transition-all duration-300 hover:bg-[#00193f] group">
          <MdPersonSearch className="text-[#00193f] text-[20px] transition-all duration-300 group-hover:text-white" />
        </button>
      </div>
<<<<<<< HEAD
      <div className="lg:ml-[28px] sm:ml-[2px] gap-[7px] rounded-[4px] flex items-center justify-center">
        <button className="bg-white p-[6px] rounded-[4px] flex items-center justify-center transition-all duration-300 hover:bg-[#00193f] group">
          <BsBookmarkStarFill className="text-[#00193f] text-[18px] transition-all duration-300 group-hover:text-white" />
        </button>
=======
      <div className="ml-[28px] gap-[7px] rounded-[4px] flex items-center justify-center">
        {user ? (
          <Link to={`/favorite/${user?.id}`}>
            <button className="bg-white p-[6px] rounded-[4px] flex items-center justify-center transition-all duration-300 hover:bg-[#00193f] group">
              <BsBookmarkStarFill className="text-[#00193f] text-[18px] transition-all duration-300 group-hover:text-white" />
            </button>
          </Link>
        ) : (
          <Link to={`/favorite/user-logout`}>
            <button className="bg-white p-[6px] rounded-[4px] flex items-center justify-center transition-all duration-300 hover:bg-[#00193f] group">
              <BsBookmarkStarFill className="text-[#00193f] text-[18px] transition-all duration-300 group-hover:text-white" />
            </button>
          </Link>
        )}
>>>>>>> 9fa548c3bccc78cd494733b3f48a5d30909ec94f
        <button className="bg-white p-[6px] rounded-[4px] flex items-center justify-center transition-all duration-300 hover:bg-[#00193f] group">
          <BiSolidShieldPlus className="text-[#00193f] text-[18px] transition-all duration-300 group-hover:text-white" />
        </button>

        {user ? (
          <Link to={`/profile/${user.id}`}>
            <button className="bg-white flex items-center gap-[5px] rounded-[4px] p-[7px] w-auto hover:bg-[#00193f] hover:text-white ">
              <CgProfile />
            </button>
          </Link>
        ) : (
          <button className="bg-[rgb(92,166,255)] flex items-center gap-[5px] rounded-[4px]  p-[7px] w-auto hover:bg-[#00193f] transition-all duration-300 ease-in-out">
            <div>
              <FaUser className="text-white" />
            </div>
            <Link to={"/login"}>
              <div className="text-white text-[10px]">LOG IN</div>
            </Link>
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
