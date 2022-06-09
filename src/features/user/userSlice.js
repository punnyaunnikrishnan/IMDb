import { createSlice } from "@reduxjs/toolkit";

//createslice accepts an initial state, an object of reducer functions, and a "slice name"
const initialState = {
  name: "",
  email: "",
};
//updates login info
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserLogin: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
    //clears when signout
    setSignOut: (state) => {
      state.name = null;
      state.email = null;
    },
  },
});

export const { setUserLogin, setSignOut } = userSlice.actions;

export const selectUserName = (state) => state.user.name;
export const selectUserEmail = (state) => state.user.email;

export default userSlice.reducer;
