import { createSlice } from "@reduxjs/toolkit";
import state from "state/lib/state";

const initialState = {
  isProfile: false,
  mode: "light",
  user: null,
  token: null,
  posts: [],
  users: [],
  iduser: [],
  newpost: [],
  interactive: [],
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
      state.posts= [];
      state.users= [];
      state.iduser= [];
      state.newpost= [];
    },
    setFriends: (state, action) => {
      if (state.user) {
        state.user.friends = action.payload.friends;
      } else {
        console.error("user friends non-existent :(");
      }
    },
    setPosts: (state, action) => {
      state.posts = action.payload.posts;
    },
    setPost: (state, action) => {
      const updatedPosts = state.posts.map((post) => {
        if (post._id === action.payload.post._id) return action.payload.post;
        return post;
      });
      state.posts = updatedPosts;
    },
    setUser: (state, action) => {
      // console.log(state);
      // console.log(action);
      // console.log(action.payload.iduser);
      state.iduser = action.payload.iduser;
    },
    setUsers: (state, action) => {
      // console.log(action.payload.users);
      state.users = action.payload.users;
    },
    setNewpost: (state, action) => {

      state.newpost = action.payload.postData;
      // state.newpost = temp;

      // console.log(state.newpost);
    },
    setTrueFalse: (state, action) => {
      // console.log(action.payload.isProfile);
      state.isProfile = action.payload.isProfile
    },
    setInteractive: (state, action) => {
      state.interactive = action.payload.interactive
    },
  },
});

export const {
  setMode,
  setLogin,
  setLogout,
  setFriends,
  setPosts,
  setPost,
  setUser,
  setUsers,
  setNewpost,
  setTrueFalse,
  setInteractive,
} = authSlice.actions;
export default authSlice.reducer;
