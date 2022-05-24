import React, { useEffect } from "react";
import { memberLogin } from "../api";
import { useDispatch } from "react-redux";
import { checkToken } from "../stateSlice";

const Login = () => {
  let dispatch = useDispatch();

  async function getdata() {
    const result = await memberLogin();
    try {
      sessionStorage.setItem("name", result.name);
      sessionStorage.setItem("token", result.token);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => getdata, []);

  return (
    <div className="login">
      <h1>Login</h1>
      <div className="btnDiv">
        <button onClick={() => dispatch(checkToken())}>Login</button>
      </div>
    </div>
  );
};

export default Login;
