import React, {useContext} from "react";
import { useNavigate } from 'react-router-dom';
import {AuthContext} from "../context/Auth.context";
import '../styles/LoginForm.css';

export default function LoginForm() {
    let navigate = useNavigate();
    const {loggedInUser, handleChange} = useContext(AuthContext);

    function handleSubmit(){
        navigate(`/`);
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
                        <input type="text" placeholder="User Email" required/>
                    </div>
                    <button id="login-button" type="submit">Login</button>

                </form>
            </div>
        </div>
    );
}

