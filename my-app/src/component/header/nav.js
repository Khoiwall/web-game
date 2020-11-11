import React, { Component } from 'react';
import '../asset/css/header-banner.css'
import {
    Link
} from "react-router-dom";
import Games from './games.js'
class Nav extends Component{
    render(){
        return(
            <div className="header-menu">
                <ul className="navbar-menu">
                    <li className="nav-item set-size"><Link to="/" title="Home" className="nav-link">Trang Chủ</Link></li>
                    <li className="nav-item set-size"><Link to="/blog-game" title="Blog Game" className="nav-link">Blog Game</Link></li>
                    <li className="nav-item set-size relative dropdown-menu-game"><Link to="/games" title="Game" className="nav-link">Games</Link><Games/></li>
                    <li className="nav-item set-size"><Link to="/community" title="community" className="nav-link">Community</Link></li>
                    <li className="nav-item set-size"><Link to="/faqs" title="FAQS" className="nav-link">FAQS</Link></li>
                </ul>
            </div>
        )
    }
}

export default Nav;