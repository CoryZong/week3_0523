import React, { useEffect, useReducer } from "react";
import { memberLogout } from "../api";
import { initialState, reducer } from "../useReducerComponent";

const AdminHome = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (state.token !== "AOQGKICVOGJANGO") {
      window.location.href = "/login";
    }
  });

  async function removedata() {
    const result = await memberLogout;
    try {
      if (result) {
        dispatch({ type: "logout" });
        window.location.href = "/login";
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h1>{state.name}'s page</h1>
      <div className="btnDiv">
        <button onClick={removedata}>logout</button>
      </div>
    </div>
  );
};

export default AdminHome;
