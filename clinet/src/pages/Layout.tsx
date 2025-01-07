import React from "react";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Filter from "../components/Filter";
import { Outlet } from "react-router-dom";
import FooterLinks from "../components/FooterLinks";
import FooterInfo from "../components/FooterInfo";

const Layout = () => {
  return (
    <>
      <Header />
      <NavBar />
      <Filter />
      <main className="bg-[rgb(233,233,233)]">
        <Outlet />
      </main>
      <FooterLinks/>
      <FooterInfo/>
    </>
  );
};

export default Layout;
