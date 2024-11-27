import React, { useEffect, useState } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = () => {
  const navigate=useNavigate()
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  useEffect(() => {
    const storedData = localStorage.getItem("currentUser");
    const parsedUser = JSON.parse(storedData);
    if (
      parsedUser !== null &&
      parsedUser[0].username === "sinad12" &&
      parsedUser[0].password === "12345"
    ) {
      setIsLoggedIn(true)
      navigate("/")
    }
  }, []);

  return (
    <div>
      <Header />
      <div className="mt-9 pt-9">
        {isLoggedIn ? (
          <Outlet />
        ) : (
          <Navigate to="/login" />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
