import { configureStore } from '@reduxjs/toolkit'
import { postSlice } from '../features/post/postSlice'

export default configureStore({
  reducer: {
    post: postSlice.reducer
  }
})