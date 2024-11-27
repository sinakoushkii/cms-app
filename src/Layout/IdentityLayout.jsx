import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const IdentityLayout = () => {
  return (
    <div>
      <Header />
      <div className="mt-9 pt-9">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default IdentityLayout;
