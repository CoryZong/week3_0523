import React, { useReducer } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { memberLogout } from "../api";

const initialState = {
  name: sessionStorage.getItem("name"),
  token: sessionStorage.getItem("token"),
};
function reducer(state, action) {
  switch (action.type) {
    case "CHECKTOKEN":
      sessionStorage.setItem("name", action.payload.name);
      sessionStorage.setItem("token", action.payload.token);

    case "RETURN":
      sessionStorage.clear();
  }
}

const AdminHome = () => {
  let memberObj = useSelector((state) => state.counter);
  const [state, dispatch] = useReducer(reducer, initialState);

  const returning = () => {
    dispatch({ type: "RETURN" });
  };

  useEffect(() => {
    if (memberObj.token !== "AOQGKICVOGJANGO") {
      window.location.href = "/login";
    }
  });

  async function removedata() {
    const result = await memberLogout;
    try {
      if (result) {
        returning();
        window.location.href = "/login";
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h1>{memberObj.name}'s page</h1>
      <div className="btnDiv">
        <button onClick={removedata}>logout</button>
      </div>
    </div>
  );
};

export default AdminHome;
