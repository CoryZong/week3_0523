import React, { useEffect, useReducer } from "react";
import { memberLogin } from "../api";
import { initialState, reducer } from "../useReducerComponent";

const Login = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  async function getdata() {
    const result = await memberLogin();
    try {
      dispatch({ type: "check", payload: result });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (sessionStorage.getItem("token") == "AOQGKICVOGJANGO") {
      window.location.href = "/admin";
    }
  }, [getdata]);

  return (
    <div className="login">
      <h1>Login</h1>
      <div className="btnDiv">
        <button onClick={getdata}>Login</button>
      </div>
    </div>
  );
};

export default Login;
