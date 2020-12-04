import React,{Component} from 'react'
import image from './image/logo-3.png'
import menu from './image/icons8-menu-50.png'
import {
    Link
} from "react-router-dom";

class navMobile extends Component{
    render(){
        return(
            <div className="hader-mobile pos-flex">
                <div className="nav-mobile container dis-mobile-flex pos-relative">
                    <div className="logo-mobile">
                        <div className="logo">
                            <Link to="/"><img src={image} alt="logo mobile"></img></Link>
                        </div>
                    </div>
                    <div className="menu-mobile pos-absolute">
                        <div className="menu-bar">
                            <img src={menu} alt="image menu bar"></img>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default navMobile;