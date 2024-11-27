import { Button } from "@mui/material";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PostCard from "../components/PostCard";

const Home = () => {
  const navigate = useNavigate();
  const allPosts = useSelector((state) => state.post.posts);
  useEffect(()=>{
    localStorage.setItem("data", JSON.stringify(allPosts));
  },[allPosts])
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
      <div className="flex items-center justify-evenly flex-wrap mt-7 gap-3 h-screen">
        {sortedArray ?
          sortedArray.map((post) => (
           <PostCard key={post.id} title={post.title} caption={post.caption} postId={post.id} />
          )):
          <h1>There is no post</h1>
          }
      </div>
      <Button className="mt-5" onClick={(e)=>logOutHandler(e)} variant="contained" color="error">
        Log out
      </Button>
    </div>
  );
};

export default Home;
