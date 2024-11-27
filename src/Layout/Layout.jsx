import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = () => {
  let isLoggedIn = false;
  return (
    <div>
      <Header />
      <div className="mt-9 pt-9">
        {isLoggedIn ? <Outlet /> : <Navigate to="/login" />}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
