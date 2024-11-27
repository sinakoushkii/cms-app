import { createSlice } from "@reduxjs/toolkit";

const initializedState = {
  loading: false,
  posts: (() => {
    const storedData = localStorage.getItem("data");
    return storedData ? JSON.parse(storedData) : [];
  })(),
};

export const postSlice = createSlice({
  name: "post",
  initialState: initializedState,
  reducers: {
    addPost: (state, action) => {
      let postID;
      if (state.posts.length <= 0) {
        postID = state.posts.length + 1;
        const newPost = { id: postID, ...action.payload };
        state.posts.push(newPost);
      } else {
        postID = state.posts[state.posts.length - 1].id + 1;
        const newPost = { id: postID, ...action.payload };
        state.posts.push(newPost);
      }

      const stringifiedData = JSON.stringify(state.posts);
      localStorage.setItem("data", stringifiedData);
    },
    deletePost: (state, action) => {
      const storedData = localStorage.getItem("data");
      const allPosts = JSON.parse(storedData);
      const filteredPost = allPosts.filter(
        (post) => post.id !== action.payload
      );

      const stringifiedData = JSON.stringify(filteredPost);
      localStorage.setItem("data", stringifiedData);
      state.posts = state.posts.filter((post) => post.id !== action.payload);
      // console.log(filteredPost)
      // state.posts.push(filteredPost)
    },
    updatePost: (state, action) => {
      const index = state.posts.findIndex((post) => post.id === action.payload.id);
      if (index !== -1) {
        state.posts[index] = action.payload; // Update post
        localStorage.setItem("data", JSON.stringify(state.posts)); // Sync with localStorage
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addPost, deletePost,updatePost } = postSlice.actions;

export default postSlice.reducer;
