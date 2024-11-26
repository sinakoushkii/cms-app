import { createSlice } from '@reduxjs/toolkit'

const initializedState={
    loading:false,
    posts:[],
}

export const postSlice = createSlice({
  name: 'counter',
  initialState:initializedState,
  reducers: {
    addPost: state => {
    },
  }
})

// Action creators are generated for each case reducer function
export const { addPost } = postSlice.actions

export default postSlice.reducer