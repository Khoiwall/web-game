import React, {Component} from "react";
import image from './image/logo-2.png';
import {
    Link
} from "react-router-dom";
import Nav from './nav.js'

class Header extends Component{
    render(){
        return(
            <div className="header-component container d-flex relative align-items justify-content">
                <div className = "header-logo">
                    <div className = "header-container-image">
                        <Link to="/"><img src = {image} alt="logo"/></Link>
                    </div>
                </div>
                <div className="contents">
                    <div className ="header-element relative">
                        <div className="header-user-box absolute">
                            <Link to="/login" className="header-popup" title="Login">Login</Link>
                            <Link to="/sign-up" className="header-popup" title="Sign Up">Sign Up</Link>
                        </div>
                    </div>
                    <nav className="navbar">
                        <Nav></Nav>
                    </nav>
                </div>
            </div>
        )
    }
}

export default Header;