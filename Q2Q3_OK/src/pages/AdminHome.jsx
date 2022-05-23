import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { memberLogout } from "../api";
import { returnToLogin } from "../stateSlice";

const AdminHome = () => {
    let dispatch = useDispatch();
    let memberObj = useSelector((state) => state.counter);
    useEffect(() => {
        if (memberObj.token !== "AOQGKICVOGJANGO") {
            window.location.href = "/login";
        }
    });
    async function removedata() {
        const result = await memberLogout;
        try {
            if (result) {
                dispatch(returnToLogin());
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
