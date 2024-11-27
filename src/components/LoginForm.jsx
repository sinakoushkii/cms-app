import { Login } from "@mui/icons-material";
import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {
    const navigate=useNavigate()
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const loginHandler = (e) => {
    e.preventDefault();

    const currentUser = [{ username: userInfo.username, password: userInfo.password }];
    const stringifiedData = JSON.stringify(currentUser);
    localStorage.setItem("currentUser", stringifiedData);
    navigate("/")
  };
  //   console.log(userInfo)
  return (
    <div>
      <div className="flex justify-center items-center">
        <Box
          className="flex flex-col gap-4 w-72"
          onSubmit={(e) => loginHandler(e)}
        >
          <h2 className="self-center text-3xl font-semibold">Log In</h2>
          <p className="self-center">Welcome, please log in to continue</p>
          <TextField
            label="Username *"
            variant="outlined"
            name="username"
            value={userInfo.username}
            onChange={handleChange}
          />
          <TextField
            label="Password *"
            variant="outlined"
            name="password"
            type="password"
            value={userInfo.password}
            onChange={handleChange}
          />
          <div className="flex gap-2">
            <Button
              onClick={(e) => loginHandler(e)}
              variant="contained"
              className="w-full"
            >
              Login
              <Login className="ml-2 h-5" width={20} />
            </Button>
          </div>
          <p className="self-center">
            Don't have an account ?{" "}
            <Link
              className="text-blue-600 underline text-center"
              to="/register"
            >
              Register
            </Link>
          </p>
        </Box>
      </div>
    </div>
  );
};

export default LoginForm;
