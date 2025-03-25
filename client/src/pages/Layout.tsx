import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Filter from "../components/Filter";
import { Outlet } from "react-router-dom";
import FooterLinks from "../components/FooterLinks";
import FooterInfo from "../components/FooterInfo";

const Layout = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div>
        <div
          className={`sm:fixed top-0 z-50 max-w-[1030px]  transition-all duration-300 `}
        >
          <Header />
          <NavBar />
        </div>
        <div
          className={` ${
            isScrolled ? " sm:mt-[146px] " : " sm:mt-[146px]"
          }  transition-all duration-300  ease-in-out`}
        >
          <Filter />
        </div>
        <main className="bg-[rgb(233,233,233)] max-w-[1030px] ">
          <Outlet />
        </main>
        <FooterLinks />
        <FooterInfo />
      </div>
    </>
  );
};

export default Layout;
