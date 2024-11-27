import { Button } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const allPosts = useSelector((state) => state.post.posts);
  let sortedArray;
  if (allPosts.length >= 1) {
    sortedArray = allPosts.slice().sort((a, b) => b.id - a.id);
  }

  const logOutHandler=(e)=>{
    e.preventDefault();
    localStorage.removeItem("currentUser")
    navigate("/login")
  }
  
  return (
    <div className="container mx-auto px-8">
      <div>
        {sortedArray &&
          sortedArray.map((post) => (
            <div key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.caption}</p>
            </div>
          ))}
      </div>
      <Button onClick={(e)=>logOutHandler(e)} variant="contained" color="error">
        Log out
      </Button>
    </div>
  );
};

export default Home;
