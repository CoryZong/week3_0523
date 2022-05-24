import { createSlice } from "@reduxjs/toolkit";

export const stateSlice = createSlice({
  name: "members",
  initialState: {
    name: sessionStorage.getItem("name"),
    token: sessionStorage.getItem("token"),
  },
  reducers: {
    checkToken: () => {
      if (sessionStorage.getItem("token") == "AOQGKICVOGJANGO") {
        window.location.href = "/admin";
      }
    },
    returnToLogin: () => {
      sessionStorage.clear();
    },
  },
});

export const { checkToken, returnToLogin } = stateSlice.actions;
export default stateSlice.reducer;
