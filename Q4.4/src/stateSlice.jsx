import { createSlice } from "@reduxjs/toolkit";

export const stateSlice = createSlice({
  name: "members",
  initialState: {
    name: sessionStorage.getItem("name"),
    token: sessionStorage.getItem("token"),
  },
  reducers: {
    checkToken: (state, action) => {
      sessionStorage.setItem("name", action.payload.name);
      sessionStorage.setItem("token", action.payload.token);
    },
    returnToLogin: () => {
      sessionStorage.clear();
    },
  },
});

export const { checkToken, returnToLogin } = stateSlice.actions;
export default stateSlice.reducer;
