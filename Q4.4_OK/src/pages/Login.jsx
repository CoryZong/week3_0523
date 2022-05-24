import React, { useEffect, useReducer } from "react";
import { memberLogin } from "../api";
import { initialState, reducer } from "../useReducerComponent";

const Login = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  async function getdata() {
    const result = await memberLogin();
    try {
      sessionStorage.setItem("name", result.name);
      sessionStorage.setItem("token", result.token);
      dispatch({ type: "UpdateState", payload: result });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => getdata, []);

  function loginHandler() {
    dispatch({ type: "TokenCheck" });
  }

  return (
    <div className="login">
      <h1>Login</h1>
      <div className="btnDiv">
        <button onClick={loginHandler}>Login</button>
      </div>
    </div>
  );
};

export default Login;
