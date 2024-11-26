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
      const postId = state.posts.length + 1;
      const newPost={id:postId,...action.payload}
      state.posts.push(newPost);
      const stringifiedData = JSON.stringify(state.posts);
      localStorage.setItem("data", stringifiedData);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addPost } = postSlice.actions;

export default postSlice.reducer;
