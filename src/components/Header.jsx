import React, {useContext} from "react";
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../context/Auth.context";
import {HistoryContext} from "../context/Operations.context";



export default function Header() {
    let navigate = useNavigate();
    const {loggedInUser} = useContext(AuthContext);
    const { history } = useContext(HistoryContext);
    function handleRoute(path){
        navigate(path)
    }

    function handleLogout() {
        history.clear();
        handleRoute('/login')
    }

    return (
        <div className="container">
            <header
                className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">

                <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <li>
                        <button type="button" className="nav-link px-2 link-dark"
                                onClick={() => handleRoute('/')}>Calculator
                        </button>
                    </li>
                    <li>
                        <button type="button" className="nav-link px-2 link-dark"
                                onClick={() => handleRoute('/history')}>History
                        </button>
                    </li>
                </ul>

                <div className="col-md-3 text-end">
                    <button type="button" className="btn btn-outline-primary me-2" onClick={handleLogout}>Logout</button>
                    <text>Hello {loggedInUser}</text>
                </div>
            </header>
        </div>
    );
}


