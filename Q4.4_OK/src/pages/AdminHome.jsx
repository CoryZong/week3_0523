import React, { useEffect, useReducer } from "react";
import { memberLogout } from "../api";
import { initialState, reducer } from "../useReducerComponent";

const AdminHome = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const memberName = sessionStorage.getItem("name");
  const memberToken = sessionStorage.getItem("token");

  useEffect(() => {
    if (memberToken !== "AOQGKICVOGJANGO") {
      window.location.href = "/login";
    }
  }, [memberToken]);

  async function removedata() {
    const result = await memberLogout;
    try {
      if (result) {
        dispatch({ type: "Logout" });
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h1>{memberName}'s page</h1>
      <div className="btnDiv">
        <button onClick={removedata}>logout</button>
      </div>
    </div>
  );
};

export default AdminHome;
