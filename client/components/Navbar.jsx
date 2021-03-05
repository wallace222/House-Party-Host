import React from 'react'
//import store from '../store'//store does not exist yet because this is for future functionality.
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

export default function Navbar (props) {
    return (
        <>
        <div className="topnav">
            
            <h1>Navbar</h1>
            <div className="nav-btn">
                <Link to="/">
                    Back To Home
                </Link>
            </div>
            <div className="nav-btn">
                <Link to="/Login">
                    Login
                </Link>
            </div>
            <div className="nav-btn">
                <Link to="/Register">
                    Register
                </Link>
            </div>
        </div>
        </>
    )
}