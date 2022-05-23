import React, { useReducer } from "react";
import { memberLogin } from "../api";
import { useDispatch } from "react-redux";
import { checkToken } from "../stateSlice";

const Login = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const check = () => {
    dispatch({ type: "CHECKTOKEN" });
  };

  async function getdata() {
    const result = await memberLogin();

    try {
      //   dispatch(checkToken(result));
      check();
      if (sessionStorage.getItem("token") == "AOQGKICVOGJANGO") {
        window.location.href = "/admin";
      }
    } catch (error) {
      console.log(error);
    }
  }

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
