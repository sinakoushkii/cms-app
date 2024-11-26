import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const allPosts = useSelector((state) => state.post.posts);
 let sortedArray;
  if(allPosts.length>=1){
   sortedArray = allPosts.slice().sort((a, b) => b.id - a.id);
  console.log(sortedArray)
 }
  return (
    <div className="container mx-auto px-8">
      {sortedArray && sortedArray.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.caption}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
