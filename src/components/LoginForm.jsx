import React, {useContext} from "react";
import { useNavigate } from 'react-router-dom';
import {AuthContext} from "../context/Auth.context";
import '../styles/LoginForm.css';
import Button from "./Button";

export default function LoginForm() {
    let navigate = useNavigate();
    const {loggedInUser, handleChange} = useContext(AuthContext);
    const buttonProps = {id: "login-button", className: "", type: "submit", onClickFunc: () => {}, title: "Login"};

    function handleSubmit(){
        navigate(`/calculator`);
    }

    return(

        <div className="login-body">
            <div className="login-container">
                <form  onSubmit={handleSubmit}>
                    <h2 id="login-title">Login</h2>
                    <div className="input-box">
                        <text>User Name: </text>
                        <input name="username" onChange={handleChange} value={loggedInUser} type="text" placeholder="User Name" required/>
                    </div>
                    <div className="input-box">
                        <text>Email: </text>
                        <input type="email" placeholder="User Email" required/>
                    </div>
                    <Button props={buttonProps} />
                </form>
            </div>
        </div>
    );
}

