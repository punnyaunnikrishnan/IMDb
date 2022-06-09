//stores application state
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/user/userSlice";
//updates userstate
export const store = configureStore({
  reducer: {
    user: userSlice,
  },
});
