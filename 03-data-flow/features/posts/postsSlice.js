import { createSlice } from "@reduxjs/toolkit"

const initialState = [
  { id: '1', title: 'First Post!', content: 'Hello!' },
  { id: '2', title: 'Second Post', content: 'More text' }
]

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded(state, action) {
      state.push(action.payload)
    }
  }
})

export const postsReducer = postSlice.reducer

export const selectPosts = state => state.posts

export const {
  postAdded
} = postSlice.actions