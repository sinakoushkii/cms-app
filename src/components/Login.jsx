import { Box, Button, TextField } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import loginImg from "../assets/images/loginImg.png";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <div className="container mx-auto px-8">
      <div className="h-screen flex items-center justify-center">
        <div className="flex items-center justify-center gap-6 bg-slate-200 shadow-xl shadow-sky-400/40 rounded-xl w-fit px-7 py-10">
          <img className="hidden md:block" width={300} src={loginImg} />
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
