import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../pages/Navbar/navBar";
import './Layout.scss'
const Layout = () => {
  return (
    <main className="setLayout">
      <NavBar />
      <div className="section">
      <Outlet/>
      </div>
      
    </main>
  );
};

export default Layout;
